let array = [1, 2, 1, 4, 1, 1];
for (i = 0; i < array.length; i++) {
    let count = 0;
    for (j = 0; j < array.length; j++) {
        if (array[i] == array[j]) {
            count += 1
        }
    }
    console.log(array[i] + " occurs " + count + " times")
}
