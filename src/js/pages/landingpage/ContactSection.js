import React from 'react'

export default class ContactSection extends React.Component {
    render() {
        return (
            <section id="contact">
                <h1 className="section-title">Contact Us</h1>
                <form id="contact-form">
                    <label id="fname-label" htmlFor="fname">First name:</label>
                    <input name="fname" id="fname" type="text" placeholder="First Name"/>
                    <label id="lname-label" htmlFor="lname">Last name:</label>
                    <input name="lname" id="lname" type="text" placeholder="Last Name"/>
                    <label id="email-label" htmlFor="email">Email:</label>
                    <input name="email" id="email" type="text" placeholder="Email"/>
                    <label id="phone-label" htmlFor="phone">Phone:</label>
                    <input name="phone" id="phone" type="text" placeholder="Phone"/>
                    <label id="request-label" htmlFor="request">Request:</label>
                    <textarea name="request" id="request" rows="10"></textarea>
                    <input id="submit" type="submit" value="Submit"/>
                </form>
            </section>
        )
    }
}
