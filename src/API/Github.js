import axios from "axios";

const Github = () => {
  axios.get("https://api.github.com/users/KzZe-Sama").then(
    (dataUser) => {
      return userGet(dataUser.data);
    },
    (error) => {
      console.log(error);
    }
  );
};

export default Github;
