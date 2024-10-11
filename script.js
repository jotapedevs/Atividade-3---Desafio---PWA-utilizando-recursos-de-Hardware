// Obter elementos do DOM
const video = document.getElementById('video');
const canvas = document.getElementById('canvas');
const scanBtn = document.getElementById('scan-btn');
const productName = document.getElementById('product-name');
const productDescription = document.getElementById('product-description');
const productPrice = document.getElementById('product-price');

// Inicializar a câmera
navigator.mediaDevices.getUserMedia({ video: true })
    .then(stream => {
        video.srcObject = stream;
        video.play();
    })
    .catch(error => {
        console.error('Erro ao inicializar a câmera:', error);
    });

// Adicionar evento de clique ao botão de scan
scanBtn.addEventListener('click', () => {
    // Ler código de barras usando a biblioteca ZXing
    const codeReader = new ZXing.BrowserMultiFormatReader();
    codeReader.decodeFromVideoDevice(video, canvas, (result, error) => {
        if (result) {
            // Obter informações do produto com base no código de barras
            const productId = result.text;
            // TO DO: implementar lógica de negócios para obter informações do produto
            productName.textContent = 'Produto X';
            productDescription.textContent = 'Descrição do produto X';
            productPrice.textContent = 'R$ 10,00';
        } else {
            console.error('Erro ao ler código de barras:', error);
        }
    });
});