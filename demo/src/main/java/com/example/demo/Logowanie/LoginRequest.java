package com.example.demo.Logowanie;

public class LoginRequest {
        private String email;
        private String password;


        public LoginRequest(String email, String password) {
                this.email = email;
                this.password = password;
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

        // Opcjonalnie: Metoda toString (do debugowania)
        @Override
        public String toString() {
                return "LoginRequest{" +
                        "email='" + email + '\'' +
                        ", password='" + password + '\'' +
                        '}';
        }
}
