export default {
  config: {
    title: "Log into your account",
    buttonText: "Log in",
    messages: {
      error: "An error occurred",
    },
  },
  fields: [
    {
      label: "Email Address",
      type: "text",
      name: "username",
      placeholder: "Email address",
    },
    {
      label: "Password",
      type: "password",
      name: "password",
      placeholder: "Password",
    },
  ],
};
