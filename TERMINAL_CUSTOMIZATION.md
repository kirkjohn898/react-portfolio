# 🎬 LOOPING TERMINAL - QUICK START

## What Is The Looping Terminal?

A professional terminal effect that:
✓ Types one programming language at a time
✓ Shows it for 5 seconds
✓ Deletes it smoothly
✓ Moves to the next language
✓ Loops infinitely

## Languages In The Loop

1. React
2. PHP
3. JavaScript
4. Java
5. C#
6. C
7. MySQL
8. Python

## How To Customize

### Change The Languages

Edit: `src/components/Terminal.js`

Find this section:

```javascript
const languages = [
  "React",
  "PHP",
  "JavaScript",
  "Java",
  "C#",
  "C",
  "MySQL",
  "Python",
];
```

Replace with your languages:

```javascript
const languages = ["Your Language 1", "Your Language 2", "Your Language 3"];
```

### Change The Timing

In `Terminal.js`, find these timings:

**Typing speed** (80ms = fast):

```javascript
}, 80);  // Lower = faster, Higher = slower
```

**Delete speed** (50ms = fast):

```javascript
}, 50);  // Lower = faster, Higher = slower
```

**Display time** (5000ms = 5 seconds):

```javascript
}, 5000);  // Time to show each language
```

### Change Colors

Edit: `src/styles/Terminal.css`

Find `.typing-line .terminal-text`:

```css
color: #ffd700; /* Yellow - change this */
font-weight: bold;
font-size: 1.2rem;
```

## Example: Make It Slower

Want it slower? Edit timings:

```javascript
}, 150);  // Slower typing
}, 100);  // Slower deleting
}, 8000); // Show for 8 seconds
```

## Example: Add More Languages

```javascript
const languages = [
  "React",
  "PHP",
  "JavaScript",
  "Java",
  "C#",
  "C",
  "MySQL",
  "Python",
  "TypeScript",
  "Node.js",
  "MongoDB",
  "PostgreSQL",
];
```

## Example: Change Color To Green

In `Terminal.css`, change:

```css
color: #66bb6a; /* Green */
```

Or any color:

- Blue: #64b5f6
- Red: #ff5f56
- Green: #66bb6a
- Gold: #ffd700
- Cyan: #4dd0e1

## Where Is It Shown?

The terminal appears on the **HOME PAGE** at: http://localhost:3000

---

That's it! Your looping terminal is ready to impress visitors! 🚀
