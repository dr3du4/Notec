package com.example.demo.parsers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

import static org.springframework.http.HttpStatus.OK;


@RestController
@RequestMapping("/api/files")
public class FileUploadController {

    @Autowired
    private TextFileService textFileService;

    @PostMapping("/uploadTxt")
    public ResponseEntity<String> uploadTxtFile(@RequestParam("file") MultipartFile file) {
        if (file.isEmpty()) {
            return ResponseEntity.badRequest().body("Proszę przesłać plik");
        }

        try {
            // Odczyt pliku jako tekst
            String content = new String(file.getBytes());

            // Zapis treści do bazy danych
            textFileService.saveFileContent(content);

            return ResponseEntity.ok("Plik został pomyślnie zapisany do bazy danych");

        } catch (IOException e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Błąd podczas przetwarzania pliku");
        }
    }

    @Autowired
    private PdfFileService pdfFileService;

    @PostMapping(path = "/uploadPdf")
    public ResponseEntity<String> uploadPdfFile(@RequestParam("file") MultipartFile file) {
        if (file.isEmpty()) {
            return ResponseEntity.badRequest().body("Proszę przesłać plik");
        }
        try {
            String content = pdfFileService.extractContent(file);

            textFileService.saveFileContent(content);

            return ResponseEntity.ok("Plik został pomyślnie zapisany do bazy danych");

        } catch (IOException e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Błąd podczas przetwarzania pliku");
        }
    }
}