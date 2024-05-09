import classes from "./InputTextModal.module.css";
import Modal from "../../Modal";
import ListCities from "./ListCities";
import ListCityBlocks from "../ListCityBlocks";

// Renders the modal

export default function InputTextModal({
  handleClose,
  handleInputChange,
  from,
  searchValue,
  listCitiesSetSearchValue,
  inputRef,
}) {
  return (
    <Modal onClose={handleClose}>
      <div className={classes.modal}>
        <div className={classes.input}>
          <div className={classes.spanText}>{from ? "From" : "To"}</div>
          <div className={classes.content}>
            <ListCityBlocks from={from} />
            <input
              placeholder="City, airport or place"
              maxLength="30"
              className={classes.inputActive}
              onChange={handleInputChange}
              value={searchValue}
              ref={inputRef}
            />
          </div>
        </div>
        <ListCities
          searchValue={searchValue}
          from={from}
          itemCityOnClose={handleClose}
          inputRef={inputRef}
          itemCitySetSearchValue={listCitiesSetSearchValue}
        />
      </div>
    </Modal>
  );
}