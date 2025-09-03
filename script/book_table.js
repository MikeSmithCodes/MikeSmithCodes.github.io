const hamburger = document.querySelector(".hamburger-menu");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Book data
const books = [
    {
        title: "Internet for the People",
        author: "Ben Tarnoff",
        date: "2025",
        rating: "⭐⭐⭐⭐"
    },
    {
        title: "The Age of A.I. and Our Human Future",
        author: "Kissinger, Schmidt, Huttenlocher",
        date: "2025",
        rating: "⭐⭐⭐"
    },
    {
        title: "Plato in 90 Minutes",
        author: "Paul Strathern",
        date: "2024",
        rating: "⭐⭐"
    },
    {
        title: "Brain Energy",
        author: "Christopher M. Palmer",
        date: "2024",
        rating: "⭐⭐⭐"
    }
];

// Get DOM elements
const sortTitleHeader = document.getElementById('sort-title');
const sortAuthorHeader = document.getElementById('sort-author');
const sortDateHeader = document.getElementById('sort-date');
const sortRatingrHeader = document.getElementById('sort-rating');
const tableBody = document.getElementById('books-table-body');
const allSortIndicators = document.querySelectorAll('.sort-indicator');

// State variables for sorting
let currentSortColumn = 'title'; // Default sort column
let sortDirection = 'asc'; // Default sort direction

// Sort books based on current state
function sortBooks(filteredBooks) {
    filteredBooks.sort((a, b) => {
        let comparison = 0;
        if (currentSortColumn === 'title') {
            comparison = a.title.localeCompare(b.title);
        } else if (currentSortColumn === 'author') {
            comparison = a.author.localeCompare(b.author);
        } else if (currentSortColumn === 'date') {
            comparison = a.date.localeCompare(b.date);
        } else if (currentSortColumn === 'rating') {
            comparison = a.rating.localeCompare(b.rating);
        }

        return sortDirection === 'asc' ? comparison : -comparison;
    });
}

// Render table rows
function renderTable(booksToRender) {
    tableBody.innerHTML = ''; // Clear existing rows
    if (booksToRender.length === 0) {
        const noResultsRow = document.createElement('tr');
        noResultsRow.innerHTML = `<td colspan="3">No books found.</td>`;
        tableBody.appendChild(noResultsRow);
    } else {
        booksToRender.forEach(book => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td><a href="${book.url}">${book.name}</a></td>
                <td>${book.language}</td>
                <td>${book.date}</td>
            `;
            tableBody.appendChild(row);
        });
    }
}

// Update sort indicators on table headers
function updateSortIndicators() {
    allSortIndicators.forEach(indicator => indicator.innerHTML = '');
    const currentHeader = document.getElementById(`sort-${currentSortColumn}`);
    if (currentHeader) {
        const indicator = currentHeader.querySelector('.sort-indicator');
        indicator.innerHTML = sortDirection === 'asc' ? '&#x25B2;' : '&#x25BC;';
    }
}

// Main function to filter, sort, and render the table
function updateTable() {
    // 1. Sort the filtered books
    sortBooks(filteredBooks);

    // 2. Render the books to the table
    renderTable(filteredBooks);

    // 3. Update the visual sort indicators
    updateSortIndicators();
}

sortTitleHeader.addEventListener('click', () => {
    if (currentSortColumn === 'title') {
        sortDirection = sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
        currentSortColumn = 'title';
        sortDirection = 'asc';
    }
    updateTable();
});

sortAuthorHeader.addEventListener('click', () => {
    if (currentSortColumn === 'author') {
        sortDirection = sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
        currentSortColumn = 'author';
        sortDirection = 'asc';
    }
    updateTable();
});

sortDateHeader.addEventListener('click', () => {
    if (currentSortColumn === 'date') {
        sortDirection = sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
        currentSortColumn = 'date';
        sortDirection = 'asc';
    }
    updateTable();
});

sortRatingHeader.addEventListener('click', () => {
    if (currentSortColumn === 'rating') {
        sortDirection = sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
        currentSortColumn = 'rating';
        sortDirection = 'asc';
    }
    updateTable();
});

// Initial setup
document.addEventListener('DOMContentLoaded', () => {
    updateTable();
});
