export class DBError extends Error {
  public status: any;
  public error: any;
  public stacks: any;
  constructor(message?: string, status?: number, stacks?: string[]) {
    super(message);
    this.status = status;
    this.stacks = stacks;
  }
}
