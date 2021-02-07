import fetcher from "../utils/api/fetcher";

const formData = {
  login: async (e, fields, history, saveUser) => {
    console.log(history);
    e.preventDefault();
    const username = fields[0].value;
    const password = fields[1].value;

    const { data } = await fetcher.post("login/", {
      username,
      password,
    });
    saveUser(data.access);
    history.push("/");
  },
  data: {
    title: "Log into your account",
    buttonValue: "Log in",
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
      name: "password",
    },
  ],
};

export default formData;
