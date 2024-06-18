export default class User {
  constructor({ email, password }) {
    if (!email.includes("@")) {
      throw new Error("Incorrect email");
    }
    if (password.length < 6) {
      throw new Error("Incorrect password");
    }
    this.email = email;
    this.password = password;
  }

  getEmail() {
    return this.email;
  }
  getPassword() {
    return this.password;
  }
  login() {
    if (this.email.includes("devmentor.pl")) return true;
    return false;
  }
}
