import React from "react"
import "./PW_Reset_Success_Component.css"
import {I18nProvider} from "../../i18n"
import intlLoader from '../../utils/intlLoader'
import {Link} from "react-router-dom"

function Password_Reset_Success_Component(props){
    return(
        <I18nProvider locale={props.Locale}>
            <div className="Password-Reset-Success-Component">
                <div className="PRSC-Main-Container">
                    <p className="PRSC-Message">Your password has been updated successfully...</p>
                    <div className="PRSC-Login-Btn-Container">
                        <p className="PRSC-LBC-Instruction">Please Login Again</p>
                        <Link to={`/${props.LanguageCode}`}>
                            <button className="PRSC-LBC-LoginBtn">Login</button>
                        </Link>
                    </div>
                </div>
           </div>
        </I18nProvider>
    )
}

export default  Password_Reset_Success_Component