  import React, { useState } from "react"
import "./Select_Language_Btn.css"
import ArrowDropDownOutlinedIcon from '@material-ui/icons/ArrowDropDownOutlined';
import ArrowDropUpOutlinedIcon from '@material-ui/icons/ArrowDropUpOutlined';
import {makeStyles} from "@material-ui/core"
import intlLoader from "../../utils/intlLoader"
import {I18nProvider} from "../../i18n"
import {Link} from "react-router-dom"

const useStyles=makeStyles({
  UpArrow:{
      display:"none"
  },
  DownArrow:{
      display:"block",
  }
})

function Select_Language_Btn(props){

   const classes=useStyles()

   const LanguageBtnsDataArray=[
    {
      Language:"ENGLISH",
      LanguageCode:"en"
    },
    {
      Language:"GERMAN",
      LanguageCode:"de"
    },
    {
      Language:"FRENCH",
      LanguageCode:"fr"
    },
   ]

   const [SLBCLanguageBtnsContainerVisibility,setSLBCLanguageBtnsContainerVisibility]=useState("SLBC-Language-Btns-Container-B")

   const LanguageBtnsCreation=LanguageBtnsDataArray.map((item,pos)=>{
     return(
      <Link to={`/${item.LanguageCode}${props.component}`}>
       <button 
         className="SLBC-LBC-LnaguageBtns" 
         onClick={()=>{props.OnSelectLanguageBtnClick(item.Language)}}
        >
          {item.Language}
        </button>
       </Link>
     )
   })

   const GetElem=(param)=>{
    return   document.getElementById(param)
  }

   const MenuItemsUpAndDownArrowVisibility=()=>{
    if((GetElem("DownArrow").style.display)!=="none"){
        GetElem("DownArrow").style.display="none"
        GetElem("UpArrow").style.display="block"
        setSLBCLanguageBtnsContainerVisibility("SLBC-Language-Btns-Container-A")
    }
    else{
      GetElem("DownArrow").style.display="block"
      GetElem("UpArrow").style.display="none"
      setSLBCLanguageBtnsContainerVisibility("SLBC-Language-Btns-Container-B")
    }
}

  const OnMouseLeaveSLBC=()=>{
    GetElem("DownArrow").style.display="block"
    GetElem("UpArrow").style.display="none"
    setSLBCLanguageBtnsContainerVisibility("SLBC-Language-Btns-Container-B")
  }
  
    return(
        <I18nProvider locale={props.locale}>
             <div 
               className="SelectLanguageBtnContainer" 
               onMouseLeave={()=>{OnMouseLeaveSLBC()}}
              >
               <button onClick={()=>{MenuItemsUpAndDownArrowVisibility()}}>
                  {intlLoader("Sign_In_Page.select_lang_btn")}
                  <ArrowDropDownOutlinedIcon className={classes.DownArrow} id="DownArrow"/>
                  <ArrowDropUpOutlinedIcon className={classes.UpArrow} id="UpArrow"/>
                </button>
               <div className={SLBCLanguageBtnsContainerVisibility}>
                 {LanguageBtnsCreation}
               </div>
            </div> 
        </I18nProvider>
    )
}
export default Select_Language_Btn