package com.example.demo.Logowanie;

public class LoginResponse {

    private String message;
    private Long userId;

    // Constructor
    public LoginResponse(String message, Long userId) {
        this.message = message;
        this.userId = userId;
    }

    // Getters
    public String getMessage() {
        return message;
    }

    public Long getUserId() {
        return userId;
    }
}
