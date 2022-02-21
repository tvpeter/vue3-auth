import Validations from "./Validations";

export default class SignupValidation {
    constructor(email, password){
        this.email = email;
        this.password = password;
    }

    checkValidations(){
        let errors = [];

        if(!Validations.checkEmail(this.email)){
            errors['email'] = 'Invalid email';
        }

        if(!Validations.minLength(this.password, 6)){
            errors['password'] = 'Password should be atleast 6 characters';
        }

        return errors;
    }
}