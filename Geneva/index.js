function lambdaMap (arr) {
    for (let i = 0; i < arr.length; i++) {
        const currentSub = arr[i];

        for (let j = 0; j < currentSub.length; j++) {
            let element = currentSub[j];
            
            if (element <= 0) {
                currentSub.splice(j,1);
            } else {
                element = Math.pow(element, 2);
            }
        }
    }
    return arr;
}

// console.log(lambdaMap([[-1,1,2,-2,6], [3,4,-5]]))

// ans = map(
//     # Complete the lambda function below.  It begins in the non-alterable code above
    
//     , arr)
//         return ans
    
    
//     if __name__ == '__main__':
//         n = int(raw_input())
//         arr = []
//         for _ in range(n):
//             arr.append(list(map(int, raw_input().split())))
        
//         ans = lambdaMap(arr)
//         for row in ans:
//             print(' '.join(map(str, row)))


// function get_dict_value(dct, path) {
//     path = path.replace(/\./g, "");
//     let final = null;

//     while (path.length) {
//         Object.entries(dct).forEach(([key, value]) => {
//             if (path.includes(key)) {
//                 path = path.replace(key,"");
//                 dct = value;
//                 final = value;
//             }
//         }
//         );
//     }
//     return final;
// }   

// console.log(get_dict_value({
//     "student" : {
//         "roll_number" : {
//             "grade": "10",
//             "friends": "Atif",
//             },
//         "class" : "1st"
//     },
//     "teacher" : {
//         "school" : "ABC"
//     }
// }, "student.roll_number.friends"))

//ed, ing, ly

function suffixStripping (string) {
    const workingArr = string.split(" ");
    let finalStr = [];
    
    for (let i = 0; i < workingArr.length; i++) {
        let word = workingArr[i];
        const length = word.length;

        if (word.endsWith("ing")) {
            word = word.slice(0,length-3);
        } else if (word.endsWith("ed")) {
            word = word.slice(0, length-2);
        } else if (word.endsWith("ly")) {
            word = word.slice(0, length-2);
        } 

        if (length > 8) {
           word = word.slice(0,8)
        }
        finalStr.push(word)
    }

    console.log(finalStr.join(" "));
}

// console.log(suffixStripping("an extremely dangerous dog is barking"))
// console.log(suffixStripping("a boy is jumping quickly"))
// console.log(suffixStripping("the results cannot be extrapolated to other patient group"))
console.log(suffixStripping("the results cannoeding be extrapolated to other patient group"))



