// =============================================
// 🎯 PART 1: JAVASCRIPT BASICS
// Variables, Data Types, Operators, Conditionals
// =============================================

/**
 * Check age category based on user input
 * Demonstrates variables, conditionals, and DOM output
 */
function checkAgeCategory() {
    // Get user input from DOM
    const ageInput = document.getElementById('userAge');
    const age = parseInt(ageInput.value);
    const resultDiv = document.getElementById('ageResult');
    
    // Input validation
    if (isNaN(age) || age < 0 || age > 120) {
        resultDiv.innerHTML = '<span style="color: red;">Please enter a valid age (0-120)</span>';
        return;
    }
    
    // Conditional logic to determine age category
    let category;
    let color;
    
    if (age < 13) {
        category = "Child";
        color = "green";
    } else if (age >= 13 && age <= 19) {
        category = "Teenager";
        color = "blue";
    } else if (age >= 20 && age <= 64) {
        category = "Adult";
        color = "purple";
    } else {
        category = "Senior";
        color = "orange";
    }
    
    // Output result to DOM
    resultDiv.innerHTML = `
        <span style="color: ${color}; font-weight: bold;">
        At ${age} years old, you are a <strong>${category}</strong>
        </span>
    `;
}

/**
 * Check if a number is positive, negative, or zero
 * Demonstrates comparison operators and multiple conditions
 */
function checkNumberType() {
    const numberInput = document.getElementById('userNumber');
    const number = parseFloat(numberInput.value);
    const resultDiv = document.getElementById('numberResult');
    
    if (isNaN(number)) {
        resultDiv.innerHTML = '<span style="color: red;">Please enter a valid number</span>';
        return;
    }
    
    let message;
    let emoji;
    
    // Complex conditional logic
    if (number > 0) {
        message = "positive";
        emoji = "📈";
    } else if (number < 0) {
        message = "negative";
        emoji = "📉";
    } else {
        message = "zero";
        emoji = "⚪";
    }
    
    // Additional check for even/odd (if integer)
    let evenOdd = "";
    if (Number.isInteger(number) && number !== 0) {
        evenOdd = number % 2 === 0 ? " (even)" : " (odd)";
    }
    
    resultDiv.innerHTML = `
        <span style="color: #2c3e50;">
        ${emoji} The number <strong>${number}</strong> is <strong>${message}${evenOdd}</strong>
        </span>
    `;
}

// =============================================
// ❤️ PART 2: JAVASCRIPT FUNCTIONS
// Reusable blocks of logic
// =============================================

/**
 * Calculate total price with tax
 * Demonstrates function parameters, return values, and calculations
 */
function calculateTotal() {
    const price = parseFloat(document.getElementById('price').value);
    const taxRate = parseFloat(document.getElementById('taxRate').value);
    const resultDiv = document.getElementById('totalResult');
    
    // Input validation using a helper function
    if (!validateFinancialInputs(price, taxRate)) {
        resultDiv.innerHTML = '<span style="color: red;">Please enter valid positive numbers</span>';
        return;
    }
    
    // Calculate using helper functions
    const taxAmount = calculateTax(price, taxRate);
    const total = price + taxAmount;
    
    // Format currency using another helper function
    const formattedPrice = formatCurrency(price);
    const formattedTax = formatCurrency(taxAmount);
    const formattedTotal = formatCurrency(total);
    
    resultDiv.innerHTML = `
        <div style="background: #e8f5e8; padding: 1rem; border-radius: 4px;">
            <strong>Price:</strong> ${formattedPrice}<br>
            <strong>Tax (${taxRate}%):</strong> ${formattedTax}<br>
            <strong style="font-size: 1.2em; color: #27ae60;">Total: ${formattedTotal}</strong>
        </div>
    `;
}

/**
 * Helper function to calculate tax amount
 */
function calculateTax(price, taxRate) {
    return price * (taxRate / 100);
}

/**
 * Helper function to format numbers as currency
 */
function formatCurrency(amount) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(amount);
}

/**
 * Helper function to validate financial inputs
 */
function validateFinancialInputs(price, taxRate) {
    return !isNaN(price) && !isNaN(taxRate) && price >= 0 && taxRate >= 0;
}

/**
 * Format and display text with various transformations
 * Demonstrates string manipulation functions
 */
function formatAndDisplayText() {
    const textInput = document.getElementById('textInput');
    const originalText = textInput.value.trim();
    const resultDiv = document.getElementById('textResult');
    
    if (!originalText) {
        resultDiv.innerHTML = '<span style="color: red;">Please enter some text</span>';
        return;
    }
    
    // Use multiple string transformation functions
    const upperCase = transformToUpperCase(originalText);
    const lowerCase = transformToLowerCase(originalText);
    const capitalized = capitalizeWords(originalText);
    const reversed = reverseString(originalText);
    const wordCount = countWords(originalText);
    
    resultDiv.innerHTML = `
        <div style="background: #e3f2fd; padding: 1rem; border-radius: 4px;">
            <strong>Original:</strong> "${originalText}"<br>
            <strong>Uppercase:</strong> ${upperCase}<br>
            <strong>Lowercase:</strong> ${lowerCase}<br>
            <strong>Capitalized:</strong> ${capitalized}<br>
            <strong>Reversed:</strong> ${reversed}<br>
            <strong>Word Count:</strong> ${wordCount} words
        </div>
    `;
}

// String transformation functions
function transformToUpperCase(text) {
    return text.toUpperCase();
}

function transformToLowerCase(text) {
    return text.toLowerCase();
}

function capitalizeWords(text) {
    return text.replace(/\b\w/g, char => char.toUpperCase());
}

function reverseString(text) {
    return text.split('').reverse().join('');
}

function countWords(text) {
    return text.split(/\s+/).filter(word => word.length > 0).length;
}

// =============================================
// 🔁 PART 3: JAVASCRIPT LOOPS
// Repetition and iteration
// =============================================

/**
 * Generate multiplication table using for loop
 * Demonstrates nested loops and string building
 */
function generateMultiplicationTable() {
    const resultDiv = document.getElementById('multiplicationTable');
    let tableHTML = '<h4>Multiplication Table (1-5)</h4><div style="display: grid; grid-template-columns: repeat(6, 1fr); gap: 5px; text-align: center;">';
    
    // Header row
    tableHTML += '<div style="font-weight: bold; background: #3498db; color: white; padding: 0.5rem;">×</div>';
    for (let i = 1; i <= 5; i++) {
        tableHTML += `<div style="font-weight: bold; background: #3498db; color: white; padding: 0.5rem;">${i}</div>`;
    }
    
    // Table body using nested loops
    for (let i = 1; i <= 5; i++) {
        tableHTML += `<div style="font-weight: bold; background: #3498db; color: white; padding: 0.5rem;">${i}</div>`;
        for (let j = 1; j <= 5; j++) {
            const product = i * j;
            const backgroundColor = product % 2 === 0 ? '#a8e6cf' : '#dcedc1';
            tableHTML += `<div style="background: ${backgroundColor}; padding: 0.5rem;">${product}</div>`;
        }
    }
    
    tableHTML += '</div>';
    resultDiv.innerHTML = tableHTML;
}

/**
 * Process student grades using while loop
 * Demonstrates array iteration and while loop
 */
function processStudentGrades() {
    const resultDiv = document.getElementById('gradesResult');
    
    // Sample student data
    const students = [
        { name: "Alice", grade: 85 },
        { name: "Bob", grade: 92 },
        { name: "Charlie", grade: 78 },
        { name: "Diana", grade: 96 },
        { name: "Ethan", grade: 88 }
    ];
    
    let index = 0;
    let output = '<h4>Student Grade Analysis</h4><ul>';
    let total = 0;
    
    // Process students using while loop
    while (index < students.length) {
        const student = students[index];
        total += student.grade;
        
        let gradeClass;
        if (student.grade >= 90) gradeClass = 'excellent';
        else if (student.grade >= 80) gradeClass = 'good';
        else if (student.grade >= 70) gradeClass = 'average';
        else gradeClass = 'needs-improvement';
        
        output += `<li class="${gradeClass}">${student.name}: ${student.grade}%</li>`;
        index++;
    }
    
    const average = total / students.length;
    output += `</ul><strong>Class Average: ${average.toFixed(1)}%</strong>`;
    resultDiv.innerHTML = output;
}

/**
 * Create a countdown timer using setInterval (simulated loop)
 * Demonstrates timing and dynamic updates
 */
function startCountdown() {
    const resultDiv = document.getElementById('countdownResult');
    let countdown = 10;
    
    resultDiv.innerHTML = `<div style="text-align: center; font-size: 1.5em; color: #e74c3c;">Starting in... ${countdown}</div>`;
    
    const countdownInterval = setInterval(() => {
        countdown--;
        resultDiv.innerHTML = `<div style="text-align: center; font-size: 1.5em; color: #e74c3c;" class="pulse">${countdown > 0 ? countdown : 'GO!'}</div>`;
        
        if (countdown === 0) {
            clearInterval(countdownInterval);
            setTimeout(() => {
                resultDiv.innerHTML = '<div style="text-align: center; color: #27ae60; font-weight: bold;">Countdown completed! 🎉</div>';
            }, 1000);
        }
    }, 1000);
}

// =============================================
// 🌐 PART 4: DOM MANIPULATION
// Interactive web page elements
// =============================================

/**
 * Toggle between light and dark themes
 * Demonstrates CSS variable manipulation and class toggling
 */
function toggleTheme() {
    const body = document.body;
    const currentTheme = body.getAttribute('data-theme');
    const themeToggle = document.getElementById('themeToggle');
    
    if (currentTheme === 'dark') {
        body.removeAttribute('data-theme');
        themeToggle.innerHTML = '🌙 Toggle Dark Mode';
        themeToggle.style.background = '#3498db';
    } else {
        body.setAttribute('data-theme', 'dark');
        themeToggle.innerHTML = '☀️ Toggle Light Mode';
        themeToggle.style.background = '#f39c12';
    }
}

/**
 * Add new item to the list
 * Demonstrates dynamic element creation and insertion
 */
function addNewItem() {
    const itemList = document.getElementById('itemList');
    const itemCount = itemList.children.length + 1;
    
    // Create new list item
    const newItem = document.createElement('li');
    newItem.textContent = `Dynamic item ${itemCount} - Added at ${new Date().toLocaleTimeString()}`;
    
    // Add click event to remove the item
    newItem.addEventListener('click', function() {
        this.remove();
        showNotification('Item removed!');
    });
    
    // Add hover effect through JavaScript
    newItem.addEventListener('mouseenter', function() {
        this.style.transform = 'translateX(10px)';
    });
    
    newItem.addEventListener('mouseleave', function() {
        this.style.transform = 'translateX(0)';
    });
    
    itemList.appendChild(newItem);
    showNotification('New item added!');
}

/**
 * Remove the last item from the list
 * Demonstrates element removal and DOM traversal
 */
function removeLastItem() {
    const itemList = document.getElementById('itemList');
    
    if (itemList.children.length > 0) {
        const lastItem = itemList.lastElementChild;
        lastItem.style.animation = 'fadeOut 0.3s ease-out';
        
        setTimeout(() => {
            lastItem.remove();
            showNotification('Last item removed!');
        }, 300);
    } else {
        showNotification('No items to remove!', 'error');
    }
}

/**
 * Change the header text dynamically
 * Demonstrates text content manipulation
 */
function changeHeaderText() {
    const header = document.getElementById('dynamicHeader');
    const newText = prompt('Enter new header text:', header.textContent);
    
    if (newText && newText.trim() !== '') {
        header.textContent = newText;
        header.style.color = getRandomColor();
        showNotification('Header updated!');
    }
}

/**
 * Initialize color box click handler
 * Demonstrates event delegation and style manipulation
 */
document.addEventListener('DOMContentLoaded', function() {
    const colorBox = document.getElementById('colorBox');
    
    colorBox.addEventListener('click', function() {
        this.style.backgroundColor = getRandomColor();
        this.querySelector('p').textContent = 'Color changed! Click me again!';
        this.style.transform = 'scale(1.05)';
        
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 200);
    });
});

// =============================================
// 🛠️ UTILITY FUNCTIONS
// Helper functions for DOM manipulation
// =============================================

/**
 * Show temporary notification message
 */
function showNotification(message, type = 'success') {
    // Remove existing notification
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create new notification
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#27ae60' : '#e74c3c'};
        color: white;
        padding: 1rem 2rem;
        border-radius: 4px;
        box-shadow: 0 2px 10px rgba(0,0,0,0.3);
        z-index: 1000;
        animation: slideIn 0.3s ease-out;
    `;
    
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-in';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

/**
 * Generate random color
 */
function getRandomColor() {
    const colors = ['#3498db', '#e74c3c', '#27ae60', '#f39c12', '#9b59b6', '#1abc9c'];
    return colors[Math.floor(Math.random() * colors.length)];
}

// Add CSS animations for notifications
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
    
    @keyframes fadeOut {
        from { opacity: 1; transform: translateX(0); }
        to { opacity: 0; transform: translateX(-100%); }
    }
    
    .excellent { color: #27ae60; font-weight: bold; }
    .good { color: #3498db; }
    .average { color: #f39c12; }
    .needs-improvement { color: #e74c3c; }
`;
document.head.appendChild(style);