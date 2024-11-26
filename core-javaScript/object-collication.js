
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

students.class_a.student1.stack[1] = 'C#';

console.log(students.class_a.student1.stack[1]);
console.log(students.class_b.student1.stack[1]);

console.log(students['class_a']);
console.log(Object.keys(students));
console.log(Object.values(students));

console.log(Object.entries(students));

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

console.log(students)

delete students.class_a

console.log(students)