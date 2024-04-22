// Scatter Plot
var scatterData = [
    {
        x: [1, 2, 3, 4, 5],
        y: [2, 3, 5, 7, 11],
        mode: 'markers',
        type: 'scatter'
    }
];

Plotly.newPlot('scatterPlot', scatterData, {title: 'Scatter Plot'});

// Line Chart
var lineData = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [{
        label: 'Sales',
        data: [50, 60, 70, 65, 80],
        fill: false,
        borderColor: 'blue',
        tension: 0.1
    }]
};

var lineConfig = {
    plugins: {
        legend: {
            display: false
        }
    }
};

new Chart(document.getElementById('lineChart'), {
    type: 'line',
    data: lineData,
    options: lineConfig
});

// Bar Chart
var barData = {
    labels: ['A', 'B', 'C', 'D'],
    datasets: [{
        label: 'Population',
        data: [50, 30, 40, 60],
        backgroundColor: ['red', 'green', 'blue', 'orange']
    }]
};

new Chart(document.getElementById('barChart'), {
    type: 'bar',
    data: barData,
    options: lineConfig
});

// Pie Chart
var pieData = {
    labels: ['Red', 'Blue', 'Yellow'],
    datasets: [{
        data: [30, 20, 50],
        backgroundColor: ['red', 'blue', 'yellow']
    }]
};

new Chart(document.getElementById('pieChart'), {
    type: 'pie',
    data: pieData,
    options: lineConfig
});

// Donut Chart
var donutData = {
    labels: ['Red', 'Blue', 'Yellow'],
    datasets: [{
        data: [30, 20, 50],
        backgroundColor: ['red', 'blue', 'yellow']
    }]
};

new Chart(document.getElementById('donutChart'), {
    type: 'doughnut',
    data: donutData,
    options: lineConfig
});

// Bubble Chart
var bubbleData = {
    datasets: [{
        label: 'Dataset 1',
        data: [{x: 1, y: 2, r: 10}, {x: 2, y: 3, r: 20}, {x: 3, y: 4, r: 30}],
        backgroundColor: 'blue'
    }]
};

new Chart(document.getElementById('bubbleChart'), {
    type: 'bubble',
    data: bubbleData,
    options: {
        plugins: {
            legend: {
                display: false
            }
        }
    }
});
