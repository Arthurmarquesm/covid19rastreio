window.onload = function() {
    getCovidStats();
}

function getCovidStats() {
    fetch('https://coronavirus-19-api.herokuapp.com/countries/Brazil')
    .then(function(resp) { return resp.json() })
    .then(function(data) {
     let cases = data.cases;
     let todayCases = data.todayCases;
     let deaths = data.deaths;
     let todayDeaths = data.todayDeaths;
     let recovered = data.recovered;
     let critical = data.critical;
     let totalTests = data.totalTests;
    
     document.getElementById('cases').innerHTML = cases.toLocaleString('br');
     document.getElementById('todayCases').innerHTML = todayCases.toLocaleString('br');
     document.getElementById('deaths').innerHTML = deaths.toLocaleString('br');
     document.getElementById('todayDeaths').innerHTML = todayDeaths.toLocaleString('br');
     document.getElementById('recovered').innerHTML = recovered.toLocaleString('br');
     document.getElementById('critical').innerHTML = critical.toLocaleString('br');
     document.getElementById('totalTests').innerHTML = totalTests.toLocaleString('br');


    })
    .catch(function() {
        console.log("error");
    })
    setTimeout(getCovidStats, 300000) // Atualizar apos 5 minutos
}