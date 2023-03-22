import React, { useEffect } from "react";
import { Button, Image } from "react-bootstrap";
import userPic from "../images/jovelynn.png";
import { useAppSelector } from "../redux/hooks";

function SecondNav() {
  let currentProfileUser = useAppSelector((state) => state.users.currentProfileUser);
  function handleScroll() {
    const distance = window.scrollY;
    const nav = document.querySelector(".secondary-nav");

    if (nav) {
      if (distance > 450) {
        nav.classList.add("show-nav");
      } else {
        nav.classList.remove("show-nav");
      }
    }
  }

  useEffect(() => {
    console.log(currentProfileUser)
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return (
    <div className="secondary-nav d-flex align-items-center justify-content-around fixed-nav">
      {Object.keys(currentProfileUser).length ?
        <div className="d-flex align-items-center">
          
          <Image
            src={currentProfileUser.image}
            alt="Profile"
            roundedCircle
            style={{ width: 36, height: 36 }}
          />
          
          <div className="ml-3">
            <p style={{ fontSize: "15px", marginBottom: "0", marginTop: "10px" }}>
              {currentProfileUser.name} {currentProfileUser.surname}
            </p>
            <p style={{ fontSize: "10px" }}>{currentProfileUser.title}</p>
          </div>
          
        </div>
        :
          ""
          }
      <div className="button-area">
        <Button
          className="mx-1 py-0 more-btn"
          variant="outline-secondary"
          href="#"
        >
          More
        </Button>
        <Button
          className="mx-1 py-0 add-btn"
          variant="outline-primary"
          href="#"
        >
          Edit Profile
        </Button>
        <Button className="mx-1 py-0 open-btn" variant="primary" href="#">
          Open to
        </Button>
      </div>
    </div>
  );
}

export default SecondNav;
