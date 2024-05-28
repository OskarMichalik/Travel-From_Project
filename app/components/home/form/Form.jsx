"use client";
import classes from "./Form.module.css";
import FormHeader from "./form-header/FormHeader";
import InputText from "./input-text/InputText";
import InputDate from "./input-date/InputDate";
import InputPersonel from "./input-personel/InputPersonel";
import SubmitButton from "./submit-button/SubmitButton";
import { useDispatch, useSelector } from "react-redux";
import { getCities, getPopularFlights } from "@/store/actions";
import { useEffect } from "react";

export default function Form() {
  const dispatch = useDispatch();
  const cities = useSelector((state) => state.flights.cities);

  useEffect(() => {
    if (!cities.length > 0) {
      dispatch(getCities());
      dispatch(getPopularFlights());
      console.log("Fetching...");
    }
  }, [dispatch, cities]);

  return (
    <div className={classes.banner}>
      <div className={classes.bannerContent}>
        <FormHeader />
        <div className={classes.flightForm}>
          <InputPersonel />
          <div className={classes.pathDateInfo}>
            <InputText from />
            <InputText />
            <InputDate departure />
            <InputDate />
          </div>
          <SubmitButton />
        </div>
      </div>
    </div>
  );
}
