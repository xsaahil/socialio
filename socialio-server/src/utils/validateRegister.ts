import { UsernamePasswordInput } from "src/resolvers/UsernamePasswordInput";

export const validateRegister = (options: UsernamePasswordInput) => {
  if (!options.email.includes("@")) {
    return [
      {
        field: "email",
        message: "invalid email",
      },
    ] as any;
  }
  if (options.username.length < 2) {
    return [
      {
        field: "username",
        message: "username should be at least 2 characters long",
      },
    ];
  }
  if (options.password.length < 6) {
    return [
      {
        field: "password",
        message: "password should be at least 6 characters long",
      },
    ];
  }

  if (options.username.includes("@")) {
    return [
      {
        field: "username",
        message: "cannot include @",
      },
    ];
  }

  return null;
};
