import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleModal } from "./redux/schemaSlice";
import ModalComponent from "./components/ModalComponent";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import "./App.css"; 

const App = () => {
  const dispatch = useDispatch();
  const { modalOpen } = useSelector((state) => state.schemas);

  return (
    <div className="app">
      <div className="middle-section">
        <button
          className="save-segment-btn"
          onClick={() => dispatch(toggleModal())}
        >
          Save segment
        </button>
      </div>
      <Modal
        open={modalOpen}
        onClose={() => dispatch(toggleModal())}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        className="modal"
      >
        <Fade in={modalOpen}>
          <ModalComponent />
        </Fade>
      </Modal>
    </div>
  );
};

export default App;
