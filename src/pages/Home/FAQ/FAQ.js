import React, { useState } from 'react';
import { ReactComponent as More } from '../../../assets/Plus.svg'
import './FAQ.scss';

export default function FAQ() {
    const [faq, setFaq] = useState([
        {question: "Question 1", answer: "Answer 1", show: false},
        {question: "Question 2", answer: "Answer 2", show: false},
        {question: "Question 3", answer: "Answer 3", show: false},
        {question: "Question 4", answer: "Answer 4", show: false},
        {question: "Question 5", answer: "Answer 5", show: false},
        {question: "Question 6", answer: "Answer 6", show: false},
        {question: "Question 7", answer: "Answer 7", show: false},
        {question: "Question 8", answer: "Answer 8", show: false},
        {question: "Question 9", answer: "Answer 9", show: false},
        {question: "Question 10", answer: "Answer 10", show: false},
    ])

    const toggleAnswer = (selectedIndex) => {
        const newFaq = faq.map((item, index) => {
            if(index  === selectedIndex) {
                return { ...item, show: !item.show}
            } else {
                return item
            }
        })
        setFaq(newFaq)
    }
    return (
        <section className="section-faq" id="faq">
            <div className="faq-header">
                <p className="faq-header__content">How it works</p>
            </div>
            {faq.map((item, index) => {
                return (
                    <div className="qa-card" key={index}>
                        <div className="question" onClick={() => {toggleAnswer(index)}}>
                            <p className="question__content">{item.question}</p>
                            <More className="icon"/>
                        </div>
                        { item.show ? 
                            <div>
                                <p>{item.answer}</p>
                            </div>
                            :
                        ""}
                    </div>
                )
            })}
        </section>
    )
}
