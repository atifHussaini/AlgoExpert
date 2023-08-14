function canConstruct (target, wordBank) {
    if (target === "") return true;

    for (let string of wordBank) {
        if(target.indexOf(string) === 0) {
            const remainder = target.replace(string, "");
            if (canConstruct(remainder, wordBank)) return true;
        }
    }

    return false;
}

console.log(canConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]))
console.log(canConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"]))
console.log(canConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"]))