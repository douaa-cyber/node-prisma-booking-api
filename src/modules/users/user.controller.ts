import { Request, Response } from "express";
import { userService } from "./user.service";
import { catchAsync } from "../../common/errors/catchAsync";

export const signUp = catchAsync(async (req: Request, res: Response) => {
  const user = await userService.signUp(req.body);
  res.status(201).json(user);
});

export const login = catchAsync(async (req: Request, res: Response) => {
  const result = await userService.login(req.body);
  res.status(200).json(result);
});

export const getUser = catchAsync(async (req: Request, res: Response) => {
  const user = await userService.getById(Number(req.params.id));
  res.json(user);
});

export const updateUser = catchAsync(async (req: Request, res: Response) => {
  const updated = await userService.updateUser(Number(req.params.id), req.body);
  res.json(updated);
});

export const deleteUser = catchAsync(async (req: Request, res: Response) => {
  const result = await userService.deleteUser(Number(req.params.id));
  res.json(result);
});

export const getAllUsers = catchAsync(async (_req: Request, res: Response) => {
  const users = await userService.getAllUsers();
  res.json(users);
});
