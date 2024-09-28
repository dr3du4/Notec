package com.example.demo.quiz;

import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;
import java.util.List;

@Setter
@Getter
public class QuizQuestion implements Serializable {
    private String question;
    private List<String> answers;
    private Long correctAnswerIndex;

    public QuizQuestion() {};

    public QuizQuestion(String question, List<String> answers, Long correctAnswerIndex) {
        this.question = question;
        this.answers = answers;
        this.correctAnswerIndex = correctAnswerIndex;
    }


}
