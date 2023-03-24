import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { BsLinkedin } from "react-icons/bs";
import { getSpecificUser, getUsers, GET_SPECIFIC_USER } from "../redux/actions";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import LoginIcon from "./LoginIcon";

interface User {
  _id: string;
  name: string;
  surname: string;
  email: string;
  bio: string;
  title: string;
  area: string;
  image: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

const LoginPage = () => {
  let [monguese, setMonguese] = useState<User[]>([]);

  const getUser = async (id: string) => {
    try {
      let response = await fetch(`
          ${process.env.REACT_APP_BACK_END}/api/users/${id}
        `);
      if (response.ok) {
        const data = await response.json();
        setMonguese((prevMonguese) => [...prevMonguese, data]);
      } else {
        console.log("Uh oh!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser("641844fd7cc3b85262016def");
    getUser("6418d587c467a042db12a080");
    getUser("6419d8a06ee00de39c49e9f2");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container className="mt-5 pt-5 text-center">
      <BsLinkedin size="5em" className="linked-in-nav-icon" />
      <h2 className="my-5">Click on your profile to start!</h2>
      <div className="d-flex justify-content-between mx-5 pt-5">
        {monguese.length > 0 &&
          monguese.map((mongoose: User, i: number) => {
            return <LoginIcon key={i} {...mongoose} />;
          })}
      </div>
    </Container>
  );
};

export default LoginPage;
