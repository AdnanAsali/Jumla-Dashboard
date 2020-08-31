// --------------------------- Carousel Setup ---------------------------
$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  dots: true,
  responsiveClass: true,
  rtl: true,

  responsive: {
    0: {
      items: 1,
      nav: false,
    },
    600: {
      items: 2,
      nav: false,
    },
    1000: {
      items: 2,
      nav: false,
      loop: false,
    },
  },
});

// --------------------------- Apex Charts Setup ---------------------------

//  FUNCTIONS chartSetup( array[sales_vales], String Color, array[x_values], array[Y_values], Series{ name: "المبيعات", data: [] } ); to make the interface Dynamic

var chartSetup = (Color, data) => {
  return (options = {
    series: [
      {
        data: data,
      },
    ],
    chart: {
      height: 200,
      type: "line",
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
      dropShadow: {
        enabled: true,
        top: 15,
        left: 10,
        blur: 5,
        opacity: 0.5,
      },
    },
    stroke: {
      width: 3,
      curve: "smooth",
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "light",
        gradientToColors: [`#${Color}`],
        shadeIntensity: 1,
        type: "horizontal",
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100, 100, 100],
      },
    },
    markers: {
      size: 4,
      colors: [`#${Math.floor(Math.random() * 16777215).toString(16)}`],
      strokeColors: "#000000",
      strokeWidth: 1,
      hover: {
        size: 7,
      },
    },
    grid: {
      show: false,
      //   row: {
      // colors: ["transparent"], // takes an array which will be repeated on columns
      // opacity: 0,
      //   },
    },
  });
};

var neededCharts = document.querySelectorAll(".chart");

var generateData = (data) => {
  for (let i = 0; i < 9; i++) {
    data.push(Math.floor(Math.random() * Math.floor(100)));
  }

  return data;
};

neededCharts.forEach((el) => {
  let randomColor = Math.floor(Math.random() * 16777215).toString(16);
  let options = {};
  let data = [];

  data = generateData(data);

  options = chartSetup(randomColor, data, {});
  let chart = new ApexCharts(el, options);
  chart.render();
});

var options = {
  series: [44, 55, 13, 43, 22],
  chart: {
    width: 380,
    type: "pie",
  },
  labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 200,
        },
        legend: {
          position: "bottom",
        },
      },
    },
  ],
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();

// let chart2 = new ApexCharts(pieContainer, pieOptions);
// chart2.render();
