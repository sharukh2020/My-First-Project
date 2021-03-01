import React,{useState,useEffect} from "react"
import "./Header_Component.css"
import {makeStyles} from "@material-ui/core"
import MyImage from "../../assets/images/MyImage.jpg"
import SearchIcon from '@material-ui/icons/Search'
import NotificationsActiveOutlinedIcon from '@material-ui/icons/NotificationsActiveOutlined'
import AssessmentOutlinedIcon from '@material-ui/icons/AssessmentOutlined'
import GroupOutlinedIcon from '@material-ui/icons/GroupOutlined'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import MenuIcon from '@material-ui/icons/Menu'
import Notification_Component from "../../controls/Notification_Component/Notification_Component"
import My_Profile_Component from "../../controls/My_Profile_Component/My_Profile_Component"
import Sales_Component from "../../controls/Sales_Component/Sales_Component"

const useStyles=makeStyles({
    SearchIcon:{
        transform:"translateX(30px)",
        color:"rgb(207, 198, 198)"
    },
    Uparrow:{
      display:"none"
    },
    DownArrow:{
      display:"block"
    }
})

function Header_Component(props){
    const classes=useStyles()
    const [HCSSInput,setHCSSInput]=useState("HC-SS-Input-A")
    const [NotificationComponentVisibility,setNotificationComponentVisibility]=useState("NotificationComponent-B")

    const OnLeavingNotificationComponent=()=>{
        setNotificationComponentVisibility("NotificationComponent-B")
    }
    
    const upadateSearchInputBorderOnFocus=()=>{
        setHCSSInput("HC-SS-Input-B")
    }

    const upadateSearchInputBorderOnBlur=()=>{
        setHCSSInput("HC-SS-Input-A")
    }

    const NotificationComponentVisibilityUpadate=()=>{
        if(NotificationComponentVisibility==="NotificationComponent-B"){
          setNotificationComponentVisibility("NotificationComponent-A")
        }
        else{
          setNotificationComponentVisibility("NotificationComponent-B")
        }
     }

     const [MyProfileComponentVisibility,setMyProfileComponentVisibility]=useState("MyProfileComonentHidden")

     const GetElem=(param)=>{
      return   document.getElementById(param)
    }
     
     const OnMyProfileLinkClick=()=>{
       if(MyProfileComponentVisibility==="MyProfileComonentHidden"){
           setMyProfileComponentVisibility("MyProfileComonentVisible")
           GetElem("HC-TS-MLC-Down-Arrow").style.display="none"
           GetElem("HC-TS-MLC-Up-Arrow").style.display="block"
          }
        else{
            setMyProfileComponentVisibility("MyProfileComonentHidden")
            GetElem("HC-TS-MLC-Down-Arrow").style.display="block"
            GetElem("HC-TS-MLC-Up-Arrow").style.display="none"
        }
     }

     const OnMouseLeaveMyProfileComponent=()=>{
        setMyProfileComponentVisibility("MyProfileComonentHidden")  
        GetElem("HC-TS-MLC-Down-Arrow").style.display="block"
        GetElem("HC-TS-MLC-Up-Arrow").style.display="none"
      }
      
      const [SalesComponentVisibility,setSalesComponentVisibility]=useState("SalesComponentHidden")

      const SalesComponentVisibilityUpdate=()=>{
           setSalesComponentVisibility("SalesComponentVisible")
      }

      const OnMouseLeaveSalesComponent=()=>{
           setSalesComponentVisibility("SalesComponentHidden")
      }

    return(
        <div className="HeaderComponent"> 
          <Notification_Component 
            NotificationComponentVisibility={NotificationComponentVisibility}
            OnLeavingNotificationComponent={OnLeavingNotificationComponent}
            />
            <My_Profile_Component 
            MyProfileComponentVisibility={MyProfileComponentVisibility}
            OnMouseLeaveMyProfileComponent={OnMouseLeaveMyProfileComponent}
            />
            <Sales_Component 
             SalesComponentVisibility={SalesComponentVisibility}
             OnMouseLeaveSalesComponent={OnMouseLeaveSalesComponent}
             />
          <div className="HC-First-Section">
            <p>Company Logo</p>
          </div>
          <div className="HC-Second-Section">
            <SearchIcon  className={classes.SearchIcon}/>
            <input 
              list="search-items" 
              name="search-items" 
              id="search-items" 
              className={HCSSInput}
              onFocus={()=>{upadateSearchInputBorderOnFocus()}}
              onBlur={()=>{upadateSearchInputBorderOnBlur()}}
              />
            <datalist id="search-items"></datalist>
          </div>
          <div className="HC-Third-Section">
             <div 
               className="HC-TS-First-Icon-Container" 
               onClick={()=>{NotificationComponentVisibilityUpadate()}}
              >
                 <div className="HC-TS-FIC-Number-Container">3</div>
                 <NotificationsActiveOutlinedIcon/>
             </div>
             <div className="HC-TS-Second-Icon-Container">
                 <div className="HC-TS-SIC-Number-Container">9</div>
                 <AssessmentOutlinedIcon />
             </div>
             <div className="HC-TS-Third-Icon-Container">
                 <GroupOutlinedIcon/>
             </div>
             <div 
                className="HC-TS-MyProfile-Link-Container" 
                onClick={()=>{OnMyProfileLinkClick()}}
              >  
                <div className="HC-TS-MLC-Image-Container">
                   <img src={MyImage} />
                   <div></div>
                </div>
                <ArrowDropDownIcon className={classes.DownArrow} id="HC-TS-MLC-Down-Arrow"/>
                <ArrowDropUpIcon className={classes.Uparrow} id="HC-TS-MLC-Up-Arrow"/>
             </div>
          </div>
          <div 
            className="HC-Fourth-Section" 
            onClick={()=>{SalesComponentVisibilityUpdate()}}
          >
                <MenuIcon/>
          </div>
        </div>
    )
}

export default Header_Component