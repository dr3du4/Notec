package com.example.demo.quiz;

import javax.persistence.*;
import javax.persistence.GenerationType;

import com.example.demo.question.Question;
import org.hibernate.annotations.JdbcTypeCode;
import org.hibernate.type.SqlTypes;

import javax.persistence.*;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import java.time.LocalDate;
import java.time.LocalTime;
import java.time.Period;
import java.util.List;

@Entity
@Table
public class Quiz {

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
    private String title;
    private Long profileId;
    private List<Question> questions;
    private Long correctAnswerIndex;
    public Quiz() {}

    public Quiz(String title, List<Question> questions, Long profileId) {
        this.title = title;
        this.questions = questions;
        this.profileId = profileId;
    }


}