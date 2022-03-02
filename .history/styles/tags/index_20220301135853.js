import styled from '@emotion/styled';

export const Container = styled.div`
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap
  justify-content: space-between;
  border: 5px solid;
  // height: 100px;
  text-align: center;
`;
export const Title = styled.h2`
  position: absolute;
  font-size: 40px;
  align-items: center;
  font-family: 'Lora', serif;
  color: #444;
  margin-bottom: 10px;
  margin-left: 40%;
`;
export const Form = styled.div`
    max-width: 100%
    margin: 10%;
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

export const CardTwoButton = styled.button`
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
  margin-left:40%;
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
	}
`;

export const FormButton = styled.button`
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
  margin-left: 25%;
  transition: all .2s;
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

