let Helper = {
    convertDateTime: function(isoDate) {
        let dateObj = new Date(isoDate);

        return dateObj.toLocaleDateString('en-US', {
            month: '2-digit',
            day: '2-digit',
            year: 'numeric'
        }) + " " + dateObj.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            hourCycle: 'h23'
        });
    }
}

module.exports = Helper