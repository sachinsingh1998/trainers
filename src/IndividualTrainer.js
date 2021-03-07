import React from 'react';
import logo from './img_avatar.png';
import './IndividualTrainer.css';



function IndividualTrainer(props){
    const ID=props.profile.ID;
    const Name=props.profile.Name;
    const Experience=props.profile.Experience;
    const Special=props.profile.Special;
    const Mode=props.profile.Mode;
    const Price=props.profile.Price;
    const SpecialList=Special.map(special=>
        {
            return(<li>{special}, </li>)
            }
        )


        const ModeList=Mode.map(mode=>
            {
                return(
                    <li>{mode}</li>
                    )
                }
            )

    return(
    <div className="IndividualTrainer" key={ID}>
               <div className="row" key={ID} >
                    <div className="column" >
                        <img src={logo} alt="Avatar "/>
                    </div>

                    <div className="column" >
                        <h2>{Name}</h2>
                        <p>Experience:{Experience}+ years</p>
                        <p>{Special}</p>
                    </div>  
                    
                    <div className="column" >
                        <button class="button">Book</button>
                    </div>   
                    
                    <div className="column" >
                        <p>{Mode}</p>
                        <h2>₹{Price}/session</h2>
                    </div>  

                    
                </div>   
     </div>
                
)}
export default IndividualTrainer;