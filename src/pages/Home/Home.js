import React from 'react';
import './Home.scss';

export default function Home() {
    return (
        <div>
            <section className="hero">
                <div>
                    <p>Nestful Retirement Tool</p>
                    <p>
                        Helping you navigate your transition into retirement and beyond 
                    </p>
                </div>
                <div>
                    <p>Scroll down to begin</p>
                </div>
            </section>
            <section className="features">
                <div>
                    <h2>Nestful is built to support you during the entire retirement journey</h2>
                    <p>
                        Designed to help near-retires and retirees accomplish their goals and live their retirement years with a sense of purpose.
                    </p>
                </div>
                <div>
                    <p>Features</p>
                    <div>
                        <div>
                            Retirement Check-in
                            <p>
                                View the current future financial scenarios for your retirement years.
                            </p>
                        </div>
                        <div>
                            Retirement Goals
                            <p>
                                Set financial and lifestyle goals for retirement and track your progress.
                            </p>
                        </div>
                        <div>
                            Retirement Finances
                            <p>
                                Create budgets, track spending, and save for your retirement travels.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="howItWorks">
                <h2>How it works</h2>
                <p>Designed to help near-retirees and retirees accomplish their goals and live their retirement years with a sense of purpose.</p>
                <div>
                    Timeline with a bunch of text and images
                </div>
                <button>Get Started</button>
            </section>
            <section className="faq">
                <h2>FAQ</h2>
                <div className="questions">
                    <div className="question">
                        <div>
                            <h3>Frequently asked question 1</h3>
                            <div>click me</div>
                        </div>
                        <div>
                            This is the answer to FAQ 1
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
