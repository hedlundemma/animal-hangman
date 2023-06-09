import styled from 'styled-components';

const Head = styled.div`
  border-radius: 100%;
  width: 35px;
  height: 35px;
  background-color: yellow;
  position: absolute;
  left: 162px;
  top: 65px;
`

const Body = styled.div`
  width: 8px;
  height: 80px;
  background-color: yellow;
  position: absolute;
  top: 99px;
  left: 175px;
`

const LeftLeg = styled.div`
  width: 8px;
  height: 60px;
  background-color: yellow;
  position: absolute;
  top: 170px;
  left: 160px;
  rotate: 30deg;
`

const RightLeg = styled.div`
  width: 8px;
  height: 60px;
  background-color: yellow;
  position: absolute;
  top: 170px;
  left: 190px;
  rotate: 150deg;
`

const LeftArm = styled.div`
  width: 8px;
  height: 50px;
  background-color: yellow;
  position: absolute;
  top: 100px;
  left: 160px;
  rotate: 40deg;
`

const RightArm = styled.div`
  width: 8px;
  height: 50px;
  background-color: yellow;
  position: absolute;
  top: 100px;
  left: 190px;
  rotate: 140deg;
`

const leftEye = styled.div `
background-color: black;
width: 10px;
height: 10px;
border-radius: 100%;
top: 75px; 
left:167px;
position: absolute;
`
const rightEye = styled.div `
background-color: black;
width: 10px;
height: 10px;
border-radius: 100%;
top: 75px; 
left:183px;
position: absolute;
`

const Mouth = styled.div `
position: absolute;
border-radius: 50%/100px 100px 0 0;
background-color: black;
width: 12px;
height: 2px;
top: 90px; 
left:173px;
`



const StyledContainer = styled.section`
  position: relative;
`
const StyledSvg = styled.svg`
stroke: white;
  border: black;
  margin-top: 1rem;
`
const StyledLine = styled.line`
  stroke-width: 8px;
`;

const Podium = ({ incorrectGuessesArray }) => {
  const bodyParts = [Head, Body, LeftArm, RightArm, LeftLeg, RightLeg, leftEye, rightEye, Mouth];
  const slicedBodyParts = bodyParts.slice(0, incorrectGuessesArray.length);
  // console.log(slicedBodyParts);
  return (
    <StyledContainer>
      <StyledSvg height="250" width="200">
        <StyledLine x1="60" y1="5" x2="180" y2="5" />
        <StyledLine x1="180" y1="0" x2="180" y2="50" />
        <StyledLine x1="60" y1="0" x2="60" y2="230" />
        <StyledLine x1="0" y1="230" x2="130" y2="230" />
       
      </StyledSvg>
      {slicedBodyParts.map((BodyPart, index) => (
        <BodyPart key={index} />
      ))}
      
    </StyledContainer>
  );
};

export default Podium;
