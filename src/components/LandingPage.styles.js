import styled from 'styled-components'
import BgImage from '../assets/images/Nanterre.jpg';
   

export const Wrapper = styled.div`
  display:grid;
  place-items:center;
  height:100vh;
  background-image: url(${BgImage});
  background-size: cover;
`


