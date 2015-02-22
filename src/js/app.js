var React = require('react');
var BarChart = require('./components/BarChart');
var reqwest = require('reqwest');
var _ = require('lodash');
var PieChart = require('./components/PieChart');

var App = React.createClass({
    getInitialState: function() {
        return {
            data: []
        };
    },
    componentWillMount: function() {
        reqwest({
            url: 'http://www.filltext.com/?callback=JSON_CALLBACK&rows=5&val={numberRange|10, 100}',
            type: 'jsonp',
            success: function(resp) {
                resp = _.without(resp, resp[5]);
                this.setState({data: resp});
            }.bind(this)
        });
    },
    render: function() {
        return (
            <div>
                <h1>Simple React D3 chart components</h1>
                <p className='lead'>These are mostly just an excuse to learn some more react and make some components</p>


                <h2>Bar Chart Component</h2>
                <BarChart data={this.state.data} barWidth = {40}/>

                <h2>Pie Chart Component</h2>
                <PieChart data={this.state.data} />

                
            </div>
        );
    }
});


React.render(<App />, document.getElementById('app'));
