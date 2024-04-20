import gultekinWork from "./../data/gultekinDataFunctions"
import React, { useState, useEffect } from 'react';


const GultekinComponenet = () => {

  const [content, setContent] = useState('');
  useEffect(() => {
    let readFromLocalStorage = gultekinWork.read();
    setContent(readFromLocalStorage)
  }, []);

  const handleClick = (event) => {
    const inputText = document.getElementById("gultekinDate").value;
    let day = inputText.split("-")[2]
    gultekinWork.write(day);
    setContent(day)
  }

  return (
    <>
      <div>
        <p> Gultekin's Date </p>
        <input id="gultekinDate" type="date" />
        <button onClick={handleClick}>Save</button>
        <p>{content === null ? "Date is not selected" : content }</p>
      </div>
    </>
  );
};

export default GultekinComponenet;
