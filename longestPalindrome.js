
var isPalindrome = (string) => {

    let alphabeth = "abcdefghijklmnopqrstuvwxyz".split("")
    let numbers = "1234567890".split("")
    let stringArr = string.toLowerCase().split("")

    let manRegex = []

    stringArr.forEach(element => {

        for (let i = 0; i < alphabeth.length; i++) {
            if (element == alphabeth[i] || element==numbers[i]) {
                manRegex.push(element)
            }
        }
    });

    let manRegexJoin = manRegex.join("");
    let manRegexJoinReverse = manRegex.reverse().join("");

    // if(manRegexJoin == manRegexJoinReverse) return true
    // else return false 
    return manRegexJoin == manRegexJoinReverse ? true : false
}

var longestPalindrome = (str1) => {

    var max_length = 0,
        maxp = '';

        if(str1.length <=1){
            return str1
        }

    for (var i = 0; i < str1.length; i++) {
        var subs = str1.substr(i, str1.length);

        for (var j = subs.length; j >= 0; j--) {
            var sub_subs_str = subs.substr(0, j);
            console.log(sub_subs_str)
            if (sub_subs_str.length <= 1)
                continue;

            if (isPalindrome(sub_subs_str)) {
                if (sub_subs_str.length > max_length) {
                    max_length = sub_subs_str.length;
                    maxp = sub_subs_str;
                }
            }
        }
    }

    return maxp;

}

console.log(longestPalindrome("a"))