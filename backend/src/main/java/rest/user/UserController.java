package rest.user;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import rest.user.userDTO.UserDTO;

@RestController("/user")
public class UserController {
	@PostMapping("/register")
	public void registerUser(UserDTO user) {

	}
}
