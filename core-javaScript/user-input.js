// Import the readline module to handle user input from the console
const readline = require('readline');

// Create an interface for reading from the standard input (keyboard) and writing to the standard output (console)
const rl = readline.createInterface({
  input: process.stdin,  // Input from the keyboard
  output: process.stdout, // Output to the console
});

// Ask for the first number from the user
rl.question('Enter the first number: ', (a) => {
  // Ask for the second number from the user
  rl.question('Enter the second number: ', (b) => {
    // Swap the values of 'a' and 'b' using destructuring assignment
    [a, b] = [b, a]; 

    // Output the results after swapping
    console.log('After swapping:');
    console.log('First number equals to:', a); // Display the first swapped number
    console.log('Second number equals to:', b); // Display the second swapped number

    // Close the readline interface after the input and output operations are done
    rl.close();
  });
});
