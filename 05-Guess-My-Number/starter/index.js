const testData = [7.5, 8, 6.5, 0, 8.5, 4, 0];

const getTrackingInfo = data => {
  const fullTimeWeekHours = 35;

  const calculatedSum = data.reduce((acc, item) => acc + item, 0);
  const numberOfDaysWorked = data.length;
  const averageDailyHours = calculatedSum / numberOfDaysWorked;
  const dayWithMaxHours = Math.max(...data);
  const isFullTimeWeek = calculatedSum > fullTimeWeekHours;

  return {
    totalWorkedHours: calculatedSum,
    averageDailyHours,
    dayWithMaxHours,
    isFullTimeWeek,
    numberOfDaysWorked,
  };
};

console.log(getTrackingInfo(testData));
