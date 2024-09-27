import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSegmentName, addSchema, removeSchema, toggleModal, resetSchemas,removeAllSchema } from "../redux/schemaSlice";
import CloseIcon from "@material-ui/icons/Close";
import "../App.css";

const ModalComponent = () => {
  const dispatch = useDispatch();
  const { segmentName, selectedSchemas } = useSelector((state) => state.schemas);
  const [selectedSchemaToAdd, setSelectedSchemaToAdd] = useState("");
  const [submitting, setSubmitting] = useState(false); 

  const schemaOptions = [
    { label: "First Name", value: "first_name" },
    { label: "Last Name", value: "last_name" },
    { label: "Gender", value: "gender" },
    { label: "Age", value: "age" },
    { label: "Account Name", value: "account_name" },
    { label: "City", value: "city" },
    { label: "State", value: "state" },
  ];

  const handleAddSchema = () => {
    if (selectedSchemaToAdd && !selectedSchemas.includes(selectedSchemaToAdd)) {
      dispatch(addSchema(selectedSchemaToAdd));
      setSelectedSchemaToAdd("");
    }
  };

  const handleRemoveSchema = (schema) => {
    dispatch(removeSchema(schema));
  };

  const handleSaveSegment = () => {
    setSubmitting(true); 
    const data = {
      segment_name: segmentName,
      schema: selectedSchemas.map(schema => ({
        [schema]: schemaOptions.find(option => option.value === schema)?.label || schema,
      })),
    };
    console.log("Data to server :",data);
    
    fetch("https://webhook.site", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.ok) {
          console.log("Segment saved successfully");
          dispatch(resetSchemas()); 
        } else {
          console.error("Failed to save the segment");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      })
      .finally(() => {
        setSubmitting(false); 
        dispatch(removeAllSchema());
        dispatch(setSegmentName(""));
        setSelectedSchemaToAdd(""); 
        dispatch(toggleModal());
      });
  };

  const handleCloseModal = () => {
    dispatch(toggleModal());
    dispatch(resetSchemas());
  };

  return (
    <div className="modal-content">
      <div className="modal-header">
        <h2 className="modal-title">Saving Segment</h2>
        <CloseIcon className="close-icon" onClick={handleCloseModal} />
      </div>
      <div className="modal-body">
        <label className="modal-label" htmlFor="segmentName">Enter the Name of the Segment</label>
        <input
          className="modal-input"
          id="segmentName"
          type="text"
          placeholder="Name of the segment"
          value={segmentName}
          onChange={(e) => dispatch(setSegmentName(e.target.value))}
        />
        <p className="modal-description">To save your segment, you need to add the schemas to build the query.</p>
        <div className="selected-schemas">
          {selectedSchemas.length === 0 ? (
            <p className="no-schema">No schemas added yet!</p>
          ) : (
            selectedSchemas.map((schema, index) => (
              <div key={index} className="selected-schema">
                <span className="schema-icon">●</span>
                <select className="schema-dropdown" value={schema} readOnly>
                  <option>{schema}</option>
                </select>
                <button className="remove-schema-btn" onClick={() => handleRemoveSchema(schema)}>
                  <i className="fas fa-minus"></i>
                </button>
              </div>
            ))
          )}
        </div>
        <div className="add-schema-section">
          <select className="add-schema-dropdown" value={selectedSchemaToAdd} onChange={(e) => setSelectedSchemaToAdd(e.target.value)}>
            <option value="">Add schema to segment</option>
            {schemaOptions.map((option, index) => (
              <option key={index} value={option.value}>{option.label}</option>
            ))}
          </select>
          <button className="add-schema-btn" onClick={handleAddSchema}>Add Schema</button>
        </div>
      </div>
      <div className="modal-footer">
        <button className="save-btn" onClick={handleSaveSegment} disabled={submitting}>
          {submitting ? "Submitting..." : "Save the Segment"}
        </button>
        <button className="cancel-btn" onClick={handleCloseModal} disabled={submitting}>Cancel</button>
      </div>
    </div>
  );
};

export default ModalComponent;
