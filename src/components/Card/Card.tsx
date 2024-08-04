import Skeleton from "react-loading-skeleton";
import "./card.css";

interface CardProps {
  isLoading?: boolean;
  title: string;
  description: string;
  buttonLabel: string;
}

const Card = ({ isLoading, title, description, buttonLabel }: CardProps) => {
  if (isLoading) {
    return (
        <div className="card" style={{ width: "18rem" }}>
          <Skeleton height={180} width="100%" className="card-img-top" />
          <div className="card-body">
            <Skeleton height={30} width="80%" />
            <Skeleton count={3} />
            <Skeleton height={40} width="40%" />
          </div>
        </div>
    );
  }

  return (
    <div className="card">
      <svg
        className="bd-placeholder-img card-img-top"
        width="100%"
        height="180"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Placeholder: Image cap"
        preserveAspectRatio="xMidYMid slice"
        focusable="false"
      >
        <rect width="100%" height="100%" fill="#868e96"></rect>
        <text x="41%" y="50%" fill="#dee2e6" dy=".3em">
          Image
        </text>
      </svg>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <a href="#" className="btn btn-primary">
          {buttonLabel}
        </a>
      </div>
    </div>
  );
};

export default Card;
