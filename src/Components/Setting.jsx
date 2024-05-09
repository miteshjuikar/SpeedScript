import React, { useEffect, useState } from 'react'
import style from './CSSFiles/Setting.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { db } from './firebase'
import { doc, updateDoc } from "firebase/firestore"; 
import { STORE_OBJECT } from '../store/actionTypes';
import { storeObject } from '../store/actions';


export default function Setting() {

    const userDetails = useSelector(state => state.myObject);

    const dispatch = useDispatch();
    const [ settingData, setSettingData ] = useState({
                                                        name: userDetails.name,
                                                        photo: userDetails.photo,
                                                        speed: userDetails.speed,
                                                        userId: userDetails.userId,

                                                    });

    const handleChange = (e) => {
        setSettingData((pre) =>({
            ...pre,
            [e.target.id]: e.target.value
        }))
    }

    const speedInterger = (e) => {
 
        dispatch(storeObject({
                                ...userDetails,
                                speed: parseFloat(e.target.value)
                            }));

        setSettingData((pre) =>({
            ...pre,
            speed: parseFloat(e.target.value)
        }))
    }

    const handleSubmit = () => {
  
        const docRef = doc(db, 'userData',userDetails.userId);
        
        updateDoc(docRef, settingData)
          .then(() => {
             
            dispatch(storeObject({
                ...userDetails,
                name: settingData.name,
                photo: settingData.photo,
                speed: settingData.speed,
            }));

            alert('Document updated successfully.');
          })
          .catch((error) => {
            alert('Error updating document:', error);
          });

    }

  return (
    <div className={style.mainSetting}>

        <div className={style.circle}>
            <img src={userDetails.photo} alt="Profile Image" />
        </div>

    <div className={style.feedback_container}>
        <header>Setting</header>
        <div className={style.form} >
        <div className="mb-3">
            <label htmlFor="name" className="form-label">Full Name</label>
            <input type="text" 
                    className="form-control" 
                    id="name" 
                    placeholder='Enter your full name'
                    value={settingData.name}
                    onChange={handleChange}
                    required
            />
        </div>
        <div className="mb-3">
            <label htmlFor="speed" className="form-label">Speed</label>
            <select className="form-select" id="speed" onChange={speedInterger} >
                <option defaultValue={1.5}>Select</option>
                <option value={0.5}>0.5</option>
                <option value={1}>1</option>
                <option value={1.5}>1.5</option>
                <option value={2}>2</option>
                <option value={2.5}>2.5</option>
            </select>
        </div>
        <div className="mb-3">
            <label htmlFor="photo" className="form-label">Photo</label>
            <input type="text"
                    className="form-control" 
                    id="photo"
                    value={settingData.photo}
                    placeholder='Upload valide photo url'
                    onChange={handleChange}
                    disabled
            />   
        </div>
       
        <div className="mb-3">
            <label htmlFor="userId" className="form-label">User Id</label>
            <input type="text"
                    className="form-control" 
                    id="userId"
                    value={settingData.userId}
                    disabled
                    onChange={handleChange}
            />   
        </div>
        <button type="submit"
                className={`btn btn-primary ${style.submitButton}`}
                onClick={handleSubmit}
        >Submit</button>
    </div>
    </div>
    </div>

  )
}
