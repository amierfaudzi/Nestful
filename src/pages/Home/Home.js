import React from 'react';
import './Home.scss';
import FAQ from './FAQ/FAQ';
import Features from './Features/Features';
import JourneyTimeline from './JourneyTimeline/JourneyTimeline';


export default function Home() {
    return (
        <div>
            {/* <section className="hero">
                <div>
                    <p>Nestful Retirement Tool</p>
                    <p>
                        Helping you navigate your transition into retirement and beyond 
                    </p>
                </div>
                <div>
                    <p>Scroll down to begin</p>
                </div>
            </section> */}
            {/* <Features /> */}
            {/* <section className="howItWorks">
                <h2>How it works</h2>
                <p>Designed to help near-retirees and retirees accomplish their goals and live their retirement years with a sense of purpose.</p>
                <div>
                    Timeline with a bunch of text and images
                </div>
                <button>Get Started</button>
            </section> */}
                    {/* <FAQ/> */}
                    <JourneyTimeline />
        </div>
    )
}
