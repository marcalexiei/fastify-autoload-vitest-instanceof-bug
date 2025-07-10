export class SignatureError extends Error {
  name = "SignatureError";

  constructor(message) {
    super(message);
  }
}
