import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBBtn,
} from "mdb-react-ui-kit";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

const Footer = () => {
  return (
    <MDBFooter className="footer bg-dark text-center text-white">
      <MDBContainer className="p-4 pb-0">
        <section className="mb-4">
    
          <MDBBtn
            outline
            color="light"
            floating
            className="m-1"
            target="blank"
            href="http://linkedin.com/in/abhisheksaraff/"
            role="button"
          >
            <MDBIcon fab icon="linkedin-in" />
          </MDBBtn>

          <MDBBtn
            outline
            color="light"
            floating
            className="m-1"
            target="blank"
            href="https://github.com/abhisheksaraff/memory-card"
            role="button"
          >
            <MDBIcon fab icon="github" />
          </MDBBtn>
        </section>
      </MDBContainer>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2025 Copyright {" "}
        <a target="blank" className="text-white" href="https://www.theodinproject.com/">
          The Odin Project
        </a>
      </div>
    </MDBFooter>
  );
};

export default Footer;
