import { serviceRepository } from "./service.repository";
import { AppError } from "../../common/errors/AppError";

export const serviceService = {
  async createService(data: {
    name: string;
    description: string;
    price: number;
  }) {
    return serviceRepository.create(data);
  },

  async getServices() {
    return serviceRepository.findAll();
  },

  async getService(id: number) {
    const service = await serviceRepository.findById(id);
    if (!service) throw new AppError("Service not found", 404);
    return service;
  },

  async updateService(
    id: number,
    data: { name?: string; description?: string; price?: number },
  ) {
    const existing = await serviceRepository.findById(id);
    if (!existing) throw new AppError("service not found", 404);

    return serviceRepository.update(id, data);
  },

  async deleteService(id: number) {
    const existing = await serviceRepository.findById(id);
    if (!existing) throw new AppError("service not found", 404);

    return serviceRepository.delete(id);
  },
};
