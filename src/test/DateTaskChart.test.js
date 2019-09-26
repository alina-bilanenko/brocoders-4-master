import { testTasks, testChartArray } from './DateForTest';
import { dateTaskChart } from '../addition/DateTaskChart';
it('Should return array from table chart', () => {
  expect(dateTaskChart(testTasks)).toEqual(testChartArray);
});
