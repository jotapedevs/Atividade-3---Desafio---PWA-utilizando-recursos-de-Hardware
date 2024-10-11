const offers = {
    'São Paulo': [
      { id: 1, name: 'Oferta 1', description: 'Descrição da oferta 1', price: 10.00 },
      { id: 2, name: 'Oferta 2', description: 'Descrição da oferta 2', price: 20.00 }
    ],
    'Rio de Janeiro': [
      { id: 3, name: 'Oferta 3', description: 'Descrição da oferta 3', price: 15.00 },
      { id: 4, name: 'Oferta 4', description: 'Descrição da oferta 4', price: 30.00 }
    ]
  };
  
  // Função para buscar oferta personalizada com base na localização do usuário
  function getOffer(lat, lng) {
    const location = `${lat}, ${lng}`;
    const offer = offers[location];
    return offer;
  }