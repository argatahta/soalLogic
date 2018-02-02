let deretGeometri = (arr) => {

    let deret = [];
    for (let i = 0; i < arr.length - 1; i++) {
        deret.push(arr[i + 1] / arr[i]);
    }

    for(let j = 0; j<deret.length-1;j++){
        if(deret[j]==deret[j+1]){
            continue
        }else{
            return false
        }
    }

    return true
}

console.log(deretGeometri([1, 3, 9, 27, 48]));