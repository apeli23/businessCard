import styled from '@emotion/styled';

export const Container = styled.div`
  margin-left: 10%;
  margin-top: 9%;
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
    max-width: 100%;
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

export const Button = styled.button`
  padding: 10px;
  font-size: 15px;
  border-radius: 0.7rem;
  color: white;
  border:0px;
  font-weight: bold;
  margin: 10px;
  padding: 1em 3em;
  background-size: 300% 300%;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  background-color: #f50057;
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
