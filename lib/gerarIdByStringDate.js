module.exports = (id, date, time) => {
    let resultDate = date.split('/').reduce((anterior, atual) => {
        return anterior + parseInt(atual);
    }, 0);

    let resultTime = time.split('h').reduce((anterior, atual) => {
        return anterior + parseInt(atual);
    }, 0);

    return id.charAt(0) + resultDate + id.charAt(id.length - 1) + resultTime;
}