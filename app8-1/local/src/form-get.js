import React from 'react'

export default function FormGet() {
    let [serchResult, setSerchResult] = React.useState('')
    const form = React.useRef()

    const onSubmitForm = (e) => {
        e.preventDefault();
        
        const formData = new FormData(form.current)
        let params = new URLSearchParams(formData) //.toString()
        let URL = `/api/form-get?` + params
        fetch(URL)
        .then(res => res.json())
        .then(result => {
            let r = (
                <>
                    ค้นหา {result.target} ที่ตรงกับ : {result.kw} <br/>
                    พบข้อมูลทั้งหมด {result.results} รายการ 
                </>
            )
            setSerchResult(r)
        })
        .catch(err => alert(err))
    }
  return (
    <div style={{textAlign:'center',marginTop:'20px'}}>
        <form ref={form} onSubmit={onSubmitForm}>
            <label>ค้นหา : </label> &nbsp;
            <select id='target' name='target'>
                <option value='เว็บ'>เว็บ</option>
                <option value='รูปภาพ'>รูปภาพ</option>
                <option value='วีดีโอ'>วีดีโอ</option>
            </select> &nbsp;
            <input type='text' id='kw' name='kw'/> &nbsp;
            <button>ตกลง</button>
        </form>
        <br/>
        <div>{serchResult}</div>
    </div>
  )
}
