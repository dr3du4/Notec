package com.example.demo.Logowanie;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.Console;
import java.util.Optional;

@RestController
@RequestMapping(value = "/auth", method = { RequestMethod.GET, RequestMethod.POST })
public class AuthController {

    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody RegisterRequest registerRequest) {
        try {
            userService.register(registerRequest);
            return ResponseEntity.ok("Registration successful");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Registration failed: " + e.getMessage());
        }
    }

    @PostMapping("/login")
    public ResponseEntity<LoginResponse> login(@RequestBody LoginRequest loginRequest) {
        System.out.println(loginRequest.email);
        System.out.println(loginRequest.password);
        Optional<User> user = userService.login(loginRequest);
        System.out.println(user);
        if (user.isPresent()) {
            Long userId = user.get().getId();
            LoginResponse response = new LoginResponse("login successfully", userId);
            return ResponseEntity.ok(response);
        } else {
            return ResponseEntity.status(401).body(new LoginResponse("niedziala", null));
        }
    }
}