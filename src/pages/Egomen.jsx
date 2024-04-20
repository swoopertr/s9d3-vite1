import EgomenData from "./../data/EgomenData"
import { useState, useEffect } from "react";

const EgomenComponenet = () => {
  const [selectedDate, setSelectedDate] = useState("");


  useEffect(() => {
    let date = EgomenData.read()
    setSelectedDate(date)
  }, [])

  const handleClick = () => {
    let dateCatcher = document.getElementById("egemenDate").value;
    let day = dateCatcher.split("-")[2];
    EgomenData.write(day);
    setSelectedDate(day);
  };

  return (
    <>
      <div>
        <h1>Choose Wisely</h1>
        <input type="date" id="egemenDate" onChange={handleClick} />
        <input type="button" value="Show" onClick={handleClick} />
        <span>{selectedDate && `You selected this date: ${selectedDate}`}</span>
      </div>
    </>
  );
};

export default EgomenComponenet;