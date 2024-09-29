package com.example.demo.quiz;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("api/quiz")
public class QuizController {

    private final QuizService quizService;

    @Autowired
    public QuizController(QuizService quizService) {
        this.quizService =  quizService;
    }

    @GetMapping("/user")
    public Optional<List<Quiz>> getProfileQuizes(@RequestParam(required = false) Long profileId) {
        return quizService.getProfileQuizes(profileId);
    }

    @GetMapping("/all")
    public Optional<List<Quiz>> getAllQuizes() {
        return Optional.ofNullable(quizService.getQuizes());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Quiz> getQuizById(@PathVariable("id") Long id) {
        Optional<Quiz> quiz = quizService.getQuizById(id);
        return quiz.map(q -> {
            return ResponseEntity.ok(q);
        }).orElseGet(() -> ResponseEntity.notFound().build());
    }
    @GetMapping("/public")
    public List<Quiz> getPublicQuizzes() {
        return quizService.getPublicQuizzes();
    }
}


