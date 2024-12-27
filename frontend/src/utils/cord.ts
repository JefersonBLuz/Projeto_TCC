const getCord = async (query: string) => {
    const values = {
        cep: null,
        number: null,
        street: null,
        neighborhood: null,
        city: null,
        state: null,
        latitude: null,
        longitude: null
    }
    // Consulta API, sem latitude e longitude
    const response = await fetch('https://viacep.com.br/ws/' + query + '/json/', {
        method: 'get',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    // Convertendo o a resposta do api em JSON
    const responseEndereco = await response.json();
    console.log('Consultado endereço');

    values.cep = responseEndereco.cep;
    values.city = responseEndereco.localidade;
    values.street = responseEndereco.logradouro;
    values.neighborhood = responseEndereco.bairro;
    values.state = responseEndereco.uf;

    // Transformando a busca por endereço
    query = values.street + ', ' + values.city + ' - ' + values.state

    // Consulta API, para latitude e longitude
    const responseb = await fetch('https://nominatim.openstreetmap.org/search?q=' + encodeURIComponent(query) + "&format=json&polygon=1&addressdetails=1");
    // Transformação em JSON
    const data = await responseb.json();
    console.log('Consultado Latitude e Longitude');

    values.latitude = data[0].lat
    values.longitude = data[0].lon
    
    // Retornadno os valores.
    return values
}

export default { getCord }
// getCord("Rua tal, vitoria da conquista ba")