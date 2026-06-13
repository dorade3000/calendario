package com.kunow.calendario.user.rest;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.kunow.calendario.user.userDTO.UserDTO;

@RestController
@RequestMapping("/user")
public class UserController {

	@PostMapping("/register")
	public void registerUser(@RequestBody UserDTO user) {
		System.out.println("Registering user: " + user.username());
	}
}