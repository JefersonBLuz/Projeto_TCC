// import fetch from 'node-fetch';

const getCord = async (query: string) => {
    const response = await fetch('https://nominatim.openstreetmap.org/search?q=' + encodeURIComponent(query) + "&format=json&polygon=1&addressdetails=1");
    const data = await response.json();
    

    // console.log(data[0].lat, data[0].lon)
    // obs: pode retornar mais de um resutlado, caso tem varias correspondencias 
    return data
}


// getCord("Rua tal, vitoria da conquista ba")