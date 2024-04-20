let EgoKey = "EgoKey";

const EgomenData = {
  // function names read, write, delete
  write: (itemToBeSet) => { //  -> itemToBeSet ->  itemToBeSet
    let result = false;
    try {
      if (typeof itemToBeSet !== "string") {
        itemToBeSet = JSON.stringify(itemToBeSet);
      }
      localStorage.setItem(EgoKey, itemToBeSet);
      result = true;
    } catch (error) {
      console.log("Hata:", error);
    }
    return result;
  },
  read: () => {
    let result = localStorage.getItem(EgoKey);
    return result;
  },
  delete: () => {
    localStorage.removeItem(EgoKey);
  },
};

export default EgomenData;