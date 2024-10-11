// Criar o mapa
const map = L.map('map').setView([-23.5505, -46.6333], 13);

// Adicionar layer do mapa
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>',
    subdomains: ['a', 'b', 'c']
}).addTo(map);

// Obter a localização do usuário
navigator.geolocation.getCurrentPosition(position => {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const offer = getOffer(lat, lng);
    console.log(`Você está em ${lat}, ${lng} e a oferta personalizada é ${offer.name}`);
  }, error => {
    console.error('Erro ao obter a localização:', error);
  });

  // Adicionar evento de clique ao botão
document.getElementById('open-map-btn').addEventListener('click', () => {
    map.setView([-23.5505, -46.6333], 13);
  });

  // Adicionar evento de clique ao botão "Comprar"
document.getElementById('buy-btn').addEventListener('click', () => {
    const offer = getOffer(lat, lng);
    processPayment(offer);
  });