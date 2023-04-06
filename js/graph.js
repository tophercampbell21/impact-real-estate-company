const line = document.getElementById("lineChart");

const labels = [
  "Apr '22",
  "May '22",
  "Jun '22",
  "Jul '22",
  "Aug '22",
  "Sep '22",
  "Oct '22",
  "Nov '22",
  "Dec '22",
  "Jan '23",
  "Feb '23",
  "Mar '23",
];

const avgData = [
  "393874",
  "393602",
  "402907",
  "392191",
  "395940",
  "383083",
  "383871",
  "375185",
  "379431",
  "370425",
  "363801",
  "373530",
];

const medData = [
  "325000",
  "340000",
  "344000",
  "332000",
  "329900",
  "329950",
  "325000",
  "316500",
  "324825",
  "312000",
  "310000",
  "318000",
];

const moi = [
  "1.4",
  "1.7",
  "2.2",
  "2.7",
  "2.9",
  "3.1",
  "3.4",
  "3.5",
  "3.3",
  "3.3",
  "3.2",
  "3.2",
];

const lineChart = new Chart(line, {
  type: "line",
  data: {
    datasets: [
      {
        label: "Average Sale Price",
        backgroundColor: "#01497c",
        borderColor: "#01497c",
        data: avgData,
        tension: 0.3,
      },

      {
        label: "Median Sale Price",
        backgroundColor: "#61a5c2",
        borderColor: "#61a5c2",
        data: medData,
        tension: 0.3,
      },
    ],

    labels: labels,
  },
  options: {
    scales: {
      y: {
        ticks: {
          callback: (value, index, values) => {
            return new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(value);
          },
        },
        min: "300000",
        max: "420000",
      },
    },
    layout: {
      padding: 20,
    },
    plugins: {
      legend: {
        position: "bottom",
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  },
});

const moInv = document.getElementById("moInv");

const moiBar = new Chart(moInv, {
  type: "bar",
  data: {
    datasets: [
      {
        label: "Months of Inventory",
        backgroundColor: "#01497c",
        borderColor: "#01497c",
        data: moi,
      },
    ],

    labels: labels,
  },
  options: {
    scales: {
      y: {
        min: "1",
        max: "4",
      },
    },
    plugins: {
      legend: {
        position: "bottom",
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  },
});

const pieChart = document.getElementById("forSaleVsSold");
const soldVsActive = ["8638", "2614"];

const forSaleVsSold = new Chart(pieChart, {
  type: "pie",
  data: {
    datasets: [
      {
        data: soldVsActive,
        backgroundColor: ["#01497c", "#61a5c2"],
      },
    ],
    labels: ["Houses For Sale", "Sold Houses"],
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
    },
  },
});
