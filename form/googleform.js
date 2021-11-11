function sendToSlack(body, channel) {
  var url = "https://hooks.slack.com/services/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";
  var data = { "channel" : channel, "username" : "今日の100マス計算の結果", "text" : body};
  var payload = JSON.stringify(data);
  var options = {
    "method" : "POST",
    "contentType" : "application/json",
    "payload" : payload
  };
  var response = UrlFetchApp.fetch(url, options);
}

function test() {
  sendToSlack("テスト通知確認です", "#100マス計算バトル");
}

function onFormSubmit(e){
  var body = "100マス計算の結果が報告されました\n"; 
  var applicant = "";
  var itemResponse = e.response.getItemResponses();

  for (var i = 0; i < itemResponse.length; i++){
    var formData = itemResponse[i];
    var title = formData.getItem().getTitle();
    // var response = formData.getResponse();​
    
    switch (title) {
      case "名前":
        candidate = response;
        break;
      case "実施した項目":
        menu = response;
        break;
      case "時間（秒）":
        time = response;
        break;
      default:
        break;
    }
  }
  var bodyPublic =  body + "*名前* \n" + candidate 
  + "\n *実施した項目* \n" + menu
  + "\n *時間（秒）* \n" + time
  sendToSlack(bodyPublic, "#100マス計算バトル");
}