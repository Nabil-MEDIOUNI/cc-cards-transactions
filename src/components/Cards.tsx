import { useDispatch, useSelector } from 'react-redux';

import { getTransactionsAction } from '../redux/actions/transactions';

import { CardInterface, CardsProps } from '../interfaces';

import {
  CardsContainer,
  Card,
  CardTitle,
  Typography,
  LoadingContainer,
  ErrorMessage,
} from '../utils/styles';

import { SyncOutlined } from '@ant-design/icons';

function Cards(props: CardsProps) {
  const dispatch: any = useDispatch();
  const { dataCards, loadingCards, errorCards } = useSelector(
    (state: any) => state.cardsReducer,
  );

  const onCardSelect = (id: string) => {
    dispatch(getTransactionsAction(id));
    props.setSelectedCard(id);
  };

  if (loadingCards) {
    return (
      <LoadingContainer>
        <SyncOutlined spin />
      </LoadingContainer>
    );
  }

  if (errorCards) {
    return <ErrorMessage>Error Occured!</ErrorMessage>;
  }

  return (
    <CardsContainer>
      {dataCards.map((card: CardInterface) => (
        <Card
          key={card.id}
          onClick={() => onCardSelect(card.id)}
          active={props.selectedCard === card.id}
        >
          <CardTitle>{card.description}</CardTitle>
          <Typography>{card.id}</Typography>
        </Card>
      ))}
    </CardsContainer>
  );
}

export default Cards;
