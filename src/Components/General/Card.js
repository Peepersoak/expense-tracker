import "./Card.css";

const Card = (props) => {
  return (
    <div className={"card-template " + props.className}>{props.children}</div>
  );
};

export default Card;
