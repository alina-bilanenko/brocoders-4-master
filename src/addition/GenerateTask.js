export const generate = () => {
  const generatedTasks = [];
  const startTime = new Date().setHours(0, 0, 0, 0);
  const endTime = new Date().setHours(23, 59, 59, 999);
  const amountTask = getRndInteger(10, 15);

  for (let i = 0; i < amountTask; i++) {
    const newTaskStartTime = getRndInteger(startTime, endTime);
    const newTaskSpendTime = getRndInteger(10, 90);
    const task = {
      taskId: i,
      taskName: `task${i}`,
      taskStartTime: newTaskStartTime,
      taskSpendTime: newTaskSpendTime * 60 * 1000
    };
    generatedTasks.push(task);
  }
  return generatedTasks;
};
function getRndInteger(min, max) {
  return parseInt(Math.floor(Math.random() * (max - min)) + min);
}
