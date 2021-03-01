import React from "react"
import "./Sales_Component.css"
import WaveGraphImage from '../../assets/images/WaveGraph.jpg'

function Sales_Component(props){
    return(
        <div 
           className={props.SalesComponentVisibility} 
           onMouseLeave={()=>{props.OnMouseLeaveSalesComponent()}}
        >
            <div className="SC-Upper-Section">
                <h3>Today's sales target</h3>
                <p>Daily statistics regarding your sales targets</p>
                <div>
                    <svg>
                        <circle cx="230" cy="140" r="70"></circle>
                        <circle cx="230" cy="140" r="70"></circle>
                    </svg>
                    <div>
                        67.45%
                    </div>
                </div>
                <h4>Generate Report</h4>
            </div>
            <div className="SC-Lower-Section">
                 <img src={WaveGraphImage}/>
            </div>
        </div>
    )
}

export default Sales_Component