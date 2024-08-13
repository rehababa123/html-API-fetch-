
function getir() {
  const şehir = document.getElementById('şehirler').value;
  const apiKey = 'fe205e674bf341ff99975402241208'; // API anahtarınızı buraya girin
  const apiUrl = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${şehir}&aqi=no`;

  fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
          console.log(data);
          // Hava durumu verilerini ekrana yazdırmak için burayı doldurabilirsiniz.
          alert(`Şehir: ${data.location.name}, Sıcaklık: ${data.current.temp_c}°C, Durum: ${data.current.condition.text}`);
      })
      .catch(error => {
          console.error('Hata:', error);
      });
}
