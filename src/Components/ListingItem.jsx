import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as DeleteIcon } from "../assets/svg/deleteIcon.svg";
import betIcon from "../assets/svg/bedIcon.svg";
import bathIcon from "../assets/svg/bathtubIcon.svg";

function ListingItem({ listing, id }) {
  console.log(listing, "listing");
  return (
    <li className="categoryListings">
      <Link
        to={`/category/${listing.type}/${id}`}
        className="categoryListingLink"
      >
        <img
          src={listing}
          alt={listing.data.imageUrls}
          className="categoryLinstongImg"
        />
      </Link>
    </li>
  );
}

export default ListingItem;
