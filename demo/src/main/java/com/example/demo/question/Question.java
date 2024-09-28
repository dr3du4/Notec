package com.example.demo.question;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

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
    private List<String> answers;
    private Long correctAnswerIndex;

    public Question() {};

    public Question(String question, List<String> answers, Long correctAnswerIndex) {
        this.question = question;
        this.answers = answers;
        this.correctAnswerIndex = correctAnswerIndex;
    }


}
