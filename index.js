function displayTime() {
    const WEEK = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

    const Time = document.getElementById('time');
    const Day = document.getElementById('day');

    const UTCTime = new Date().getTime();
    const dayOfWeekNumber = new Date().getDay();
    const dayOfWeek = WEEK[dayOfWeekNumber] 

    Time.textContent = `Current UTC Time in milliseconds: ${UTCTime},`;
    Day.textContent = `Current Day of The Week: ${dayOfWeek},`;
}
displayTime()
