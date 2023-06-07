function displayTime () {
	let time = new Date ();
	// I used the date.getTime to get the hours, mins and seconds.
	let hour = time.getHours();
	let mins = time.getMinutes();
	let seconds = time.getSeconds();
	let am_pm = "AM"

 if (hour > 12) {
        hour -= 12;
        am_pm = "PM";
    }

    if (hour === 0) {
        hour = 12;
        am_pm = "AM";
    }

    if (hour < 10) {
        hour = "0" + hour;
    }

    if (mins < 10) {
        mins = "0" + mins;
    }

    if (seconds < 10) {
        seconds = "0" + seconds;
    }
 let currentTime = hour + ":" + mins + ":" + seconds + " " + am_pm;
    document.getElementById('time').innerHTML = currentTime;
}


setInterval(displayTime, 1000);