import User from "../model/user.model";

class UserService {
  public async listUsers(): Promise<User[]> {
    try {
      return await User.findAll();
    } catch (error) {
      throw new Error("Error fetching users");
    }
  }

  public async createUser(name: string, email: string): Promise<User> {
    try {
      return await User.create({ name, email });
    } catch (error) {
      throw new Error("Error creating user");
    }
  }
}

export default new UserService();
