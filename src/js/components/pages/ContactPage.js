import React from 'react'

export default class ContactPage extends React.Component {
    render() {
        return (
            <div id="contact">
                <p>Contact Section</p>
                <form id="contact-form">
                    <label id="fname-label" htmlFor="fname">First name:</label>
                    <input name="fname" id="fname" type="text" placeholder="First Name"/>
                    <label id="lname-label" htmlFor="lname">Last name:</label>
                    <input name="lname" id="lname" type="text" placeholder="Last Name"/>
                    <label id="subject-label" htmlFor="subject">Subject:</label>
                    <input name="subject" id="subject" type="text" placeholder="Subject"/>
                    <label id="request-label" htmlFor="request">Request:</label>
                    <textarea name="request" id="request" rows="5">
                        Provide additional details here.
                    </textarea>
                    <input id="submit" type="submit" value="Submit"/>
                </form>
            </div>
        )
    }
}
