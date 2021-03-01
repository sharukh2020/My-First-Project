import React,{useState} from "react"
import  "./My_Profile_Component.css"
import MyImage from "../../assets/images/MyImage.jpg"
import {Link} from "react-router-dom"
import AssessmentOutlinedIcon from '@material-ui/icons/AssessmentOutlined';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import {makeStyles} from "@material-ui/core"

const useStyles=makeStyles({
    RevenueIcon:{
        color:"rgb(11, 192, 238)",
        fontSize:"30px",
        fontWeight:"normal"
    },
    FaceBookIcon:{
        color:"#3b5998",
        fontSize:"17px",
    },
    TwitterIcon:{
        color:"#1DA1F2",
        fontSize:"17px",
    },
    InstagramIcon:{
        color:"#DD2A7B ",
        fontSize:"17px",
    }
})

function My_Profile_Component(props){
    const classes=useStyles()
    const MyProfileComponentLinksDataArray=["My Account","Profile Settings","Active Tasks"]
    const MyProfileComponentLinksCreation=MyProfileComponentLinksDataArray.map((item,pos)=>{
        return(
            <Link>
              <a>
                  <p className="MPC-LC-Links">{item}</p>
             </a>
            </Link>
        )
    })

    return(
        <div 
          className={props.MyProfileComponentVisibility} 
          onMouseLeave={()=>{props.OnMouseLeaveMyProfileComponent()}}
        >
            <div className="MPC-My-Details-Container">
                <div className="MPC-MDC-My-Image-Container">
                   <img src={MyImage} className="MPC-MDC-My-Image"/>
                   <div></div>
                </div>
                <p className="MPC-MDC-My-Name">Dustin Watson</p>
                <p className="MPC-MDC-My-Profession">Senior React Developer</p>
            </div>
            <div className="MPC-Links-Container">
                {MyProfileComponentLinksCreation}
            </div>
            <div className="MPC-Revenue-Number-Container">
                <AssessmentOutlinedIcon className={classes.RevenueIcon}/>
                <div>
                    <h2>$9,693</h2>
                    <p>revenue</p>
                </div>
            </div>
            <div className="MPC-Social-Icons-Container">
                <FacebookIcon className={classes.FaceBookIcon}/>
                <TwitterIcon className={classes.TwitterIcon}/>
                <InstagramIcon className={classes.InstagramIcon}/>
            </div>
        </div>
    )
}

export default My_Profile_Component