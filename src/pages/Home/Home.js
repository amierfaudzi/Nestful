import React from 'react';
import './Home.scss';
import FAQ from './FAQ/FAQ';
import Features from './Features/Features';
import JourneyTimeline from './JourneyTimeline/JourneyTimeline';
import Hero from './Hero/Hero';


export default function Home() {
    return (
        <main>
            <Hero/>
            <Features />
            <JourneyTimeline />
            <FAQ/>
        </main>
    )
}
