export class CPFValidator {
  private static FIRST_DIGIT_FACTOR = 10;
  private static SECOND_DIGIT_FACTOR = 11;

  public static validate(value: string): boolean {
    const cleanCpf = this.removeSpecialChars(value);
    if (cleanCpf.length !== 11 || this.checkIfDigitsAreSame(cleanCpf))
      return false;
    const firstVerifierDigit = this.calculateVerifyDigit(
      cleanCpf,
      this.FIRST_DIGIT_FACTOR
    );
    const secondVerifierDigit = this.calculateVerifyDigit(
      cleanCpf,
      this.SECOND_DIGIT_FACTOR
    );
    return this.checkIfLastDigitsAreValid(
      firstVerifierDigit,
      secondVerifierDigit,
      cleanCpf
    );
  }

  private static removeSpecialChars(value: string): string {
    return value.replace(/\D/g, '');
  }

  private static checkIfDigitsAreSame(value: string): boolean {
    const [firstDigit] = value;
    return value.split('').every((digit) => digit === firstDigit);
  }

  private static calculateVerifyDigit(value: string, factor: number): number {
    const checkArray = [...value.slice(0, factor - 1)];
    let sum = 0;
    checkArray.forEach((digitNumber, index) => {
      sum += Number(digitNumber) * (factor - index);
    });
    const rest = sum % 11;
    return rest < 2 ? 0 : 11 - rest;
  }

  private static checkIfLastDigitsAreValid(
    firstVerifierDigit: number,
    secondVerifierDigit: number,
    value: string
  ): boolean {
    const lastDigits = value.slice(-2);
    const checkLastDigits = `${firstVerifierDigit}${secondVerifierDigit}`;
    if (lastDigits === checkLastDigits) return true;
    return false;
  }
}
