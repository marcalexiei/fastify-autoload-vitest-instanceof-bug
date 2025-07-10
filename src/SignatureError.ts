export class SignatureError extends Error {
  override name = "SignatureError" as const;

  constructor(message: string) {
    super(message);
  }
}
