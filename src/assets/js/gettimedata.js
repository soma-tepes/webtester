export function getTimeData() {
    const timeData = [];
    for(let i = 0; i < 24; i++){
        let hour = i < 10 ? `0${i}:00` : `${i}:00`;
        let period = i < 12 ? `${i} am` : `${i - 12} pm`;
        timeData.push({a: hour, b: period});
    }
    return timeData;
}