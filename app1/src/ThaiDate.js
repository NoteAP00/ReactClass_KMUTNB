import SimpleDate from './SimpleDate.js'
class ThaiDate extends SimpleDate {
    getLongDate() {
        const m = ['มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษาคม', 'มิถุนายน', 'กรกฎาคม', 'สิงหาคม','กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม']
        return `${this.date}/${m[this.month - 1]}/${this.year+543}`
    }

    isLeapYear() {
        let y = this.year
        if ((y % 400 === 0) || (y % 4 === 0 && y % 100 !== 0)) {
            return true
        } else {
            return false
        }
    }
}
export default ThaiDate;