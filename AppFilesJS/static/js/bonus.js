function gaugePlot(wf) {
   
    let base_chart = {
        // Chart data
        values: [5.6, 5.6, 5.6, 5.6, 5.6, 5.6, 5.6, 5.6, 5.6, 49.6],
        labels: ["0-1", "1-2", "2-3", "3-4", "4-5", "5-6", "6-7", "7-8", "8-9", " "],
        // Chart color set
        marker: {
            colors: 
                ["rgba(248, 243, 236, 100)",
                "rgba(244, 241, 229, 100)",
                "rgba(233, 230, 202, 100)",
                "rgba(229, 231, 179, 100)",
                "rgba(213, 228, 157, 100)",
                "rgba(183, 204, 146, 100)",
                "rgba(140, 191, 136, 100)",
                "rgba(138, 187, 143, 100)",
                "rgba(133, 180, 138, 100)",
                "rgba(255, 255, 255, 0)"
                ],
        },
        // Chart sizing
        rotation: -90.72,
        direction: "clockwise",
        name: "gauge",
        hole: 0.45,
        type: "pie",
        // Data Sort
        sort: false,
        showlegend: false,
        hoverinfo: "none",
        textinfo: "label",
        textposition: "inside"
        }

    let data4 = [base_chart];

    let wfAngle = calculateNeedlePosition(wf/9);
    console.log(wfAngle);
        
    let title = {
        margin: { t: 60 },
        title: { text: "<b>Belly Button Washing Frequency</b><br>Scrubs per Week", font: { size: 18 } },
        shapes: [
            {
                type: 'circle',
                xref: 'paper',
                yref: 'paper',
                fillcolor: 'red',
                x0: 0.485,
                y0: 0.485,
                x1: 0.515,
                y1: 0.515,
                line: {
                    color: 'red'
                }
            },
            {
            type: 'line',
            x0: 0.5,
            x1: wfAngle.x,
            y0: 0.5,
            y1: wfAngle.y,
            line: {
                color: 'red',
                width: 3
            },
            xref: 'paper',
            yref: 'paper'
            }
        ]
    };

    function calculateNeedlePosition(theta) {
        const r = 0.3 // radius
        return {
            x: Math.cos((theta) * Math.PI) * r * -1 + 0.5, // -1 inverts the direction of the rotation
            y: Math.sin((theta) * Math.PI) * r + 0.5
        }
    };

Plotly.newPlot('gauge', data4, title);

};