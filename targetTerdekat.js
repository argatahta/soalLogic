let targetTerdekat = (arr) => {

    let xIndex = [];
    let oIndex = []

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == "x") {
            xIndex.push(i)
        }
        else if (arr[i] == "o") {
            oIndex.push(i)
        }
    }
    let jarak = []

    for (let j = 0; j < xIndex.length; j++) {
        jarak.push(Math.abs(xIndex[j] - oIndex[0]));
    }



    return Math.min.apply(null,jarak)
}

console.log(targetTerdekat(["x", "", "", "o", "", "x", "x",""]));