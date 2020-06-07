import React from 'react'

export default class About extends React.Component {
    render() {
        return (
            <section id="about">
                <h1>About Chad</h1>
                <div id="chad-container">
                    <img id="chad-img" src="images/chadbio.jpeg"/>
                    <div id="chad-txt">
                        About Chad<br/><br/>
                        Some Information<br/><br/>
                        Maybe One More Paragraph Idk UwU
                    </div>
                </div>
            </section>
        )
    }
}
