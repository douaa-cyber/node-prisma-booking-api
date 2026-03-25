import { Request, Response } from "express";
import { serviceService } from "./service.service";
import { catchAsync } from "../../common/errors/catchAsync";

export const createService = catchAsync(async (req: Request, res: Response) => {
  const service = await serviceService.createService(req.body);
  res.status(201).json(service);
});

export const getServices = catchAsync(async (_req: Request, res: Response) => {
  const services = await serviceService.getServices();
  res.json(services);
});

export const getService = catchAsync(async (req: Request, res: Response) => {
  const service = await serviceService.getService(Number(req.params.id));
  res.json(service);
});

export const updateService = catchAsync(async (req: Request, res: Response) => {
  const customer = await serviceService.updateService(
    Number(req.params.id),
    req.body,
  );
  res.json(customer);
});

export const deleteService = catchAsync(async (req: Request, res: Response) => {
  await serviceService.deleteService(Number(req.params.id));
  res.status(204).send();
});
