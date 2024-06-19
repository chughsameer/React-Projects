import React, { useRef, useState } from 'react'
import './Quiz.css'
import { data } from '../data'

const Quiz = () => {

    let [index,setIndex] = useState(0);
    let [Question,setQuestion] = useState(data[index]);
    let [lock,setLock] = useState(false);
    let [score,setScore] = useState(0);
    let [result,setResult] = useState(false);

    let Option1 = useRef(null);
    let Option2 = useRef(null);
    let Option3 = useRef(null);
    let Option4 = useRef(null);
    let option_array = [Option1,Option2,Option3,Option4];

    const checkanswer = (e,answer) => {
        if (lock === false) {
            if(Question.ans === answer){
                e.target.classList.add('correct');
                setLock(true);
                setScore(prev=>prev+1)
            }
            else{
                e.target.classList.add('incorrect');
                setLock(true)
                // setInterval(() => {
                //     option_array[Question.ans-1].current.classList.add('correct');
                // }, 250);
                option_array[Question.ans-1].current.classList.add('correct');
            }
        }
    }
    const next = () => {
        if (lock === true) {
            if (index+1 === data.length) {
                setResult(true);
                return 0;
            }
            setIndex(++index);
            setQuestion(data[index]);
            setLock(false);
            option_array.map((opt)=>{
                opt.current.classList.remove('incorrect');
                opt.current.classList.remove('correct');
                return null;
            })
        }
    }
    const reset = () => {
        setIndex(0);
        setQuestion(data[0]);
        setLock(false);
        setScore(0);
        setResult(false)
    }

  return (
    <>
    <div className="container">
        <h1>Quiz App</h1>
        <hr/>
        {result?<></>:
        <>
        <h2>{index + 1}. {Question.question}</h2>
        <ul>
            <li ref={Option1} onClick={(e)=>{checkanswer(e,1)}}>{Question.option1}</li>
            <li ref={Option2} onClick={(e)=>{checkanswer(e,2)}}>{Question.option2}</li>
            <li ref={Option3} onClick={(e)=>{checkanswer(e,3)}}>{Question.option3}</li>
            <li ref={Option4} onClick={(e)=>{checkanswer(e,4)}}>{Question.option4}</li>
        </ul>
        <button onClick={next}>Next</button>
        <div className="index">{index+1} of {data.length} Question</div>
        </>}
        {result?<>
            <h2>You score {score} out of {data.length}</h2>
            <button onClick={reset}>Reset</button>
        </>:<></>}
    </div>
    </>
  )
}

export default Quiz
