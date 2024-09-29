package com.example.demo.Logowanie;

import java.util.List;

public class eq {

    private List<String> cursors;
    private List<String> frames;
    private String currentCursor;
    private String currentFrame;

    public eq(List<String> cursors, List<String> frames, String currentCursor, String currentFrame) {
        this.cursors = cursors;
        this.frames = frames;
        this.currentCursor = currentCursor;
        this.currentFrame = currentFrame;
    }

    // Getters and Setters
    public List<String> getCursors() {
        return cursors;
    }

    public void setCursors(List<String> cursors) {
        this.cursors = cursors;
    }

    public List<String> getFrames() {
        return frames;
    }

    public void setFrames(List<String> frames) {
        this.frames = frames;
    }

    public String getCurrentCursor() {
        return currentCursor;
    }

    public void setCurrentCursor(String currentCursor) {
        this.currentCursor = currentCursor;
    }

    public String getCurrentFrame() {
        return currentFrame;
    }

    public void setCurrentFrame(String currentFrame) {
        this.currentFrame = currentFrame;
    }
}