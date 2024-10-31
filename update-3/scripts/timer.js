var second = 1000;
var minute = second * 60;
var hour = minute * 60;
var day = hour * 24;
// var inputtimer = prompt("input timer admin",'Mar 29, 2024 22:00:00')
// اون تاریخی که قراره بهش برسیم
let countDown = new Date('Oct 20, 2024 10:00:00').getTime();

function MyRacing() {
let nowDate = new Date().getTime(),
distance = countDown - nowDate;
document.getElementById('days').innerText = Math.floor(distance / (day)),
document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour)),
document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute)),
document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);
	  
// وقتی تاریخ و زمان گذشته بود
if (distance < 0) {
 clearInterval(MyTimer);
 alert("تخقیف به پایان رسید");
}

}

MyTimer = setInterval( MyRacing , 1000);