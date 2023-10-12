function listarDatos() {
    let resultado = '';
    fetch('https://www.datos.gov.co/resource/ceyp-9c7c.json')
      .then(response => response.json())
      .then(data => {
        for (let i of data) {
          resultado += '<tr><td>' + i.valor + '</td></tr>';
        }
        document.getElementById('contenido').innerHTML = resultado;
      });
  }