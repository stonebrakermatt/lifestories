import React from 'react'

export default class AboutSection extends React.Component {
    render() {
        return (
            <section id="about">
                <h1 className="section-title">About Us</h1>
                <div id="chad-container">
                    <img id="chad-img" src="images/chadbio.jpeg"/>
                    <div id="chad-txt">
                        <p>
                            <strong><em>Pass the truth to the next generation. Teach them early what we learn late.</em></strong>
                        </p>
                        <p>
                            When you are passionate about something, it shows—in performance, in commitment, in quality. <strong>Our passion is to preserve our clients’ stories in book from.</strong> Through every step of the process... moment by moment, page by page... this passion leads to superior results.
                        </p>
                        <p>
                            And it’s strengthened by deep experience. For the past 27 years, our accomplished team has helped <strong>over 200 clients</strong> pen their private memoirs, company histories, and family histories. The finished product is a beautifully bound hardback, each aspect tailored specifically to our clients and their lives, careers, and preferences, and achieving the highest standards of quality from cover to cover.
                        </p>
                        <p>
                            These are more than books; they are bridges between generations, between time and place, between different groups of people. <strong>There is no better way to honor your legacy, share your memories, and create an exceptional story</strong> that will be cherished by family, colleagues and friends.
                        </p>
                        <p>
                            As Ralph Waldo Emerson said: <em>There is properly no history, only biography.</em>
                        </p>
                        <p>
                            And that’s our specialty.
                        </p>
                        <p>
                            Here to serve you,
                        </p>
                        <p>
                            James Chandler "Chad" Harbour II
                        </p>
                        <p>
                            Dallas, Texas
                        </p>
                    </div>
                </div>
                <div id="team-container">
                    <div className="team-member">
                        <img src="images/team/chad.jpeg"/>
                        <h3>Chad - Founder</h3>
                        <p>"A happy customer makes a happy team!"</p>
                    </div>
                    <div className="team-member">
                        <img src="images/team/becky.jpeg"/>
                        <h3>Becky - Administration</h3>
                        <p>"Let's be organized and stay organized."</p>
                    </div>
                    <div className="team-member">
                        <img src="images/team/tim.jpeg"/>
                        <h3>Tim - Chief Editor</h3>
                        <p>"I'll make it shine like the stars!"</p>
                    </div>
                    <div className="team-member">
                        <img src="images/team/donr.jpg"/>
                        <h3>Don - Genealogy</h3>
                        <p>"Family trees are deep history."</p>
                    </div>
                    <div className="team-member">
                        <img src="images/team/david.jpeg"/>
                        <h3>David - Covers, Graphics, and Layout</h3>
                        <p>"Your story deserves great design and layout!"</p>
                    </div>
                    <div className="team-member">
                        <img src="images/team/steven.jpeg"/>
                        <h3>Steven - Web Master</h3>
                        <p>"It's all up and running."</p>
                    </div>
                    <div className="team-member">
                        <img src="images/team/kyle.jpeg"/>
                        <h3>Kyle - Videography</h3>
                        <p>"Lights! Camera! Action!"</p>
                    </div>
                    <div className="team-member">
                        <img src="images/team/suet.jpg"/>
                        <h3>Sue - Digital Imaging</h3>
                        <p>"Visually creating wow!"</p>
                    </div>
                </div>
            </section>
        )
    }
}
