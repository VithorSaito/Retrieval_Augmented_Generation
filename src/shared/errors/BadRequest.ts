import { ApiError } from "./ApiError.js";

export class BadRequest extends ApiError {
  constructor(message: string) {
    super("400", message);
  }
}