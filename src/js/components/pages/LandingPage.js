import React from 'react'

export default class LandingPage extends React.Component {
    render() {
        return (
            <div id="home">
                <img id="bg-img" src="images/lifestoriescompanyphoto.jpeg"/>
                <div id="home-txt">
                    <h1>Life Stories</h1>
                    <h3>Capturing your story - your legacy</h3> 
                </div>
                <button id="viewportfoliobtn">View Portfolio</button>
            </div>
        )
    }
}
