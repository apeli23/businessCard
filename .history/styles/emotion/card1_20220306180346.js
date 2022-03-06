import dtyled from "@emotion/styled";


export const Front = styled.div`
  box-shadow: 2px 5px 15px 0px #17161694;
  margin-top: 10%;
  height: 220px;
  width: 390px;
`;

export const InfoGrid = styled.div`
  grid-column: 2/3;
  grid-row: 2/3;
  z-index: 2;
  width: 100%;
  height: 100%;
  background:  rgba(255, 255, 255, 0.363);
  box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.432);
  border-radius: 6px;
  font-size: 0.7rem; /*12px;*/
  display: grid;
  grid-template-columns: 15px repeat(3, 1fr) 15px;
  grid-template-rows: repeat(3, 1fr);
  line-height: 1px;
  color: #FFF;
`; 
 
export const Name = styled.h2`
  grid-column: 1 / span 2;
  grid-row: 1 / span 1;
  font-size: 1.2em;
  letter-spacing: 0.1rem;
  margin-top: 15px;
  font-size: 20px;
  background: transparent;
`;


export const Brand = styled.p`
  grid-column: 2 / span 2;
  grid-row: 1 / span 1;
  font-size: 1.2em;
  letter-spacing: 0.1rem;
  margin-top: 15%;
  margin-left: -28%;
  background: transparent;
`;

export const Address = styled.div`
  grid-column: 1 / span 2;
  grid-row: 4;
  margin-left: -35%;
  background: transparent;
`;


export const PhoneNumber = styled.div`
  grid-column: 3 / span 2;
  grid-row: 3;
  text-align: end;
  background: transparent;
`;

export const Email = styled.div`
  grid-column: 3 / span 2;
  grid-row: 4;
  text-align: end;
  background: transparent;
`;

export const CardText = styled.p`
  font-size: 1.2em;
  letter-spacing: 0.1rem;
`;
