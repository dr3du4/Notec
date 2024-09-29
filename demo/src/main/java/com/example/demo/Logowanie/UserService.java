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

    public User register(User registerRequest) {
//        User user = new User();

//        user.setFirstName(registerRequest.getFirstName());
//        user.setLastName(registerRequest.getLastName());
//        user.setEmail(registerRequest.getEmail());
//        user.setPassword(registerRequest.getPassword());
//        user.setPoints(0); // Domyślnie 0 punktów
//        user.setRank("beginner"); // Domyślna ranga
//        user.setCurrentCursor("");
//        user.setCurrentFrame("");

//        registerRequest.setCurrentCursor("");
//        registerRequest.setCurrentFrame("");
        System.out.println(registerRequest);
        return userRepository.save(registerRequest);
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
    public eq getUserEq(Long id) {
        Optional<User> userOpt = userRepository.findById(id);
        if (userOpt.isPresent()) {
            User user = userOpt.get();
            return new eq(
                    user.getCursors(),
                    user.getFrames(),
                    user.getCurrentCursor(),
                    user.getCurrentFrame()
            );
        }
        // Throw exception or return null if user not found
        throw new RuntimeException("User not found with ID: " + id);
    }
}