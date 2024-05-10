// Assuming 'data' is an array of objects imported from 'data.js'
document.addEventListener('DOMContentLoaded', function() {
    renderDashboard(data); // Initial rendering of the dashboard
    setUpEventListeners(); // Set up filter and search event listeners
});

function renderDashboard(filteredData) {
    const dashboard = document.getElementById('dashboard');
    dashboard.innerHTML = ''; // Clear existing content

    if (!filteredData.length) {
        dashboard.innerHTML = '<p class="text-center">No data available.</p>';
        return;
    }

    filteredData.forEach(aspect => {
        const categoryHeader = document.createElement('h3');
        categoryHeader.textContent = aspect.Aspect;
        categoryHeader.className = 'category-header';

        const categoryContent = document.createElement('div');
        categoryContent.className = 'category-content';
        categoryContent.style.display = 'none'; // Initially hidden

        aspect.Details.forEach(detail => {
            const detailElement = document.createElement('div');
            detailElement.className = 'detail-item';
            detailElement.innerHTML = `<strong>${detail["Compliance Level"]}</strong>: ${detail.Description} - <em>${detail["Event Type"]}</em>`;
            categoryContent.appendChild(detailElement);
        });

        categoryHeader.addEventListener('click', () => {
            categoryContent.style.display = categoryContent.style.display === 'none' ? 'block' : 'none';
        });

        dashboard.appendChild(categoryHeader);
        dashboard.appendChild(categoryContent);
    });
}

function filterData() {
    const searchQuery = document.getElementById('search-box').value.toLowerCase();
    const complianceFilter = document.getElementById('compliance-filter').value;
    const eventTypeFilter = document.getElementById('event-type-filter').value;

    const filteredData = data.filter(aspect => {
        return aspect.Details.some(detail => {
            const matchesCompliance = !complianceFilter || detail["Compliance Level"] === complianceFilter;
            const matchesEventType = !eventTypeFilter || detail["Event Type"] === eventTypeFilter;
            const matchesSearch = detail.Description.toLowerCase().includes(searchQuery);
            return matchesCompliance && matchesEventType && matchesSearch;
        });
    });

    renderDashboard(filteredData);
}

function setUpEventListeners() {
    document.getElementById('compliance-filter').addEventListener('change', filterData);
    document.getElementById('event-type-filter').addEventListener('change', filterData);
    document.getElementById('search-box').addEventListener('input', filterData);
}
