function sendToSlack(body, channel) {
  var postUrl  = "webhockのURL";
  var data = { "channel" : channel, "username" : "家計簿更新通知bot", "text" : body};
  var payload = JSON.stringify(data);
  var options = {
    "method" : "POST",
    "contentType" : "application/json",
    "payload" : payload
  };
  var response = UrlFetchApp.fetch(postUrl, options);
}

function testNotification() {
  var body = "通知のテストです";
  sendToSlack(body, "#家計簿");
}

function notification() {
  // urlは毎月のシートに変更する
  var spreadsheet = "スプレッドシートのURL"
  var body = "家計簿を更新しました。"+ "\n" + "スプレッドシートを確認してください。" + "\n" + spreadsheet
  sendToSlack(body, "#家計簿");
}