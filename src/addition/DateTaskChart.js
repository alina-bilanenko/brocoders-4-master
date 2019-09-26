const getObjTime = (start, spend) => {
  const startHour = new Date(start).getHours();
  const startMinute = new Date(start).getMinutes();
  const endHour = new Date(start + spend).getHours();
  const endMinute = new Date(start + spend).getMinutes();
  const getTime = [];
  
  for (let i = startHour; i <= endHour; i++) {
    let minutes = 60;
    if (i === startHour && i !== endHour) {
      minutes -= startMinute;
    } else if (i === endHour && i !== startHour) {
      minutes = endMinute;
    } else if (i === startHour && i === endHour) {
      minutes = endMinute - startMinute;
    }
    getTime.push({ name: i, minutes: minutes });
  }
  return getTime;
};

export const dateTaskChart = tasks => {
  const dateForChart = [];
  for (let i = 0; i < 24; i++) {
    dateForChart.push({ name: i, minutes: 0 });
  }
  tasks.map(task =>
    getObjTime(task.taskStartTime, task.taskSpendTime).map(
      times =>
        (dateForChart[times.name].minutes =
          (dateForChart[times.name].minutes + times.minutes) % 60)
    )
  );
  return dateForChart;
};
