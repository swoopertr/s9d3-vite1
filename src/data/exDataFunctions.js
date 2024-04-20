let exKey = 'tunc_key';
const work = {
    write :function(item_value){
        let result = false;
        try {
            if(typeof item_value !== 'string'){
                item_value = JSON.stringify(item_value);
            }
            localStorage.setItem(exKey, item_value);
            result = true;
        } catch (error) {
            console.log(error);
        }
        return result;
    },
    read: function() {
        let result = localStorage.getItem(exKey);
        return result;
    },
    delete : function(){
        localStorage.removeItem(exKey);
    }
};

export default work;