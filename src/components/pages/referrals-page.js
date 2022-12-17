import Header from "../header";
import "../../styles/referral-page.css";

function ReferralPage(props) {
    console.log(props.referrals)
    const referralArray = props.referrals

    function displayAlert() {
        prompt(
        )
    }
    return (
        <div>
            <Header leftIcon ="arrow_back" pageName="Referrals" backFunc ={props.backFunc}/>
            <h1 id="referralpage-h1">{referralArray.length} Available Referrals</h1>
            <div id = "referral-list">
            {referralArray.map((referral) => {
                return (
                    <div className="referral" onClick={() => {
                        let answer = prompt('Are you sure you want to take this lead?','no')
                        if(answer == 'yes' || answer == 'Yes' || answer == 'YES') {
                            props.leadFunc(referral)
                        }
                    }}>
                        <div>
                            <p>Agent: {referral.Agent}</p>
                            <p>Type: {referral.Type}</p>
                        </div>
                        <div>
                            <p>{referral.Location}</p>
                            <p>{referral.Financing}</p>
                            <p>${referral.Budget}</p>
                        </div>
                    </div>
                )
            })}
            </div>
            <div id="referral-addbutton">
                            <span className="material-symbols-outlined" onClick={props.addFunc}>add</span>
            </div>
        </div>
    )
    
}

export default ReferralPage