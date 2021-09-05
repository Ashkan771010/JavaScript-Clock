function showClock() {
  var date = new Date();
  var second = date.getSeconds();
  var minute = date.getMinutes();
  var hour = date.getHours();
  var show = "AM";
  var clock = document.getElementById('clock');

  if(hour == 0) {
    hour = 12;
  }
  if(hour > 12) {
    hour = hour - 12;
    show = "PM";
  }

  hour = (hour < 10) ? "0" + hour : hour;
  minute = (minute < 10) ? "0" + minute : minute;
  second = (second < 10) ? "0" + second : second;

  var time = hour + ":" + minute + ":" + second + show;
  clock.textContent = time;

  setTimeout(showClock,1000);
}

showClock();