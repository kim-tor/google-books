import React from 'react'
import "./style.css";

// export function Input(props) {
//     return (
//         <div className="form-group">
//             <input className="form-control" {...props} />
//         </div>
//     )
// }

export function SubmitBtn(props) {
    return (
        <button {...props} className="btn submitBtn" style={{backgroundColor: "teal", color: "white", marginBottom: "10px"}}>Search</button>
    )
}