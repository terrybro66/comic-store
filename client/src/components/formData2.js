import fetcher from "../utils/api/fetcher";

const formData = {
  login: async (e, fields, history, saveUser) => {
    e.preventDefault();
    const username = fields[0].value;
    const password1 = fields[1].value;
    const password2 = fields[2].value;

    const { data } = await fetcher.post("signup/", {
      username,
      password1,
      password2,
    });
    saveUser(data.access);
    history.push("/");
  },
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
