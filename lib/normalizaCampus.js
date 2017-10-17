module.exports = (text) => {
    let parts = text.split('- ');
    let campus = parts[1]
    if (campus == undefined) return 'Reitoria';
    else return campus;
}