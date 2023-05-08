"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactChartjs = require("react-chartjs-2");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var data = {
  labels: ['01/05', '02/05', '03/05', '04/05', '05/05', '06/05', '07/05', '08/05', '09/05', '10/05', '11/05', '12/05', '13/05', '14/05', '15/05', '16/05', '17/05', '18/05', '19/05', '20/05', '21/05', '22/05', '23/05', '24/05', '25/05', '26/05', '27/05', '28/05', '29/05', '30/05', '31/05'],
  datasets: [{
    label: 'Tranche Matin',
    backgroundColor: 'rgba(255, 99, 132, 0.2)',
    borderColor: 'rgba(255, 99, 132, 1)',
    borderWidth: 1,
    hoverBackgroundColor: 'rgba(255, 99, 132, 0.4)',
    hoverBorderColor: 'rgba(255, 99, 132, 1)',
    data: [500, 400, 450, 550, 600, 550, 500, 450, 550, 600, 550, 500, 400, 450, 550, 600, 550, 500, 450, 550, 600, 550, 500, 400, 450, 550, 600, 550, 500, 450, 550]
  }, {
    label: 'Tranche Jour',
    backgroundColor: 'rgba(54, 162, 235, 0.2)',
    borderColor: 'rgba(54, 162, 235, 1)',
    borderWidth: 1,
    hoverBackgroundColor: 'rgba(54, 162, 235, 0.4)',
    hoverBorderColor: 'rgba(54, 162, 235, 1)',
    data: [800, 900, 950, 1000, 1050, 1000, 900, 950, 1000, 1050, 1000, 900, 800, 950, 1000, 1050, 1000, 900, 950, 1000, 1050, 1000, 900, 800, 950, 1000, 1050, 1000, 900, 950, 1000]
  }, {
    label: 'Tranche Nuit',
    backgroundColor: 'rgba(255, 206, 86, 0.2)',
    borderColor: 'rgba(255, 206, 86, 1)',
    borderWidth: 1,
    hoverBackgroundColor: 'rgba(255, 206, 86, 0.4)',
    hoverBorderColor: 'rgba(255, 206, 86, 1)',
    data: [300, 350, 400, 450, 500, 450, 400, 450, 500, 450, 400, 350, 300, 400, 450, 500, 450, 400, 450, 500, 450, 400, 350, 300, 400, 450, 500, 450, 400, 450, 500]
  }]
};