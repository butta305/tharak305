

function anagram (s1,s2)
{
    const normaliseds1 = s1.toLowerCase().split("").sort().join("");
    const normaliseds2 = s2.toLowerCase().split("").sort().join("");

    if (normaliseds1 === normaliseds2)
    {
        console.log("both are anagram words");
    }
    else 
    {
        console.log("both are not anagram words");
    }
}

anagram("Eat", "Teaestate");

//OR

function isAnagram(str1, str2) {
    const normalized1 = str1.toLowerCase().split('').sort().join('');
    const normalized2 = str2.toLowerCase().split('').sort().join('');

    return normalized1 === normalized2;
}

console.log(isAnagram("listen", "silent")); // true
console.log(isAnagram("earth", "heart"));   // true
console.log(isAnagram("hello", "world"));   // false

