// ─── Lesson Data ──────────────────────────────────────────────────────────────
const lessons = [
  {
    id: 1,
    title: "Hello, World",
    description: "Print your first line of output in C.",
    explanation: [
      "Every C program starts with the main function. This is where execution begins.",
      "We use #include <stdio.h> to tell the compiler to include the Standard Input/Output library, which gives us access to the printf function.",
      "The printf function prints text to the screen. Finally, return 0 tells the operating system that our program finished successfully."
    ],
    code: [{ label: "hello.c", content: `#include <stdio.h>

int main() {
    printf("Hello, World!\\n");
    return 0;
}` }]
  },
  {
    id: 2,
    title: "Variables and Data Types",
    description: "Store and manipulate data in memory.",
    explanation: [
      "In C, you must declare a variable's type before using it. This tells the compiler how much memory to allocate.",
      "Common data types include int (integers), float (decimals), double (high-precision decimals), and char (single characters).",
      "You can declare a variable and initialize it in the same line or separately."
    ],
    code: [{ label: "variables.c", content: `#include <stdio.h>

int main() {
    int age = 25;
    float pi = 3.14f;
    double exact_pi = 3.1415926535;
    char grade = 'A';

    return 0;
}` }]
  },
  {
    id: 3,
    title: "Printf Formatting",
    description: "Format console output with format specifiers.",
    explanation: [
      "To print variables, you use format specifiers inside the printf string. These act as placeholders.",
      "%d is for integers, %f for floats, %c for characters, and %s for strings (which we'll cover later).",
      "You can also control formatting, such as %.2f to print a float with exactly two decimal places."
    ],
    code: [{ label: "formatting.c", content: `#include <stdio.h>

int main() {
    int score = 95;
    float temp = 98.6f;

    printf("Score: %d\\n", score);
    printf("Temperature: %.1f\\n", temp);
    printf("Padded: %5d\\n", 42); // Pads to 5 characters

    return 0;
}` }]
  },
  {
    id: 4,
    title: "Arithmetic Operators",
    description: "Perform math operations on variables.",
    explanation: [
      "C supports standard arithmetic operators: + (addition), - (subtraction), * (multiplication), and / (division).",
      "The modulo operator % returns the remainder of integer division.",
      "C follows standard mathematical order of operations (PEMDAS), which you can override using parentheses."
    ],
    code: [{ label: "math.c", content: `#include <stdio.h>

int main() {
    int a = 10;
    int b = 3;

    printf("Addition: %d\\n", a + b);       // 13
    printf("Division: %d\\n", a / b);       // 3 (integer division)
    printf("Remainder: %d\\n", a % b);      // 1

    int result = (a + b) * 2;
    printf("Result: %d\\n", result);        // 26

    return 0;
}` }]
  },
  {
    id: 5,
    title: "User Input with Scanf",
    description: "Read input from the keyboard.",
    explanation: [
      "The scanf function reads formatted input from standard input (stdin).",
      "It requires a format specifier and the memory address of the variable where the data will be stored.",
      "The & operator is used to get the memory address of a variable (except for char arrays/strings)."
    ],
    code: [{ label: "input.c", content: `#include <stdio.h>

int main() {
    int age;
    printf("Enter your age: ");
    scanf("%d", &age);

    printf("You are %d years old.\\n", age);
    return 0;
}` }]
  },
  {
    id: 6,
    title: "If / Else Statements",
    description: "Control program flow with conditions.",
    explanation: [
      "Conditional statements allow your program to make decisions. The block inside the if statement executes only if the condition evaluates to true (non-zero).",
      "You can chain conditions using else if, and provide a fallback using else.",
      "Common comparison operators include == (equal), != (not equal), <, >, <=, and >=."
    ],
    code: [{ label: "conditions.c", content: `#include <stdio.h>

int main() {
    int score = 85;

    if (score >= 90) {
        printf("Grade: A\\n");
    } else if (score >= 80) {
        printf("Grade: B\\n");
    } else {
        printf("Grade: C or lower\\n");
    }

    return 0;
}` }]
  },
  {
    id: 7,
    title: "Switch Statements",
    description: "Handle multiple distinct cases cleanly.",
    explanation: [
      "A switch statement evaluates an expression and jumps to the matching case block. It's often cleaner than a long chain of if-else statements when checking a single variable against exact values.",
      "You must use the break statement at the end of each case to prevent 'fall-through' to the next case.",
      "The default block executes if no cases match."
    ],
    code: [{ label: "switch.c", content: `#include <stdio.h>

int main() {
    int choice = 2;

    switch (choice) {
        case 1:
            printf("Starting game...\\n");
            break;
        case 2:
            printf("Loading settings...\\n");
            break;
        case 3:
            printf("Exiting...\\n");
            break;
        default:
            printf("Invalid choice.\\n");
            break;
    }

    return 0;
}` }]
  },
  {
    id: 8,
    title: "While Loops",
    description: "Repeat code while a condition is true.",
    explanation: [
      "A while loop executes a block of code repeatedly as long as its condition remains true.",
      "The condition is evaluated before every iteration. If it is false initially, the loop body never runs.",
      "Make sure you update the variable used in the condition inside the loop, otherwise you will create an infinite loop."
    ],
    code: [{ label: "while.c", content: `#include <stdio.h>

int main() {
    int counter = 5;

    while (counter > 0) {
        printf("%d\\n", counter);
        counter--; // Decrement counter
    }

    printf("Blastoff!\\n");
    return 0;
}` }]
  },
  {
    id: 9,
    title: "For Loops",
    description: "Compact syntax for repeating code.",
    explanation: [
      "A for loop is ideal when you know exactly how many times you want to iterate. It packages the initialization, condition, and increment into a single line.",
      "The syntax is: for (initialization; condition; increment).",
      "They are heavily used for iterating over arrays and counting."
    ],
    code: [{ label: "for_loop.c", content: `#include <stdio.h>

int main() {
    int sum = 0;

    // Sum numbers from 1 to 5
    for (int i = 1; i <= 5; i++) {
        sum += i;
    }

    printf("Sum: %d\\n", sum);
    return 0;
}` }]
  },
  {
    id: 10,
    title: "Do-While Loops",
    description: "Loops that always execute at least once.",
    explanation: [
      "A do-while loop is similar to a while loop, but it evaluates its condition after the loop body executes.",
      "This guarantees that the block of code will run at least one time, making it perfect for tasks like reading user input until it is valid."
    ],
    code: [{ label: "dowhile.c", content: `#include <stdio.h>

int main() {
    int guess;

    do {
        printf("Guess the secret number (it's 7): ");
        scanf("%d", &guess);
    } while (guess != 7);

    printf("You got it!\\n");
    return 0;
}` }]
  },
  {
    id: 11,
    title: "Functions",
    description: "Organize code into reusable blocks.",
    explanation: [
      "Functions allow you to break your program into smaller, logical pieces. A function must have a return type, a name, and optional parameters.",
      "If a function doesn't return anything, its return type is void.",
      "Functions should generally be declared before they are called, or you must provide a function prototype at the top of the file."
    ],
    code: [{ label: "functions.c", content: `#include <stdio.h>

// Function declaration and definition
int add(int a, int b) {
    return a + b;
}

int main() {
    int result = add(5, 10);
    printf("5 + 10 = %d\\n", result);
    return 0;
}` }]
  },
  {
    id: 12,
    title: "Scope and Lifetime",
    description: "Where variables exist and how long they live.",
    explanation: [
      "Variables declared inside a function or a block are 'local' to that block. They are destroyed when the block finishes executing.",
      "Variables declared outside of any function are 'global'. They exist for the entire lifetime of the program and can be accessed by any function.",
      "Generally, you should avoid global variables to prevent unintended side effects."
    ],
    code: [{ label: "scope.c", content: `#include <stdio.h>

int global_var = 100; // Accessible anywhere

void test_scope() {
    int local_var = 50; // Only accessible in test_scope
    printf("Global: %d, Local: %d\\n", global_var, local_var);
}

int main() {
    test_scope();
    // printf("%d", local_var); // ERROR: local_var not in scope
    return 0;
}` }]
  },
  {
    id: 13,
    title: "Arrays",
    description: "Store multiple items of the same type.",
    explanation: [
      "An array is a contiguous block of memory holding multiple items of the same data type.",
      "Arrays are zero-indexed, meaning the first element is at index 0.",
      "In C, there is no bounds checking. Accessing an array out of bounds leads to undefined behavior."
    ],
    code: [{ label: "arrays.c", content: `#include <stdio.h>

int main() {
    int scores[5] = {90, 85, 88, 92, 95};

    // Iterate over the array
    for (int i = 0; i < 5; i++) {
        printf("Score %d: %d\\n", i, scores[i]);
    }

    // Modify an element
    scores[1] = 89;

    return 0;
}` }]
  },
  {
    id: 14,
    title: "Strings in C",
    description: "Text as character arrays.",
    explanation: [
      "C does not have a built-in 'string' data type. Instead, strings are represented as arrays of characters.",
      "Every string must end with a special null-terminator character '\\0' to mark the end of the text.",
      "The <string.h> library provides functions like strlen, strcpy, and strcat to manipulate strings."
    ],
    code: [{ label: "strings.c", content: `#include <stdio.h>
#include <string.h>

int main() {
    // Array initialized with string literal automatically appends \\0
    char name[20] = "Alice";
    char greeting[50];

    // Copy string safely
    strcpy(greeting, "Hello, ");

    // Concatenate string
    strcat(greeting, name);

    printf("%s\\n", greeting);
    printf("Length: %lu\\n", strlen(greeting));

    return 0;
}` }]
  },
  {
    id: 15,
    title: "Pointers",
    description: "Variables that store memory addresses.",
    explanation: [
      "A pointer is a variable that stores the memory address of another variable.",
      "The & operator returns the address of a variable. The * operator (dereference operator) accesses the value stored at a pointer's address.",
      "Pointers are a fundamental concept in C, crucial for dynamic memory, arrays, and passing large structures to functions efficiently."
    ],
    code: [{ label: "pointers.c", content: `#include <stdio.h>

int main() {
    int val = 42;
    int *ptr = &val; // ptr holds the address of val

    printf("Value of val: %d\\n", val);
    printf("Address of val: %p\\n", (void*)ptr);

    // Dereferencing the pointer to modify val
    *ptr = 100;
    printf("New value of val: %d\\n", val);

    return 0;
}` }]
  },
  {
    id: 16,
    title: "Pointers and Arrays",
    description: "The deep connection between pointers and array memory.",
    explanation: [
      "In C, the name of an array acts like a pointer to its first element.",
      "This means array[i] is identical to *(array + i). This is known as pointer arithmetic.",
      "When you pass an array to a function, it 'decays' into a pointer, meaning the function can modify the original array data."
    ],
    code: [{ label: "pointer_arrays.c", content: `#include <stdio.h>

int main() {
    int numbers[3] = {10, 20, 30};
    int *ptr = numbers; // Points to numbers[0]

    for (int i = 0; i < 3; i++) {
        // Access array elements via pointer arithmetic
        printf("Element %d: %d\\n", i, *(ptr + i));
    }

    return 0;
}` }]
  },
  {
    id: 17,
    title: "Structs",
    description: "Group related data into a custom type.",
    explanation: [
      "A struct (structure) allows you to group variables of different data types under a single name.",
      "Fields inside a struct are accessed using the dot operator (.). If you have a pointer to a struct, you use the arrow operator (->).",
      "Structs are essentially the C equivalent of objects in object-oriented languages, but without methods."
    ],
    code: [{ label: "structs.c", content: `#include <stdio.h>
#include <string.h>

struct Student {
    char name[50];
    int age;
    float gpa;
};

int main() {
    struct Student s1;

    strcpy(s1.name, "Bob");
    s1.age = 20;
    s1.gpa = 3.8f;

    printf("Student: %s\\n", s1.name);
    printf("Age: %d, GPA: %.1f\\n", s1.age, s1.gpa);

    return 0;
}` }]
  },
  {
    id: 18,
    title: "File I/O",
    description: "Read from and write to text files.",
    explanation: [
      "C interacts with files using file pointers (FILE *).",
      "You open a file with fopen() specifying a mode: \"r\" for reading, \"w\" for writing (overwrites), or \"a\" for appending.",
      "Always use fclose() to close the file when you're finished to flush buffers and release system resources."
    ],
    code: [{ label: "fileio.c", content: `#include <stdio.h>

int main() {
    // Writing to a file
    FILE *file = fopen("output.txt", "w");
    if (file == NULL) {
        printf("Error opening file!\\n");
        return 1;
    }

    fprintf(file, "Learning C is awesome!\\n");
    fclose(file);

    // Reading from the file
    char buffer[100];
    file = fopen("output.txt", "r");

    if (fgets(buffer, sizeof(buffer), file) != NULL) {
        printf("Read from file: %s", buffer);
    }
    fclose(file);

    return 0;
}` }]
  },
  {
    id: 19,
    title: "Dynamic Memory",
    description: "Allocate memory at runtime with malloc.",
    explanation: [
      "Standard arrays require you to know the size at compile time. Dynamic memory allocation allows you to request memory from the 'heap' while the program runs.",
      "malloc (memory allocate) reserves a block of memory. Always check if malloc returns NULL.",
      "You MUST manually free() dynamically allocated memory, otherwise your program will leak memory."
    ],
    code: [{ label: "dynamic.c", content: `#include <stdio.h>
#include <stdlib.h>

int main() {
    int size = 5;

    // Allocate memory for 5 integers
    int *arr = (int*) malloc(size * sizeof(int));

    if (arr == NULL) {
        printf("Memory allocation failed!\\n");
        return 1;
    }

    // Use the memory
    for (int i = 0; i < size; i++) {
        arr[i] = i * 10;
        printf("%d ", arr[i]);
    }
    printf("\\n");

    // Free the memory!
    free(arr);

    return 0;
}` }]
  },
  {
    id: 20,
    title: "Recursion",
    description: "Functions that call themselves.",
    explanation: [
      "Recursion occurs when a function calls itself. It's often used to solve problems that can be broken down into smaller identical problems.",
      "Every recursive function MUST have a base case (a condition where it stops calling itself). Without a base case, it will run until the system runs out of memory (stack overflow).",
      "While elegant, recursion can be less efficient than loops due to function call overhead."
    ],
    code: [{ label: "recursion.c", content: `#include <stdio.h>

// Calculate factorial recursively
int factorial(int n) {
    if (n == 0 || n == 1) { // Base case
        return 1;
    }
    return n * factorial(n - 1); // Recursive call
}

int main() {
    int num = 5;
    printf("Factorial of %d is %d\\n", num, factorial(num));
    return 0;
}` }]
  }
];

// ─── Syntax Highlighter ───────────────────────────────────────────────────────
function highlight(code) {
  let h = code
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

  // Strings (before keywords so they don't get re-colored)
  h = h.replace(/("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*')/g, '<span class="c-string">$1</span>');
  // Comments
  h = h.replace(/(\/\/[^\n]*)/g, '<span class="c-comment">$1</span>');
  h = h.replace(/(\/\*[\s\S]*?\*\/)/g, '<span class="c-comment">$1</span>');
  // Preprocessor
  h = h.replace(/^(#\w+)/gm, '<span class="c-preprocessor">$1</span>');
  // Types
  const types = ["int","float","double","char","void","FILE","struct","long","short","unsigned","signed"];
  h = h.replace(new RegExp(`\\b(${types.join("|")})\\b`, "g"), '<span class="c-type">$1</span>');
  // Keywords
  const kw = ["return","if","else","switch","case","default","break","while","for","do","sizeof","typedef","NULL"];
  h = h.replace(new RegExp(`\\b(${kw.join("|")})\\b`, "g"), '<span class="c-keyword">$1</span>');
  // Standard functions
  const fns = ["printf","scanf","fprintf","fscanf","fgets","fopen","fclose","malloc","free","strcpy","strcat","strlen","sizeof"];
  h = h.replace(new RegExp(`\\b(${fns.join("|")})\\b`, "g"), '<span class="c-function">$1</span>');
  // Numbers
  h = h.replace(/\b(\d+(?:\.\d+)?f?)\b/g, '<span class="c-number">$1</span>');

  return h;
}

// ─── Code Block Component ─────────────────────────────────────────────────────
function renderCodeBlock(label, code) {
  const id = "cb-" + Math.random().toString(36).slice(2);
  return `
    <div class="code-block">
      <div class="code-header">
        <span class="code-label">${label || "example.c"}</span>
        <button class="copy-btn" onclick="copyCode('${id}', this)" title="Copy code">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
          </svg>
          Copy
        </button>
      </div>
      <div class="code-body">
        <pre id="${id}"><code>${highlight(code)}</code></pre>
      </div>
    </div>`;
}

function copyCode(id, btn) {
  const el = document.getElementById(id);
  navigator.clipboard.writeText(el.innerText).then(() => {
    btn.classList.add("copied");
    btn.innerHTML = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 18 4 13"></polyline></svg> Copied!`;
    setTimeout(() => {
      btn.classList.remove("copied");
      btn.innerHTML = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg> Copy`;
    }, 2000);
  });
}

// ─── Sidebar ──────────────────────────────────────────────────────────────────
function renderSidebar(activePath) {
  const items = lessons.map(l => {
    const path = `#/lessons/${l.id}`;
    const active = activePath === `/lessons/${l.id}` ? "active" : "";
    return `
      <a class="nav-item ${active}" href="${path}" data-testid="nav-lesson-${l.id}">
        <span class="nav-num">${l.id}</span>
        <span class="nav-title">${l.title}</span>
      </a>`;
  }).join("");

  return `
    <div class="sidebar-logo" onclick="navigate('/')">
      <div class="logo-icon">&gt;_</div>
      <span>CTutor</span>
    </div>
    <div class="sidebar-label">Tutorial Lessons</div>
    <nav class="sidebar-nav">${items}</nav>
    <div class="sidebar-footer">Terminal Manual Series v1.00</div>`;
}

// ─── Pages ────────────────────────────────────────────────────────────────────
function renderHome() {
  return `
    <div class="badge">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line></svg>
      v1.00 Now Available
    </div>

    <h1 class="hero-title">
      Master C.<br>
      <span class="muted">Close to the metal.</span>
    </h1>

    <p class="hero-sub">
      A precise, no-nonsense tutorial for learning C programming from scratch.
      Read the theory, study the exact terminal output, and write real compilable code.
    </p>

    <div class="btn-row">
      <a href="#/lessons/1" class="btn btn-primary" data-testid="link-start">
        Start Lesson 1
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
      </a>
      <a href="#/lessons" class="btn btn-outline" data-testid="link-syllabus">View Syllabus</a>
    </div>

    <div class="features">
      <div class="feature">
        <div class="feature-icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
        </div>
        <h3>Linear Progression</h3>
        <p>20 focused lessons that build conceptually upon each other without skipping steps.</p>
      </div>
      <div class="feature">
        <div class="feature-icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line></svg>
        </div>
        <h3>Real Code Examples</h3>
        <p>Every lesson features syntax-highlighted, compilable examples demonstrating exact C semantics.</p>
      </div>
      <div class="feature">
        <div class="feature-icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
        </div>
        <h3>System Level</h3>
        <p>Understand memory, pointers, and manual management. Build a robust foundation for systems programming.</p>
      </div>
    </div>`;
}

function renderLessonIndex() {
  const cards = lessons.map(l => `
    <a class="lesson-card" href="#/lessons/${l.id}" data-testid="card-lesson-${l.id}">
      <div class="lesson-card-num">${l.id}</div>
      <div>
        <div class="lesson-card-title">${l.title}</div>
        <div class="lesson-card-desc">${l.description}</div>
      </div>
    </a>`).join("");

  return `
    <h1 class="page-title">Syllabus</h1>
    <p class="page-sub">The complete guide to the C programming language. Work through these linearly if you're a beginner, or jump straight to a specific topic.</p>
    <div class="lesson-grid">${cards}</div>`;
}

function renderLesson(id) {
  const idx = lessons.findIndex(l => l.id === id);
  const lesson = lessons[idx];
  if (!lesson) return `<h1>Lesson not found</h1><a href="#/lessons" class="btn btn-outline" style="display:inline-flex;margin-top:20px">Back to Syllabus</a>`;

  const prev = idx > 0 ? lessons[idx - 1] : null;
  const next = idx < lessons.length - 1 ? lessons[idx + 1] : null;

  const explanationHtml = lesson.explanation.map(p => `<p>${p}</p>`).join("");
  const codeHtml = lesson.code.map(c => renderCodeBlock(c.label, c.content)).join("");

  const prevBtn = prev
    ? `<a class="nav-btn" href="#/lessons/${prev.id}" data-testid="btn-prev">
         <span class="nav-arrow">&#8592;</span>
         <span class="nav-btn-labels">
           <span class="nav-btn-sub">Previous</span>
           <span class="nav-btn-title">${prev.title}</span>
         </span>
       </a>`
    : `<div></div>`;

  const nextBtn = next
    ? `<a class="nav-btn primary right" href="#/lessons/${next.id}" data-testid="btn-next">
         <span class="nav-btn-labels">
           <span class="nav-btn-sub">Next</span>
           <span class="nav-btn-title">${next.title}</span>
         </span>
         <span class="nav-arrow">&#8594;</span>
       </a>`
    : `<a class="nav-btn primary right" href="#/lessons" data-testid="btn-finish">
         <span class="nav-btn-labels">
           <span class="nav-btn-sub">Finished</span>
           <span class="nav-btn-title">Back to Syllabus</span>
         </span>
         <span class="nav-arrow">&#8594;</span>
       </a>`;

  return `
    <div class="breadcrumb">
      <a href="#/lessons">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg>
        Syllabus
      </a>
      <span class="sep">/</span>
      <span class="lesson-badge">Lesson ${lesson.id}</span>
    </div>

    <header class="lesson-header">
      <h1 class="lesson-title">${lesson.title}</h1>
      <p class="lesson-desc">${lesson.description}</p>
    </header>

    <div class="explanation">${explanationHtml}</div>

    ${codeHtml}

    <div class="lesson-nav">
      ${prevBtn}
      ${nextBtn}
    </div>`;
}

// ─── Router ───────────────────────────────────────────────────────────────────
function getRoute() {
  const hash = location.hash.replace(/^#/, "") || "/";
  return hash;
}

function navigate(path) {
  location.hash = path;
}

let currentKeyHandler = null;

function render() {
  const path = getRoute();
  const sidebar = document.getElementById("sidebar");
  const content = document.getElementById("content");

  sidebar.innerHTML = renderSidebar(path);

  window.scrollTo(0, 0);
  document.getElementById("overlay").classList.remove("open");
  sidebar.classList.remove("open");

  if (currentKeyHandler) {
    window.removeEventListener("keydown", currentKeyHandler);
    currentKeyHandler = null;
  }

  const lessonMatch = path.match(/^\/lessons\/(\d+)$/);

  if (lessonMatch) {
    const id = parseInt(lessonMatch[1], 10);
    content.innerHTML = renderLesson(id);
    const idx = lessons.findIndex(l => l.id === id);
    currentKeyHandler = (e) => {
      if (e.key === "ArrowLeft" && idx > 0) navigate(`/lessons/${lessons[idx - 1].id}`);
      if (e.key === "ArrowRight" && idx < lessons.length - 1) navigate(`/lessons/${lessons[idx + 1].id}`);
    };
    window.addEventListener("keydown", currentKeyHandler);
  } else if (path === "/lessons") {
    content.innerHTML = renderLessonIndex();
  } else {
    content.innerHTML = renderHome();
  }
}

// ─── Mobile sidebar toggle ────────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("hamburger").addEventListener("click", () => {
    const sidebar = document.getElementById("sidebar");
    const overlay = document.getElementById("overlay");
    sidebar.classList.toggle("open");
    overlay.classList.toggle("open");
  });
  document.getElementById("overlay").addEventListener("click", () => {
    document.getElementById("sidebar").classList.remove("open");
    document.getElementById("overlay").classList.remove("open");
  });
  window.addEventListener("hashchange", render);
  render();
});

// Expose for inline onclick
window.copyCode = copyCode;
window.navigate = navigate;
