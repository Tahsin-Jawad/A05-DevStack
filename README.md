# Dev Stack - Technology Stack Builder

Dev Stack is a modern, interactive web application built with React, TypeScript, Tailwind CSS, and DaisyUI. It allows users to explore various software technologies, filter them by categories, view detailed metrics, and interactively build their customized development stack with real-time feedback using Toast notifications.

## 🚀 Live Demo & Repository
- **Live Demo:** https://a05-dev-stack-hgja.vercel.app
- **GitHub Repository:** https://github.com/Tahsin-Jawad/A05-DevStack

---

## 🛠️ Technologies Used
- **Frontend Framework:** React (with Vite)
- **Language:** TypeScript
- **Styling Framework:** Tailwind CSS & DaisyUI
- **Notifications:** React-Toastify
- **Icons:** SVG & CDN Fallbacks

---

## ✨ Features
1. **Explore Technologies:** Browse through a curated list of popular frontend, backend, database, styling, and DevOps tools.
2. **Category Filtering:** Filter technology cards dynamically based on categories (e.g., Frontend, Backend, Database).
3. **Interactive Stack Builder:** Add technologies to your personal stack sidebar with immediate feedback.
4. **Duplicate Prevention:** Toast warning notifications prevent adding duplicate items to your stack.
5. **Interactive Controls:** Remove individual technologies from the sidebar or clear the entire stack with one click.
6. **Toast Notifications:** Real-time feedback for adding, repeating, or removing items using `react-toastify`.
7. **Responsive Design:** Fully responsive dark-themed UI matching modern developer aesthetics.

---

## ❓ Viva Questions & Answers

### 1. What is the difference between `map()`, `filter()`, and `forEach()` in JavaScript/React?
- **`map()`:** Transforms each element of an array by executing a callback function and returns a **new array** of the same length. Ideal for rendering lists in React JSX.
- **`filter()`:** Evaluates each element against a conditional test and returns a **new array** containing only the elements that satisfy the condition.
- **`forEach()`:** Iterates over each item to perform side effects (like logging or updating external variables). It **does not return** any value (`undefined`).

### 2. What are React Props and State? How do they differ?
- **Props (Properties):** Read-only data passed from a parent component down to a child component. They are immutable within the receiver component.
- **State:** Internal dynamic data managed within a component using hooks like `useState`. When state updates, React re-renders the component to reflect changes in the UI.

### 3. How does `useState()` work in React, and why can't we mutate state directly?
- `useState()` is a React Hook that declares a state variable and a updater function (e.g., `const [stack, setStack] = useState([])`).
- Direct mutation (e.g., `stack.push(item)`) does not trigger a re-render because React checks object/array memory references to detect changes. Calling the updater function (e.g., `setStack([...stack, item])`) creates a new reference, notifying React to re-render the updated UI properly.