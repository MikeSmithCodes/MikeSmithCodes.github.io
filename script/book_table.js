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
        date: "2025-08",
        rating: "⭐⭐⭐⭐"
    },
    {
        title: "The Age of AI",
        author: "Henry A Kissinger, Eric Schmidt, Daniel Huttenlocher",
        date: "2025-08",
        rating: "⭐⭐⭐"
    },
    {
        title: "Mismatch",
        author: "Kat Holmes",
        date: "2025-08",
        rating: "⭐⭐⭐"
    },
    {
        title: "Empire of AI",
        author: "Karen Hao",
        date: "2025-08",
        rating: "⭐⭐⭐⭐"
    },
    {
        title: "Of Boys and Men",
        author: "Richard V. Reeves",
        date: "2025-07",
        rating: "⭐⭐⭐⭐"
    },
    {
        title: "Steve Jobs",
        author: "Walter Isaacson",
        date: "2025-07",
        rating: "⭐⭐⭐⭐⭐"
    },
    {
        title: "Bad Blood",
        author: "John Carreyrou",
        date: "2025-07",
        rating: "⭐⭐⭐⭐"
    },
    {
        title: "Co-Intelligence",
        author: "Ethan Mollick",
        date: "2025-07",
        rating: "⭐⭐⭐"
    },
    {
        title: "Supremacy",
        author: "Parmy Olson",
        date: "2025-07",
        rating: "⭐⭐⭐⭐⭐"
    },
    {
        title: "You Can't Dance to These Rhythms",
        author: "Brian P. Cleary",
        date: "2025-07",
        rating: "⭐⭐"
    },
    {
        title: "Bugs That Make Your Computer Crawl",
        author: "Brian P. Cleary",
        date: "2025-07",
        rating: "⭐⭐"
    },
    {
        title: "The Driving Machine",
        author: "Witold Rybczynski",
        date: "2025-06",
        rating: "⭐⭐⭐"
    },
    {
        title: "Futureproof",
        author: "Kevin Roose",
        date: "2025-06",
        rating: "⭐⭐⭐"
    },
    {
        title: "Walden and On the Duty of Civil Disobedience",
        author: "Henry David Thoreau",
        date: "2025-05",
        rating: "⭐⭐⭐"
    },
    {
        title: "No Rules Rules",
        author: "Reed Hastings, Erin Meyer",
        date: "2025-05",
        rating: "⭐⭐⭐⭐⭐"
    },
    {
        title: "Radical Candor",
        author: "Kim Scott",
        date: "2025-05",
        rating: "⭐⭐⭐⭐⭐"
    },
    {
        title: "The Anxious Generation",
        author: "Jonathan Haidt",
        date: "2025-04",
        rating: "⭐⭐⭐⭐⭐"
    },
    {
        title: "Homo Deus",
        author: "Yuval Noah Harari",
        date: "2025-05",
        rating: "⭐⭐⭐⭐⭐"
    },
    {
        title: "Nexus",
        author: "Yuval Noah Harari",
        date: "2025-06",
        rating: "⭐⭐⭐⭐"
    },
    {
        title: "21 Lessons for the 21st Century",
        author: "Yuval Noah Harari",
        date: "2025-04",
        rating: "⭐⭐⭐⭐⭐"
    },
    {
        title: "Quantum Supremacy",
        author: "Michio Kaku",
        date: "2025-04",
        rating: "⭐⭐⭐"
    },
    {
        title: "When",
        author: "Daniel H. Pink",
        date: "2025-04",
        rating: "⭐⭐⭐⭐"
    },
    {
        title: "Dopamine Nation",
        author: "Anna Lembke",
        date: "2025-04",
        rating: "⭐⭐⭐"
    },
    {
        title: "Brief Answers to the Big Questions",
        author: "Stephen Hawking",
        date: "2025-04",
        rating: "⭐⭐⭐⭐"
    },
    {
        title: "The Order of Time",
        author: "Carlo Rovelli",
        date: "2025-04",
        rating: "⭐⭐⭐⭐⭐"
    },
    {
        title: "Orbital",
        author: "Samantha Harvey",
        date: "2025-04",
        rating: "⭐⭐"
    },
    {
        title: "Die With Zero",
        author: "Bill Perkins",
        date: "2025-04",
        rating: "⭐⭐⭐⭐"
    },
    {
        title: "Gut Check",
        author: "Steven R. Gundry, MD",
        date: "2025-03",
        rating: "⭐⭐⭐"
    },
    {
        title: "Careless People",
        author: "Sarah Wynn-Williams",
        date: "2025-03",
        rating: "⭐⭐⭐"
    },
    {
        title: "How to Be Perfect",
        author: "Michael Schur",
        date: "2025-03",
        rating: "⭐⭐⭐⭐"
    },
    {
        title: "Einstein",
        author: "Walter Isaacson",
        date: "2025-03",
        rating: "⭐⭐⭐⭐"
    },
    {
        title: "The Status Game",
        author: "Will Storr",
        date: "2025-03",
        rating: "⭐⭐"
    },
    {
        title: "Ingredients",
        author: "George Zaidan",
        date: "2025-02",
        rating: "⭐⭐⭐⭐"
    },
    {
        title: "Raising Girls Who Like Themselves",
        author: "Kasey Edwards, Christopher Scanlon",
        date: "2025-02",
        rating: "⭐⭐⭐⭐"
    },
    {
        title: "How to Avoid a Climate Disaster",
        author: "Bill Gates",
        date: "2025-02",
        rating: "⭐⭐⭐⭐⭐"
    },
    {
        title: "The Body",
        author: "Bill Bryson",
        date: "2025-02",
        rating: "⭐⭐⭐⭐"
    },
    {
        title: "Glucose Revolution",
        author: "Jessie Inchauspe",
        date: "2025-02",
        rating: "⭐⭐⭐"
    },
    {
        title: "The Making of Another Major Motion Picture Masterpiece",
        author: "Tom Hanks",
        date: "2025-02",
        rating: "⭐⭐⭐"
    },
    {
        title: "The Woman in Me",
        author: "Britney Spears",
        date: "2025-02",
        rating: "⭐⭐⭐"
    },
    {
        title: "Good to Great"",
        author: "Jim Collins",
        date: "2025-01",
        rating: "⭐⭐⭐⭐"
    },
    {
        title: "Make Your Bed",
        author: "Admiral William H. McRaven",
        date: "2025-01",
        rating: "⭐⭐⭐⭐"
    },
    {
        title: "Leonardo da Vinci",
        author: "Walter Isaacson",
        date: "2025-01",
        rating: "⭐⭐⭐⭐⭐"
    },
    {
        title: "Nietzsche in 90 Minutes",
        author: "Paul Strathern",
        date: "2025-01",
        rating: "⭐⭐⭐"
    },
    {
        title: "The Trump Tapes",
        author: "Bob Woodward",
        date: "2024-12",
        rating: "⭐⭐⭐⭐"
    },
    {
        title: "Plato in 90 Minutes",
        author: "Paul Strathern",
        date: "2024-12",
        rating: "⭐⭐"
    },
    {
        title: "Brain Energy",
        author: "Christopher M. Palmer",
        date: "2024-12",
        rating: "⭐⭐⭐"
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
                // Convert string dates to numbers for correct sorting
                comparison = parseInt(a[currentSortColumn]) - parseInt(b[currentSortColumn]);
                break;
            case 'rating':
                // Compare ratings by the length of the star string
                comparison = a.rating.length - b.rating.length;
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
