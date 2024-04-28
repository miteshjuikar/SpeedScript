const Validation = (formData) => {
    let error = {}
    console.log(formData);
    if(!formData.name){
        error.name = "Name Required"
    }
    else if(formData.name.length < 5){
        console.log(!(formData.name.length < 5));
        error.name = "Name must be more than 5 character"
    }
    if(!formData.email){
        error.email = "Email Required" 
    }
    
    if(!formData.password){
        error.password = "Password Required"  
    }
    else if(formData.password.length < 5){
        error.password = "Password must be more than 5 character"
    }
    if(!formData.confirmPassword){
        error.confirmPassword = "Enter Password"  
    }
    else if(!(formData.confirmPassword === formData.password)){
        error.confirmPassword = "Please type password as it is"
    }
    
    return error
}

export default Validation;
