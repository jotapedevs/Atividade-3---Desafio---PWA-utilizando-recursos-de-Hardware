// Obter o elemento de vídeo e o botão de ligação e desligamento da câmera
const cameraVideo = document.getElementById('camera-video');
const cameraToggleBtn = document.getElementById('camera-toggle-btn');

// Variável para armazenar o estado da câmera (ligada ou desligada)
let cameraEnabled = false;

// Função para ligar e desligar a câmera
function toggleCamera() {
  if (cameraEnabled) {
    // Desligar a câmera
    cameraEnabled = false;
    cameraToggleBtn.textContent = 'Ligar Câmera';
    cameraVideo.srcObject = null;
  } else {
    // Ligar a câmera
    cameraEnabled = true;
    cameraToggleBtn.textContent = 'Desligar Câmera';
    navigator.mediaDevices.getUserMedia({ video: true })
      .then(stream => {
        cameraVideo.srcObject = stream;
      })
      .catch(error => {
        console.error('Erro ao acessar a câmera:', error);
      });
  }
}

// Adicionar evento de clique ao botão de ligação e desligamento da câmera
cameraToggleBtn.addEventListener('click', toggleCamera);