package rest.user;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import rest.user.userDTO.UserDTO;

@RestController
@RequestMapping("/user")
@CrossOrigin(origins = "http://localhost:4200") // Allows Angular to connect
public class UserController {

	@PostMapping("/register")
	public void registerUser(@RequestBody UserDTO user) {
		// For testing, print out the incoming data
		System.out.println("Registering user: " + user.username());
	}
}