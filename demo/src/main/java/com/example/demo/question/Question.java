package com.example.demo.question;

import jakarta.persistence.*;
import java.io.Serializable;

@Entity
@Table
public class Question implements Serializable {

    @Id
    @SequenceGenerator(
            name = "quiz_sequence",
            sequenceName = "quiz_sequence",
            allocationSize = 1
    )

    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "quiz_sequence"
    )
    private Long id;
    private Long quiz_id;
    private String question;
    // I'm sorry.
    private String answer1;
    private String answer2;
    private String answer3;
    private String answer4;
    private String correctAnswer;

    public Question() {};

    public Question(String question, String answer1, String answer2, String answer3, String answer4, String correctAnswer) {
        this.question = question;
        this.answer1 = answer1;
        this.answer2 = answer2;
        this.answer3 = answer3;
        this.answer4 = answer4;
        this.correctAnswer = correctAnswer;
    }


}
