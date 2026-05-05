import { ApiError } from "./ApiError.js";

export class InternalError extends ApiError {
  constructor(message: string) {
    super("500", message);
  }
}