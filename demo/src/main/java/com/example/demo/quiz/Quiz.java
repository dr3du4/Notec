package com.example.demo.quiz;

import com.example.demo.quiz.Question;
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.lang.reflect.Array;
import java.util.List;

@Data
@NoArgsConstructor
@Entity
@Table(name = "quizzes")

public class Quiz {

    @Setter
    @Getter
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;

    @JsonProperty("questions")
    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
    @Column(columnDefinition = "json")
    private List<Question> questions;

    @Column(name = "profile_id")
    private Long profileId;

    @ElementCollection
    private List<String> tags;

    private  Boolean isPrivate;

    // Gettery i settery

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public List<Question> getQuestions() {
        return questions;
    }

    public void setQuestions(List<Question> questions) {
        this.questions = questions;
    }

    public Long getProfileId() {
        return profileId;
    }

    public void setProfileId(Long profileId) {
        this.profileId = profileId;
    }

    public List<String> getTags() {
        return tags;
    }

    public void setTags(List<String> tags) {
        this.tags = tags;
    }

    public boolean isPrivate() {
        return isPrivate;
    }

    public void setPrivate(boolean isPrivate) {
        this.isPrivate = isPrivate;
    }


}