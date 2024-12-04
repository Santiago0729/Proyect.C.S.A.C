document.addEventListener("DOMContentLoaded", () => {
  // Función para la gráfica de barras
  function gB() {
    const llamarB = document.getElementById("grafico-Barras");
    if (llamarB) {
      new Chart(llamarB.getContext('2d'), {
        type: "bar",
        data: {
          labels: ["Eólica", "Solar", "Hidráulica", "Biomasa", "Geotérmica"],
          datasets: [{
            label: "Producción (Twh)",
            data: [0.059, 0.3173, 59.85, 1.8, 1.02],
            backgroundColor: ["#dcdcdc", "#FFFF00", "#ADD8E6", "#008000", "#FF8000"]
          }]
        },
        options: {
          responsive: true,
          scales: {
            y: { beginAtZero: true }
          }
        }
      });
    }
  }
  gB();
  function gT() {
    const llamarT = document.getElementById("grafico-Torta");
    if (llamarT) {
      new Chart(llamarT.getContext('2d'), {
        type: "pie",
        data: {
          labels: ["Total Energías Limpias", "Solar", "Eólica", "Hidráulica"],
          datasets: [{
            data: [0.32,0.37,0.059, 59.85],
            backgroundColor: ["#008000", "#FFFF00", "#dcdcdc", "#ADD8E6"]
          }]
        },
        options: {
          responsive: true
        }
      });
    }
  }
  gT();
  function gL() {
    const llamarL = document.getElementById("grafico-Linea");
    if (llamarL && !llamarL.classList.contains("renderizado")) {
      const labels = ["2000", "2001", "2002", "2003", "2004", "2005", "2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021"];
      const EnergiaEolica = [0, 0, 0, 0, 0.05, 0.04, 0.06, 0.04, 0.05, 0.03, 0.04, 0.05, 0.05, 0.07, 0.06, 0.05, 0.003, 0.043, 0.06, 0.01, 0.05];
      const EnergiaSolar = [0.001, 0.002, 0.004, 0.006, 0.007, 0.009, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.005, 0.012, 0.19, 0.31];
      const EnergiaHidroelectrica = [30.81, 31.63, 33.96, 36.17, 38.33, 39.22, 42.55, 44.24, 46.16, 40.83, 40.55, 48.42, 47.58, 44.36, 44.74, 44.68, 46.78, 57.32, 56.65, 54.43, 49.83, 59.85];
  
      const data = {
        labels: labels,
        datasets: [
          {
            label: 'Energía Eólica (Twh)',
            data: EnergiaEolica,
            borderColor: 'rgba(75, 192, 192, 1)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            tension: 0.4,
          },
          {
            label: 'Energía Solar (Twh)',
            data: EnergiaSolar,
            borderColor: 'rgba(255, 206, 86, 1)',
            backgroundColor: 'rgba(255, 206, 86, 0.2)',
            tension: 0.4,
          },
          {
            label: 'Energía Hidroelectrica (Twh)',
            data: EnergiaHidroelectrica ,
            borderColor: 'rgba(153, 102, 255, 1)',
            backgroundColor: 'rgba(153, 102, 255, 0.2)',
            tension: 0.4,
          }
        ]
      };
  
      const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          tooltip: {
            callbacks: {
              label: function (tooltipItem) {
                return `${tooltipItem.dataset.label}: ${tooltipItem.raw} GW`;
              }
            }
          },
          title: {
            display: true,
            text: 'Tendencia en la Capacidad Instalada de Energías Renovables',
          },
        },
        scales: {
          x: {
            title: {
              display: true,
              text: 'Año',
            },
          },
          y: {
            title: {
              display: true,
              text: "Cantidad de Energia (Twh)",
            },
            beginAtZero: true,
          },
        },
      };
  
      new Chart(llamarL.getContext('2d'), {
        type: 'line',
        data: data,
        options: options,
      });
      llamarL.classList.add("renderizado"); // Evitar múltiples renderizados
    }
  }
  gL();
  function gA() {
    const llamarA = document.getElementById("grafico-Area");
    if (llamarA && !llamarA.classList.contains("renderizado")) {
      new Chart(llamarA.getContext('2d'), {
        type: "line",
        data: {
          labels: ["Eólica", "Solar", "Hidráulica", "Biomasa", "Geotérmica"],
          datasets: [
            {
              label: "Consumo De Energias Renobables",
              data: [0.059, 0.31, 59.85, 1.8, 1.02],
              backgroundColor: "rgba(56, 93, 56, 0.2)",
              borderColor: "rgba(64, 145, 108, 1)",
              borderWidth: 2,
              tension: 0.4,
              fill: true,
            },
            {

              label: "Consumos de energia convencional",
              data: ["No hay datos"],
              backgroundColor: "rgba(255, 159, 64, 0.2)",
              borderColor: "rgba(255, 159, 64, 1)",
              borderWidth: 2,
              tension: 0.4,
              fill: true,
            }
          ]
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: "top",
            },
            tooltip: {
              enabled: true,
            },
          },
          scales: {
            x: {
              title: {
                display: true,
                text: "Tipo de Energia",
              },
            },
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: "Cantidad de Energia (Twh)",
              },
            },
          },
        },
      });
      llamarA.classList.add("renderizado"); // Marca el canvas como renderizado
    }
  }
  gA();
});