function decode (codes, encoded) {
    const map = new Map();

    for (let i = 0; i < codes.length; i++) {
        const code = codes[i];
        let sub = "";
        let result = ""

        for (let j = 0; j < code.length; j++) {
            const char = code[j];
    
            if (char !== " ") {
                sub += char
            } else if (char === " ") {
                code.slice(0,i)
                for (let k = j+1; k < code.length; k++) {
                    const char = code[k];
                    result += char;
                }
                map.set(sub,result);
            }
        }
    }

    let finalStr = "";
    let subString = "";

    for (let i = 0; i < encoded.length; i++) {
        const char = encoded[i];
        subString += char;

        for (let [char, value] of map) {
            if (subString === value && subString !== "111111") {
                finalStr += char;
                encoded.slice(0,i);
                subString = "";
            } else if (subString === "111111") {
                finalStr += '\n';
                encoded.slice(0,i);
                subString = "";
            } 
        }
    }
    return finalStr;
}

console.log(decode(["a 100100", "b 100101", "[newline] 111111", "c 110001", "d 100000", "p 111110", "q 000001"], "111110000001100100111111100101110001111110"))