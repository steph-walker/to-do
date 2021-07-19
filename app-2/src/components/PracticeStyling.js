import React from 'react'


function PracticeStyling() {
    const fName = "stephanie"
    const lName = "walker"

   

    const date = new Date() 
    const hours = date.getHours()
    let time 
    const dateStyle = {
        fontSize: 30,
        backgroundColor: "red",
        margin: 0
    }
    if (hours < 12) {
        time = "morning"
        dateStyle.color = "orange"
    } else if (hours >= 12 && hours < 17) {
        time = "afternoon"
        dateStyle.color = "green"
    } else {
        time = "night"
        dateStyle.color = "gray"
    }


    const h3Style = {
        color: "purple", 
        backgroundColor: "yellow", 
        
    }

    return (
        <header className="nav">
            this is a header 

            {" " + fName + " " + lName + " "} {/* 1 way of doing it */}
            {` ${fName} ${lName}` } {/* 2nd way of doing it */}

            <h3 style={h3Style}>In-Line Style</h3>
            <h3 style = {dateStyle}> Good {time} </h3>
            </header>
    )
}

export default PracticeStyling

// if you want to place javascript inside of here
//then surround it with curly braces
// there are 2 ways of doing it as you can see above
//{/* this is a comment*/}
//  -- date change to a specific time -- 2020, 6, 30, 18