import React from "react"
import "./Forgot_Password_Component.css"
import {I18nProvider} from "../../i18n"
import intlLoader from '../../utils/intlLoader'
import {Link} from "react-router-dom"

function Forgot_Password_Component(props){
    return(
        <I18nProvider locale={props.Locale}>
            <div className="Forgot-Password-Component">
                <div className="FPC-Main-Container">
                    <p className="FPC-MC-Heading">Forgot your password?</p>
                    <p className="FPC-MC-Instruction">
                        Please enter the email adress for your account.
                        A verification code will be sent to you.
                        Once you have recieved the verification code,
                        You will be able to choose a new password for your account.
                    </p>
                    <form className="FPC-MC-Form">
                        <div className="FPC-MC-F-Email-Input-Container">
                            <p className="FPC-MC-F-EIC-Heading">Email</p>
                            <input className="FPC-MC-F-EIC-Email-Input" type="email" name="email" placeholder="Enter your email"/>
                        </div>
                        <div className="FPC-MC-F-Reset-Btn-Container">
                            <Link to={`/${props.LanguageCode}/email_verification`}>
                              <input className="FPC-MC-F-RBC-ResetBtn" type="submit" value="Send Verification Code"/>
                            </Link>
                        </div>
                    </form>
                    <Link to={`/${props.LanguageCode}`}>
                        <a className="FPC-MC-BackBtn">back</a>
                    </Link>
                </div>
           </div>
        </I18nProvider>
    )
}

export default Forgot_Password_Component