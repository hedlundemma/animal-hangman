import styled from 'styled-components';

const Head = styled.div`
  border-radius: 100%;
  width: 35px;
  height: 35px;
  background-color: yellow;
  position: absolute;
  left: 160px;
  top: 50px;
`;

const Body = styled.div`
  width: 8px;
  height: 80px;
  background-color: yellow;
  position: absolute;
  top: 880px;
  left: 175px;
`;

const LeftLeg = styled.div`
  width: 8px;
  height: 60px;
  background-color: yellow;
  position: absolute;
  top: 950px;
  left: 160px;
  rotate: 30deg;
`;

const RightLeg = styled.div`
  width: 8px;
  height: 60px;
  background-color: yellow;
  position: absolute;
  top: 950px;
  left: 190px;
  rotate: 150deg;
`;

const LeftArm = styled.div`
  width: 8px;
  height: 50px;
  background-color: yellow;
  position: absolute;
  top: 880px;
  left: 160px;
  rotate: 40deg;
`;

const RightArm = styled.div`
  width: 8px;
  height: 50px;
  background-color: yellow;
  position: absolute;
  top: 880px;
  left: 190px;
  rotate: 140deg;
`;
const StyledContainer = styled.section`
  position: relative;
`;
const StyledSvg = styled.svg`
  stroke: white;
  border: black;
  margin-top: 3rem;
`;
const StyledLine = styled.line`
  stroke-width: 8px;
`;

const Podium = ({ incorrectGuessesArray }) => {
  const bodyParts = [Head, Body, LeftArm, RightArm, LeftLeg, RightLeg];
  const slicedBodyParts = bodyParts.slice(0, incorrectGuessesArray.length);
  console.log(slicedBodyParts);
  return (
    <StyledContainer>
      <StyledSvg height="250" width="200">
        <StyledLine x1="60" y1="5" x2="180" y2="5" />
        <StyledLine x1="180" y1="0" x2="180" y2="50" />
        <StyledLine x1="60" y1="0" x2="60" y2="230" />
        <StyledLine x1="0" y1="230" x2="130" y2="230" />
        <Head></Head>
        <Body></Body>
      </StyledSvg>
      {slicedBodyParts.map((BodyPartComponent, index) => (
        <BodyPartComponent key={index} />
      ))}
    </StyledContainer>
  );
};

export default Podium;
