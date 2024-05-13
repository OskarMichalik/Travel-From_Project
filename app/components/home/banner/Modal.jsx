"use client";
import classes from "./Modal.module.css";
import { motion } from "framer-motion";

export default function Modal({
  children,
  onClose,
  modalDate,
  modalPassengers,
  searchTickets,
}) {
  return (
    <div>
      <div className={classes.backdrop} onClick={onClose} />
      <motion.dialog
        open
        className={
          searchTickets && modalDate
            ? classes.modalDateSearchTickets
            : searchTickets
            ? classes.modalSearchTickets
            : modalDate
            ? classes.modalDate
            : modalPassengers
            ? classes.modalPassengers
            : classes.modal
        }
        initial={{ scale: 0.1, opacity: 1 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.1, opacity: 0 }}
      >
        {children}
      </motion.dialog>
    </div>
  );
}