function stringToNumberArray(str) {
    let arr = [];
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (char >= 'A' && char <= 'Z') arr.push(char.charCodeAt());
        else if (char >= 'a' && char <= 'z') arr.push(char.charCodeAt());
        else if (char >= '0' && char <= '9') arr.push(Number(char));
        else arr.push(null);
    }
    return arr;
}

function applyDelta(str) {
    let arr = stringToNumberArray(str), result = "";
    
    for (i = 0; i < arr.length; i++) {
        // const element = array[index];
        if(arr[i + 2] !== undefined){
            a = arr[i]
            b = arr[i + 1]
            c = arr[i + 2]
            var delta = (b * b) + 4 * (a * c) 
            result = result + delta
        }
    }
     return result;
}


console.log(applyDelta('Halim paradox 234!'));