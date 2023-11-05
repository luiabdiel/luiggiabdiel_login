export class BadRequestException {
  constructor(private readonly message: string) {}

  getMessage() {
    return this.message;
  }

  toJSON() {
    return { error: this.message };
  }
}
