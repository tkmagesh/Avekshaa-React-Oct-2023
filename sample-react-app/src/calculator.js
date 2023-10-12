
export function add(x,y){
    return x + y;
}

export function subtract(x,y){
    return x - y;
}

// the above functions are assembled in a module object and the module object is exported

//default export
const utils = {
    getDate(){
        return new Date()
    }
}

export default utils;
