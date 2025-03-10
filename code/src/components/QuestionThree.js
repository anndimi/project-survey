import React from 'react'

const QuestionThree = ({ questionThreeInput, onQuestionThreeInputChange, onStepChange }) => {
    return (
        <div>
            <div className="progress-bar-container">
                <label htmlFor="survey">Survey progress: </label>
                <progress className="progress-bar" id="survey" value="4" max="6"></progress>
            </div>

            <div className="question-three-container">
                <h2 className="question">If you could be a fly on the wall, who would you want to listen in on?</h2>
                <form className="form-style">
                    <label htmlFor="questionThreeInput" className="form-label">Your answer</label>
                    <input className="input-form" id="questionThreeInput" type="text" value={questionThreeInput} onChange={onQuestionThreeInputChange} placeholder="Your Answer">
                    </input>
                </form>
                <button className="button-next" type="submit" onClick={onStepChange}>Next</button>
            </div>
        </div>
    )

}

export default QuestionThree