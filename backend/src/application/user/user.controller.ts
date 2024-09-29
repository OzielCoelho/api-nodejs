import { Body, Controller, Get, Post, Route, Tags } from "tsoa";
import userService from "../../domain/user/service/user.service";
import { UserResponse } from "./dto/user.response";
import { CreateUserRequest } from "./dto/user.request";

@Route("users")
@Tags("User")
export class UserController extends Controller {
  @Get("/")
  public async getUsers(): Promise<UserResponse[]> {
    return await userService.listUsers();
  }

  @Post("/")
  public async createUser(
    @Body() requestBody: CreateUserRequest
  ): Promise<UserResponse> {
    return await userService.createUser(requestBody.name, requestBody.email);
  }
}
