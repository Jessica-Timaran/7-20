import React from 'react';
import styled from 'styled-components';


const Button = ({ onClick }) => {
  return (
    <StyledWrapper>
      <button className="button" onClick={onClick}>
        <span className="plus">+</span>
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .button {
    width: 50px;
    height: 50px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgb(124, 4, 194);
    border-radius: 50%;
    cursor: pointer;
    transition-duration: 0.3s;
    box-shadow: 2px 2px 10px rgb(159, 33, 233);
    border: none;
  }

  .plus {
    width: 50px;
    height: 56px;
    color: white;
    font-size: 32px;
    font-weight: bold;
  }

  .button:hover {
    background-color: rgb(56, 56, 56);
  }

  .button:active {
    transform: scale(0.8);
  }
`;

export default Button;
