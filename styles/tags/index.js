import styled from '@emotion/styled';

export const Container = styled.div`
  margin-left: 10%;
  margin-top: 6%;
  display: flex;
  flex-wrap: wrap;
`;
export const Title = styled.h2`
  position: absolute;
  top: 6%;
  font-size: 40px;
  align-items: center;
  font-family: 'Lora', serif;
  color: #444;
  margin-left: 35%;
`;
export const Form = styled.div`
    max-width: 100%
    margin: 0 auto;
`;

export const customStyles = {
  content: {
    top: '50%',
    left: '75%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
