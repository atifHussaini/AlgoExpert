function areAlmostEquivalent (s,t) {
    const finalArr = [];

    for (let i = 0; i < s.length; i++) {
        const sCurrentArray = s[i].split("");
        const tCurrentArray = t[i].split("");
        const sLength = sCurrentArray.length;
        const tLength = tCurrentArray.length;
        const sMap = new Map();
        const tMap = new Map();

        if (sLength !== tLength) {
            finalArr.push('NO');
            break;
        }

        for (let j = 0; j < sCurrentArray.length; j++) {
            const sElement = sCurrentArray[j];
            const tElement = tCurrentArray[j];
            
            if (!sMap.has(sElement)) {
                sMap.set(sElement, 1);
            } else {
                sMap.set(sElement, sMap.get(sElement) + 1);
            }

            if (!tMap.has(tElement)) {
                tMap.set(tElement, 1);
            } else {
                tMap.set(tElement, tMap.get(tElement) + 1);
            }
        }

        for (const [element, value] of sMap) {
            let tValue = tMap.get(element);

            if (!tMap.has(element)) {
                tValue = 0;
            }

            const difference = Math.abs(value - tValue);

            if (difference <= 3) {
                continue;
            } else if (difference > 3) {
                finalArr.push('NO');
                break;
            }
            finalArr.push('YES');
        }
        
        sMap.clear();
        tMap.clear();
    }
    return finalArr
}

console.log(areAlmostEquivalent(['aabaab', 'aaaaabb'], ['bbabbc', 'abb']))