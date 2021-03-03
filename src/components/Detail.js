import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { API } from "../constants/api";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Spinner from "react-bootstrap/Spinner";
import Cards from "./Cards";

function Detail() {
  const [item, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  let history = useHistory();

  const { id } = useParams();

  if (!id) {
    history.push("/");
  }
  const url = API + "/" + id;
  useEffect(() => {
    const fetchCards = async () => {
      try {
        const data = await axios.get(url);
        console.log(data);
        if (data.status === 200) {
          setItems(data.data.card);
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
  }, [url]);

  if (loading) {
    return (
      <Container>
        <Spinner className="spinner" animation="grow" />
      </Container>
    );
  }

  if (error) {
    return <div>ERROR: An error occured</div>;
  }

  return (
    <>
      <h1>Detail about "{item.name}"</h1>
      <Cards
        key={item.id}
        name={item.name}
        rarity={item.rarity}
        imageUrl={item.imageUrl}
        text={item.text}
        id={item.id}
      />
    </>
  );
}

export default Detail;
