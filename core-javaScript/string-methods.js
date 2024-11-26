/*
This code demonstrates various string methods in JavaScript. 
It showcases operations such as character extraction, searching, replacing, and splitting strings.
*/

let text = 'Hello World';

// Get the character at a specific position
console.log('charAt:', text.charAt(0)); // Outputs: H

// Get the Unicode of the character at a specific position
console.log('charCodeAt:', text.charCodeAt(0)); // Outputs: 72 (Unicode for 'H')

// Get the code point of the character at a specific position
console.log('codePointAt:', text.codePointAt(0)); // Outputs: 72

// Concatenate the string with another string
console.log('concat:', text.concat(text)); // Outputs: Hello WorldHello World

// Check if a substring is included
console.log('includes:', text.includes('o')); // Outputs: true

// Check if the string ends with a specific substring
console.log('endsWith:', text.endsWith('o')); // Outputs: false

// Get the index of the first occurrence of a substring
console.log('indexOf:', text.indexOf('w')); // Outputs: -1 (case-sensitive, 'w' does not exist)

// Get the index of the last occurrence of a substring
console.log('lastIndexOf:', text.lastIndexOf('w')); // Outputs: -1 (case-sensitive, 'w' does not exist)

// Compare two strings (lexicographical order)
console.log('localeCompare:', text.localeCompare(text)); // Outputs: 0 (equal strings)

// Find matches of a pattern (returns an array or null)
console.log('match:', text.match('world')); // Outputs: null (case-sensitive)

// Find all matches of a pattern (returns an iterator)
console.log('matchAll:', [...text.matchAll('hello')]); // Outputs: [] (case-sensitive)

// Normalize the string (handles Unicode normalization)
console.log('normalize:', text.normalize()); // Outputs: Hello World

// Pad the end of the string to reach a specified length (not used correctly here)
console.log('padEnd:', text.padEnd(15, '.')); // Outputs: Hello World....

// Repeat the string a specified number of times
console.log('repeat:', text.repeat(2)); // Outputs: Hello WorldHello World

// Replace the first occurrence of a substring
console.log('replace:', text.replace('l', 'r')); // Outputs: Herlo World

// Replace all occurrences of a substring
console.log('replaceAll:', text.replaceAll('l', 'r')); // Outputs: Herro Worrd

// Search for a pattern and return the index of the match
console.log('search:', text.search('l')); // Outputs: 2 (index of the first 'l')

// Extract a portion of the string
console.log('slice:', text.slice(0, 7)); // Outputs: Hello W

// Split the string into an array (incorrect use of `slice` here)
console.log('split:', text.split(' ')); // Outputs: [ 'Hello', 'World' ]

// Check if the string starts with a specific substring
console.log('startsWith:', text.startsWith('H')); // Outputs: true
