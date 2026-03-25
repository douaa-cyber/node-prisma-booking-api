import { userRepository } from "./user.repository";
import { AppError } from "../../common/errors/AppError";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

interface SignUpDTO {
  name: string;
  email: string;
  password: string;
  role?: string;
}

interface LoginDTO {
  email: string;
  password: string;
}

export const userService = {
  async signUp(data: SignUpDTO) {
    const existing = await userRepository.findByEmail(data.email);
    if (existing) throw new AppError("Email already in use", 400);

    const hashedPassword = await bcrypt.hash(data.password, 10);
    const user = await userRepository.create({
      ...data,
      password: hashedPassword,
      role: data.role || "user",
    });

    return { id: user.id, name: user.name, email: user.email, role: user.role };
  },

  async login(data: LoginDTO) {
    const user = await userRepository.findByEmail(data.email);
    if (!user) throw new AppError("Invalid credentials", 401);

    const isMatch = await bcrypt.compare(data.password, user.password);
    if (!isMatch) throw new AppError("Invalid credentials", 401);

    const token = jwt.sign(
      { id: user.id, role: user.role },
      process.env.JWT_SECRET!,
      { expiresIn: "1h" },
    );

    return {
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    };
  },

  async getById(id: number) {
    const user = await userRepository.findById(id);
    if (!user) throw new AppError("User not found", 404);
    return { id: user.id, name: user.name, email: user.email, role: user.role };
  },

  async updateUser(id: number, data: Partial<SignUpDTO>) {
    if (data.password) {
      data.password = await bcrypt.hash(data.password, 10);
    }
    const updated = await userRepository.update(id, data);
    return {
      id: updated.id,
      name: updated.name,
      email: updated.email,
      role: updated.role,
    };
  },

  async deleteUser(id: number) {
    await userRepository.delete(id);
    return { message: "User deleted successfully" };
  },

  async getAllUsers() {
    return await userRepository.findAll();
  },
};
