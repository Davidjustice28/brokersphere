import { Component } from "react";
import Header from "./header";
import Photo from "../components/images/fulllogo.PNG"
import "../styles/about-screen.css"


class AboutScreen extends Component {
    constructor() {
        super()
        this.state = {}
    }

    render() {
        return (
            <div id="about-screen">
                <Header leftIcon = "arrow_back" pageName ="What is Brokersphere" backFunc ={this.props.backFunc}/>                
                <img src={Photo} alt="user"></img>
                <h1>Agents Supporting Agents</h1>
                <p>
                    Brokersphere was created with only real
                    estate agents in mind. The founders are 
                    active real estate agents who had two
                    problems. One they needed a simpler way to give
                    and receive referrals from other agents and two 
                    They couldn't find a platform that 
                    would easily allow them to network with
                    other agents for business purposes.
                    <br></br>
                    <br></br>
                    A survey was sent out to agents to find
                    out what we, as a whole, love, find difficult,
                    and feel is most important. The results were 
                    crazy to see.
                    <br></br>
                    <br></br>
                    Here are some of our findings
                    <ul>
                        <li>44.4% said "Lead Gen" is the most
                            difficult thing about their business.
                        </li>
                        <br></br>
                        <li>69.4% claimed their preferred lead source
                            was "Referrals".
                        </li>
                        <br></br>
                        <li>83.3% found networking with other agents
                            "absolutely necessary".
                        </li>
                        <br></br>
                        <li>91.7% were on social media.</li>
                        </ul>
                        Then Brokersphere was born. The platform's sole purpose is to provide a space for agents to network and support each other 
                        through referrals. It's a digital eco-system in which real estate business can continuosly flow through. Trust us, we searched
                        day and night for an app or social media platform for real estate agents and we never found one. Every major real estate site 
                        you know is designed with the consumer in mind or for marketing you business to consumers. But what about marketing and networking 
                        with other agents? There are many social sites like Facebook and LinkedIn, however, these sites are designed for the masses and don't 
                        provide features specifically with real estate agents in mind. There are plenty of niche base platforms like Last.FM (podcasters),
                        Goodreads (book lovers), and Stack Overflow (tech). However, we couldn't find one for you, real estate agents. So we made one.
                        <br></br>
                        <br></br>
                        If networking with other agents is important to you, locally and globally, known and unknown, then this is the place for you.
                        But the success for Brokersphere is determined by how many agents we have utilizing the platform. The more agents, the more
                        potential opportunities for agents to receive referrals and connect with other like minded professionals. Try out the app and if you
                        like it, share it with a fellow agent. There are 3 million+ agents in the US alone. 1.6 million of them are part of NAR. Our hope is
                        that one day, this will be the first place an agnet looks to when they want to connect with other agents and grow their business.
                        While we are young now, in time this will be a thriving real estate business ecosystem.
                </p>
            </div>
        )
    }
}

export default AboutScreen