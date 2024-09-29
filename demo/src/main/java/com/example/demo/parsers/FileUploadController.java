package com.example.demo.parsers;

import com.example.demo.llmhandler.LLMService;
import com.example.demo.quiz.Quiz;
import com.example.demo.quiz.QuizService;
import org.apache.poi.xslf.usermodel.XMLSlideShow;
import org.apache.poi.xslf.usermodel.XSLFShape;
import org.apache.poi.xslf.usermodel.XSLFSlide;
import org.apache.poi.xslf.usermodel.XSLFTextShape;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.io.InputStream;

import static org.springframework.http.HttpStatus.OK;


@RestController
@RequestMapping(value="/api/files",method = { RequestMethod.GET, RequestMethod.POST })
public class FileUploadController {

    @Autowired
    private TextFileService textFileService;

    @Autowired
    private PdfFileService pdfFileService;

    @Autowired
    private PptxFileService pptxFileService;

    @Autowired
    private QuizService quizService;

    @Autowired
    private LLMService llmService;

    @PostMapping("/upload")
    public ResponseEntity<String> uploadFile(@RequestParam("file") MultipartFile file) {
        if (file.isEmpty()) {
            return ResponseEntity.badRequest().body("Proszę przesłać plik");
        }

        try {

            // Determine file type
            String filename = file.getOriginalFilename();
            String extension = filename.substring(filename.lastIndexOf(".") + 1);
            String content;

            // Odczyt pliku jako tekst
            if (extension.equals("txt")) {
                content = new String(file.getBytes());
            } else if (extension.equals("pdf")) {
                content = pdfFileService.extractContent(file);
            } else if (extension.equals("pptx")) {
                content = pptxFileService.extractContent(file);
            } else {
                return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Nieznany typ pliku: " + extension);
            }

            // Zapis treści do bazy danych
            textFileService.saveFileContent(content);

            // Query LLM
            String json_content = llmService.extractQuizJson(content);

            // Deserialize json into Quiz object
            Quiz quiz = quizService.createQuiz(json_content);

            return ResponseEntity.ok("Plik został pomyślnie zapisany do bazy danych");

        } catch (IOException e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Błąd podczas przetwarzania pliku");
        }
    }
    }

