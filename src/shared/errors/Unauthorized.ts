import { ApiError } from "./ApiError.js";

export class Unauthorized extends ApiError {
  constructor(message: string) {
    super("401", message);
  }
}