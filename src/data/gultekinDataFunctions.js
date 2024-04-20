let gultekinKey = 'gultekin_key';

const gultekinWork = { // function names read, write, delete
    write : function (item_value) {
        let result = false;
        try{
            if(typeof item_value !== 'string'){
                item_value = JSON.stringify(item_value);
            }
            localStorage.setItem(gultekinKey,item_value);
            result = true;
        }
        catch(error){
            console.log(error);
        }
        return result;
   },
   read: function(){
        let result = localStorage.getItem(gultekinKey);
        return result;
   },
   delete:function(){
        localStorage.removeItem(gultekinKey);   
   }
};

export default gultekinWork;