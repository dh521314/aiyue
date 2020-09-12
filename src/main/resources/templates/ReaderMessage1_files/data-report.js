function dataReport(data) {
  var logServer = "/portal/report/loggerreport"
  var dataArr = [];
  for (var key in data) {
      if (data[key] !== null && data[key] !== undefined) {
          dataArr.push(key + '=' + data[key]);
      }
  }
  var dataStr = dataArr.join('&');
  
  var url = logServer + '?' + dataStr;
  $.ajax({
    url: url,
    method: 'GET'
  });
}