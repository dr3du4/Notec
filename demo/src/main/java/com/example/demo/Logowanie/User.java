package com.example.demo.Logowanie;

import jakarta.persistence.*;
import org.hibernate.annotations.Type;
import java.util.List;

@Entity
@Table(name = "users")
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
        @CollectionTable(name = "user_cursors", joinColumns = @JoinColumn(name = "user_id"))
        @Column(name = "cursor")
        private List<String> cursors;

        @ElementCollection
        @CollectionTable(name = "user_frames", joinColumns = @JoinColumn(name = "user_id"))
        @Column(name = "frame")
        private List<String> frames;

       // Konstruktor z argumentami
        public User(String firstName, String lastName, int points, String rank, String imageUrl, String email, String password, List<String> cursors, List<String> frames) {
                this.firstName = firstName;
                this.lastName = lastName;
                this.points = points;
                this.rank = rank;
                this.imageUrl = imageUrl;
                this.email = email;
                this.password = password;
                this.cursors = cursors;
                this.frames = frames;
        }

        public User() {

        }

        // Getter dla pola id
        public Long getId() {
                return id;
        }

        // Setter dla pola id
        public void setId(Long id) {
                this.id = id;
        }

        // Getter dla pola firstName
        public String getFirstName() {
                return firstName;
        }

        // Setter dla pola firstName
        public void setFirstName(String firstName) {
                this.firstName = firstName;
        }

        // Getter dla pola lastName
        public String getLastName() {
                return lastName;
        }

        // Setter dla pola lastName
        public void setLastName(String lastName) {
                this.lastName = lastName;
        }

        // Getter dla pola points
        public int getPoints() {
                return points;
        }

        // Setter dla pola points
        public void setPoints(int points) {
                this.points = points;
        }

        // Getter dla pola rank
        public String getRank() {
                return rank;
        }

        // Setter dla pola rank
        public void setRank(String rank) {
                this.rank = rank;
        }

        // Getter dla pola imageUrl
        public String getImageUrl() {
                return imageUrl;
        }

        // Setter dla pola imageUrl
        public void setImageUrl(String imageUrl) {
                this.imageUrl = imageUrl;
        }

        // Getter dla pola email
        public String getEmail() {
                return email;
        }

        // Setter dla pola email
        public void setEmail(String email) {
                this.email = email;
        }

        // Getter dla pola password
        public String getPassword() {
                return password;
        }

        // Setter dla pola password
        public void setPassword(String password) {
                this.password = password;
        }

        // Getter dla pola cursors
        public List<String> getCursors() {
                return cursors;
        }

        // Setter dla pola cursors
        public void setCursors(List<String> cursors) {
                this.cursors = cursors;
        }

        // Getter dla pola frames
        public List<String> getFrames() {
                return frames;
        }

        // Setter dla pola frames
        public void setFrames(List<String> frames) {
                this.frames = frames;
        }

        // Opcjonalnie: Metoda toString (do debugowania)
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
                        ", password='" + password + '\'' + // Hasło może być poufne, rozważ usunięcie z toString
                        ", cursors=" + cursors +
                        ", frames=" + frames +
                        '}';
        }
}