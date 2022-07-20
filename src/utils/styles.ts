import styled from 'styled-components';

export const TitleHeader = styled.h1`
  text-align: center;
  margin-bottom: 32px;
`;

export const Container = styled.div`
  max-width: 720px;
  margin: auto;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 640px) {
    height: auto;
  }
`;

export const CardsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 32px;
  @media (max-width: 640px) {
    flex-direction: column;
  }
`;

interface BackgroundProps {
  active: any;
}

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 150px;
  padding: 16px;
  border-radius: 25px;
  color: rgba(0, 0, 0, 0.87);
  box-shadow: ${(props: BackgroundProps) =>
    props.active ? '0px 0px 10px #bbbbbb' : '0px 0px 10px #dbd6d6'};
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 1ms;
  background-color: ${(props: BackgroundProps) =>
    props.active ? 'rgb(202 241 255)' : 'white'};
  cursor: pointer;
  @media (max-width: 640px) {
    width: 95%;
    &:nth-child(2) {
      margin-top: 20px;
    }
  }
`;

export const CardTitle = styled.h4`
  margin: 0;
  padding-bottom: 16px;
`;

export const TransactionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background-color: rgb(225, 225, 225);
  margin: 16px 0;
  border-radius: 5px;
`;

export const TransactionsTypography = styled.p`
  font-size: 16px;
  margin: 0;
  padding: 32px;
`;

export const Typography = styled.p`
  font-size: 16px;
  margin: 0;
`;

export const LoadingContainer = styled.div`
  text-align: center;
`;

export const ErrorMessage = styled.h2`
  text-align: center;
`;
