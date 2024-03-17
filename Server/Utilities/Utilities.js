import * as EmailValidator from 'email-validator';

export function ValidateEmail(email) {
    return EmailValidator.validate(email);
}

export function ValidatePasswordStrength(password) {
    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasDigits = /\d/.test(password);
    const hasSpecialChars = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(password);

    const isLengthValid = password.length >= minLength;
    const isUpperCaseValid = hasUpperCase;
    const isLowerCaseValid = hasLowerCase;
    const isDigitsValid = hasDigits;
    const isSpecialCharsValid = hasSpecialChars;

    const strength = [
        isLengthValid,
        isUpperCaseValid,
        isLowerCaseValid,
        isDigitsValid,
        isSpecialCharsValid,
    ].filter(Boolean).length;

    const isPasswordStrong = strength >= 3;

    return {
        isPasswordStrong,
        errors: {
            isLengthValid,
            isUpperCaseValid,
            isLowerCaseValid,
            isDigitsValid,
            isSpecialCharsValid,
        },
    };
}