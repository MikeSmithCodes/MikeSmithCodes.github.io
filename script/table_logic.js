const hamburger = document.querySelector(".hamburger-menu");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Project data
const projects = [
    {
        name: "Winston: Virtual Assistant",
        url: "https://mikesmith.space/projects/winston",
        language: "Python",
        date: "2024-03-15"
    },
    {
        name: "E-commerce Website",
        url: "#",
        language: "JavaScript",
        date: "2023-11-20"
    },
    {
        name: "Weather App",
        url: "#",
        language: "Java",
        date: "2024-01-05"
    },
    {
        name: "Portfolio Site",
        url: "#",
        language: "HTML",
        date: "2023-09-01"
    }
];

// Get DOM elements
const languageFilter = document.getElementById('language-filter');
const sortNameHeader = document.getElementById('sort-name');
const sortDateHeader = document.getElementById('sort-date');
const tableBody = document.getElementById('projects-table-body');
const allSortIndicators = document.querySelectorAll('.sort-indicator');

// State variables for sorting
let currentSortColumn = 'name'; // Default sort column
let sortDirection = 'asc'; // Default sort direction

// Populate language filter options
function populateLanguageFilter() {
    const languages = new Set();
    projects.forEach(project => languages.add(project.language));
    languages.forEach(language => {
        const option = document.createElement('option');
        option.value = language;
        option.textContent = language;
        languageFilter.appendChild(option);
    });
}

// Sort projects based on current state
function sortProjects(filteredProjects) {
    filteredProjects.sort((a, b) => {
        let comparison = 0;
        if (currentSortColumn === 'name') {
            comparison = a.name.localeCompare(b.name);
        } else if (currentSortColumn === 'date') {
            // Dates are in YYYY-MM-DD format, so direct string comparison works
            comparison = a.date.localeCompare(b.date);
        }

        return sortDirection === 'asc' ? comparison : -comparison;
    });
}

// Render table rows
function renderTable(projectsToRender) {
    tableBody.innerHTML = ''; // Clear existing rows
    if (projectsToRender.length === 0) {
        const noResultsRow = document.createElement('tr');
        noResultsRow.innerHTML = `<td colspan="3">No projects found.</td>`;
        tableBody.appendChild(noResultsRow);
    } else {
        projectsToRender.forEach(project => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td><a href="${project.url}">${project.name}</a></td>
                <td>${project.language}</td>
                <td>${project.date}</td>
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
    // 1. Filter projects based on the selected language
    const selectedLanguage = languageFilter.value;
    const filteredProjects = projects.filter(project => {
        return selectedLanguage === 'all' || project.language === selectedLanguage;
    });

    // 2. Sort the filtered projects
    sortProjects(filteredProjects);

    // 3. Render the projects to the table
    renderTable(filteredProjects);

    // 4. Update the visual sort indicators
    updateSortIndicators();
}

// Add event listeners
languageFilter.addEventListener('change', updateTable);

sortNameHeader.addEventListener('click', () => {
    if (currentSortColumn === 'name') {
        sortDirection = sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
        currentSortColumn = 'name';
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

// Initial setup
document.addEventListener('DOMContentLoaded', () => {
    populateLanguageFilter();
    updateTable();
});
