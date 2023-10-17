import React from 'react';


function body() {
    
    return (
       
       fetch('https://api.weatherapi.com/v1/current.json?q=Amstelveen&key=6e0e7573a0a24bc0811195352231710')
       .then(response => response.json())
       .then(data => console.log(data))
        
    )
}

export default body;