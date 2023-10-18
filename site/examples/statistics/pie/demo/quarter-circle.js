import React from 'react';
import ReactDOM from 'react-dom';
import { Pie } from '@ant-design/plots';

const DemoPie = () => {
  const config = {
    data: [
      { type: '分类一', value: 27 },
      { type: '分类二', value: 25 },
      { type: '分类三', value: 18 },
      { type: '分类四', value: 15 },
      { type: '分类五', value: 10 },
      { type: '其他', value: 5 },
    ],
    appendPadding: 10,
    angleField: 'value',
    colorField: 'type',
    startAngle: Math.PI,
    endAngle: Math.PI * 1.5,
    label: {
      text: 'type',
      style: {
        fontSize: 14,
        fontWeight: 'bold',
        transform: 'rotate(40)',
      },
      transform: [
        {
          type: 'overlapHide',
        },
      ],
    },
    legend: {
      color: {
        title: false,
        position: 'right',
        rowPadding: 5,
      },
    },
  };
  return <Pie {...config} />;
};

ReactDOM.render(<DemoPie />, document.getElementById('container'));