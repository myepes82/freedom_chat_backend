const loginErrorConstants = {
    "GENERAL": {
        "IDENTIFIER_NOT_PROVIDED": "Please use email/user for trying to login."
    },
    "PASSWORD": {
        "REQUIRED": "The password is required.",
        "MATCH": "The password must contain at least 1 letter, 1 number, and 1 special character, and its length should be 8 characters."
    },
    "USER": {
        "MAX_LENGTH": "The user max length should be 12 characters.",
        "MIN_LENGTH": "The user min length should be 6 characters."
    },
    "EMAIL": {
        "VALID": "Please use a valid email"
    }
}

export const ErrorConstants = {
    "LOGIN": loginErrorConstants
}