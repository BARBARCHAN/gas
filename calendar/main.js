// シフト表を指定。[]はシートのページ。左から順に0→1
var shifts = SpreadsheetApp.openById("スプレッドシートのID").getSheets()[0];
// シフト表から名古屋メンバーのスケジュールを取得する。※セルの範囲は毎月手動確認が必要
const schedules = shifts.getRange("A5:AG39").getValues();
// console.log(schedules)

// 日付に関する情報を取得
const date = new Date();
// 数字直打ちが推奨？
const firstDay = new Date(date.getFullYear(), 8, 1); 
const firstDayString = Utilities.formatDate(firstDay, "Asia/Tokyo", "yyyy/MM/dd");
const lastDay = new Date(date.getFullYear(), 9, 0);
const lastDayString = Utilities.formatDate(lastDay, "Asia/Tokyo", "yyyy/MM/dd");

// カレンダーに表示させるためのデータ文字をそれぞれ変数に代入
const basicDayShift = "基礎10-19"
const basicShortDay = "基礎10-13"
const basicNightShift = "基礎14-22"
const basicShortNight = "基礎19-22"
const basicShortMiddleShift = "基礎11-19"
const basicMiddleShortDay = "基礎11-13"
const basicMiddleShift = "基礎11-20"
const basicShortMiddle = "基礎14-19"
const basicOtherShift = "基礎11-13,19-22"

const advanceDayShift = "応用10-19"
const advanceShortDay = "応用10-13"
const advanceNightShift = "応用14-22"
const advanceShortNight = "応用19-22"
const advanceShortMiddleShift = "応用11-19"
const advanceMiddleShortDay = "応用11-13"
const advanceMiddleShift = "応用11-20"
const advanceShortMiddle = "応用14-19"
const advanceOtherShift = "応用11-13,19-22"

const finalDayShift = "最終10-19"
const finalShortDay = "最終10-13"
const finalNightShift = "最終14-22"
const finalShortNight = "最終19-22"
const finalShortMiddleShift = "最終11-19"
const finalMiddleShortDay = "最終11-13"
const finalMiddleShift = "最終11-20"
const finalShortMiddle = "最終14-19"
const finalOtherShift = "最終11-13,19-22"

const chatDayShift = "チャット10-19"
const chatShortDay = "チャット10-13"
const chatNightShift = "チャット14-22"
const chatShortNight = "チャット19-22"
const chatMiddleShift = "チャット11-20"
const chatMiddleShortDay = "チャット11-13"
const chatShortMiddle = "チャット14-19"
const chatOtherShift = "チャット11-13,19-22"

const reviewDayShift = "レビュー10-19"
const reviewShortDay = "レビュー10-13"
const reviewNightShift = "レビュー14-22"
const reviewShortNight = "レビュー19-22"
const reviewMiddleShift = "レビュー11-20"
const reviewShortMiddleDay = "レビュー11-19"
const reviewMiddleShortDay = "レビュー11-13"
const reviewShortMiddle = "レビュー14-19"
const reviewOtherShift = "レビュー11-13,19-22"

const mixShift = "通話14-19、別シフトあり"

const followDayShift = "フォロー10-19"
const followNightShift = "フォロー14-22"
const followMiddleShift = "フォロー11-20"
const followOtherShift = "フォロー11-13,19-22"

const workShopShift = "体験会シフト（要確認）"

const noShiftA = "シフト外10-19"
const noShiftB = "シフト外11-20"
const noShiftC = "シフト外14-22"

const hubDay = "統括シフト10-16"
const hubNight = "統括シフト16-22"

var num = 1;
var count = 0;