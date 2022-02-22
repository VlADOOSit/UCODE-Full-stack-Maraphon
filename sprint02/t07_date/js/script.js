function getFormattedDate(dateObject) {
    let dayOfMonth = dateObject.getDate();
    let month = dateObject.getMonth() + 1;
    let year = dateObject.getFullYear();
    let hour = dateObject.getHours();
    let minutes = dateObject.getMinutes();
    let weekday = dateObject.toLocaleString("en-US", {weekday: 'long'});

    function time(hourOrMin) {
        return String(hourOrMin).length === 1 ? '0' + hourOrMin : hourOrMin;
    }
    function date(dayOrMonth) {
        return String(dayOrMonth).length === 1 ? '0' + dayOrMonth : dayOrMonth;
    }


    return `${date(dayOfMonth)}.${date(month)}.${year} ${time(hour)}:${time(minutes)} ${weekday}`;
}
