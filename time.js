const date = document.querySelector(".time");
let newDate = new Date();

date.innerHTML = showDate(newDate);

function showDate(time){
    const days = [ "Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ]
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

    let day = days[time.getDay()];
    let date = time.getDate()
    let month = months[time.getMonth()];
    let year = time.getFullYear();

    return `${day},&nbsp;${date}&nbsp;${month}&nbsp;${year}`;

}
