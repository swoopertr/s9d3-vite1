let elifKey='elif_key';
const elifWork={ // function names read, write, delete
    write : function(item_value) {
        let result = false;
        try {
            if (typeof item_value !== 'string') {
                item_value = JSON.stringify(item_value);
            }
            localStorage.setItem(elifKey, item_value);
            result = true;
        }
        catch (error) {
            console.log(error);
        }
        return result;
        },
    read: function(){
        let result= localStorage.getItem(elifKey);
        result = JSON.parse(result);
        return result;
    },
    delete: function(){
        localStorage.removeItem(elifKey);
    }
    };
    export default elifWork;


    // "Ali"

    // {
    //     name :"ali",
    //     surname : "veli"
    // }

    // '["",2,4,5,{name:"ali"}]'