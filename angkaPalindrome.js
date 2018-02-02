let angkaPalindrome = (num)=>{

    let subs = num.toString().split("")
    for(let i = num; i<num+100; i++){
        let subs = i.toString().split("")
        if(subs[0]== subs[subs.length-1]){
            return i
        }
    }
}

console.log(angkaPalindrome(117));
