import styled from '@emotion/styled';

export const FormContainer = styled.div`
  position: relative;
  width: 350px;
  height: 100%;
  border-radius: 20px;
  padding: 40px;
  background: #ecf0f3;
  box-shadow: 14px 14px 20px #cbced1, -14px -14px 20px white;
`;

export const LogoContainer = styled.div`
  width: 130px;
  height: 130px;
  margin-left: 30%;
  text-align: center;
  border-radius: 50%;
  box-sizing: border-box;
  box-shadow: 7px 7px 10px #cbced1, -7px -7px 10px white;
  position: relative;
`;

export const Logo = styled.img`
  border-radius: 50%;
`;

export const Inputs = styled.div`
  text-align: left;
  margin-top: 10px;
`;

export const Label = styled.label`
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
