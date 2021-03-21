/*
Let us define a precedence string as follows:
"F>E" means that in the word, the letter "F" comes before the letter "E".

The objective of this test is to implement the find_the_word function.
When passed a list of precedences, the function will return the word associated to the input.
There are no duplicate letters in the word.

For example:
------------

findTheWord(["G>W","W>F"]) should return GWF
findTheWord(["E>R","R>S","S>O","O>N","P>E"]) should return PERSON

*/

function findTheWord (letters) {
    
    let word = '';
    const left = [];
    const right = [];

    for (const i of letters) {
        left.push(i.split('>')[0]);
        right.push(i.split('>')[1]);
    }

    // Find first letter of word
    let Index = null;
    left.map((l , index) => {
        if (!right.includes(l)) {
            Index = index;
        }
    })

    word += left[Index]; // first letter
    word += right[Index]; // second letter
    
    for (let i= 0; i< left.length -1 ; i++) {
        const itemIndex = left.findIndex(l => l === right[Index] )
        Index = itemIndex;
        word += right[Index];
    }

    return word;
}