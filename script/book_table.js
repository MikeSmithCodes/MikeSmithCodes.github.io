// This script manages a responsive navigation menu and a sortable table of books.

// --- Navigation Menu Functionality ---
const hamburger = document.querySelector(".hamburger-menu");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// --- Book Data and Table Management ---
const books = [
    {
        title: "Internet for the People",
        author: "Ben Tarnoff",
        date: "2025",
        rating: "4"
    },
    {
        title: "The Age of A.I. and Our Human Future",
        author: "Kissinger, Schmidt, Huttenlocher",
        date: "2025",
        rating: "3"
    },
    {
        title: "Plato in 90 Minutes",
        author: "Paul Strathern",
        date: "2024",
        rating: "2"
    },
    {
        title: "Brain Energy",
        author: "Christopher M. Palmer",
        date: "2024",
        rating: "3"
    }
];

// Get DOM elements for sorting and rendering
const tableBody = document.getElementById('books-table-body');
const allSortIndicators = document.querySelectorAll('.sort-indicator');
const sortableHeaders = document.querySelectorAll('[data-sort-by]'); // Using data attributes

// State variables for sorting
let currentSortColumn = 'title'; // Default sort column
let sortDirection = 'asc'; // Default sort direction

/**
 * Sorts an array of books based on the global state variables `currentSortColumn` and `sortDirection`.
 * Mutates the provided array in-place.
 * @param {Array} booksToSort - The array of book objects to sort.
 */
function sortBooks(booksToSort) {
    booksToSort.sort((a, b) => {
        let comparison = 0;
        
        switch (currentSortColumn) {
            case 'title':
            case 'author':
                comparison = a[currentSortColumn].localeCompare(b[currentSortColumn]);
                break;
            case 'date':
            case 'rating':
                // Convert string dates/ratings to numbers for correct sorting
                comparison = parseInt(a[currentSortColumn]) - parseInt(b[currentSortColumn]);
                break;
        }

        // Apply sort direction
        return sortDirection === 'asc' ? comparison : -comparison;
    });
}

/**
 * Renders the provided array of book objects into the HTML table.
 * Clears the existing table body before rendering new rows.
 * @param {Array} booksToRender - The array of book objects to display.
 */
function renderTable(booksToRender) {
    tableBody.innerHTML = ''; // Clear existing rows

    if (booksToRender.length === 0) {
        const noResultsRow = document.createElement('tr');
        noResultsRow.innerHTML = `<td colspan="4">No books found.</td>`;
        tableBody.appendChild(noResultsRow);
    } else {
        booksToRender.forEach(book => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${book.title}</td>
                <td>${book.author}</td>
                <td>${book.date}</td>
                <td>${book.rating}</td>
            `;
            tableBody.appendChild(row);
        });
    }
}

/**
 * Updates the visual sort indicators (up or down arrows) in the table headers
 * based on the current sort state.
 */
function updateSortIndicators() {
    allSortIndicators.forEach(indicator => indicator.innerHTML = '');

    const currentHeader = document.querySelector(`[data-sort-by="${currentSortColumn}"]`);
    if (currentHeader) {
        const indicator = currentHeader.querySelector('.sort-indicator');
        indicator.innerHTML = sortDirection === 'asc' ? '&#x25B2;' : '&#x25BC;';
    }
}

/**
 * The main function that orchestrates the filtering, sorting, and rendering of the book table.
 * This is the core logic that is called whenever the table needs to be updated.
 */
function updateTable() {
    // FIX: A copy of the original books array is used to prevent mutation.
    const booksToDisplay = [...books];

    // 1. Sort the books
    sortBooks(booksToDisplay);

    // 2. Render the books to the table
    renderTable(booksToDisplay);

    // 3. Update the visual sort indicators
    updateSortIndicators();
}

// Attach a single event listener to all sortable headers using data attributes.
sortableHeaders.forEach(header => {
    header.addEventListener('click', (event) => {
        const sortColumn = event.currentTarget.dataset.sortBy;
        
        // If clicking the same column, toggle sort direction
        if (currentSortColumn === sortColumn) {
            sortDirection = sortDirection === 'asc' ? 'desc' : 'asc';
        } else {
            // Otherwise, switch to the new column and set direction to ascending
            currentSortColumn = sortColumn;
            sortDirection = 'asc';
        }
        updateTable();
    });
});

// Initial setup to render the table when the page loads
document.addEventListener('DOMContentLoaded', () => {
    updateTable();
});
