import styled from 'styled-components';

export const Container = styled.div`
  background-color: rgb(225, 44, 55);
  text-align: center;
  display: flex;
  justify-content: center;
  padding: 3%;
  flex-direction: column;

`;

export const ContainerHeader = styled.div`
  background: url(//themes.muffingroup.com/be/party3/wp-content/uploads/2020/03/party3-slider-bg.jpg) center center / cover no-repeat;
  width: 1530px;
  height: 100%;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const ContainerText = styled.div`
  padding: 6%;
  display: flex;
  justify-content: center;
`;

export const Title = styled.h1`
  font-size: 20px;
  color: rgb(225, 44, 55)
`;

export const Subtitle = styled.h3`
  margin-top: -15px;
  font-size: 14px;
`;
export const DataTitle = styled.h1`
  font-size: 48px;
  color: rgb(225, 44, 55);
`;


export const DataSubTitle = styled.h3`
  margin-top: -26px;
  font-size: 48px;
`;

export const ContainerDescription = styled.div`
  width: 45%; 
`;

export const Button = styled.button`
  margin-top: 9%;
  font-size: 12px;
  border-radius: 3px;
  background-color: rgb(28, 9, 5);
  color: rgb(255, 255, 255);
  border-radius: 25px;
  padding: 0px 24px;
  line-height: 34px;
  border-style: none;
  outline: none;
  margin-left: 0px;
  transition: 1s;
  &:hover {
    background-color:  rgb(225, 44, 55);
    margin-left: -10px;
    transition: 1s;
  }

`;


export const ContainerScroll = styled.div`
  padding: 2%;
`;

export const ButtonSecond = styled.img`
  width: 24;
  height: 34;
`;

export const TextButtonSecond = styled.h6`
  color: #fff;
  margin: 1%;  
`;