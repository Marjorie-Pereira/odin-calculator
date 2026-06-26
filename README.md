# 🧮 Odin Calculator

An interactive, responsive web calculator application focused on precise DOM manipulation, control flow, and state management using pure JavaScript.

This project was developed as part of **The Odin Project** foundations curriculum.

---

## 🚀 Skills Demonstrated in this Project

More than just a simple calculator, this project reflects the practical application of core software engineering and front-end development principles:

### 🧠 Programming Logic & State Management
*   **Architecture & Flow Control:** Implemented logic to dynamically switch between capturing the first operand, the operator, and the second operand using the text display.
*   **Edge Case Handling:** Managed system behavior for critical scenarios, preventing division-by-zero crashes and blocking unexpected behaviors when multiple operators are clicked in sequence.
*   **Data Type Manipulation:** Strategic use of the `Number` object alongside string parsing methods like `.split()`, `.trim()`, and `.replace()` to ensure mathematical integrity.

### 💻 Front-End Engineering (Vanilla JavaScript)
*   **Advanced DOM Manipulation:** Real-time interface updates capturing UI events via `querySelectorAll`, dynamic click listeners, and manipulating text properties (`textContent`) and styles (`style.display`).
*   **Interface Algorithms:** Created smart visual formatting logic, using methods like `padStart` to automatically inject proper spacing and maintain mathematical readability for the user.
*   **Clean Code & Modularization:** Segregated responsibilities into single-purpose functions (Pure Functions such as `add`, `subtract`, `multiply`, and `divide` isolated from rendering logic).

### 🎨 UI/UX & Responsive Design
*   **Instant Visual Feedback:** Immediate updates for both the operation history display and the final result.
*   **Precise CSS Layout:** Built a clean, modern, and intuitive interface, ensuring the keypad and display adapt seamlessly to screens of various sizes.

---

## 🛠️ Technologies Used

*   **HTML5:** Semantic structuring of the calculator layout.
*   **CSS3:** Modern styling, layout alignment (Flexbox/Grid), and responsive design.
*   **JavaScript (ES6+):** Business logic, DOM manipulation, and function scoping.

---

## 💡 Features

*   Basic mathematical operations: Addition, Subtraction, Multiplication, and Division.
*   Operation chaining without losing the previous results.
*   Automatic decimal rounding to two decimal places (`.toFixed(2)`).
*   User-friendly error handling for division by zero.
*   `Clear` button to completely reset the calculator's state.

---

## 🔧 How to Run the Project

1. Clone this repository:
   ```bash
   git clone [https://github.com/Marjorie-Pereira/odin-calculator.git](https://github.com/Marjorie-Pereira/odin-calculator.git)
