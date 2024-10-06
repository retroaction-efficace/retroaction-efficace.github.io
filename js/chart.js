const ctx = document.getElementById('myChart').getContext('2d');

        function generateNormalData(mean, stdDev, numPoints = 100) {
            const data = [];
            for (let i = 0; i < numPoints; i++) {
                const x = (i / numPoints) * 10 - 5;
                const y = (1 / (stdDev * Math.sqrt(2 * Math.PI))) * Math.exp(-0.5 * ((x - mean) / stdDev) ** 2);
                data.push({ x, y });
            }
            return data;
        }

        let chart;

        function createChart(effectSize) {
            const data1 = generateNormalData(0, 1);
            const data2 = generateNormalData(effectSize, 1);

            const datasets = [
                {
                    label: 'Mean = 0',
                    data: data1,
                    borderColor: 'rgba(75, 192, 192, 1)',
                    fill: false,
                    showLine: true,
                    parsing: {
                        xAxisKey: 'x',
                        yAxisKey: 'y'
                    }
                },
                {
                    label: `Mean = ${effectSize}`,
                    data: data2,
                    borderColor: 'rgba(255, 99, 132, 1)',
                    fill: false,
                    showLine: true,
                    parsing: {
                        xAxisKey: 'x',
                        yAxisKey: 'y'
                    }
                }
            ];

            if (chart) {
                chart.destroy();
            }

            chart = new Chart(ctx, {
                type: 'scatter',
                data: { datasets },
                options: {
                    scales: {
                        x: {
                            type: 'linear',
                            position: 'bottom',
                            title: { display: true, text: 'Value' }
                        },
                        y: {
                            title: { display: true, text: 'Probability Density' }
                        }
                    }
                }
            });
        }

        function updateGraph(effectSize) {
            createChart(effectSize);
        }

        window.onload = () => {
            createChart(2);
        };
