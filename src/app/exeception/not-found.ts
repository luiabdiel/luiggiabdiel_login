export class NotFoundException {
  constructor(private readonly message: string) {}

  toJSON() {
    return { error: this.message };
  }
}
