import { Card } from "react-bootstrap";

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

const LoginIcon = (props: User & { children?: React.ReactNode }) => {
  console.log(props);

  return (
    <div>
      <Card className="profileLoginIcon">
        <Card.Img
          className="profileImage mt-3"
          variant="top"
          src="https://i.pinimg.com/474x/6b/02/e1/6b02e1d3980ef94b6fdbd21abfb78b27.jpg"
        />
        <Card.Body>
          <Card.Title className="pt-1 text-white font-weight-bold">
            Name <br />
            Surname
          </Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
};

export default LoginIcon;
