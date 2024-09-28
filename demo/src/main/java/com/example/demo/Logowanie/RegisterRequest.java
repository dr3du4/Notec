package com.example.demo.Logowanie;

public class RegisterRequest {
        private String firstName;
        private String lastName;
        private String email;
        private String password;
        public RegisterRequest(String firstName, String lastName, String email, String password) {
                this.firstName = firstName;
                this.lastName = lastName;
                this.email = email;
                this.password = password;
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
                return "RegisterRequest{" +
                        "firstName='" + firstName + '\'' +
                        ", lastName='" + lastName + '\'' +
                        ", email='" + email + '\'' +
                        ", password='" + password + '\'' +
                        '}';
        }
}
