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


function get_dict_value(dct, path) {
    path = path.replace(/\./g, "");
    let final = null;

    while (path.length) {
        Object.entries(dct).forEach(([key, value]) => {
            if (path.includes(key)) {
                path = path.replace(key,"");
                dct = value;
                final = value;
            }
        }
        );
    }
    return final;
}   

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



