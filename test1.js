let array = ['cook', 'save','taste', 'aves','vase', 'state','map']

function sortString(myString) {

    for (let i = 0; i < myString.length; i++) {
        for (let j = 0; j < myString.length; j++) {
            if (myString[i] > myString[j]) {
                let temp = myString[j]
                myString[j] = myString[i]
                myString[i] = temp
            }
        }
    }

    return myString;
}

function solutionProblem(myArray) {
    let sortedArray = myArray.map((element) => {
        element = element.split("").sort().join('');
        return element;
    });

    let result = new Set();
    for (let i = 0; i < sortedArray.length; i++) {
        let tempArray = [myArray[i]];
        for (let j = 1; j < sortedArray.length; j++) {
            if (sortedArray[i] === sortedArray[j] && i !== j) {
                tempArray.push(myArray[j])
            }
        }
        
        result.add(tempArray);
    }

    return result;
}

console.log(solutionProblem(array));

//note : mohon maaf sebesar-besarnya, saya tidak bisa menuntaskan test ini tanpa menggunakan built in function

