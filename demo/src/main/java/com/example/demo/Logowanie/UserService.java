package com.example.demo.Logowanie;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public User register(RegisterRequest registerRequest) {
        User user = new User();
        user.setFirstName(registerRequest.getFirstName());
        user.setLastName(registerRequest.getLastName());
        user.setEmail(registerRequest.getEmail());
        user.setPassword(registerRequest.getPassword());
        user.setPoints(0); // Domyślnie 0 punktów
        user.setRank("beginner"); // Domyślna ranga
        System.out.println(user);
        return userRepository.save(user);
    }

    public Optional<User> login(LoginRequest loginRequest) {
        System.out.println(loginRequest.email);
        System.out.println(loginRequest.password);
        Optional<User> user = userRepository.findByEmail(loginRequest.getEmail());
        System.out.println(user);
        System.out.println(user.get().getPassword());
        System.out.println(loginRequest.getPassword());

        if (user.isPresent() && (user.get().getPassword().equals(loginRequest.getPassword()))) {
            return user;
        }
        return Optional.empty();
    }
    public User getUserById(Long id) {
        Optional<User> user = userRepository.findById(id);
        if (user.isPresent()) {
            return user.get();
        } else {
            throw new RuntimeException("User with ID " + id + " not found");
        }
    }
}