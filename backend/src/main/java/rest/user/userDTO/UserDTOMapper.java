package rest.user.userDTO;

import user.User;

public class UserDTOMapper {
	public static User mapToUser(UserDTO userDTO) {
		return new User(userDTO.username(), userDTO.password());
	}

}
