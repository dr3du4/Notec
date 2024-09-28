package com.example.demo.Logowanie;

import jakarta.persistence.*;
import java.util.List;

@Entity
@Table(name = "profiles")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String firstName;

    private String lastName;

    private int points;

    private String rank;

    private String imageUrl;

    private String email;

    private String password;

    @ElementCollection
    private List<String> cursors;

    @ElementCollection
    private List<String> frames;

    private String currentFrame;  // Current frame selected by the user

    private String currentCursor;  // Current cursor selected by the user

    // Constructor with arguments
    public User(String firstName, String lastName, int points, String rank, String imageUrl, String email, String password, List<String> cursors, List<String> frames, String currentFrame, String currentCursor) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.points = points;
        this.rank = rank;
        this.imageUrl = imageUrl;
        this.email = email;
        this.password = password;
        this.cursors = cursors;
        this.frames = frames;
        this.currentFrame = currentFrame;
        this.currentCursor = currentCursor;
    }

    // No-argument constructor
    public User() {}

    // Getter for id
    public Long getId() {
        return id;
    }

    // Setter for id
    public void setId(Long id) {
        this.id = id;
    }

    // Getter for firstName
    public String getFirstName() {
        return firstName;
    }

    // Setter for firstName
    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    // Getter for lastName
    public String getLastName() {
        return lastName;
    }

    // Setter for lastName
    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    // Getter for points
    public int getPoints() {
        return points;
    }

    // Setter for points
    public void setPoints(int points) {
        this.points = points;
    }

    // Getter for rank
    public String getRank() {
        return rank;
    }

    // Setter for rank
    public void setRank(String rank) {
        this.rank = rank;
    }

    // Getter for imageUrl
    public String getImageUrl() {
        return imageUrl;
    }

    // Setter for imageUrl
    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    // Getter for email
    public String getEmail() {
        return email;
    }

    // Setter for email
    public void setEmail(String email) {
        this.email = email;
    }

    // Getter for password
    public String getPassword() {
        return password;
    }

    // Setter for password
    public void setPassword(String password) {
        this.password = password;
    }

    // Getter for cursors
    public List<String> getCursors() {
        return cursors;
    }

    // Setter for cursors
    public void setCursors(List<String> cursors) {
        this.cursors = cursors;
    }

    // Getter for frames
    public List<String> getFrames() {
        return frames;
    }

    // Setter for frames
    public void setFrames(List<String> frames) {
        this.frames = frames;
    }

    // Getter for currentFrame
    public String getCurrentFrame() {
        return currentFrame;
    }

    // Setter for currentFrame
    public void setCurrentFrame(String currentFrame) {
        this.currentFrame = currentFrame;
    }

    // Getter for currentCursor
    public String getCurrentCursor() {
        return currentCursor;
    }

    // Setter for currentCursor
    public void setCurrentCursor(String currentCursor) {
        this.currentCursor = currentCursor;
    }

    // Optional: toString method for debugging
    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", points=" + points +
                ", rank='" + rank + '\'' +
                ", imageUrl='" + imageUrl + '\'' +
                ", email='" + email + '\'' +
                // Consider removing password for security reasons
                ", password='" + password + '\'' +
                ", cursors=" + cursors +
                ", frames=" + frames +
                ", currentFrame='" + currentFrame + '\'' +
                ", currentCursor='" + currentCursor + '\'' +
                '}';
    }
}