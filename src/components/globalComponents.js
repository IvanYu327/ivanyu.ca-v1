import styled, { keyframes } from "styled-components";

const OnLoadAnimation = keyframes`
  0% {
    transform: translateX(-40px);
    opacity:0%;
  }
  100% {
    transform: translateX(0);
    opacity:100%;
  }
`;

export const Section = styled.div`
  background: ${(props) => props.color};
  padding: 30px;
  min-width: 300px;
`;

export const Container = styled.div`
  background: ${(props) => props.color};
  max-width: 1040px;

  margin: auto;

  display: ${(props) => (props.flex ? "flex" : "")};
  flex-wrap: ${(props) => (props.flex ? "wrap" : "")};

  animation-name: ${(props) => (props.still ? "" : OnLoadAnimation)};
  animation-duration: ${(props) => (props.still ? "" : "1s")};
`;

export const Line = styled.div`
  margin-top: ${(props) => props.marginTop};
  border-bottom: 2px solid gray;
`;

Line.defaultProps = {
  marginTop: "0px",
};

export const Heading2 = styled.h2`
  -webkit-transition: 0.3s;
  -moz-transition: 0.3s;
  -o-transition: 0.3s;
  -ms-transition: 0.3s;
  transition: 0.3s;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export const Heading3 = styled.h3`
  -webkit-transition: 0.3s;
  -moz-transition: 0.3s;
  -o-transition: 0.3s;
  -ms-transition: 0.3s;
  transition: 0.3s;

  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

export const Heading1 = styled.h1`
  font-size: 50px;
  font-family: "Bespoke Bold";
  margin-top: 10px;
  margin-bottom: 0px;

  -webkit-transition: 0.3s;
  -moz-transition: 0.3s;
  -o-transition: 0.3s;
  -ms-transition: 0.3s;
  transition: 0.3s;

  @media (max-width: 768px) {
    font-size: 30px;
    margin-top: 5px;
  }
`;
