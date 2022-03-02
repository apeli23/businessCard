import styled from '@emotion/styled';

export const Top = styled.div`
  width: 100%;
  height: 60px;
  background-color: #fff;
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  z-index: 999;
  box-shadow: 2px 5px 15px 0px #17161694;
  font-family: 'Josefin Sans', sans-serif;
`;

export const TopLeft = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TopRight = styled.div`
  flex: 3;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TopCenter = styled.div`
  flex: 5;
`;
 
export const TopText = styled.li`
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 0;
  list-style: none;
  margin-right: 20px;
  font-size: 21px;
  font-weight: 300;
  cursor: pointer;
  &: hover;
`;

export const TopImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 5px;
  cursor: pointer;
`;

export const Cloudinary = styled.img`
  width: 120px;
  height: 29px;
  margin-right: 10px;
  margin-left: 15px;
`;

export const TopIcon = styled.i`
  font-size: 20px;
  margin-right: 10px;
  color: #444;
  cursor: pointer;
`;
