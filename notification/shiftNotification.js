function sendToSlack(body, channel) {
  var postUrl  = "https://hooks.slack.com/services/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";
  var data = { "channel" : channel, "username" : "明日のスケジュールをお知らせします", "text" : body};
  var payload = JSON.stringify(data);
  var options = {
    "method" : "POST",
    "contentType" : "application/json",
    "payload" : payload
  };
  var response = UrlFetchApp.fetch(postUrl, options);
}

// スプレッドシートから取り込む前の基本形
function shiftNotification() {

  // 日付を取得
  // Dateメソッドはインスタンス化されているため、返り値を都度変数代入しなくて問題ない
  var tomorrow = new Date(new Date().toDateString()); // このように記述することで日付の部分を文字列で取得できる。自動で0:00になる。
  // １日未来に加算する
  tomorrow.setDate(tomorrow.getDate() + 1);
  var yearNum = tomorrow.getFullYear(); // 当年を取得
  var monthNum = tomorrow.getMonth() + 1 ; // 月は0から数えるため、当月にするために+1する
  var dayNum = tomorrow.getDate(); // 日付を取得
  var dayArr = ['日', '月', '火', '水', '木', '金', '土'] // 明日の日付に曜日を追加するために曜日の配列を用意
  var day = dayArr[tomorrow.getDay()];  // getDay()関数でtommorowに一致する曜日を取り出す
  var tomorrowString = String(yearNum) + "/" 
                    + String(monthNum) + "/"
                    + String(dayNum) + "" 
                    + "（"+ String(day) + "）";
  var tommorowDay = "明日の日付："+ tomorrowString // 実際に表示させる形式を作成

  // シフトの入ったスプレッドシートを読み込む。シートは0から数える。
  var shifts = SpreadsheetApp.openById("1ewr5i-ePS7d8rOM6VMfCMrE2cJnd9_Ttc9ZFNv4z6hc").getSheets()[0];
  var schedules = shifts.getRange("A2:B31").getValues();  // セル範囲を選択
  console.log(schedules)

  // return false;

  // 繰り返し処理は配列schedulesの要素数分繰り返す。インデックスは0から数え、処理毎に1ずつ加えていく。
  for (let i = 0; i < schedules.length; i ++) {
    // 二次元配列のn番目の0要素に入っている日付と前の行で取得した明日の日付が一致する場合、switch関数で処理を行う。
    // (schedules[i][0] == tomorrow)が効かない！！Dateオブジェクトで等値演算子が使用できないため。getTimeメソッドを用いて、時刻付きに変換すると等値演算子を使用できるようになる。
    if (schedules[i][0].getTime() == tomorrow.getTime()){
      switch (schedules[i][1]) {
        case "9:00-18:00":
          var shift = "<@U020HLTBTHN> ：9:00-18:00";
          summary(shift)
          break;
        case "10:00-19:00":
          var shift = "<@U020HLTBTHN> ：10:00-19:00";
          summary(shift)
          break;
        case "11:00-20:00":
          var shift = "<@U020HLTBTHN> ：11:00-20:00";
          summary(shift)
          break;
        case "13:00-22:00":
          var shift = "<@U020HLTBTHN> ：13:00-22:00";
          summary(shift)
          break;
        case "休み":
          var shift = "<@U020HLTBTHN> ：休み";
          summary(shift)
          break;
      } 
    }else{
      // バグがあった際、発見しやすくするために残しておく
      console.log("日付が一致しなかったインデックス")
      console.log(i)
    }
  }

  function summary(shift){
    var body = tommorowDay + "\n" + shift;
    sendToSlack(body, "#明日の惇史郎のスケジュール");
  }
}