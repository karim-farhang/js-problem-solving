/*
This code demonstrates the creation and manipulation of a nested object structure representing students in different classes, their names, and their tech stacks. 
It includes the following operations:
1. Modifying an existing property value within the nested structure.
2. Accessing specific properties using dot and bracket notation.
3. Extracting keys, values, and entries from the object using `Object.keys`, `Object.values`, and `Object.entries`.
4. Dynamically adding a new class and student using `Object.defineProperty`.
5. Deleting a class from the structure using the `delete` operator.
*/

students = {
    class_a: {
        student1: {
            name: 'karim',
            stack: ['python', 'javaScript'],
        },
        student2: {
            name: 'Ali Tareq',
            stack: ['python', 'javaScript'],
        },
    },
    class_b: {
        student1: {
            name: 'Nawid',
            stack: ['python', 'C++'],
        }
    }
}

// Modify a specific stack value
students.class_a.student1.stack[1] = 'C#';

console.log(students.class_a.student1.stack[1]); // Outputs: C#
console.log(students.class_b.student1.stack[1]); // Outputs: C++

// Access and print various parts of the object
console.log(students['class_a']);
console.log(Object.keys(students));
console.log(Object.values(students));
console.log(Object.entries(students));

// Add a new class and student dynamically
Object.defineProperty(students,
    'class_c',
    {
        writable: true,
        enumerable: true,
        configurable: true,
        value: {
            'student1': {
                'name': 'Mortazi',
                'stack': ['C++', 'C#']
            },
        }});

// Print the updated object
console.log(students);

// Delete class_a from the object
delete students.class_a;

console.log(students);
