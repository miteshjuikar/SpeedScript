import React from 'react';
import { useState } from 'react';
import style from './CSSFiles/SignUp.module.css';
import Validation from './Validations';
import Icon from '../assets/typingSymbol.png';
import { useNavigate } from 'react-router-dom';
        
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from './firebase';
import { doc, setDoc, updateDoc } from "firebase/firestore"; 



export default function SignUp() {
    const photoURL = ["https://firebasestorage.googleapis.com/v0/b/typing-trainer-ec708.appspot.com/o/images%2FIMG_20230905_200957.jpg?alt=media&token=21c95236-9cce-4244-83f0-243caa516c71","https://firebasestorage.googleapis.com/v0/b/typing-trainer-ec708.appspot.com/o/images%2FIMG_20230905_190012.jpg?alt=media&token=7d3fd75f-2f3c-4bd4-ac75-81b8ad74e5f3","https://firebasestorage.googleapis.com/v0/b/typing-trainer-ec708.appspot.com/o/images%2FIMG_20230905_200823.jpg?alt=media&token=75c8e612-8e88-4135-b387-8065ced6917e","https://firebasestorage.googleapis.com/v0/b/typing-trainer-ec708.appspot.com/o/images%2FIMG_20230905_200940.jpg?alt=media&token=f6e81374-acc7-40cb-bf30-deb4e13c122e","https://firebasestorage.googleapis.com/v0/b/typing-trainer-ec708.appspot.com/o/images%2FIMG_20230905_200857.jpg?alt=media&token=bd00dd0f-a0ac-41d0-9f3d-3a135849a536","https://firebasestorage.googleapis.com/v0/b/typing-trainer-ec708.appspot.com/o/images%2FIMG_20230905_200841.jpg?alt=media&token=6b613a93-9fdd-4469-8f90-bbb03326919a","https://firebasestorage.googleapis.com/v0/b/typing-trainer-ec708.appspot.com/o/images%2FIMG_20230905_200806.jpg?alt=media&token=3a99b085-11e1-4a4a-9f7f-f58864ec871c"]

    const [signUpData, setSignUpData] = useState({name: "", email:"", password:"", confirmPassword: ""});
    const [ submit, setSubmit ] = useState(true);
    const [ error, setError ] = useState({ name: "", email:"", password:"", confirmPassword: ""});

    const navigate = useNavigate();
    const handleChange = (e) => {
        setSignUpData((pre)=> ({
            ...pre,
            [e.target.id]: e.target.value
        }))
    }

const handleSubmit = async(e) => {
    e.preventDefault()
    setError(Validation(signUpData));
    const email = signUpData.email;
    const password = signUpData.password;
    try {
//Create userId 
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;

//Set new data in firestore to respective user id
        await setDoc(doc(db, "userData", user.uid), {
            userId:user.uid,
            name: signUpData.name,
            email: signUpData.email,
            photo: photoURL[Math.floor((Math.random() * 7) + 1)],
            myScore: 0,
            wpm: 0
        });
              
              
 //Updated highscore in database
          // const docRef = doc(db, 'userData', 'highScore');
          
          // // Data to be updated in the document
          // const updatedData = {
          //   highScore: 12
          // };
          
          // // Update the document with the specified data
          // updateDoc(docRef, updatedData)
          //   .then(() => {
          //     console.log('Document updated successfully.');
          //   })
          //   .catch((error) => {
          //     console.error('Error updating document:', error);
          //   });
    
            navigate("/logIn");
    }
    catch (err) {
        alert( err.code, err.message);
    }   
}

  return (
    
    <div className={style.mainLogIn}>
    <div className={style.sideText}>
        <img src={Icon} height="100px" width="100px" />
      <h2>Looks like you're new here!</h2>
      <p>Sign up with your email to get started</p>
    </div>
    <div className={style.logInForm}>
    <form onSubmit={handleSubmit}>
        <div className="mb-3">
            <label htmlFor="name" className="form-label">Full Name</label>
            <input type="text" 
                    className="form-control" 
                    id="name" 
                    value={signUpData.name}
                    placeholder='Enter your full name'
                    onChange={handleChange}
            />
            {error.name && <div className="form-text" style={{color: 'red'}}>{error.name}</div>}
        </div>
        <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" 
                    className="form-control" 
                    id="email" 
                    aria-describedby="emailHelp"
                    value={signUpData.email} 
                    placeholder='Enter your email Id'
                    onChange={handleChange}
            />
            {error.email && <div className="form-text" style={{color: 'red'}}>{error.email}</div>}
            
        </div>
        
        <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" 
                    className="form-control" 
                    id="password" 
                    value={signUpData.password} 
                    placeholder='Enter password'
                    onChange={handleChange}
            />
            {error.password && <div className="form-text" style={{color: 'red'}}>{error.password}</div>}
        </div>
        <div className="mb-3">
            <label htmlFor="verifyPassword1" className="form-label">Confirm Password</label>
            <input type="password" 
                    className="form-control" 
                    id="confirmPassword" 
                    placeholder='Confirm Password'
                    value={signUpData.confirmPassword} 
                    onChange={handleChange}
            />
            {error.confirmPassword && <div className="form-text" style={{color: 'red'}}>{error.confirmPassword}</div>}
        </div>
        <button type="submit"
               className="btn btn-primary"
               disabled={!submit}
        >
          {submit ? "Sign Up" : "submitting"}
        </button>
    </form>
    </div>
    </div>
  )
}
