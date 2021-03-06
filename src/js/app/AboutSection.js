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
                            <strong>Pass the truth to the next generation. Teach them early what we learn late.</strong>
                        </p>
                        <p>
                            When you are passionate about something, it shows—in performance, in commitment, in quality. <strong>Our passion is to preserve our clients’ stories in book form.</strong> Through every step of the process... moment by moment, page by page... this passion leads to superior results.
                        </p>
                        <p>
                            And it’s strengthened by deep experience. For the past 27 years, our accomplished team has helped <strong>over 200 clients</strong> pen their private memoirs, company histories, and family histories. The finished product is a beautifully bound hardback, each aspect tailored specifically to our clients and their lives, careers, and preferences, and achieving the highest standards of quality from cover to cover.
                        </p>
                        <p>
                            These are more than books; they are bridges between generations, between time and place, between different groups of people. <strong>There is no better way to honor your legacy, share your memories, and create an exceptional story</strong> that will be cherished by family, colleagues and friends.
                        </p>
                        <p>
                            As Ralph Waldo Emerson said: <em><strong>There is properly no history, only biography.</strong></em>
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
                        <h3>Chad</h3>
                        <h4>Founder</h4>
                        <p>"A happy customer makes a happy team!"</p>
                    </div>
                    <div className="team-member">
                        <img src="images/team/becky.jpeg"/>
                        <h3>Becky</h3>
                        <h4>Administration</h4>
                        <p>"Let's be organized and stay organized."</p>
                    </div>
                    <div className="team-member">
                        <img src="images/team/tim.jpeg"/>
                        <h3>Tim</h3>
                        <h4>Chief Editor</h4>
                        <p>"I'll make it shine like the stars!"</p>
                    </div>
                    <div className="team-member">
                        <img src="images/team/donr.jpg"/>
                        <h3>Don</h3>
                        <h4>Genealogy</h4>
                        <p>"Family trees are deep history."</p>
                    </div>
                    <div className="team-member">
                        <img src="images/team/david.jpeg"/>
                        <h3>David</h3>
                        <h4>Graphics & Layout</h4>
                        <p>"Your story deserves great design and layout!"</p>
                    </div>
                    <div className="team-member">
                        <img src="images/team/steven.jpeg"/>
                        <h3>Steven</h3>
                        <h4>Web Master</h4>
                        <p>"It's all up and running."</p>
                    </div>
                    <div className="team-member">
                        <img src="images/team/kyle.jpeg"/>
                        <h3>Kyle</h3>
                        <h4>Videography</h4>
                        <p>"Lights! Camera! Action!"</p>
                    </div>
                    <div className="team-member">
                        <img src="images/team/suet.jpg"/>
                        <h3>Sue</h3>
                        <h4>Digital Imaging</h4>
                        <p>"Visually creating wow!"</p>
                    </div>
                </div>
            </section>
        )
    }
}
