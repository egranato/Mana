export class SetupUser {
  username: string;
  email: string;
  key: string;
  keyCheck: string;
  checkMatch(): boolean {
    return this.key === this.keyCheck;
  }
  constructor() {
    this.username = '';
    this.email = '';
    this.key = '';
    this.keyCheck = '';
  }
}
