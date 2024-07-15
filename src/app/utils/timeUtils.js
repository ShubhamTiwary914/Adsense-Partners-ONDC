
export function generateTimeLabels(range, length) {
    const now = new Date();
    const labels = [];

    switch (range) {
        case 0: // hours
            for (let i = 0; i < length; i++) {
                let hour = (now.getHours() - length + 1 + i + 24) % 24;
                labels.push(hour === 0 ? '12am' : hour === 12 ? '12pm' : hour > 12 ? (hour - 12) + 'pm' : hour + 'am');
            }
            break;
        case 1: // days
            const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
            for (let i = 0; i < length; i++) {
                let day = (now.getDay() - length + 1 + i + 7) % 7;
                labels.push(daysOfWeek[day]);
            }
            break;
        case 2: // weeks
            for (let i = 0; i < length; i++) {
                let date = new Date(now.getTime() - (length - 1 - i) * 7 * 24 * 60 * 60 * 1000);
                let endDate = new Date(date.getTime() + 6 * 24 * 60 * 60 * 1000);
                labels.push(`${date.toLocaleDateString('en-US', {month: 'short', day: 'numeric'})} - ${endDate.toLocaleDateString('en-US', {month: 'short', day: 'numeric'})}`);
            }
            break;
        case 3: // months
            for (let i = 0; i < length; i++) {
                let date = new Date(now.getFullYear(), now.getMonth() - length + 1 + i, 1);
                labels.push(date.toLocaleDateString('en-US', {month: 'short'}));
            }
            break;
    }
    return labels;
}


export function getTimestamps(length, interval) {
    const now = new Date();
    now.setMinutes(0, 0, 0); 
    const timestamps = [];
    for (let i = 0; i < length; i++) {
        const date = new Date(now.getTime() - i * interval * 60000); // interval is in minutes
        const formattedDate = date.toISOString().slice(0, 19).replace('T', 'T');
        timestamps.unshift(formattedDate);
    }
    return timestamps;
}