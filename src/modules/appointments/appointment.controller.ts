import { Request, Response } from "express";
import { appointmentService } from "./appointment.service";
import { catchAsync } from "../../common/errors/catchAsync";

export const createAppointment = catchAsync(
  async (req: Request, res: Response) => {
    const appointment = await appointmentService.createAppointment(req.body);
    res.status(201).json(appointment);
  },
);

export const getAppointments = catchAsync(
  async (_req: Request, res: Response) => {
    const appointments = await appointmentService.getAppointments();
    res.json(appointments);
  },
);

export const getAppointment = catchAsync(
  async (req: Request, res: Response) => {
    const appointment = await appointmentService.getAppointment(
      Number(req.params.id),
    );
    res.json(appointment);
  },
);

export const updateAppointment = catchAsync(
  async (req: Request, res: Response) => {
    const appointment = await appointmentService.updateAppointment(
      Number(req.params.id),
      req.body,
    );
    res.json(appointment);
  },
);
