import React, { useState } from "react"
import "./User_Home_Page.css"
import Header_Component from "../../components/Header_Component/Header_Component"
import Sidebar_Component from "../../components/Sidebar_Component/Sidebar_Component"

function User_Home_Page(props){
    return(
        <div className="User-Home-Page">
            <Header_Component/>
            <Sidebar_Component/>
        </div>
    )
}
export default User_Home_Page