import sinanDataFunctions from "../data/sinanDataFunctions"
import { useState, useEffect } from "react" // rica ederim <3 sağol karşim.
const Sinan = () => {

    const [myState, setMyState] = useState("")

    useEffect(()=> {
        setMyState(sinanDataFunctions.read())
    }, [])
    
    const onClick = () => {
        let singer = document.getElementById("sinanText").value;
        let day = singer.split("-")[2];
        sinanDataFunctions.write(day);
        setMyState(sinanDataFunctions.read())
    }
    return(
        <>
            <h1>Adımı kalbine yaz beni unutma</h1>
            <input type="date" id="sinanText" placeholder="Şarkıcı adını gir"/>
            <button onClick={onClick}>Kaydet</button>
            <h2>{
                    myState === null 
                    ?
                    "Değer yok"
                    :
                    myState
                }</h2>
        </>
    )
}

export default Sinan