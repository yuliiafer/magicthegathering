import "../sass/partials/_card.scss";
import { Link } from "react-router-dom";

const Cards = (props) => {
  const { id, name, imageUrl, rarity, text } = props;

  const colorClass = () => {
    switch (rarity) {
      case "Common":
        return "common";
      case "Uncommon":
        return "uncommon";
      case "Rare":
        return "rare";

      default:
        return "";
    }
  };
  colorClass();
  return (
    <div className="containerCard">
      <Link to={`detail/${id}`}>
        <img className="containerImg" src={imageUrl} alt={name} />
        <h3>{name}</h3>
        <p className={colorClass()}>{rarity}</p>
        <p className="containerText">{text}</p>{" "}
      </Link>
    </div>
  );
};

export default Cards;
