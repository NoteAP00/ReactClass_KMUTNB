import React, { Component } from "react";

export class Calendar extends Component {
    getDate() {
        const dayName = ['อาทิตย์', 'จันทร์', 'อังคาร', 'พุธ', 'พฤหัสบดี', 'ศุกร์', 'เสาร์']
        const monthName = ['มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน', 'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม']
        const date = new Date()
        const weekDay = dayName[date.getDay()]
        const day = date.getDate()
        const month = monthName[date.getMonth()]
        const year = date.getFullYear() + 543
        return `วัน${weekDay} ที่ ${day} ${month} พ.ศ.${year}`
    }

    isLeapYear() {
        const date = new Date()
        const y = date.getFullYear()
        if ((y % 400 === 0) || (y % 4 === 0 && y % 100 !== 0)) {
            return true
        } else {
            return false
        }
    }

    render() {
        return (
            <div>
                {this.getDate()}
                {/* <br />
                {this.isLeapYear() ? 'ปีนี้เป็นปีอธิกสุรทิน' : 'ปีนี้ไม่ใช่ปีอธิกสุรทิน'} */}
            </div>
        )
    }
}

export class Button extends Component {
    // constructor(){
    //     super()
    //     this.onClickButtonOK = this.onClickButtonOK.bind(this)
    // }

    showAllert(msg) {
        alert(msg)
    }

    // onClickButtonOK() {
    //     
    // Event Handler แบบ Regular Function
    //     this.showAllert('Hello')
    // }

    onClickButtonOK = () => {
        // Evenr Handler แบบ Arrow Function
        this.showAllert('Hello')
        // ใช้  this ได้เลย โดยไม่เกิดปัญหา
    }

   

    render() {
        return (
            <button onClick={this.onClickButtonOK}>OK</button>
        )
    }
}

