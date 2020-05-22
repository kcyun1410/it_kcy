import React, { Component } from 'react';
const { useState, useRef, useEffect, memo } = React;

const rspCoords = {
    rock: 0,
    scissor: '398px',
    paper: '199px',
}

const scores = {
    rock: 0,
    scissor: 1,
    paper: -1,
}

const computerChoice = (imgCoord) => {
    return Object.entries(rspCoords).find(function(v) {
        return v[1] === imgCoord;
    })[0];
};

const cycle = 300;
const cycleWait = 500;


// Hooks는 라이프사이클이 없다!
const RSP = () => {
    const [result, setResult] = useState('');
    const [imgCoord, setImgCoord] = useState(rspCoords.rock);
    const [score, setScore] = useState(0);
    const interval = useRef();

    useEffect(() => {
        console.log('다시 실행');
        interval.current = setInterval(changeHand, cycle);

        return () => { //componentWillUnmount 역할
            clearInterval(interval.current);
        }
    },  [imgCoord]); 
    const changeHand = () => {
        if (imgCoord === rspCoords.rock) 
            setImgCoord(rspCoords.scissor);
        
        else if (imgCoord === rspCoords.paper) 
            setImgCoord(rspCoords.rock);
        
        else if (imgCoord === rspCoords.scissor) 
            setImgCoord(rspCoords.paper);
    };

    const onClickBtn = (choice) => () => {
        clearInterval(interval.current);

        const myScore = scores[choice];
        const cpuScore = scores[computerChoice(imgCoord)];
        const diff = myScore - cpuScore;

        if (diff === 0) {
            setResult('DRAW');
        } else if([-1, 2].includes(diff)) {
            setResult('You WIN!');
            setScore((prevScore) => prevScore + 1);
        } else {
            setResult('You LOSE...');
            setScore((prevScore) => prevScore + 1);
        }
        setTimeout(() => {
            interval.current = setInterval(changeHand, cycle)
        }, cycleWait);
    };

    return (
        <>
            <div id="computer" style={{ background: `url(https://steemitimages.com/640x0/https://steemitimages.com/DQmVDkcxCxbuJJtwRiGv2xLoKt1eDMoznW1wYZyqJ9gQgCv/가위6%5B1%5D.png) ${imgCoord} 0`}} />
            <div>
                <button id="rock" className="btn" onClick={onClickBtn('rock')}>바위</button>
                <button id="scissor" className="btn" onClick={onClickBtn('scissor')}>가위</button>
                <button id="paper" className="btn" onClick={onClickBtn('paper')}>보</button>
            </div>
            <div>{result}</div>
            <div>현재 {score} 점</div>
        </>
    );
};
export default RSP;