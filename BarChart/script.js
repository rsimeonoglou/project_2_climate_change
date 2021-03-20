let myBarChart = document.getElementById("myChart").getContext('2d');

let chart1 = new Chart (myBarChart, {
    type: 'bar',
    data: {
        labels: [1802, 1812, 1822, 1832, 1842, 1852, 1862, 1872, 1882, 1892, 1902, 1912, 1922, 1932, 1942, 1952, 1962, 1972, 1982, 1992, 2002, 2012],
        datasets: [{
            label:'Temperatures',
            data: [ 0.6282, -2.62215, 0.80715, -0.4833, 0.01755, -0.1323, -0.86985, 0.1476, -0.3999, 0.16005, 0.4458, -0.09855, 0.19845, 0.50955, 0.7023, -0.2103, -0.2301, -0.64155, -0.55635, -0.34485, 1.2669, -0.03285],
            backgroundColor: ['#007bff', '#6610f2', '#6f42c1', '#e83e8c', '#dc3545', '#fd7e14', '#ffc107', '#28a745', '#20c997', '#17a2b8', '#fff', '#6c757d', '#343a40', '#007bff', '#6c757d', '#28a745', '#343a40', '#17a2b8', '#ffc107', '#dc3545', '#6610f2', '17a2b8'],
            borderWidth: 1,
            borderColor: '#000',
            hoverBorderWidth: 3,
            hoverBordercolor: '#777'
        }]
    },
    options: {
        title:{
            display: true,
            text: 'Global Temperature Changes over the Decades',
            fontsize: 26
            },
        legend:{
            text: 'Temperature Changes',
            position: 'right',
            labels:{
                fontColor:'#000'
                }
            }
        }
});
