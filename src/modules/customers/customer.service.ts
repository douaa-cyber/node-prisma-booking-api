import { customerRepository } from "./customer.repository";
import { AppError } from "../../common/errors/AppError";

export const customerService = {
  async createCustomer(data: { name: string; phone: string }) {
    return customerRepository.create(data);
  },

  async getCustomers() {
    return customerRepository.findAll();
  },

  async getCustomer(id: number) {
    const customer = await customerRepository.findById(id);
    if (!customer) throw new AppError("Customer not found", 404);
    return customer;
  },

  async updateCustomer(id: number, data: { name?: string; phone?: string }) {
    const existing = await customerRepository.findById(id);
    if (!existing) throw new AppError("Customer not found", 404);

    return customerRepository.update(id, data);
  },

  async deleteCustomer(id: number) {
    const existing = await customerRepository.findById(id);
    if (!existing) throw new AppError("Customer not found", 404);

    return customerRepository.delete(id);
  },
};
