There is a bug in your function: **`b` is not defined** as a parameter. If you try to run this, it will throw a
`ReferenceError: b is not defined` (unless `b` is already a global variable).

Here are the common ways to fix it depending on what you are trying to achieve:

### 1. Standard function taking two numbers (Most likely)
Pass both `a` and `b` as parameters:

```javascript
// Concise syntax (implicit return)
const sum = (a, b) => a + b;

// Or with curly braces and explicit return
const sum = (a, b) => {
return a + b;
};

console.log(sum(2, 3)); // 5
```

---

### 2. Curried function (if you intended `sum(a)(b)`)
If you wanted to call it like `sum(2)(3)`, return another function:

```javascript
const sum = (a) => (b) => a + b;

console.log(sum(2)(3)); // 5
```