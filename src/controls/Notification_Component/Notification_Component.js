import React,{useState} from "react"
import "./Notification_Component.css"
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import {makeStyles} from "@material-ui/core"

const useStyles=makeStyles({
    ArrowForwardIcon:{
        fontSize:"18px",
        marginLeft:"5px"
    }
})

function Notification_Component(props){
    const classes=useStyles()
    const NotificationComponentVisibility=props.NotificationComponentVisibility
    const [CurrentNotificationLink,setCurrentNotificationLink]=useState("timeline-link")
    const [CurrentNotificationLinkedSection,setCurrentNotificationLinkedSection]=useState("timeline-linked-section")

    const GetElem=(param)=>{
        return   document.getElementById(param)
      }

    const DisplayLinkedSectionOnNotificationLinkClick=(e)=>{
        if((e.target.id)!==CurrentNotificationLink){
            GetElem(e.target.id).className="NC-LS-LC-Link-B"
            GetElem(CurrentNotificationLink).className="NC-LS-LC-Link-A"
            setCurrentNotificationLink(e.target.id)
        }
        if(`${(e.target.id).substr(0,(e.target.id).length)}ed-section`!==CurrentNotificationLinkedSection){
            GetElem(`${(e.target.id).substr(0,(e.target.id).length)}ed-section`).className="NC-LS-LC-Linked-Section-B"
            GetElem(CurrentNotificationLinkedSection).className="NC-LS-LC-Linked-Section-A"
            setCurrentNotificationLinkedSection(`${(e.target.id).substr(0,(e.target.id).length)}ed-section`) 
        } 
    }

    return(
        <div 
          className={NotificationComponentVisibility} 
          onMouseLeave={()=>{props.OnLeavingNotificationComponent()}}
        >
            <div className="NC-UpperPart">
                <div className="NC-Heading-Container">
                    <div className="NC-HC-GradientSection">
                        <p className="NC-HC-Heading">Hidden Content</p>
                        <p className="NC-HC-Notifictaion-Number">Hidden Content</p>
                    </div>
                    <div className="NC-HC-TextContentSection">
                        <p className="NC-HC-Heading">Notifications</p>
                        <p className="NC-HC-Notifictaion-Number">You have <span>472</span> new messages</p>
                    </div>
                </div>
                <div className="NC-Links-Section">
                    <div className="NC-LS-Links-Container">
                        <p 
                           className="NC-LS-LC-Link-B" 
                           id="timeline-link" 
                           onClick={(e)=>{DisplayLinkedSectionOnNotificationLinkClick(e)}}
                        >
                            TIMELINE
                        </p>
                        <p 
                           className="NC-LS-LC-Link-A"
                           id="tasks-link" 
                           onClick={(e)=>{DisplayLinkedSectionOnNotificationLinkClick(e)}}
                        >
                            TASKS
                        </p>
                        <p 
                           className="NC-LS-LC-Link-A"
                           id="reports-link" 
                           onClick={(e)=>{DisplayLinkedSectionOnNotificationLinkClick(e)}}
                        >
                            REPORTS
                        </p>
                    </div>
                    <div className="NC-LS-LinkedSections-Container">
                        <div 
                          className="NC-LS-LC-Linked-Section-B" 
                          id="timeline-linked-section"
                        >
                            We have to show TimeLine-Information Here 
                        </div>
                        <div 
                          className="NC-LS-LC-Linked-Section-A" 
                          id="tasks-linked-section"
                        >
                            We have to show Tasks-Information Here 
                        </div>
                        <div 
                          className="NC-LS-LC-Linked-Section-A" 
                          id="reports-linked-section"
                        >
                            We have to show Reports-Information Here 
                        </div>
                    </div>
                </div>
            </div>
            <div className="NC-LearnMoreBtn-Container">
                <button>
                    LEARN MORE 
                    <ArrowForwardIcon className={classes.ArrowForwardIcon}/>
                </button>
            </div>
        </div>
    )
}

export default Notification_Component
