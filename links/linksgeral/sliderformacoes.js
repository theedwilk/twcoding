const radios = document.querySelectorAll('input[type="radio"]');
    let currentIndex = 0;

    function autoPlay() {
      radios[currentIndex].checked = true;
      currentIndex = (currentIndex + 1) % radios.length;
    }

    setInterval(autoPlay, 3000); // Alterna a cada 3 segundos (5000 milissegundos)