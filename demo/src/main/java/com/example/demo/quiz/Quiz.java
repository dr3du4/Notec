package com.example.demo.quiz;

import jakarta.persistence.*;
import jakarta.persistence.GenerationType;

import com.example.demo.question.Question;
import org.hibernate.annotations.JdbcTypeCode;
import org.hibernate.type.SqlTypes;

import jakarta.persistence.*;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;
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

    @OneToMany
    private List<Question> questions;
    private Long correctAnswerIndex;
    public Quiz() {}

    public Quiz(String title, List<Question> questions, Long profileId) {
        this.title = title;
        this.questions = questions;
        this.profileId = profileId;
    }


}