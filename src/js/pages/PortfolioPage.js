import React from 'react'

export default class PortfolioPage extends React.Component {
    render() {
        return (
            <section id="portfolio">

                <h1>Portfolio</h1>
                
                <div id="project-container">
                    <div class="project">
                        <img class="projectimg" src="images/portfolio/joeford.jpeg"/>
                        <div class="testimonial-container">
                            <p class="testimonial">
                                You did a fine job and I thank you for all your
                                efforts and professionalism.  I am very pleased,
                                and it was fun working with you.
                            </p> 
                            <p class="testimonial-client">-Joe Ford</p>
                        </div>
                    </div>
                    <div class="project">
                        <img class="projectimg" src="images/portfolio/cdeandavis.jpeg"/>
                        <div class="testimonial-container">
                            <p class="testimonial">
                                My memoir has been a tremendous success among my
                                family and friends. I am so proud of the results.
                            </p>
                            <p class="testimonial-client">-C. Dean Davis</p>
                        </div>
                    </div>
                    <div class="project">
                        <img class="projectimg" src="images/portfolio/bobherd.jpeg"/>
                        <div class="testimonial-container">
                            <p class="testimonial">
                                My father’s memoir exceeded our high expectations!
                                The books look so impressive as is the content.
                                Thank you for making my father’s story complete
                                and polished. 
                            </p>
                            <p class="testimonial-client">-Kelli Herd</p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
