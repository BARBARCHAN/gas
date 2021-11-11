function ShiftsRegistration() {
  var shifts = SpreadsheetApp.openById("1ewr5i-ePS7d8rOM6VMfCMrE2cJnd9_Ttc9ZFNv4z6hc").getSheets()[0];
  var workSchedules = shifts.getRange("B2:B31").getValues();
  // 二次元配列から一次元配列に直さないと、繰り返し処理を実行できない
  var schedulesFix = Array.prototype.concat.apply([], workSchedules)

  var calendar = CalendarApp.getCalendarById("junshiro0503@gmail.com");

  var num = 1;
  var count = 0;

  const date = new Date();
  const firstDay = new Date(2021, 8, 1)
  // console.log(firstDay)
  const firstDayString = Utilities.formatDate(firstDay, "Asia/Tokyo", "yyyy/MM/dd");
  const lastDay = new Date(2021, 9, 0)
  // console.log(lastDay)
  const lastDayString = Utilities.formatDate(lastDay, "Asia/Tokyo", "yyyy/MM/dd");
  
  while (firstDayString != lastDayString) {
    let day = new Date(2021, 8, num);
    console.log(day)
    let dayString = Utilities.formatDate(day, "Asia/Tokyo", "yyyy/MM/dd");
    let startTime = new Date(day);
    let endTime = new Date(day);
    // return false;
    switch (dayString) {
      case dayString:
        switch (schedulesFix[count]) {
          case "09:00-18:00":
            startTime.setHours(09);
            endTime.setHours(18);
            calendar.createEvent("仕事_所定", startTime, endTime);
            break;
          case "11:00-20:00":
            startTime.setHours(11);
            endTime.setHours(20);
            calendar.createEvent("仕事_遅番", startTime, endTime);
            break;
          case "10:00-19:00":
            startTime.setHours(10);
            endTime.setHours(19);
            calendar.createEvent("仕事_早番", startTime, endTime);
            break;
          case "休み":
            calendar.createAllDayEvent("休日", day);
            break;
            default:
            break;
        }
        break;
        default:
        break;
    }
    if (dayString == lastDayString) {
      return false;
    }
    num ++;
    count ++;
  }
}
