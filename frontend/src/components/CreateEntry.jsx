import React, { useState } from "react";
import axios from "axios";
import Modal from "./Modal";

const CreateEntry = ({ setRefreshData }) => {
  const [newModal, setNewModal] = useState(false);
  const [newEntry, setNewEntry] = useState({
    dish: "",
    calories: 0,
    fats: 0,
    proteins: 0,
    carbs: 0,
  });

  function addSingleEntry() {
    var url = "http://localhost:8000/entry/create";
    axios.post(url, newEntry).then((response) => {
      if (response.status == 200) {
        setRefreshData(true);
      }
    });
    setNewEntry({
      dish: "",
      calories: 0,
      fats: 0,
      proteins: 0,
      carbs: 0,
    });
  }

  return (
    <>
      {newModal ? (
        <Modal
          open={newModal}
          setOpen={setNewModal}
          entry={newEntry}
          saveFunc={addSingleEntry}
        />
      ) : (
        ""
      )}
      <div className="text-center">
        <h2
          className="text-4xl cursor-pointer hover:underline"
          onClick={() => {
            setNewModal(true);
          }}
        >
          Add Your Today's Calorie
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="ml-3 w-12 h-12 inline"
          >
            <path
              fillRule="evenodd"
              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z"
              clipRule="evenodd"
            />
          </svg>
        </h2>
      </div>
    </>
  );
};

export default CreateEntry;