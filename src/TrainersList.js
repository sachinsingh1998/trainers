import React from 'react';
import './Trainers.css';
import IndividualTrainer from './IndividualTrainer.js';

function TrainersList(props){
    const trainers=[
        {ID :"1",Name: "Sachin",Experience:"20",Special:["Gym, ","Sports, ","Taekwondo"],Mode:["Online, ","In Home, ","Outdoor"],Price:"1050"},
        {ID :"2",Name: "Rajeeb",Experience:"5",Special:["Gym, ","Yoga"],Mode:["Online, ","In Home, ","Outdoor"],Price:"15"},
        {ID :"3",Name: "Monica",Experience:"3",Special:["Yoga"],Mode:["Online, ","In Home, ","Outdoor"],Price:"10000"},
        {ID :"4",Name: "Sampath",Experience:"15",Special:["Sports, ","Taekwondo"],Mode:["Online, ","In Home, ","Outdoor"],Price:"100"},
        {ID :"5",Name: "Omkar",Experience:"20",Special:["Gym, ","Sports, ","Taekwondo"],Mode:["Online, ","In Home, ","Outdoor"],Price:"1050"},
        {ID :"6",Name: "Akash",Experience:"5",Special:["Gym, ","Yoga"],Mode:["Online, ","In Home, ","Outdoor"],Price:"15"},
        {ID :"7",Name: "Nishant",Experience:"3",Special:["Yoga"],Mode:["Online, ","In Home, ","Outdoor"],Price:"10000"},
        {ID :"8",Name: "Om Anand",Experience:"15",Special:["Sports, ","Taekwondo"],Mode:["Online, ","In Home, ","Outdoor"],Price:"100"},
        {ID :"9",Name: "Saumya",Experience:"20",Special:["Gym, ","Sports, ","Taekwondo"],Mode:["Online, ","In Home, ","Outdoor"],Price:"1050"},
        {ID :"10",Name: "Rajeshwari",Experience:"5",Special:["Gym, ","Yoga"],Mode:["Online, ","In Home, ","Outdoor"],Price:"15"},
        {ID :"11",Name: "Shardul",Experience:"3",Special:["Yoga"],Mode:["Online, ","In Home, ","Outdoor"],Price:"10000"},
        {ID :"12",Name: "Prateek",Experience:"15",Special:["Sports, ","Taekwondo"],Mode:["Online, ","In Home, ","Outdoor"],Price:"100"}
    ];
   const list=trainers.map(trainer=>
    {
        return (
            <IndividualTrainer  profile={trainer} ></IndividualTrainer>
        )
        
    })
    return(
        <div className="Trainers">
           {list}
        </div>
    )    
}
export default TrainersList;