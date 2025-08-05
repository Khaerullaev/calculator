    const temperatureDisplay = document.getElementById('temperature');
    const celsiusRadio = document.getElementById('celsius');
    const fahrenheitRadio = document.getElementById('fahrenheit');
    const tempInput = document.getElementById('tempInput');
    const randomBtn = document.getElementById('randomBtn');

    function updateTemperature() {
      let value = parseFloat(tempInput.value);
      if (isNaN(value)) {
        temperatureDisplay.textContent = 'Некорректное значение';
        return;
      }

      if (celsiusRadio.checked) {
        let res = Math.floor((value - 32) * 5/9)
        temperatureDisplay.textContent = `${res}°C`;
      } else if (fahrenheitRadio.checked){
        let celsius = Math.floor(value * 9/5) + 32;
        temperatureDisplay.textContent =  `${celsius}°C`;
      } 
    }

    