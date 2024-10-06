import numpy as np
import plotly.graph_objs as go
from dash import Dash, dcc, html, Input, Output

def generate_normal_data(mean, std_dev, num_points=1000):
    x = np.linspace(-5, 5, num_points)
    y = (1 / (std_dev * np.sqrt(2 * np.pi))) * np.exp(-0.5 * ((x - mean) / std_dev) ** 2)
    return x, y

app = Dash(__name__)

app.layout = html.Div([
    dcc.Graph(id='normal-distribution-graph'),
    html.Label('Effect Size:'),
    dcc.Slider(
        id='effect-size-slider',
        min=0,
        max=5,
        step=0.1,
        value=2,
        marks={i: str(i) for i in range(6)}
    )
])

@app.callback(
    Output('normal-distribution-graph', 'figure'),
    [Input('effect-size-slider', 'value')]
)
def update_graph(effect_size):
    x1, y1 = generate_normal_data(0, 1)
    x2, y2 = generate_normal_data(effect_size, 1)
    trace1 = go.Scatter(x=x1, y=y1, mode='lines', name='Mean = 0')
    trace2 = go.Scatter(x=x2, y=y2, mode='lines', name=f'Mean = {effect_size}')
    return {
        'data': [trace1, trace2],
        'layout': go.Layout(
            title='Normal Distribution Curves',
            xaxis={'title': 'Value'},
            yaxis={'title': 'Probability Density'},
            hovermode='closest'
        )
    }

if __name__ == '__main__':
    app.run_server(debug=True)
