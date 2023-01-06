import picture from "./images/picture.PNG"
import email from "./images/email.png"
import linkedin from "./images/linkedin.png"


export default function Info(){
    return(
        <div className="info">
            <img className="my-img" src={picture} />
            <div className="info-details">
                <p className="name"> Anna Isumonah Amuda </p>
                <p className="job"> Frontend Developer </p>
                <p className="website"> annaisumonah@gmail.com </p>
                <div className="info-btns">
                    <a href="annaisumonah@gmail.com"><button className="email-btn">
                        <img className="info-icon" src={email} />
                        <span className="info-span"> Email </span>
                    </button>
                    </a>
                    <a href="www.jw.org">
                    <button className="linkedin-btn">
                        <img className="info-icon" src={linkedin} />
                        <span className="info-span">LinkedIn</span>
                    </button>
                    </a>
                </div>
            </div>
        </div>

    
    )
}