import React from 'react'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import emailjs from 'emailjs-com';  
import CheckCircleOutlinedIcon from '@material-ui/icons/CheckCircleOutlined';
function Contact() {

    const [submitted, setSubmmitted] = React.useState(false)

    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_j53g7ys', 'template_7haa3us', e.target, 'user_YIiDqhVZm6HpIiJXrq7xU')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
          setSubmmitted(true)

          setTimeout(() => {
            setSubmmitted(false)
          }, 5000);

      }


    return (
        <div className="contact">
            
            <div className="contact-container">
                <div className="contact-header">
                        contact
                </div>
                <div className="contact-divider">
                        <hr />
                </div>
                <div className="contact-email">
                    <p >Get in touch via the form below, or by emailing&nbsp;
                        <a href="mailto:mfahad017@gmail.com?subject=Hello!" >ME</a>.
                    </p>
                </div>
                <form className="contact-form" onSubmit={sendEmail}>
                    <div className="contact-form__group">
                        <input 
                            autoComplete="new-password"
                            id="name"
                            name = "user_name"
                            className="contact-form__group-input"
                            type="text" 
                            placeholder="Full Name"
                            required={true}
                        />
                        <label htmlFor="name" className="contact-form__group-label">Full Name</label>
                    </div>
                    <div className="contact-form__group">
                        <input 
                            autoComplete="confirm-password"
                            id="email"
                            className="contact-form__group-input"
                            type="email" 
                            name = "user_email"
                            placeholder="Email"
                            required={true}
                        />
                        <label htmlFor="email" className="contact-form__group-label">Email</label>
                    </div>
                    <div className="contact-form__group">
                    <textarea 
                        
                        id="message"
                        className="contact-form__group-input contact-form__group-input-textarea"
                        placeholder="Enter Your Message"
                        name = "user_message"
                    />
                    <label htmlFor="message" className="contact-form__group-label">Message</label>
                    </div>
                    <div className="contact-form__group">
                        <button className="contact-form__group__button">Submit</button>
                        {
                            submitted
                            ?
                            <div className="contact-form__group__formSumitted"><CheckCircleOutlinedIcon className="contact-form__group__formSumitted-icon" /></div>
                            :
                                null
                        }
                    </div>
                  
                </form>
                <div className="contact-footer">
                    <div className="contact-footer-text">
                        Or
                    </div>
                      <div className="contact-footer-social">
                            <a href="https://www.facebook.com/fahad3611/" rel="noreferrer" target="_blank" className="contact-footer-social-box">
                                <div className="contact-footer-social-box-front">
                                    <FacebookIcon className="contact-footer-social-box-front-icon contact-footer-social-box-front-icon-facebook" />
                                </div>
                                <div className="contact-footer-social-box-top">
                                    <FacebookIcon className="contact-footer-social-box-top-icon contact-footer-social-box-top-icon-facebook" />
                                </div>
                            </a>
                            <a href="https://www.facebook.com/fahad3611/" rel="noreferrer" target="_blank" className="contact-footer-social-box">
                                <div className="contact-footer-social-box-front">
                                    <TwitterIcon className="contact-footer-social-box-front-icon contact-footer-social-box-front-icon-twitter" />
                                </div>
                                <div className="contact-footer-social-box-top">
                                    <TwitterIcon className="contact-footer-social-box-top-icon contact-footer-social-box-top-icon-twitter" />
                                </div>
                            </a>
                            <a href="https://www.facebook.com/fahad3611/" rel="noreferrer" target="_blank" className="contact-footer-social-box">
                                <div className="contact-footer-social-box-front">
                                    <InstagramIcon  className="contact-footer-social-box-front-icon contact-footer-social-box-front-icon-instagram" />
                                </div>
                                <div className="contact-footer-social-box-top">
                                    <InstagramIcon  className="contact-footer-social-box-top-icon contact-footer-social-box-top-icon-instagram" />
                                </div>
                            </a>
                            <a href="https://www.facebook.com/fahad3611/" rel="noreferrer" target="_blank" className="contact-footer-social-box">
                                <div className="contact-footer-social-box-front">
                                    <LinkedInIcon className="contact-footer-social-box-front-icon contact-footer-social-box-front-icon-linkedin" />
                                </div>
                                <div className="contact-footer-social-box-top">
                                    <i><LinkedInIcon className="contact-footer-social-box-top-icon contact-footer-social-box-top-icon-linkedin" /></i>
                                </div>
                            </a>
 
                      </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
