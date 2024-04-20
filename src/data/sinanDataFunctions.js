let myKey = "sinanKey"

const sinanDataFunctions = { // function names read, write, delete (OK)
    read: () => {
        let result = localStorage.getItem(myKey);
        return result;
    },
    write: (itemValue) => {
        let result = false
        try {
            if (typeof itemValue !== "string") {
                itemValue = JSON.stringify(itemValue);
            }
            localStorage.setItem(myKey, itemValue)
            result = true;
        } catch (error) {
            console.log(error);
        }
        return result
    },
    delete: () => {
        localStorage.removeItem(myKey)
    } 
}

export default sinanDataFunctions