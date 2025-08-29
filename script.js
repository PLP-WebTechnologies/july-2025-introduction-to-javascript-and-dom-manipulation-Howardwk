
// Part 1: Basics


// Variable declarations and data types
let userName = "Guest"; // string
let userScore = 0;      // number
let isLoggedIn = false; // boolean

// Variables, conditionals, and user input
function checkAge() {
  let age = prompt("Enter your age:");
  age = Number(age);

  if (age >= 18) {
    document.getElementById("ageResult").textContent = "✅ You are an adult.";
  } else {
    document.getElementById("ageResult").textContent = "❌ You are under 18.";
  }
  // Output to console for assignment requirement
  console.log(`User age checked: ${age}`);
}


// Part 2: Functions


// Function 1: Calculate total
function calculateTotal(a, b) {
  let total = a + b;
  document.getElementById("totalResult").textContent = `Total: ${total}`;
  return total;
}

// Function 2: Toggle text visibility
function toggleMessage() {
  let text = document.getElementById("toggleText");
  text.style.display = (text.style.display === "none") ? "block" : "none";
}

// Function 3: Format string (additional for assignment)
function formatGreeting(name) {
  return `Hello, ${name}! Welcome to JavaScript Fundamentals.`;
}


// Part 3: Loops


// Loop 1: Show numbers 1–5 using for loop
function showNumbers() {
  let output = "";
  for (let i = 1; i <= 5; i++) {
    output += i + " ";
  }
  document.getElementById("loopResult").textContent = output;
}

// Loop 2: Countdown using while loop
function countdown(start) {
  let result = "";
  let num = start;
  while (num > 0) {
    result += num + " ";
    num--;
  }
  document.getElementById("countdownResult").textContent = result + "🚀";
}

// Loop 3: Array iteration using forEach (additional for assignment)
function showFruits() {
  const fruits = ["🍎", "🍌", "🍇", "🍓"];
  let output = "";
  fruits.forEach(function(fruit) {
    output += fruit + " ";
  });
  alert("Fruits: " + output);
}

// Part 4: DOM Manipulation


// DOM Example 1: Change text
function changeText() {
  document.getElementById("domHeading").textContent = "🎉 Heading Changed!";
}

// DOM Example 2: Add new item to list
function addNewItem() {
  let newItem = document.createElement("li");
  newItem.textContent = "New Item";
  document.getElementById("itemList").appendChild(newItem);
}

// DOM Example 3: Change background color
function changeColor() {
  document.body.style.backgroundColor = 
    document.body.style.backgroundColor === "lightyellow" ? "#f4f4f4" : "lightyellow";
}

// DOM Example 4: Toggle class on heading (additional for assignment)
function toggleHeadingHighlight() {
  let heading = document.getElementById("domHeading");
  heading.classList.toggle("highlight");
}