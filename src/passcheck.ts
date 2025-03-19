export class Password {
  private pw: string;

  constructor(initialPw: string) {
    //if the passChecker function throws an exception, then the constructor will also throw the same error
    this.passChecker(initialPw);
    this.pw = initialPw;
  }

  private passChecker(password: string): void {
    //prettier-ignore
    const possibilities = new Map<number, string>([
      [0,""],
      [1, "Password must be at least 8 characters long"],
      [2, "Password must contain at least 2 numbers"],
      [3, "Password must be at least 8 characters long\nPassword must contain at least 2 numbers"],
      [4, "Password must contain at least 1 capital letter"],
      [5, "Password must be at least 8 characters long\nPassword must contain at least 1 capital letter"],
      [6, "Password must contain at least 2 numbers\nPassword must contain at least 1 capital letter"],
      [7, "Password must be at least 8 characters long\nPassword must contain at least 2 numbers\nPassword must contain at least 1 capital letter"],
      [8, "Password must contain at least 1 special character"],
      [9, "Password must be at least 8 characters long\nPassword must contain at least 1 special character"],
      [10, "Password must contain at least 2 numbers\nPassword must contain at least 1 special character"],
      [11, "Password must be at least 8 characters long\nPassword must contain at least 2 numbers\nPassword must contain at least 1 special character"],
      [12, "Password must contain at least 1 capital letter\nPassword must contain at least 1 special character"],
      [13, "Password must be at least 8 characters long\nPassword must contain at least 1 capital letter\nPassword must contain at least 1 special character"],
      [14, "Password must contain at least 2 numbers\nPassword must contain at least 1 capital letter\nPassword must contain at least 1 special character"],
      [15, "Password must be at least 8 characters long\nPassword must contain at least 2 numbers\nPassword must contain at least 1 capital letter\nPassword must contain at least 1 special character"],
    ]);

    const currentOutcome =
      1 * Number(password.length < 8) +
      2 * Number((password.match(/\d/g) || []).length < 2) +
      4 * Number((password.match(/[A-Z]/g) || []).length < 1) +
      8 * Number((password.match(/[^A-Za-z0-9]/g) || []).length < 1);

    const error = possibilities.get(currentOutcome);

    if (error != "") {
      throw new Error(error);
    }
  }
}
