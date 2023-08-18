import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faCalendar,
  faCar,
  faPerson,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { H1, P1 } from "../../assets/Typography";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";

const HeaderMain = styled.div`
  background-color: #003580;
  color: white;
  display: flex;
  justify-content: center;
  position: relative;
`;

const HeaderContainer = styled.div`
  width: 100%;
  max-width: 1024px;
  margin: 20px 0px 100px 0px;
`;

const HeaderList = styled.div`
  display: flex;
  gap: 40px;
  margin-bottom: 50px;
`;

const HeaderListItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  border: ${({ active }) => (active ? "1px solid white" : "0px")};
  padding: ${({ active }) => (active ? "10px" : "0px")};
  border-radius: ${({ active }) => (active ? "20px" : "0px")};
`;

const Button = styled.button`
  background-color: #0071c2;
  color: white;
  font-weight: 500;
  border: none;
  padding: 10px;
  cursor: pointer;
`;

const HeaderSearch = styled.div`
  height: 30px;
  background-color: white;
  border: 3px solid #febb02;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 10px 0px;
  border-radius: 5px;
  position: absolute;
  bottom: -25px;
  width: 100%;
  max-width: 1024px;
`;

const HeaderSearchItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Input = styled.input`
  border: none;
  outline: none;
`;

const HeaderSearchIcon = styled.p`
  color: lightgray;
`;

const DateBox = styled.div`
  position: absolute;
  top: 50px;
  z-index: 2;
`;

const HeaderSearchText = styled.p`
  color: lightgray;
  cursor: pointer;
`;

function Header() {
  const [openDate, setOpenDate] = useState(false);

  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  return (
    <HeaderMain>
      <HeaderContainer>
        <HeaderList>
          <HeaderListItem active={true}>
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
          </HeaderListItem>
          <HeaderListItem>
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </HeaderListItem>
          <HeaderListItem>
            <FontAwesomeIcon icon={faCar} />
            <span>Car Rentals</span>
          </HeaderListItem>
          <HeaderListItem>
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport Taxi</span>
          </HeaderListItem>
        </HeaderList>
        <H1>A lifetime of discounts? It's Genius.</H1>
        <P1>
          Get rewarded for your travels – unlock instant savings of 10% or more
          with a free Lamabooking account
        </P1>
        <Button>Sign in / Register</Button>
        <HeaderSearch>
          <HeaderSearchItem>
            <HeaderSearchIcon>
              <FontAwesomeIcon icon={faBed} />
            </HeaderSearchIcon>
            <Input placeholder="Where are you going?" type="text" />
          </HeaderSearchItem>
          <HeaderSearchItem>
            <HeaderSearchIcon>
              <FontAwesomeIcon icon={faCalendar} />
            </HeaderSearchIcon>
            <span>
              <HeaderSearchText
                onClick={() => setOpenDate(!openDate)}
              >{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                date[0].endDate,
                "MM/dd/yyyy"
              )}`}</HeaderSearchText>
            </span>
            {openDate && (
              <DateBox>
                <DateRange
                  editableDateInputs={true}
                  onChange={(item) => setDate([item.selection])}
                  moveRangeOnFirstSelection={false}
                  ranges={date}
                  className="date"
                  minDate={new Date()}
                />
              </DateBox>
            )}
          </HeaderSearchItem>
          <HeaderSearchItem>
            <HeaderSearchIcon>
              <FontAwesomeIcon icon={faPerson} />
            </HeaderSearchIcon>
            <span>
              <HeaderSearchText>
                2 adults 2 children and 1 room
              </HeaderSearchText>
            </span>
          </HeaderSearchItem>
          <HeaderSearchItem>
            <Button>Search</Button>
          </HeaderSearchItem>
        </HeaderSearch>
      </HeaderContainer>
    </HeaderMain>
  );
}

export default Header;
