var bubbleSort = (arr) =>{

    let swap
    do{
        swap =false
        for(let i = 0;i<arr.length;i++){
            if(arr[i]>arr[i+1]){
                let temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1]=temp
                swap =true
            }
        }

    }while(swap)
    return arr
}

var pasanganTerbesar = (num) => {

    let numStr = num.toString()
    let twoNumArr = []

    for(let i =0 ; i <numStr.length ; i+=2){
        twoNumArr.push(parseInt(numStr.slice(i,i+2)))
    }

    bubbleSort(twoNumArr)
    


    return twoNumArr[twoNumArr.length-1]


}

console.log(pasanganTerbesar(910233))