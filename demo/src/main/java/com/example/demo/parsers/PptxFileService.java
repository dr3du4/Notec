package com.example.demo.parsers;

import org.apache.poi.xslf.usermodel.XMLSlideShow;
import org.apache.poi.xslf.usermodel.XSLFShape;
import org.apache.poi.xslf.usermodel.XSLFSlide;
import org.apache.poi.xslf.usermodel.XSLFTextShape;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.io.InputStream;

@Service
public class PptxFileService {
    public String extractContent(MultipartFile file) throws IOException {
        StringBuilder extractedText = new StringBuilder();
        InputStream inputStream = file.getInputStream();
        XMLSlideShow ppt = new XMLSlideShow(inputStream);

        // Iterate through each slide in the pptx
        for (XSLFSlide slide : ppt.getSlides()) {
            // Iterate through each shape in the slide
            for (XSLFShape shape : slide.getShapes()) {
                // Check if the shape has text
                if (shape instanceof XSLFTextShape) {
                    XSLFTextShape textShape = (XSLFTextShape) shape;
                    extractedText.append(textShape.getText()).append("\n");
                }
            }
        }
        return extractedText.toString();
    }
}
