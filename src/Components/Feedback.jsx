import React, { useState } from 'react'
import style from './CSSFiles/Feedback.module.css'


export default function Feedback() {
    const [ submit, setSubmit ] = useState(true);
    const [ feedbackData, setFeedbackData ] = useState({ name:"", email:"", suggestionType:"", message:"" });

    const handleChange = (e) =>{
        setFeedbackData((pre)=>({
            ...pre,
            [e.target.id]:e.target.value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(feedbackData, "feedback submitted");
    }


  return (
    <div className={style.feedback_container}>
        <header>Feedback Form</header>

        <form onSubmit={handleSubmit}>
        <div className="mb-3">
            <label htmlFor="name" className="form-label">Full Name</label>
            <input type="text" 
                    className="form-control" 
                    id="name" 
                    placeholder='Enter your full name'
                    value={feedbackData.name}
                    onChange={handleChange}
                    required
            />
        </div>
        <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" 
                    className="form-control" 
                    id="email" 
                    aria-describedby="emailHelp"
                    value={feedbackData.email}
                    placeholder='Enter your email Id'
                    onChange={handleChange}
            />   
        </div>

        <div>
            <label htmlFor="suggestionType" className="form-label">Suggestion Type</label>
            <select className="form-select" id="suggestionType" onChange={handleChange} >
                <option defaultValue={"Select"}>Select</option>
                <option key="bug" >Bug</option>
                <option key="other" >Other</option>
            </select>
        </div>


        <div className="mb-3">
            <label htmlFor="message" className="form-label">Message</label>
            <input type="message" 
                    className="form-control" 
                    id="message" 
                    placeholder='message'
                    value={feedbackData.message}
                    onChange={handleChange}
                    required
            />
        </div>
        <button type="submit"
               className={`btn btn-primary ${style.submitButton}`}
               disabled={!submit}
        >
          {submit ? "Submit" : "submitting"}
        </button>
    </form>
    </div>
  )
}
