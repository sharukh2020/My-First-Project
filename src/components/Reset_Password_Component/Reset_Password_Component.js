import React from "react"
import "./Reset_Password_Component.css"
import {I18nProvider} from "../../i18n"
import intlLoader from '../../utils/intlLoader'
import {Link} from "react-router-dom"

function Reset_Password_Component(props){
    return(
        <I18nProvider locale={props.Locale}>
            <div className="Reset-Password-Component">
                  <form className="RPC-Form">
                     <p className="RPC-F-Heading">Reset your password</p>
                     <input
                       className="RPC-F-First-Input"
                       type="password"
                       name="password"
                       placeholder="Enter new password"
                     />
                    <input
                        className="RPC-F-Second-Input"
                        type="password"
                        name="confirm-password"
                        placeholder="Confirm your new password"
                    />
                    <div className="RPC-F-Reset-Input-Container">
                        <Link to={`/${props.LanguageCode}/password_reset_success`}>
                            <input
                                className="RPC-F-RIC-Reset-Input"
                                type="submit"
                                value="Reset Password"
                            />
                        </Link>
                    </div>
                  </form>
           </div>
        </I18nProvider>
    )
}

export default Reset_Password_Component