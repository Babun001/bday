import React from 'react';
import { Link } from 'react-router-dom';
import st1 from '../images/bc68d948cfa2fbe45b2e5194eccc565c-removebg-preview.png';
// import st2 from '';

export default function Home() {
    return (
        <div className='container bg-success'>
            <div className='mainPart' style={{
                marginTop: "5rem",
                display: "flex",
                justifyContent: "center"
            }}>
                <img src={st1} alt="sticker1" />
            </div>
            <div className='btmtext' style={{
                display: "flex",
                justifyContent: "center"
            }}>
                <h1>Hi! Cutie</h1>
            </div>
            <div className='buttomTrigger'>
                <Link to="/birthday" className='linktobday'>Click here Rupsa!</Link>
            </div>

        </div>
    );
}
