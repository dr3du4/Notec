package com.example.demo.quiz;

import com.example.demo.quiz.Question;
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.List;
import org.json.*;
@Data
@NoArgsConstructor
@Entity
@Table()

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

    // Deserialize Quiz from json
    public Quiz(String jsonString) {
        JSONObject obj = new JSONObject(jsonString);
        this.title = obj.getString("title");
        this.profileId = obj.getLong("profileId");
        this.isPrivate = obj.getBoolean("isPrivate");

        this.tags = new ArrayList<>();
        JSONArray tagsArray = obj.getJSONArray("tags");
        for (int i = 0; i< tagsArray.length(); i++) {
            tags.add(tagsArray.getString(i));
        }

        this.questions = new ArrayList<>();
        JSONArray questionsArray = obj.getJSONArray("questions");

        for (int i = 0; i < questionsArray.length(); i++) {
            JSONObject questionObject = questionsArray.getJSONObject(i);

            // Extract and print the values from each question
            int id = questionObject.getInt("id");
            Question question = new Question();
            question.setQuestion(questionObject.getString("question"));
            question.setAnswer1(questionObject.getString("answer1"));
            question.setAnswer2(questionObject.getString("answer2"));
            question.setAnswer3(questionObject.getString("answer3"));
            question.setAnswer4(questionObject.getString("answer4"));
            question.setCorrectAnswer(questionObject.getString("correctAnswer"));
            this.questions.add(question);
        }

    }



}