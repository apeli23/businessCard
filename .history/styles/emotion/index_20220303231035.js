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
    width: 100%;
`;
export const Templates = styled.div`
    display: flex;
    flex-wrap: wrap;
    // border: 5px solid;
    justify-content: space-between;
`;
export const Card = styled.div`
    height: 220px;
    border: 5px solid;
    width: 390px;
    display: grid;
    grid-template-columns: 2% 96% 2%;
    grid-template-rows: 4% 92% 4%;
    position: relative;
    // margin: 10px auto;
    // overflow: hidden;
    // box-shadow: 2px 5px 15px 0px #17161694;
    // background-color: #122529;
`;