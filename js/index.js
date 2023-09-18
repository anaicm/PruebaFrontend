window.onload = function() {

    const searchInput = document.getElementsByClassName('search-input');
    const resultsList = document.getElementById('results');

    const jsonData = [{
            "id": 1,
            "name": "Mancuernas"
        },
        {
            "id": 2,
            "name": "Eliptica"
        },
        {
            "id": 3,
            "name": "Barra"
        },
    ];

    function displayResults(query) {
        resultsList.innerHTML = '';

        const filteredData = jsonData.filter(item => item.name.toLowerCase().includes(query.toLowerCase()));

        filteredData.forEach(item => {
            const div = document.createElement('div');
            div.textContent = item.name;
            resultsList.appendChild(div);
        });

        if (filteredData.length === 0 || query === '') {
            resultsList.style.display = 'none';
        } else {
            resultsList.style.display = 'block';
        }

    }

    // Event listener for input changes
    searchInput[0].addEventListener('input', () => {
        const query = searchInput[0].value;
        displayResults(query);
    });

    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' || event.keyCode === 27) {
            resultsList.style.display = 'none';
            searchInput.value = '';
        }
    });
};