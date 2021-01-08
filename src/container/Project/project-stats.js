import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import {
  Chart,
  ArgumentAxis,
  ValueAxis,
  BarSeries,
  SplineSeries,
  Legend,
  Tooltip
} from '@devexpress/dx-react-chart-material-ui';

import './custom.css';
import { ValueScale, Animation } from '@devexpress/dx-react-chart';
import { EventTracker } from '@devexpress/dx-react-chart';

import { sales as data } from './demo';

export default class Demo extends React.PureComponent {
    constructor(props) {
      super(props);
  
      this.state = {
        data: data[2017]
    }
}
    render() {
      const { data: chartData } = this.state;
  
      return (
        <Paper style={{backgroundColor:'inherit',color:'white'}}>
          <Chart
            data={chartData} 
          >
            <ValueScale name="sale"  />
            <ValueScale name="total" />
  
            <ArgumentAxis />
            <ValueAxis scaleName="sale" showGrid={false} showLine showTicks  />
            <ValueAxis scaleName="total" position="top" showGrid={false} showLine showTicks />
  
            <BarSeries
              name="Efficency"
              valueField="sale"
              argumentField="month"
              scaleName="sale"
            />
  
            <SplineSeries
              name="Total"
              valueField="total"
              argumentField="month"
              scaleName="total"
            />
           <EventTracker />
            <Tooltip/>

            <Animation />
            <Legend />
          </Chart>
        </Paper>
      );
    }
  }
  