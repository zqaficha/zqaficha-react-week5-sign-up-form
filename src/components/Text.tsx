import styled from "styled-components"
import Globalstyded from '../Globalstyles.js'

export default function Text() {
  return (
      <>
      <Globalstyded/>

      <StyledText>
      <Title>Learn to code by watching others</Title>
      <Description>
        See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable.
      </Description>
      </StyledText>
      </>
  )
}

const StyledText = styled.div`
    margin: 88px 0 64px 0;
`

const Title = styled.h1`
  width: 327px;
  height: 80px;
  font-size: 28px;
  font-weight: bold;
  line-height: 1.29;
  letter-spacing: -0.29px;
  text-align: center;
  color: #fff;
    margin: auto;
  
    @media (min-width: 1500px){
    width: 525px;
    font-size: 50px;
    line-height: 1.1;
    color: #fff;
    margin-bottom: 50px;
}
`;

const Description  = styled.p`
  width: 327px;
  height: 130px;
  margin: 16px 0 0;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.63;
  text-align: center;
  color: #fff;
  margin-top: 11px;
  margin: auto;


    @media (min-width: 1500px) {
    width: 525px;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.63;
    color: #fff;
        
    }
`

