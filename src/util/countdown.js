/*
函数表示倒计时功能
参数：endtime代表未来时间  格式： "2019/12/12 10:20:30"
返回："10,20,15"  表示未来时间距离现在时间还有10小时20分15秒
      "over"   表示倒计时结束
*/
export default function (endtime) {
  var end = new Date(endtime).getTime()
  var start = new Date().getTime()
  var diff = end - start
  // 倒计时结束
  if (diff <= 0) {
    return 'over'
  }
  var h = Math.floor(diff / (1000 * 60 * 60))
  var m = Math.floor((diff - h * 60 * 60 * 1000) / (1000 * 60))
  var s = Math.floor((diff - h * 60 * 60 * 1000 - m * 60 * 1000) / 1000)
  // es6 字符串补全
  return h.toString().padStart(2, '0') + ',' + m.toString().padStart(2, '0') + ',' +
        s.toString().padStart(2, '0')
}
