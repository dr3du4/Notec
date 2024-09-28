package com.example.demo.parsers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TextFileService {

    @Autowired
    private TextRepository textFileRepository;

    public void saveFileContent(String content) {
        TextFile textFile = new TextFile();
        textFile.setContent(content);
        textFileRepository.save(textFile);
    }
}