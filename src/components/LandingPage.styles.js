import styled from "styled-components";
import BgImage from "../assets/images/Nanterre.jpg";


export const Container = styled.div`
  background-image: url(${BgImage});
  background-size: cover;
  height: 100vh;
`

export const LandingWrapper = styled.div`
  text-align:center;
  padding-top: 30vh;
  display:grid;
  grid-gap:30px;
  `;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const CityLink = styled.a`
  color: black;
`;


export const ExamplesWrapper = styled.div`
  color: black;
  font-size: 20px;
`;

export const Hero = styled.div`
  font-size: 30px;
  text-shadow:rgba(0, 0, 0, 0.9) 0px 0px 2px;
`;

