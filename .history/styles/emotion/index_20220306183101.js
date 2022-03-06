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
    width: 60%;
    justify-content: space-between;
    padding: 5px;
    margin-left: 15%;
    // border: 5px solid;
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
  color: #FFF;
`
export const Card = styled.div`
  height: 100%;
  width: 390px;
`;

 


 