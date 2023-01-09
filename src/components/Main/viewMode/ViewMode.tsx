import React from "react";


function ViewMode(){

    const card: NodeListOf<Element> = document.querySelectorAll('.card');

    

    function addClass(): void{
        card.forEach((elem)=>{
            elem?.classList.add("card__width")
        })
       // card?.classList.add("card__width");
     const itemSmall : Element | null = document.querySelector(".small");
     const itemBig : Element | null = document.querySelector(".big");
     itemSmall?.classList.add("smallBigActive3px");
     itemBig?.classList.remove("smallBigActive3px");

    }
    function removeClass(): void{
        card.forEach((elem)=>{
            elem?.classList.remove("card__width");
        })
        const itemSmall : Element | null = document.querySelector(".small");
     const itemBig : Element | null = document.querySelector(".big");
     itemBig?.classList.add("smallBigActive3px");
     itemSmall?.classList.remove("smallBigActive3px");

    }


    return(


        <div className="view-mode">


            <div className="small" onClick={addClass}>
                    <div className="small-item">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    </div>
            </div>


            <div className="big smallBigActive3px" onClick={removeClass}>
            <div className="big-item">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    
                    </div>
            </div>


        </div>
    )

}

export default ViewMode;