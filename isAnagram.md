// Create a function called isAnagram, which given two strings, returns true if they are anagrams of one another.
// For example: `Listen` is an anagram of `Silent`

function isAnagram(first, second) {
    
    const farr = [...first.toLowerCase()].sort();
    const sarr = [...second.toLowerCase()].sort();
    
    if (JSON.stringify(farr) === JSON.stringify(sarr)) {
        return true;
    }

    return false;
}

// isAnagram(..., ...); should return true
