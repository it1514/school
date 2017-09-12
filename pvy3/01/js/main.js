function listOfAnimals(data, start, count){
    try { 
        if(isNaN(start) || isNaN(count)) throw "not a number";
        if(start < 0) throw "cannot be less than 0";
        if(start > data.length-1 || count > data.length-1 || start+count > data.length-1) throw "cannot be bigger than the array itself"
    }
    catch(err) {
        return 'Error: ' + err;
    }
    var list = [];
    for(var i = start; i < start+count; i++){
        list.push(data[i]);
    }
    return (list.length > 0) ? list : 'No items';
};

console.log(listOfAnimals(json, 400, 0));