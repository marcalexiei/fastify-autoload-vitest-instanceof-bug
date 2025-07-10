export class SignatureError extends Error {
  // added to improve type inference in app handler
  override name = 'SignatureError' as const;

  constructor(message: string) {
    super(message);
  }
}
