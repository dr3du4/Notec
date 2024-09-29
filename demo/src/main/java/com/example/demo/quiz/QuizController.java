package com.example.demo.quiz;

import com.example.demo.Logowanie.SubmitQuizRequest;
import com.example.demo.Logowanie.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("api/v1/quiz")
public class QuizController {

    private final QuizService quizService;
    private final UserService userService;

    @Autowired
    public QuizController(QuizService quizService, UserService userService) {
        this.quizService = quizService;
        this.userService = userService;
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

    @PostMapping("/{id}/submit")
    public ResponseEntity<String> submitQuizResult(
            @PathVariable("id") Long quizId,
            @RequestBody SubmitQuizRequest submitQuizRequest) {

        Long userId = submitQuizRequest.getUserId();
        int correctAnswersCount = submitQuizRequest.getCorrectAnswersCount();

        System.out.println("UserId: " + userId);
        System.out.println("Correct Answers Count: " + correctAnswersCount);

        // Aktualizacja punktów użytkownika
        boolean isUpdated = userService.updateUserPoints(userId, correctAnswersCount);

        if (isUpdated) {
            return ResponseEntity.ok("User points updated successfully");
        } else {
            return ResponseEntity.badRequest().body("Error updating user points");
        }
    }

}


