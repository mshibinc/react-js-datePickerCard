import React from "react";
import styled from "styled-components";
import { rgba } from "polished";
import DatePicker from "react-datepicker";
// import "react-datepicker.css";

const Wraper = styled.div`
  position: relative;
  padding: 1rem 0.5rem;
  border-radius: 3rem;
  background: #6d44bd;
`;
const Card = styled.div`
  padding: 0.5rem;
  border-radius: 3rem;
  background: #471a8a;
  &.react-datepicker {
    border: 0;
    /* font-family:'' */
    background: transparent;
    color: ${rgba(255, 255, 255, 0.85)};
  }
`;

const DatePickerCard = () => {
  return (
    <Card>
      <Wraper>
        <DatePicker inline />
      </Wraper>
    </Card>
  );
};
export default DatePickerCard;
