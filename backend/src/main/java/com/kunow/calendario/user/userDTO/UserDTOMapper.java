package com.kunow.calendario.user.userDTO;

import com.kunow.calendario.user.User;

public class UserDTOMapper {
	public static User mapToUser(UserDTO userDTO) {
		return new User(userDTO.username(), userDTO.password());
	}
}
