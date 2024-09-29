package com.example.demo.llmhandler;
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.nio.charset.StandardCharsets;
import org.springframework.stereotype.Service;
import java.io.OutputStream;

@Service
public class LLMService {
    public String extractQuizJson(String content) {
        StringBuilder response = new StringBuilder();
                try {
                    // Define the URL to send the request to
                    URL url = new URL("http://localhost:11434/api/chat");
                    HttpURLConnection connection = (HttpURLConnection) url.openConnection();

                    // Set the request method to POST
                    connection.setRequestMethod("POST");

                    // Set the request headers
                    connection.setRequestProperty("Content-Type", "application/json");

                    // Enable sending data to the server
                    connection.setDoOutput(true);

                    // Define the JSON payload
                    String jsonInputString = "{\n" +
                            "  \"model\": \"SpeakLeash/bielik-11b-v2.2-instruct:Q4_K_M\",\n" +
                            "  \"stream\": false,\n" +
                            "  \"messages\": [\n" +
                            "    {\n" +
                            "      \"role\": \"system\",\n" +
                            "      \"content\": \"Wygeneruj quiz z 3 pytaniami w tym formacie json: {'id': 1, 'title': 'Test quiz', 'profileId': 1, 'tags': [], 'isPrivate': False, 'private': False, 'questions':[{'id': 1, 'quiz_id': 1, 'question': 'Test question', 'answer1': 'a', 'answer2': 'b', 'answer3': 'c', 'answer4': 'd', 'correctAnswer': 'b'}, {'id': 2, 'quiz_id': 1, 'question': 'Test question 2', 'answer1': '1', 'answer2': '2', 'answer3': '3', 'answer4': '4', 'correctAnswer': '3'}]} na podstawie moich notatek\"\n" +
                            "    },\n" +
                            "    {\n" +
                            "      \"role\": \"user\",\n" +
                            "      \"content\": \"Notatki: " + content + " \" " +                            "    }\n" +
                            "  ]\n" +
                            "}";

                    // Write the JSON data to the output stream
                    try (OutputStream os = connection.getOutputStream()) {
                        byte[] input = jsonInputString.getBytes(StandardCharsets.UTF_8);
                        os.write(input, 0, input.length);
                    }

                    // Read the response from the input stream
                    try (BufferedReader br = new BufferedReader(new InputStreamReader(connection.getInputStream(), StandardCharsets.UTF_8))) {
                        String responseLine;
                        while ((responseLine = br.readLine()) != null) {
                            response.append(responseLine.trim());
                        }
                    }

                } catch (Exception e) {
                    e.printStackTrace();
                    return null;
                }

        // Return the response as a string
        return response.toString();
    }
            }




