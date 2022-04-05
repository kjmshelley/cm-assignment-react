module.exports.timeConverter = (time) => {
    if (!time) return "";
    if (time < 60) return `${time} min`;

    const num = parseInt(time);
    const hours = (num / 60);
    const roundHours = Math.floor(hours);
    const minutes = (hours - roundHours) * 60;
    const roundMinutes = Math.round(minutes);

    return roundMinutes > 0 ? `${roundHours} hr ${roundMinutes} min` : `${roundHours} hr`
}

module.exports.convertCaloriesToKJ = (cal) => {
    //  1 kcal = 4.184 kJ
    if (!cal) return 0;
    if (!isFinite(cal)) return 0;
    return (cal / 4.184).toFixed(0);
}

module.exports.round = (x) => {
    const MAX_STARS = 5;
    const MIN_STARS = 0.1;
    let totalWholeStars = 0;
    let totalHalfStars = 0;
    let remainingStars = 0;

    if (!x || (!isFinite(x))) return [totalWholeStars, totalHalfStars, MAX_STARS];

    if (x < MIN_STARS) return [totalWholeStars, totalHalfStars, MAX_STARS];
    if (x > MAX_STARS) return [MAX_STARS, totalHalfStars, remainingStars];

    totalWholeStars = parseInt(x);
    if (x % 1 > 0 && totalWholeStars < 5) totalHalfStars = 1;
    remainingStars = (MAX_STARS - totalWholeStars - totalHalfStars);
    return [totalWholeStars, totalHalfStars, remainingStars];
}