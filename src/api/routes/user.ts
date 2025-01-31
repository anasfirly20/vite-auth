import api from "../api";
import { AuthCredentials, AuthResponse, User } from "../types";

export default class UserApi {
  static async register(body: AuthCredentials): Promise<AuthResponse> {
    const response = await api.post("/register", body);
    return response?.data;
  }

  static async login(body: AuthCredentials): Promise<AuthResponse> {
    const response = await api.post("/login", body);
    return response?.data;
  }

  static async GetMe(): Promise<User> {
    const response = await api.get("/profile");
    return response?.data;
  }
}
