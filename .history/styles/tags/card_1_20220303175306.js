import styled from '@emotion/styled';

export const SubMenu = styled.div`
  font-size: 20px;
  font-weight: 300;
  margin-top: -30%;
  margin-left: -20px;
`;


export const Card = styled.div`
  height: 230px;
  &:hover {
    transform: scale(1.1);
  }
`;

export const Image = styled.img`
  border: 5px solid red;
  width: 200px;

`

export const Front = styled.div`
  // margin-top: 20%;
  margin-left: 10%;
  width: 390px;
  height: 220px;
  display: grid;
  grid-template-columns: 2% 96% 2%;
  grid-template-rows: 4% 92% 4%;
  position: relative;
  margin: 10px auto;
  overflow: hidden;
  box-shadow: 2px 5px 15px 0px #17161694;
  background-color: #122529;
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

export const Name = styled.h2`
  grid-column: 2 / span 2;
  grid-row: 1 / span 1;
  font-size: 1.2em;
  letter-spacing: 0.1rem;
  margin-top: 8px;
  font-size: 20px;
`;

export const Brand = styled.p`
  grid-column: 2 / span 2;
  grid-row: 1 / span 1;
  font-size: 1.2em;
  letter-spacing: 0.1rem;
  margin-top: 15%;
`;

export const Adress = styled.div`
  grid-column: 2 / span 2;
  grid-row: 3;
`;

export const Icon = styled.i`
  height: 200px;
`;

export const Text = styled.p`
  font-size: 1.2em;
  letter-spacing: 0.1rem;
`;

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

export const Back = styled.div`
  width: 390px;
  height: 220px;
  display: grid;
  grid-template-columns: 2% 96% 2%;
  grid-template-rows: 4% 92% 4%;
  position: relative;
  margin: 20px auto;
  overflow: hidden;
  box-shadow: 2px 5px 15px 0px #17161694;
  background-color: #122529;
`;

export const NameTag = styled.div`
  grid-column: 1 / span 4;
  grid-row: 2 / span 1;
  align-self: center;
  z-index: 2;
  width: 100%;
  height: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.363);
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.288);
  font-size: 0.6rem; /*12px;*/
  letter-spacing: 0.1rem;
  text-align: center;
`;

export const TextLg = styled.h1`
  margin: 2px;
  font-weight: 200px;
  font-size: 30px;
  font-family: 'Heebo', sans-serif;
`;

export const TextSm = styled.p`
  margin: 2px;
  font-weight: 100px;
  font-size: 15px;
  font-family: 'Heebo', sans-serif;
`;

export const CardOneButton = styled.button`
  padding: 10px;
  font-size: 15px;
  border-radius: 100px;
  color: white;
  border:0px;
  font-weight: bold;
  margin: 10px;
  margin-left: 30%;
  padding: 1em 3em;
  background-size: 300% 300%;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  background-color: #f50057;
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
	}
`;


export const Status = styled.div`
  background-color: #d4d4d4;
  border-radius: 0.5rem;
  padding: 0.4rem 1rem;
  margin-right: 0.5rem;
  font-size: 1rem;
  font-weight: 10;
  color: black;
`;
