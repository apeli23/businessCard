import styled from "@emotion/styled";


export const TitleContainer = styled.div`
    width: 100%;
    height: 100%;
    text-align: center;
    margin-top: 5%;
`;

export const Title = styled.h2`
    font-size: 30px;
    font-weight: 500;
`;

export const Container = styled.div`
    height: 100%;
    margin: 10px;
    padding: 10px;
    font-weight: 10px;
`;

export const Text = styled.h3`
    margin-left: 15%;
    width: 100%;
`;
export const Templates = styled.div`
    display: flex;
    flex-wrap: wrap;
    // border: 5px solid;
    // justify-content: space-between;
    padding: 10px;
`;
export const Card_1 = styled.div`
    height: 220px;
    width: 390px;
    display: grid;
    grid-template-columns: 2% 96% 2%;
    grid-template-rows: 4% 92% 4%;
    position: relative;
    margin-left: 15%;
    overflow: hidden;
    box-shadow: 2px 5px 15px 0px #17161694;
    transition: smooth;
    background-color: #122529;
    &:hover {
        transform: scale(1.1);
      }
`;
export const ColorGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 150px);
  grid-template-rows: repeat(8, 50px);
  grid-gap: 8px;
  width: 150px;
  height: 400px;
  transform: rotate(-45deg);
`;

export const Black = styled.div`
  margin-left: 30%;
  background-color: #343536;
  grid-column: 2 / span 2;
  grid-row: 1 / span 3;
`;

export const Red1 = styled.div`
  background-color: #e45e4f;
  grid-row: 2 / span 5;
`;

export const Red2 = styled.div`
  background-color: #e45e4f;
  grid-column: 2 / span 2;
  grid-row: 4/7;
`;

export const Green = styled.div`
  background-color: #007e67;
  grid-column: 2/4;
  grid-row: 7/9;
`;

export const Card_2 = styled.div`
    font-family: 'Trebuchet MS', sans-serif;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    display: grid;
    width: 390px;
    height: 220px;
    margin-left: 30%;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: repeat(4, 1fr);
    &:hover {
      transform: scale(1.1);
    }
`;

export const Blue = styled.div`
  background-color: #4cc9c8;
  grid-column: 8 / span 5;
  grid-row: 1 / span 4;
`;

export const Yellow = styled.div`
  background-color: #f1ef1c;
  grid-column: 1 / span 7;
  grid-row: 1 / span 4;
`;

export const Pink = styled.div`
  background-color: #fa001a;
  -webkit-clip-path: polygon(0% 0%, 100% 0%, 0% 100%);
  clip-path: polygon(0% 0%, 100% 0%, 0% 100%);
  grid-row: 1 / span 3;
  grid-column: 1 / span 11;
  position: relative;
  z-index: 2;
`;

export const Dots = styled.div`
  background: radial-gradient(#fa001a 20%, transparent 19%),
    radial-gradient(#fa001a 20%, transparent 19%), transparent;
  background-size: 6px 6px;
  background-position: 0 0, 3px 3px;
  grid-column: 1 / span 12;
  grid-row: 3 / span 2;
  margin: 0 0 15px 20px;
  z-index: 1;
`;

export const Details = styled.div`
    display: flex;
    text-align: center;
    justify-content: center;
    
`
export const FormContainer = styled.div`
  position: relative;
  width: 350px;
  height: 100%;
  border-radius: 20px;
  padding: 40px;
  background: #ecf0f3;
  box-shadow: 14px 14px 20px #cbced1, -14px -14px 20px white;
`;
export const Inputs = styled.div`
  text-align: left;
  margin-top: 10px;
`;

export const Label = styled.h4`
  display: block;
  width: 100%;
  padding: 0;
  border: none;
  outline: none;
  box-sizing: border-box;
  margin-bottom: 4px;
  margin-top: 12px;
  font-family: 'Josefin Sans', sans-serif;
`;

export const Input = styled.input`
  display: block;
  width: 100%;
  padding: 0;
  border: none;
  outline: none;
  box-sizing: border-box;
  background: #ecf0f3;
  padding: 10px;
  padding-left: 20px;
  height: 45px;
  font-size: 14px;
  border-radius: 50px;
  box-shadow: inset 6px 6px 6px #cbced1, inset -6px -6px 6px white;
  &:placeholder {
    color: gray;
  }
`;


export const Button = styled.button`
  display: block;
  width: 100%;
  padding: 0;
  border: none;
  outline: none;
  box-sizing: border-box;
  margin-top: 20px;
  background: #1da1f2;
  height: 40px;
  border-radius: 20px;
  cursor: pointer;
  font-weight: 900;
  box-shadow: 6px 6px 6px #cbced1, -6px -6px 6px white;
  transition: 0.5s;
  &:hover {
    box-shadow: none;
  }
`;

export const FinalCardContainer = styled.div`
  width: 500px;
  height: 100%;
  padding: 10px;
  margin-left: 10%;
`

export const CardFront = styled.div`
  height: 220px;
  width: 390px;
  box-shadow: 2px 5px 15px 0px #17161694;
  margin-top: 10%;
`;

export const InfoGrid = styled.div`
  grid-column: 2/3;
  grid-row: 2/3;
  z-index: 2;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.363);
  box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.432);
  border-radius: 6px;
  font-size: 0.7rem; /*12px;*/
  display: grid;
  grid-template-columns: 15px repeat(3, 1fr) 15px;
  grid-template-rows: repeat(3, 1fr);
  line-height: 1px;
`;

export const CardBack = styled.div`
  height: 220px;
  width: 390px;
  box-shadow: 2px 5px 15px 0px #17161694;
  margin-top: 10%;
  display: flex;
  flex-wrap: wrap;
`;
export const NameTag = styled.div`
   margin-top: 0px;
   width: 100%;
   height: 40%;
   box-shadow: 2px 5px 15px 0px #17161694;
   margin-top: 17%;
   background-color: rgba(255, 255, 255, 0.363);
`;

export const Name = styled.h2`
  grid-column: 1 / span 2;
  grid-row: 1 / span 1;
  font-size: 1.2em;
  letter-spacing: 0.1rem;
  margin-top: 15px;
  font-size: 20px;
`;

export const Brand = styled.p`
  grid-column: 1 / span 2;
  grid-row: 1 / span 1;
  font-size: 1.2em;
  letter-spacing: 0.1rem;
  margin-top: 15%;
`;

export const Address = styled.div`
  grid-column: 2 / span 2;
  grid-row: 3;
`;

export const Icon = styled.i`
  height: 200px;
`;

// export const Text = styled.p`
//   font-size: 1.2em;
//   letter-spacing: 0.1rem;
// `;

export const PhoneNumber = styled.div`
  grid-column: 3 / span 2;
  grid-row: 3;
  text-align: end;
`;

export const Email = styled.div`
  grid-column: 3 / span 2;
  grid-row: 4;
  text-align: end;
`;
