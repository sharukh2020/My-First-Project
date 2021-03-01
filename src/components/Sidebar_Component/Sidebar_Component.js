import React from "react"
import {makeStyles} from "@material-ui/core"
import "./Sidebar_Component.css"
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import ArrowDropDownOutlinedIcon from '@material-ui/icons/ArrowDropDownOutlined';
import ArrowDropUpOutlinedIcon from '@material-ui/icons/ArrowDropUpOutlined';
import LoyaltyOutlinedIcon from '@material-ui/icons/LoyaltyOutlined';
import PermIdentityOutlinedIcon from '@material-ui/icons/PermIdentityOutlined';
import AssessmentOutlinedIcon from '@material-ui/icons/AssessmentOutlined';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';

const useStyles=makeStyles({
    UpArrow:{
        display:"none"
    },
    DownArrow:{
        display:"block",
    }
})

function  Sidebar_Component(props){
    const classes=useStyles()

    const MenuItemsDataArray=[
        {
            MenuIcon:function(){return <HomeOutlinedIcon/>},
            MenuName:"Home"
        },
        {
            MenuIcon:function(){return <LoyaltyOutlinedIcon/>},
            MenuName:"Program"
        },
        {
            MenuIcon:function(){return <PermIdentityOutlinedIcon/>},
            MenuName:"Customer"
        },
        {
            MenuIcon:function(){return <AssessmentOutlinedIcon/>},
            MenuName:"Analytics"
        },
        {
            MenuIcon:function(){return <ExitToAppOutlinedIcon/>},
            MenuName:"Integrations"
        }
    ]

    const GetElem=(param)=>{
        return   document.getElementById(param)
      }

    const MenuItemsUpAndDownArrowVisibility=(param)=>{
          if((GetElem("DownArrow"+param).style.display)!=="none"){
            GetElem("DownArrow"+param).style.display="none"
            GetElem("UpArrow"+param).style.display="block"
          }
          else{
            GetElem("DownArrow"+param).style.display="block"
            GetElem("UpArrow"+param).style.display="none"
          }
    }

    const MenuItemsCreation=MenuItemsDataArray.map((item,pos)=>{
         return(
               <div 
                 className="SBC-MIC-MenuItems" 
                 onClick={()=>{MenuItemsUpAndDownArrowVisibility(pos)}} 
                 key={pos}
                >
                   <div className="SBC-MIC-MI-Name-Container">
                      {item.MenuIcon()}
                      <p>{item.MenuName}</p>
                   </div>
                   <div className="SBC-MIC-MI-Arrows-Container">
                     <ArrowDropDownOutlinedIcon 
                       className={classes.DownArrow} 
                       id={"DownArrow"+pos}
                    />
                     <ArrowDropUpOutlinedIcon 
                       className={classes.UpArrow} 
                       id={"UpArrow"+pos}
                    />
                   </div>
               </div>
         )
    })

    return(
        <div className="SidebarComponent">
            <p className="SBC-Menu-Heading">Menu</p>
           <div className="SBC-MenuItems-Container">
               {MenuItemsCreation}
           </div>
        </div>
    )
}

export default Sidebar_Component