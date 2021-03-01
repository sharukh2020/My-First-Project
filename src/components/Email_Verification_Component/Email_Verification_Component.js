import React from "react"
import "./Email_Verification_Component.css"
import {I18nProvider} from "../../i18n"
import intlLoader from '../../utils/intlLoader'
import {Link} from "react-router-dom"

function Email_Verification_Component(props){
    return(
        <I18nProvider locale={props.Locale}>
            <div className="Email-Verification-Component">
               <div className="EVC-MainContainer">
                  <p className="EVC-Instruction">
                      We just sent an verification code to your registered email adresss.
                      Enter it to reset your password
                  </p>
                  <form className="EVC-Form">
                     <input
                       className="EVC-F-Verification-Input"
                       type="text"
                       name="verification-code"
                       placeholder="Verification Code"
                     />
                     <div className="EVC-F-Verify-Btn-Container">
                         <div className="EVC-F-VBC-Left-Section">
                             <p>Resend Verification Code</p>
                         </div>
                         <div className="EVC-F-VBC-Right-Section">
                             <Link to={`/${props.LanguageCode}/forgot_password`}>
                               <button>cancel</button>
                             </Link>
                             <Link to={`/${props.LanguageCode}/password_reset`}>
                                <input
                                className="EVC-F-VBC-RS-Verify-Btn"
                                type="submit"
                                value="Verify"
                                />
                             </Link>
                         </div>
                     </div>
                  </form>
               </div>
           </div>
        </I18nProvider>
    )
}

export default Email_Verification_Component