import React from "react";
import styled from "styled-components";

const NavBarHeader = styled.div`
  height: 50px;
  background-color: #003580;
  display: flex;
  justify-content: center;
`;

const NavContainer = styled.div`
  width: 100%;
  max-width: 1920px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 20px;
`;

const Button = styled.button`
  margin-left: 20px;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  color: #003580;
`;

function Navbar() {
  return (
    <NavBarHeader>
      <NavContainer>
        <span>HotelBooking</span>
        <div>
          <Button>Register</Button>
          <Button>Login</Button>
        </div>
      </NavContainer>
    </NavBarHeader>
  );
}

export default Navbar;
