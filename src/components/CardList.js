import { useState, useEffect } from "react";
import { API } from "../constants/api";
import axios from "axios";
import Cards from "./Cards";
import Spinner from "react-bootstrap/Spinner";
import Container from "react-bootstrap/Container";

function CardList() {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await axios.get(API);
        console.log(response);
        if (response.status === 200) {
          setCards(response.data.cards);
        } else {
          setError("An error occured");
        }
      } catch (error) {
        setError(error.toString());
      } finally {
        setLoading(false);
      }
    };
    fetchCards();
  }, []);

  if (loading) {
    return (
      <Container>
        <Spinner className='spinner'animation="grow" />
      </Container>
    );
  }

  if (error) {
    return <div>ERROR: An error occured</div>;
  }

  return (
    <>
      {cards.map((card) => {
        return (
          <Cards
            key={card.id}
            name={card.name}
            rarity={card.rarity}
            imageUrl={card.imageUrl}
            text={card.text}
            id={card.id}
          />
        );
      })}
    </>
  );
}

export default CardList;
