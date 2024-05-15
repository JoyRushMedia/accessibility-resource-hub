document.addEventListener('DOMContentLoaded', function() {
  setUpEventListeners();

  // Add event listener for the search input in the laws page
  document.getElementById('search-laws').addEventListener('input', searchLaws);
});

function setUpEventListeners() {
  document.getElementById('search-laws').addEventListener('input', searchLaws);
  document.getElementById('region-filter').addEventListener('change', filterLaws);
}

function searchLaws() {
  const input = document.getElementById('search-laws');
  const filter = input.value.toLowerCase();
  const laws = document.getElementById('laws-list').getElementsByClassName('law');
  
  for (let i = 0; i < laws.length; i++) {
    const law = laws[i];
    const text = law.textContent || law.innerText;
    if (text.toLowerCase().indexOf(filter) > -1) {
      law.style.display = "";
    } else {
      law.style.display = "none";
    }
  }
}

function filterLaws() {
  const regionFilter = document.getElementById('region-filter').value;
  const laws = document.getElementById('laws-list').getElementsByClassName('law');
  
  for (let i = 0; i < laws.length; i++) {
    const law = laws[i];
    const region = law.querySelector('p').textContent.toLowerCase();
    if (regionFilter === "" || region.includes(regionFilter.toLowerCase())) {
      law.style.display = "";
    } else {
      law.style.display = "none";
    }
  }
}

function toggleDetails(element) {
  const lawDetails = element.nextElementSibling;
  lawDetails.style.display = lawDetails.style.display === 'none' ? 'block' : 'none';
}

