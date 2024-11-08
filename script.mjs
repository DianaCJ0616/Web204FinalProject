async function fetchPlantData() {
    try {
        const response = await fetch('/plants'); 
        if (response.ok) {
            const data = await response.json();
            displayPlants(data.data.slice(0, 5)); 
        } else {
            console.error('Error:', response.status);
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

fetchPlantData();
