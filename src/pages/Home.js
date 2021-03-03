import CardList from "../components/CardList";
import Heading from "../components/Heading";

const Home = () => {
  return (
    <>
      <Heading title="Magic: The gathering Developers" />
      <div className="containerPage">
        <CardList />
      </div>
    </>
  );
};

export default Home;
