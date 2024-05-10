// Function to render the dashboard based on filtered data
function renderDashboard(filteredData) {
    const dashboard = document.getElementById('dashboard');
    dashboard.innerHTML = '';

    if (!filteredData.length) {
        dashboard.innerHTML = '<p class="text-center">No data available.</p>';
        return;
    }

    filteredData.forEach(aspect => {
        const categoryHeader = document.createElement('div');
        categoryHeader.className = 'category-header';
        categoryHeader.textContent = aspect.Aspect;

        const categoryContent = document.createElement('div');
        categoryContent.className = 'category-content';
        categoryContent.style.display = 'none';

        aspect.Details.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.className = 'item';

            const complianceLevel = item["Compliance Level"];
            const eventType = item["Event Type"];

            const complianceLevelClass = complianceLevel.toLowerCase().replace(' ', '-');
            const eventTypeClass = eventType.toLowerCase().replace('/', '-');

            itemElement.classList.add(complianceLevelClass, eventTypeClass);

            itemElement.innerHTML = `
                <div class="item-header">
                    <span class="compliance-level">${complianceLevel}</span>
                    <span class="event-type">${eventType}</span>
                </div>
                <div class="item-description">${item.Description}</div>
                <div class="item-details">
                    <div class="item-detail why-not-required">${item["Why Not Required"]}</div>
                    <div class="item-detail ada-reference">${item["ADA Reference"]}</div>
                    <div class="item-detail wcag-reference">${item["WCAG Reference"]}</div>
                    <div class="item-detail global-reference">${item["Global Reference"]}</div>
                </div>
            `;

            const itemDetails = itemElement.querySelector('.item-details');
            itemDetails.style.display = 'none';

            itemElement.addEventListener('click', () => {
                itemDetails.style.display = itemDetails.style.display === 'none' ? 'block' : 'none';
            });

            categoryContent.appendChild(itemElement);
        });

        categoryHeader.addEventListener('click', () => {
            categoryContent.style.display = categoryContent.style.display === 'none' ? 'block' : 'none';
            categoryHeader.scrollIntoView({ behavior: 'smooth' });
        });

        dashboard.appendChild(categoryHeader);
        dashboard.appendChild(categoryContent);
    });
}

function filterData(event) {
    event.preventDefault();

    const searchQuery = document.getElementById('search-box').value.toLowerCase();
    const complianceFilter = document.getElementById('compliance-filter').value;
    const eventTypeFilter = document.getElementById('event-type-filter').value;

    const filteredData = data.filter(aspect => {
        const filteredDetails = aspect.Details.filter(item => {
            const matchesCompliance = !complianceFilter || item["Compliance Level"].toLowerCase() === complianceFilter.toLowerCase();
            const matchesEventType = !eventTypeFilter || item["Event Type"].toLowerCase() === eventTypeFilter.toLowerCase();
            const matchesSearch = item.Description.toLowerCase().includes(searchQuery);

            // Check if any word in the search query partially matches the description
            const searchWords = searchQuery.split(' ');
            const partialMatch = searchWords.some(word =>
                item.Description.toLowerCase().includes(word)
            );

            return (matchesCompliance && matchesEventType) || partialMatch;
        });

        return filteredDetails.length > 0 ? {...aspect, Details: filteredDetails} : false;
    });

    renderDashboard(filteredData);
}

document.getElementById('filter-form').addEventListener('submit', filterData);

// Initial render of the dashboard
document.addEventListener('DOMContentLoaded', () => {
    filterData({ preventDefault: () => {} }); // Ensure data is filtered and displayed upon page load
});