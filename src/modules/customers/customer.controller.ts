import { Request, Response } from "express";
import { customerService } from "./customer.service";
import { catchAsync } from "../../common/errors/catchAsync";

export const createCustomer = catchAsync(
  async (req: Request, res: Response) => {
    const customer = await customerService.createCustomer(req.body);
    res.status(201).json(customer);
  },
);

export const getCustomers = catchAsync(async (_req: Request, res: Response) => {
  const customers = await customerService.getCustomers();
  res.json(customers);
});

export const getCustomer = catchAsync(async (req: Request, res: Response) => {
  const customer = await customerService.getCustomer(Number(req.params.id));
  res.json(customer);
});

export const updateCustomer = catchAsync(
  async (req: Request, res: Response) => {
    const customer = await customerService.updateCustomer(
      Number(req.params.id),
      req.body,
    );
    res.json(customer);
  },
);

export const deleteCustomer = catchAsync(
  async (req: Request, res: Response) => {
    await customerService.deleteCustomer(Number(req.params.id));
    res.status(204).send();
  },
);
