import React from 'react'
import "./features.css";
import { Feature } from '../../components';


const featuresData = [
  {
    title:"Improveing end distrusts instantly",
    text:"From they fine john he give of rich he.they agr and draw mrs like .Improving end distrusts may instantly was household applauded."
  },
  {
    title:"Become the tended active",
    text:"considered sympathize ten uncommonly occasional assistance sufficient not letter of on become he tended active enable to."
  },
  {
    title:"Message or an nothing",
    text:"Led ask possible mistress relation elegance eat likewise debating. By message or am nothing among chieffy address."
  },
  {
    title:"Really boy law country",
    text:"Really boy law country.she unable her sister. feet you off its like six .amog six are leave law built now. In built table in an rapid blush."
  }
]

const Features = () => {
  return (
    <div className='gpt3__features section__padding' id='features'>
      <div className="gpt3__features-heading">
        <h1 className="gradient__text">
          The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.
        </h1>
        <p>Request Early Access to Get Started</p>
      </div>

      <div className="gpt3__feature-container">
       {
        featuresData.map((item,index) =>(
          <Feature title={item.title} text={item.text} key={item.title + index}/>
         ))
       }
      </div>
    </div>
  )
}

export default Features
