const dateTime = new Date();

export const testTasks = [
  {
    taskId: 0,
    taskName: 'task0',
    taskStartTime: dateTime.setHours(7, 49, 0),
    taskSpendTime: dateTime.setHours(8, 32, 0) - dateTime.setHours(7, 49, 0)
  },
  {
    taskId: 1,
    taskName: 'task0',
    taskStartTime: dateTime.setHours(23, 2, 0),
    taskSpendTime: dateTime.setHours(23, 35, 0) - dateTime.setHours(23, 2, 0)
  },
  {
    taskId: 2,
    taskName: 'task0',
    taskStartTime: dateTime.setHours(16, 33, 0),
    taskSpendTime: dateTime.setHours(17, 28, 0) - dateTime.setHours(16, 33, 0)
  },
  {
    taskId: 3,
    taskName: 'task0',
    taskStartTime: dateTime.setHours(17, 50, 0),
    taskSpendTime: dateTime.setHours(18, 10, 0) - dateTime.setHours(17, 50, 0)
  }
];

export const testChartArray = [
  { name: 0, minutes: 0 },
  { name: 1, minutes: 0 },
  { name: 2, minutes: 0 },
  { name: 3, minutes: 0 },
  { name: 4, minutes: 0 },
  { name: 5, minutes: 0 },
  { name: 6, minutes: 0 },
  { name: 7, minutes: 11 },
  { name: 8, minutes: 32 },
  { name: 9, minutes: 0 },
  { name: 10, minutes: 0 },
  { name: 11, minutes: 0 },
  { name: 12, minutes: 0 },
  { name: 13, minutes: 0 },
  { name: 14, minutes: 0 },
  { name: 15, minutes: 0 },
  { name: 16, minutes: 27 },
  { name: 17, minutes: 38 },
  { name: 18, minutes: 10 },
  { name: 19, minutes: 0 },
  { name: 20, minutes: 0 },
  { name: 21, minutes: 0 },
  { name: 22, minutes: 0 },
  { name: 23, minutes: 33 }
];
