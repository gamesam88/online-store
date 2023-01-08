import React from "react";
import { useState} from "react";



function CardData(){

const [cardDataInput, setCardDataInput] = useState("");
const [cardDataInputDirty,setCardDataInputDirty] = useState(false);
const [cardDataInputError, setCardDataInputError] = useState("error");

const [validDataInput, setvalidDataInput] = useState("");
const [validDataInputDirty,setvalidDataInputDirty] = useState(false);
const [validDataInputError, setvalidDataInputError] = useState("error");


const [cvvDataInput, setCvvDataInputInput] = useState("");
const [cvvDataInputDirty,setCvvDataInputInputDirty] = useState(false);
const [cvvDataInputError, setCvvDataInputError] = useState("error");

const cvvDataInputHandler = (e: React.ChangeEvent<HTMLInputElement>) =>{
    setCvvDataInputInput(e.target.value);
    const re = /[0-9]{3,3}/;
    if(!re.test(String(e.target.value).toLowerCase()) || e.target.value.length > 3){
        setCvvDataInputError("error");
        e.target.classList.remove("input-True");
    }else{
        setCvvDataInputError("");
       e.target.classList.add("input-True");
    }
  }

const cvvDataInputBlurHandler = (e: React.FocusEvent<HTMLInputElement>) =>{
      
        switch ( e.target.name){
            case "cvvDataInput":
                setCvvDataInputInputDirty(true)
                break;
        }
    }


const validDataInputHandler = (e: React.ChangeEvent<HTMLInputElement>) =>{
    setvalidDataInput(e.target.value);
    const re = /[0-9]{4,4}/;
    if(!re.test(String(e.target.value).toLowerCase()) || e.target.value.length > 4){
        setvalidDataInputError("error");
        e.target.classList.remove("input-True");
    }else{
        setvalidDataInputError("");
       e.target.classList.add("input-True");
    }
  }

const validDataInputBlurHandler = (e: React.FocusEvent<HTMLInputElement>) =>{
      
        switch ( e.target.name){
            case "validDataInput":
                setvalidDataInputDirty(true)
                break;
        }
    }

const cardDataInputHandler = (e: React.ChangeEvent<HTMLInputElement>) =>{
    setCardDataInput(e.target.value);
    const re = /[0-9]{13,16}/;
    if(!re.test(String(e.target.value).toLowerCase()) || e.target.value.length > 16){
        setCardDataInputError("error");
        e.target.classList.remove("input-True");
    }else{
        setCardDataInputError("");
       e.target.classList.add("input-True");
    }
  }

const cardDataInputBlurHandler = (e: React.FocusEvent<HTMLInputElement>) =>{
      
        switch ( e.target.name){
            case "cardDataInput":
                setCardDataInputDirty(true)
                break;
        }
    }

    return(
        <div className="card-data">
                 <div className="card-data__number">
                 
                    <img src="https://i.guim.co.uk/img/media/b73cc57cb1d46ae742efd06b6c58805e8600d482/16_0_2443_1466/master/2443.jpg?width=700&quality=85&auto=format&fit=max&s=fb1dca6cdd4589cd9ef2fc941935de71" alt="Card" className="card-data__img" />

                    <input 
                    
                    value={cardDataInput} 
                    onChange={e=> cardDataInputHandler(e)} 
                    onBlur={e=> cardDataInputBlurHandler(e)} 
                   
                    type="number" name="cardDataInput" className="card-data__input myValidate" placeholder="Card number"                     
                    />
                     

                </div>
                    <div className="intermediate">
                    {(cardDataInputDirty && cardDataInputError) && <div className="ErrorInputCard"> Card number- {cardDataInputError}</div>}
                    </div>
                <div className="card-data__other-data">

                    <div className="valid-data">
                        <span className="valid-data__text">Valida:</span> <input 
                         
                    value={validDataInput} 
                    onChange={e=> validDataInputHandler(e)} 
                    onBlur={e=> validDataInputBlurHandler(e)} 
                        
                        type="number" placeholder="Valid Thru" className="valid-data__input" name="validDataInput" />

                    </div>
                   

                    <div className="cvv-data">
                        <span className="valid-data__text"> CVV: </span>
                        <input 
                        
                        value={cvvDataInput} 
                        onChange={e=> cvvDataInputHandler(e)} 
                        onBlur={e=> cvvDataInputBlurHandler(e)} 
                        
                        
                        
                        type="number" name="cvvDataInput" placeholder="Code" className="valid-data__input" />
                     </div>

                    
                </div>

                <div className="intermediate-2">
                    <div> {(validDataInputDirty && validDataInputError) && <div className="ErrorInputCard"> Valida- {validDataInputError}</div>}</div>
                    <div> {(cvvDataInputDirty && cvvDataInputError) && <div className="ErrorInputCard"> CVV- {cvvDataInputError}</div>}</div>

                    </div>
                     

                
               

               




        </div>
       
        
    )


   
}

export default CardData;

