function displayTime() {
    var dateTime = new Date();
    var hrs = dateTime.getHours();
    var min =dateTime.getMinutes();
    var sec = dateTime.getSeconds();
    var mm = dateTime.getMonth();
    var dd = dateTime.getDate();
    var yyyy = dateTime.getFullYear();
    var session = document.getElementById('session');

    const monthName=[
                'January', 'February', 'March',
                'April', 'May', 'June',
                'July', 'August', 'September',
                "October", 'November', 'December',
            ];

    if(hrs >= 12){
        session.innerHTML = 'PM';
    } 

    if (hrs>12) {
        hrs = hrs - 12
    }


    document.getElementById('hours').innerHTML = hrs;
    document.getElementById('minutes').innerHTML = min;
    document.getElementById('seconds').innerHTML = sec;
    document.getElementById('month').innerHTML =monthName[mm];
    document.getElementById('year').innerHTML=yyyy;
    document.getElementById('day').innerHTML=dd;
}
setInterval(displayTime,10,);
