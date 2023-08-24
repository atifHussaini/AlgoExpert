function mergeOverlappingIntervals(array) {
    array.sort((a, b) => a[0] - b[0]);

    for (let i = 0; i < array.length - 1;) {
        const current = array[i];
        const next = array[i + 1];

        if (current[1] >= next[0] && current[1] >= next[1]) {
            array.splice(i + 1, 1);
        } else if (current[1] >= next[0] && current[1] < next[1]) {
            current[1] = next[1];
            array.splice(i + 1, 1);
        } else {
            i++;
        }
    }
    return array;
}

console.log(mergeOverlappingIntervals([[1, 22],[-20, 30], [2,87], [6,107]]));
