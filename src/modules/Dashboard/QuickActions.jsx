import { useState } from "react";
import Button from "@mui/material/Button";
import "./Dashboard.css";
import CommonModal from "../../components/CommonModal/CommonModal";

const QuickActions = () => {
  const [open, setOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("");

  const handleOpen = (title) => {
    setModalTitle(title);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="quick-actions">
      <h2>Quick Actions</h2>

      <div className="action-buttons">
        <Button
          variant="contained"
          onClick={() => handleOpen("Add Event")}
        >

          Add Event
        </Button>

        <Button
          variant="contained"
          onClick={() => handleOpen("Add Customer")}
        >
          Add Customer
        </Button>

        <Button
          variant="contained"
          onClick={() => handleOpen("Add Vendor")}
        >
          Add Vendor
        </Button>

        <Button
          variant="contained"
          onClick={() => handleOpen("Add Investor")}
        >
          Add Investor
        </Button>
        <CommonModal
          open={open}
          title={modalTitle}
          onClose={handleClose}
          onSave={() => console.log("Save")}
        >
          <p>Form content goes here</p>
        </CommonModal>
      </div>
    </div>
  );
};

export default QuickActions;