package com.example.demo.quiz;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class QuizService {

    private final QuizRepository quizRepository;

    @Autowired
    public QuizService(QuizRepository quizRepository) {

        this.quizRepository = quizRepository;
    }

    public List<Quiz> getQuizes() {
        return quizRepository.findAll();
    }

    public Optional<List<Quiz>> getProfileQuizes(Long profileId) {
        return quizRepository.findQuizesByProfile(profileId);
    }

    public void addNewQuiz(Quiz quiz) {

        quizRepository.save(quiz);
    }

    public Quiz createQuiz(String jsonText) {
        return quizRepository.save(new Quiz(jsonText));
    }

    public Optional<Quiz> getQuizById(Long id) {
        return quizRepository.findById(id);
    }
    public List<Quiz> getPublicQuizzes() {
        return quizRepository.findByIsPrivateFalse();
    }
}
