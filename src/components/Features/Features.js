import React from 'react';
import { ReactComponent as StartUp } from '../../assets/Startup.svg';
import { ReactComponent as Valuation } from '../../assets/Valuations.svg';
import { ReactComponent as Growth } from '../../assets/Growth.svg';
import { ReactComponent as TextLine } from '../../assets/textLine.svg';

export default function Features() {
    return (
<section className="section__features">
                <div className="section__features--header">
                    <div className="section__features--header-title">
                        <h2>Nestful is built to support you during the entire retirement journey</h2>
                    </div>
                    <div className="section__features--header-subtitle">
                        <p>
                            Designed to help near-retires and retirees accomplish their goals and live their retirement years with a sense of purpose.
                        </p>
                    </div>
                </div>
                <div className="container--center">
                    <div className="introduction-feature">
                        <TextLine/><p className="introduction-feature__title">Features</p><TextLine/>
                    </div>
                    
                    <div className="container--feature">
                        <div className="feature">
                            <div className="feature__iconBg">
                                <Valuation className="feature__icon"/>
                            </div>
                            <h4>Retirement Check-in</h4>
                            <div className="feature__description">
                            <p>
                                View the current future financial scenarios for your retirement years.
                            </p>
                            </div>
                        </div>
                        <div className="feature">
                            <div className="feature__iconBg">
                                <StartUp className="feature__icon"/>
                            </div>
                            <h4>Retirement Goals</h4>
                            <div className="feature__description">
                            <p>
                                Set financial and lifestyle goals for retirement and track your progress.
                            </p>
                            </div>
                        </div>
                        <div className="feature">
                            <div className="feature__iconBg">
                            <Growth className="feature__icon"/>
                            </div>
                            <h4>Retirement Finances</h4>
                            <div className="feature__description">
                                <p>
                                    Create budgets, track spending, and save for your retirement travels.
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
    )
}
