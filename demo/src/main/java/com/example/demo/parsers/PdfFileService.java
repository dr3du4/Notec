package com.example.demo.parsers;

import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.text.PDFTextStripper;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@Service
public class PdfFileService {
    public String extractContent(final MultipartFile multipartFile) throws IOException {
        String text;

        final PDDocument document = PDDocument.load(multipartFile.getInputStream());
        final PDFTextStripper pdfStripper = new PDFTextStripper();
        text = pdfStripper.getText(document);

        return text;
    }
}
