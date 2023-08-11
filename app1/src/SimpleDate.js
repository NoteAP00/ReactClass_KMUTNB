class SimpleDate {
    constructor(date, month, year) {
        this.date = date;
        this.month = month;
        this.year = year;
    }

    getShortDate() {
        return `${this.date}/${this.month}/${this.year+543}`;
    }
    
}
export default SimpleDate;
