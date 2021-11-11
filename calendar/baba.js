const babaCalendar = CalendarApp.getCalendarById("junshiro0503@gmail.com");

  // 自分のスケジュールの行を取得（配列になる）
  const babaPlan = schedules[0];
  // console.log(babaPlan)

  // この配列の中の3以降（シフト種類）だけを取り出す
  const babaPlanFix = babaPlan.slice(3);
  // console.log(babaPlanFix)

  // スケジュールの行の0番目の要素（名前）を取得
  const baba = babaPlan[0]; 

  function deleteBabaEvent(startTime, endTime) {
    let events = babaCalendar.getEvents(startTime, endTime);
    for(const e of events){
      if (!e.getTitle().search(baba)) {
        e.deleteEvent();
      }
    }
  }

  function babaShiftRegistration() {  
    while (firstDayString != lastDayString) {
      let day = new Date(date.getFullYear(), 7, num);
      console.log(day)
      let dayString = Utilities.formatDate(day, "Asia/Tokyo", "yyyy/MM/dd");
      let startTime = new Date(day);
      let endTime = new Date(day);
      // return false;
      switch (dayString) {
        case dayString:
        // [count]で配列の要素数を繰り返す。
          switch (babaPlanFix[count]) {
            case "\n公":
              events = babaCalendar.getEventsForDay(day);
              for (var i in events) {
               var event = events[i];
               event.deleteEvent();
              }
              babaCalendar.createAllDayEvent(baba + "休日",day);
              break;
            case "\n有":
              events = babaCalendar.getEventsForDay(day);
              for (var i in events) {
               var event = events[i];
               event.deleteEvent();
              }
              babaCalendar.createAllDayEvent(baba + "休日",day);
              break;
            case "\nF10-19":
              startTime.setHours(10);
              endTime.setHours(19);
              deleteBabaEvent(startTime, endTime);
              babaCalendar.createEvent(baba + "_" + followDayShift, startTime, endTime);
              break;
            case "\nF14-22":
              startTime.setHours(14);
              endTime.setHours(22);
              deleteBabaEvent(startTime, endTime);
              babaCalendar.createEvent(baba + "_" + followNightShift, startTime, endTime);
              break;
            case "\nF11-20":
              startTime.setHours(11);
              endTime.setHours(20);
              deleteBabaEvent(startTime, endTime);
              babaCalendar.createEvent(baba + "_" + followMiddleShift, startTime, endTime);
              break;
            case "\nF中11-22":
              startTime.setHours(11);
              endTime.setHours(20);
              deleteBabaEvent(startTime, endTime);
              babaCalendar.createEvent(baba + "_" + followOtherShift, startTime, endTime);
              break;
            case "\n外A":
              startTime.setHours(10);
              endTime.setHours(19);
              deleteBabaEvent(startTime, endTime);
              babaCalendar.createEvent(baba + "_" + noShiftA, startTime, endTime);
              break;
            case "\n外B":
              startTime.setHours(11);
              endTime.setHours(20);
              deleteBabaEvent(startTime, endTime);
              babaCalendar.createEvent(baba + "_" + noShiftB, startTime, endTime);
              break;
            case "\n外C":
              startTime.setHours(14);
              endTime.setHours(22);
              deleteBabaEvent(startTime, endTime);
              babaCalendar.createEvent(baba + "_" + noShiftC, startTime, endTime);
              break;
            case "\n基10-19":
              startTime.setHours(10);
              endTime.setHours(19);
              deleteBabaEvent(startTime, endTime);
              babaCalendar.createEvent(baba + "_" + basicDayShift, startTime, endTime);
              break;
            case "\n基10-13":
              startTime.setHours(10);
              endTime.setHours(13);
              deleteBabaEvent(startTime, endTime);
              babaCalendar.createEvent(baba + "_" + basicShortDay, startTime, endTime);
              break;
            case "\n基14-22":
              startTime.setHours(14);
              endTime.setHours(22);
              deleteBabaEvent(startTime, endTime);
              babaCalendar.createEvent(baba + "_" + basicNightShift, startTime, endTime);
              break;
            case "\n基19-22":
              startTime.setHours(19);
              endTime.setHours(22);
              deleteBabaEvent(startTime, endTime);
              babaCalendar.createEvent(baba + "_" + basicShortNight, startTime, endTime);
              break;
            case "\n基11-19":
              startTime.setHours(11);
              endTime.setHours(19);
              deleteBabaEvent(startTime, endTime);
              babaCalendar.createEvent(baba + "_" + basicShortMiddleShift, startTime, endTime);
              break;
            case "\n基11-20":
              startTime.setHours(11);
              endTime.setHours(20);
              deleteBabaEvent(startTime, endTime);
              babaCalendar.createEvent(baba + "_" + basicMiddleShift, startTime, endTime);
              break;
            case "\n基14-19":
              startTime.setHours(14);
              endTime.setHours(19);
              deleteBabaEvent(startTime, endTime);
              babaCalendar.createEvent(baba + "_" + basicShortMiddle, startTime, endTime);
              break;
            case "\n基中11-22":
              startTime.setHours(11);
              endTime.setHours(22);
              deleteBabaEvent(startTime, endTime);
              babaCalendar.createEvent(baba + "_" + basicOtherShift, startTime, endTime);
              break;
            case "\n応10-19":
              startTime.setHours(10);
              endTime.setHours(19);
              deleteBabaEvent(startTime, endTime);
              babaCalendar.createEvent(baba + "_" + advanceDayShift, startTime, endTime);
              break;
            case "\n応10-13":
              startTime.setHours(10);
              endTime.setHours(13);
              deleteBabaEvent(startTime, endTime);
              babaCalendar.createEvent(baba + "_" + advanceShortDay, startTime, endTime);
              break;
            case "\n応14-22":
              startTime.setHours(14);
              endTime.setHours(22);
              deleteBabaEvent(startTime, endTime);
              babaCalendar.createEvent(baba + "_" + advanceNightShift, startTime, endTime);
              break;
            case "\n応19-22":
              startTime.setHours(19);
              endTime.setHours(22);
              deleteBabaEvent(startTime, endTime);
              babaCalendar.createEvent(baba + "_" + advanceShortNight, startTime, endTime);
              break;
            case "\n応11-19":
              startTime.setHours(11);
              endTime.setHours(19);
              deleteBabaEvent(startTime, endTime);
              babaCalendar.createEvent(baba + "_" + advanceShortMiddleShift, startTime, endTime);
              break;
            case "\n応11-20":
              startTime.setHours(11);
              endTime.setHours(20);
              deleteBabaEvent(startTime, endTime);
              babaCalendar.createEvent(baba + "_" + advanceMiddleShift, startTime, endTime);
              break;
            case "\n応14-19":
              startTime.setHours(14);
              endTime.setHours(19);
              deleteBabaEvent(startTime, endTime);
              babaCalendar.createEvent(baba + "_" + advanceShortMiddle, startTime, endTime);
              break;
            case "\n応中11-22":
              startTime.setHours(11);
              endTime.setHours(22);
              deleteBabaEvent(startTime, endTime);
              babaCalendar.createEvent(baba + "_" + advanceOtherShift, startTime, endTime);
              break;
            case "\n終10-19":
              startTime.setHours(10);
              endTime.setHours(19);
              deleteBabaEvent(startTime, endTime);
              babaCalendar.createEvent(baba + "_" + finalDayShift, startTime, endTime);
              break;
            case "\n終10-13":
              startTime.setHours(10);
              endTime.setHours(13);
              deleteBabaEvent(startTime, endTime);
              babaCalendar.createEvent(baba + "_" + finalShortDay, startTime, endTime);
              break;
            case "\n終14-22":
              startTime.setHours(14);
              endTime.setHours(22);
              deleteBabaEvent(startTime, endTime);
              babaCalendar.createEvent(baba + "_" + finalNightShift, startTime, endTime);
              break;
            case "\n終19-22":
              startTime.setHours(19);
              endTime.setHours(22);
              deleteBabaEvent(startTime, endTime);
              babaCalendar.createEvent(baba + "_" + finalShortNight, startTime, endTime);
              break;
            case "\n終11-19":
              startTime.setHours(11);
              endTime.setHours(19);
              deleteBabaEvent(startTime, endTime);
              babaCalendar.createEvent(baba + "_" + finalShortMiddleShift, startTime, endTime);
              break;
            case "\n終11-20":
              startTime.setHours(11);
              endTime.setHours(20);
              deleteBabaEvent(startTime, endTime);
              babaCalendar.createEvent(baba + "_" + finalMiddleShift, startTime, endTime);
              break;
            case "\n終14-19":
              startTime.setHours(14);
              endTime.setHours(19);
              deleteBabaEvent(startTime, endTime);
              babaCalendar.createEvent(baba + "_" + finalShortMiddle, startTime, endTime);
              break;
            case "\n終中11-22":
              startTime.setHours(11);
              endTime.setHours(22);
              deleteBabaEvent(startTime, endTime);
              babaCalendar.createEvent(baba + "_" + finalOtherShift, startTime, endTime);
              break;
            case "\nC10-19":
              startTime.setHours(10);
              endTime.setHours(19);
              deleteBabaEvent(startTime, endTime);
              babaCalendar.createEvent(baba + "_" + chatDayShift, startTime, endTime);
              break;
            case "\nC10-13":
              startTime.setHours(10);
              endTime.setHours(13);
              deleteBabaEvent(startTime, endTime);
              babaCalendar.createEvent(baba + "_" + chatShortDay, startTime, endTime);
              break;
            case "\nC14-22":
              startTime.setHours(14);
              endTime.setHours(22);
              deleteBabaEvent(startTime, endTime);
              babaCalendar.createEvent(baba + "_" + chatNightShift, startTime, endTime);
              break;
            case "\nC19-22":
              startTime.setHours(19);
              endTime.setHours(22);
              deleteBabaEvent(startTime, endTime);
              babaCalendar.createEvent(baba + "_" + chatShortNight, startTime, endTime);
              break;
            case "\nC11-20":
              startTime.setHours(11);
              endTime.setHours(20);
              deleteBabaEvent(startTime, endTime);
              babaCalendar.createEvent(baba + "_" + chatMiddleShift, startTime, endTime);
              break;
            case "\nC14-19":
              startTime.setHours(14);
              endTime.setHours(19);
              deleteBabaEvent(startTime, endTime);
              babaCalendar.createEvent(baba + "_" + chatShortMiddle, startTime, endTime);
              break;
            case "\nC中11-22":
              startTime.setHours(11);
              endTime.setHours(22);
              deleteBabaEvent(startTime, endTime);
              babaCalendar.createEvent(baba + "_" + chatOtherShift, startTime, endTime);
              break;
            case "\nR10-19":
              startTime.setHours(10);
              endTime.setHours(19);
              deleteBabaEvent(startTime, endTime);
              babaCalendar.createEvent(baba + "_" + reviewDayShift, startTime, endTime);
              break;
            case "\nR10-13":
              startTime.setHours(10);
              endTime.setHours(13);
              deleteBabaEvent(startTime, endTime);
              babaCalendar.createEvent(baba + "_" + reviewShortDay, startTime, endTime);
              break;
            case "\nR14-22":
              startTime.setHours(14);
              endTime.setHours(22);
              deleteBabaEvent(startTime, endTime);
              babaCalendar.createEvent(baba + "_" + reviewNightShift, startTime, endTime);
              break;
            case "\nR19-22":
              startTime.setHours(19);
              endTime.setHours(22);
              deleteBabaEvent(startTime, endTime);
              babaCalendar.createEvent(baba + "_" + reviewShortNight, startTime, endTime);
              break;
            case "\nR11-20":
              startTime.setHours(11);
              endTime.setHours(20);
              deleteBabaEvent(startTime, endTime);
              babaCalendar.createEvent(baba + "_" + reviewMiddleShift, startTime, endTime);
              break;
            case "\nR14-19":
              startTime.setHours(14);
              endTime.setHours(19);
              deleteBabaEvent(startTime, endTime);
              babaCalendar.createEvent(baba + "_" + reviewShortMiddle, startTime, endTime);
              break;
            case "\nR中11-22":
              startTime.setHours(11);
              endTime.setHours(22);
              deleteBabaEvent(startTime, endTime);
              babaCalendar.createEvent(baba + "_" + reviewOtherShift, startTime, endTime);
              break;
            case "\n終中14-19":
              startTime.setHours(14);
              endTime.setHours(19);
              deleteBabaEvent(startTime, endTime);
              babaCalendar.createEvent(baba + "_" + mixShift, startTime, endTime);
              break;
            case "\nR19-22\n基中14-19":
              startTime.setHours(14);
              endTime.setHours(19);
              deleteBabaEvent(startTime, endTime);
              babaCalendar.createEvent(baba + "_" + basicShortMiddle, startTime, endTime);
              startTime.setHours(19);
              endTime.setHours(22);
              deleteBabaEvent(startTime, endTime);
              babaCalendar.createEvent(baba + "_" + reviewShortNight, startTime, endTime);
              break;
            case "\nR19-22\n応中14-19":
              startTime.setHours(14);
              endTime.setHours(19);
              deleteBabaEvent(startTime, endTime);
              babaCalendar.createEvent(baba + "_" + advanceShortMiddle, startTime, endTime);
              startTime.setHours(19);
              endTime.setHours(22);
              deleteBabaEvent(startTime, endTime);
              babaCalendar.createEvent(baba + "_" + reviewShortNight, startTime, endTime);
              break;
            case "\nR19-22\n終中14-19":
              startTime.setHours(14);
              endTime.setHours(19);
              deleteBabaEvent(startTime, endTime);
              babaCalendar.createEvent(baba + "_" + finalShortMiddle, startTime, endTime);
              startTime.setHours(19);
              endTime.setHours(22);
              deleteBabaEvent(startTime, endTime);
              babaCalendar.createEvent(baba + "_" + reviewShortNight, startTime, endTime);
              break;
            case "\nC19-22\n基中14-19":
              startTime.setHours(14);
              endTime.setHours(19);
              deleteBabaEvent(startTime, endTime);
              babaCalendar.createEvent(baba + "_" + basicShortMiddle, startTime, endTime);
              startTime.setHours(19);
              endTime.setHours(22);
              deleteBabaEvent(startTime, endTime);
              babaCalendar.createEvent(baba + "_" + chatShortNight, startTime, endTime);
              break;
            case "\nC19-22\n応中14-19":
              startTime.setHours(14);
              endTime.setHours(19);
              deleteBabaEvent(startTime, endTime);
              babaCalendar.createEvent(baba + "_" + advanceShortMiddle, startTime, endTime);
              startTime.setHours(19);
              endTime.setHours(22);
              deleteBabaEvent(startTime, endTime);
              babaCalendar.createEvent(baba + "_" + chatShortNight, startTime, endTime);
              break;
            case "\nC19-22\n終中14-19":
              startTime.setHours(14);
              endTime.setHours(19);
              deleteBabaEvent(startTime, endTime);
              babaCalendar.createEvent(baba + "_" + finalShortMiddle, startTime, endTime);
              startTime.setHours(19);
              endTime.setHours(22);
              deleteBabaEvent(startTime, endTime);
              babaCalendar.createEvent(baba + "_" + chatShortNight, startTime, endTime);
              break;
            case "\n拠10-16":
              startTime.setHours(10);
              endTime.setHours(16);
              deleteBabaEvent(startTime, endTime);
              babaCalendar.createEvent(baba + "_" + hubDay, startTime, endTime);
              startTime.setHours(18);
              endTime.setHours(19);
              deleteBabaEvent(startTime, endTime);
              babaCalendar.createEvent(baba + "_" + hubDay, startTime, endTime);
              break;
           case "\n拠16-22":
             startTime.setHours(16);
             endTime.setHours(22);
             deleteBabaEvent(startTime, endTime);
             babaCalendar.createEvent(baba + "_" + hubNight, startTime, endTime);
             break;
            case "\n体①":
              startTime.setHours(14);
              endTime.setHours(15);
              deleteBabaEvent(startTime, endTime);
              babaCalendar.createEvent(baba + "_" + workShopShift, startTime, endTime);
              break;
            case "\n体②":
              startTime.setHours(19);
              endTime.setHours(20);
              deleteBabaEvent(startTime, endTime);
              babaCalendar.createEvent(baba + "_" + workShopShift, startTime, endTime);
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
    num++;
    count++;
    }
  }