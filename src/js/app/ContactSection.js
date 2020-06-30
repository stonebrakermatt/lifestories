import React from 'react'

export default class ContactSection extends React.Component {
    constructor(props) {
        super(props)
        this.submitForm = this.submitForm.bind(this)
        this.state = {
            status: ""
        }
    }
    render() {
        return (
            <section id="contact">
                <h1 className="section-title">Contact Us</h1>
                <form id="contact-form" action="https://formspree.io/maypdvyj" method="POST">
                    <label id="fname-label" htmlFor="fname">First name:</label>
                    <input name="fname" id="fname" type="text" placeholder="First Name" required/>
                    <label id="lname-label" htmlFor="lname">Last name:</label>
                    <input name="lname" id="lname" type="text" placeholder="Last Name" required/>
                    <label id="email-label" htmlFor="email">Email:</label>
                    <input name="email" id="email" type="text" placeholder="Email" required/>
                    <label id="phone-label" htmlFor="phone">Phone:</label>
                    <input name="phone" id="phone" type="text" placeholder="Phone" required/>
                    <label id="request-label" htmlFor="request">Request:</label>
                    <textarea name="request" id="request" rows="10" required></textarea>
                    <input id="submit" type="submit" value="Submit"/>
                </form>
            </section>
        )
    }
    submitForm(ev) {
        ev.preventDefault();
        const form = ev.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
            if (xhr.readyState !== XMLHttpRequest.DONE) return;
            if (xhr.status === 200) {
                form.reset();
                this.setState({ status: "SUCCESS" });
            } else {
                this.setState({ status: "ERROR" });
            }
        };
        xhr.send(data);
    }
}
