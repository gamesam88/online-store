
import React from "react";
import { useState} from "react";

function PersonDetails(){

const [email, setEmail] = useState("");
const [emailDirty, setEmailDirty] = useState(false);
const [emailError, setEmailError] = useState("error");
const [phone, setPhone] = useState("");
const [phoneDirty, setPhoneDirty] = useState(false);
const [phoneError, setPhoneError] = useState("error");

const [name, setName] = useState("");
const [nameDirty, setNameDirty] = useState(false);
const [nameError, setNameError] = useState("error");

const [address, setAddress] = useState("");
const [addressDirty,setAddressDirty] = useState(false);
const [addressError, setAddressError] = useState("error");


const addressHandler = (e: React.ChangeEvent<HTMLInputElement>) =>{
    setAddress(e.target.value);

    const re = /[а-яА-яa-zA-z]+\s/ig;

    if(!re.test(String(e.target.value).toLowerCase())){
        setAddressError("error");
        e.target.classList.remove("input-True");
    }else{
        setAddressError("");
       e.target.classList.add("input-True");
    }


  }

const addressBlurHandler = (e: React.FocusEvent<HTMLInputElement>) =>{
      
        switch ( e.target.name){
            case "address":
                setAddressDirty(true)
                break;
        }
    }



const nameHandler = (e: React.ChangeEvent<HTMLInputElement>) =>{
    setName(e.target.value);

    const re = /([а-яА-яa-zA-z]+\s)+([а-яА-яa-zA-z]+)/ig;

    if(!re.test(String(e.target.value).toLowerCase())){
        setNameError("error");
        e.target.classList.remove("input-True");
    }else{
        setNameError("");
       e.target.classList.add("input-True");
    }


  }

const nameBlurHandler = (e: React.FocusEvent<HTMLInputElement>) =>{
      
        switch ( e.target.name){
            case "name":
                setNameDirty(true)
                break;
        }
    }


//const [formValid, setFormValid] = useState(false);
/*
interface IblurHandler {
    e: HTMLInputElement;
    target: HTMLInputElement;
    name: string;
    value: string;    
  }
  */
/*
  useEffect(():void=>{
    if(emailError){
        setFormValid(false);
    }else{
        setFormValid(true)
    }
  }, [emailError])
*/

  const emailHandler = (e: React.ChangeEvent<HTMLInputElement>) =>{
    setEmail(e.target.value);

    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(!re.test(String(e.target.value).toLowerCase())){
        setEmailError("error");
        e.target.classList.remove("input-True");
    }else{
        setEmailError("");
       e.target.classList.add("input-True");
    }


  }

const blurHandler = (e: React.FocusEvent<HTMLInputElement>) =>{
      
        switch ( e.target.name){
            case "email":
                setEmailDirty(true)
                break;
        }
    }




    const phoneHandler = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setPhone(e.target.value);
    
        const re = /(^8|7|\+7)((\d{10})|(\s\(\d{3}\)\s\d{3}\s\d{2}\s\d{2}))/;
    
        if(!re.test(String(e.target.value).toLowerCase())){
            setPhoneError("error");
            e.target.classList.remove("input-True");
        }else{
            setPhoneError("");
           e.target.classList.add("input-True");
        }
    
    
      }
    
    const phoneBlurHandler = (e: React.FocusEvent<HTMLInputElement>) =>{
          
            switch ( e.target.name){
                case "phone":
                    setPhoneDirty(true)
                    break;
            }
        }


   



    return(
        <div className="person-details">
            <h2 className="person-details__h2">Personal details</h2>
            <div className="user-name form-item">

            {(nameDirty && nameError) && <div className="ErrorInput"> {nameError}</div>}


                 <input 
                  value={name} 
                  onChange={e=> nameHandler(e)} 
                  onBlur={e=> nameBlurHandler(e)} 
                 
                 type="text" name="name" className="form-item__input" placeholder="Name" />
            </div>

            <div className="phone-number form-item">

            {(phoneDirty && phoneError) && <div className="ErrorInput"> {phoneError}</div>}
                <input 
                value={phone} 
                onChange={e=> phoneHandler(e)} 
                onBlur={e=> phoneBlurHandler(e)} 
                
                name="phone" type="text" className="form-item__input" placeholder="Phone number" />
            </div>

            <div className="address form-item">

            {(addressDirty && addressError) && <div className="ErrorInput"> {addressError}</div>}

                <input 

                    value={address} 
                    onChange={e=> addressHandler(e)} 
                    onBlur={e=> addressBlurHandler(e)} 
                
                
                type="text" name="address" className="form-item__input" placeholder="Delivery address" />
            </div>

            <div className="email form-item">

                {(emailDirty && emailError) && <div className="ErrorInput"> {emailError}</div>}

                <input
                 value={email} 
                 onChange={e=> emailHandler(e)} 
                 onBlur={e=> blurHandler(e)} 
                
                type="text" name="email" className="form-item__input" placeholder="E-mail" />


            </div>
           
            
            
        </div>
    )
}

export default PersonDetails;