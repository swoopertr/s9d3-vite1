import elifWork from "../data/elifDataFunctions";
import { useEffect, useState } from "react";

const ElifComp = ()=> {
    const [inputValue, setInputValue] = useState({});
    
    useEffect(()=>{
        let localStorageData = elifWork.read();
        setInputValue(localStorageData);
    },[])

    const onClickFunction=(event) =>{
        let inputData = document.getElementById('elifInput').value;
        let input2Data = document.getElementById('elifData2Input').value;
        let inputDateData = document.getElementById('elifDataDateInput').value;
        let data = {
            value1: inputData,
            value2 : input2Data,
            value3 : inputDateData
        }
        elifWork.write(JSON.stringify(data));
        setInputValue(data)
    }
   const getDayOfMonth= (dateString) => {
    const dateObject =  new Date(dateString);
    return dateObject.getDate();
   };

    return (
        <>
          <div>
            <input type="text" id="elifInput" />
            <input type="button" value="kaydet" onClick={onClickFunction} />
            
            <input type="text" id="elifData2Input" />
            <input type="button" value="kaydet" onClick={onClickFunction} />
            
            <input type="date" id="elifDataDateInput" />
            <input type="button" value="kaydet" onClick={onClickFunction} />

            <p>Elif deneme </p> 
            {
                inputValue == null ? 
                "değer yok" 
                    :
                <div>
                    <strong>value1 : {inputValue.value1}</strong> <br />
                    <strong>value2 : {inputValue.value2}</strong> 
                    <strong>value3 : {getDayOfMonth(inputValue.value3)}</strong> 
                </div>
            }
        </div>
        </>
    );
};
export default ElifComp;