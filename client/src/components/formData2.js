const formData = {
  data: {
    title: "Sign up here",
    buttonValue: "Register",
  },
  fields: [
    {
      label: "Email Address",
      type: "text",
      name: "username",
    },
    {
      label: "Password",
      type: "password",
      name: "password1",
    },
    {
      label: "Confirm Password",
      type: "password",
      name: "password2",
    },
  ],
};

export default formData;
