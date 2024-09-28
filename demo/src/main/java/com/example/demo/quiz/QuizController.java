package com.example.demo.quiz;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("api/v1/quiz")
public class QuizController {

    private final QuizService quizService;

    @Autowired
    public QuizController(QuizService quizService) {
        this.quizService =  quizService;
    }

    public Optional<List<Quiz>> getProfileQuizes(@RequestParam(required = false) Long profileId) {
        return quizService.getProfileQuizes(profileId);
    }

    @GetMapping("/all")
    public Optional<List<Quiz>> getAllQuizes() {
        return Optional.ofNullable(quizService.getQuizes());
    }

    @GetMapping("/quiz")
    public Optional<Quiz> getQuiz(@RequestParam Long quizId) {
        return quizService.getQuiz(quizId);
    }
}


