import classes from "./ItemCityBlock.module.css";
import { useDispatch } from "react-redux";
import { formInputActions } from "@/store/formInputSlice";

// renders single block with the name

export default function ItemCityBlock({ city, from }) {
  const dispatch = useDispatch();

  function handleRemoveFrom(event) {
    event.stopPropagation();
    dispatch(formInputActions.REMOVE_FROM_TRAVEL_INFO(city.id));
  }
  function handleRemoveTo(event) {
    event.stopPropagation();
    dispatch(formInputActions.REMOVE_TO_TRAVEL_INFO(city.id));
  }

  return (
    <div className={from ? classes.itemPlaceFrom : classes.itemPlaceTo}>
      <p>{city.name}</p>
      {from && (
        <div className={classes.deleteIcon} onClick={handleRemoveFrom}>
          <svg
            fill="#f9971e"
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="64px"
            height="64px"
            viewBox="0 0 45.402 45.402"
            xmlSpace="preserve"
            stroke="#f9971e"
            transform="rotate(45)"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <g>
                {" "}
                <path d="M41.267,18.557H26.832V4.134C26.832,1.851,24.99,0,22.707,0c-2.283,0-4.124,1.851-4.124,4.135v14.432H4.141 c-2.283,0-4.139,1.851-4.138,4.135c-0.001,1.141,0.46,2.187,1.207,2.934c0.748,0.749,1.78,1.222,2.92,1.222h14.453V41.27 c0,1.142,0.453,2.176,1.201,2.922c0.748,0.748,1.777,1.211,2.919,1.211c2.282,0,4.129-1.851,4.129-4.133V26.857h14.435 c2.283,0,4.134-1.867,4.133-4.15C45.399,20.425,43.548,18.557,41.267,18.557z"></path>{" "}
              </g>{" "}
            </g>
          </svg>
        </div>
      )}
      {!from && (
        <div className={classes.deleteIcon} onClick={handleRemoveTo}>
          <svg
            fill="#00a991"
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="64px"
            height="64px"
            viewBox="0 0 45.402 45.402"
            xmlSpace="preserve"
            stroke="#00a991"
            transform="rotate(45)"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <g>
                {" "}
                <path d="M41.267,18.557H26.832V4.134C26.832,1.851,24.99,0,22.707,0c-2.283,0-4.124,1.851-4.124,4.135v14.432H4.141 c-2.283,0-4.139,1.851-4.138,4.135c-0.001,1.141,0.46,2.187,1.207,2.934c0.748,0.749,1.78,1.222,2.92,1.222h14.453V41.27 c0,1.142,0.453,2.176,1.201,2.922c0.748,0.748,1.777,1.211,2.919,1.211c2.282,0,4.129-1.851,4.129-4.133V26.857h14.435 c2.283,0,4.134-1.867,4.133-4.15C45.399,20.425,43.548,18.557,41.267,18.557z"></path>{" "}
              </g>{" "}
            </g>
          </svg>
        </div>
      )}
    </div>
  );
}
