import { Link } from "react-router-dom";
import OpenModalButton from "../OpenModalButton";
import DeleteSpotModal from "../DeleteSpotModal";
import "../SpotsList/SpotCard.css";

const UserSpotCard = ({ spot }) => {
  return (
    <div id="spotcard-wrapper">
      <Link to={`/spots/${spot.id}`} style={{ color: "black" }}>
        <img src={spot.previewImage} alt={spot.name} />
        <div id="line-1">
          <span style={{ fontWeight: "bold" }}>
            {spot.city}, {spot.state}
          </span>
          <span>
            <i className="fa-solid fa-star"></i>
            {+spot.avgRating > 0 ? `  ${spot.avgRating}` : " New"}
          </span>
        </div>
        <div>
          <span style={{ fontWeight: "bold" }}>${spot.price.toFixed(2)}</span>{" "}
          night
        </div>
      </Link>
      <div id="spotcard__buttons">
        <Link to={`/spots/${spot.id}/edit`}>
          <button>Update</button>
        </Link>
        {/* TODO: Open Delete Spot Modal on click */}
        {/* <button onClick={handleDelete}>Delete</button> */}
        <OpenModalButton
          modalComponent={<DeleteSpotModal spot={spot} />}
          buttonText="Delete"
        />
      </div>
    </div>
  );
};

export default UserSpotCard;