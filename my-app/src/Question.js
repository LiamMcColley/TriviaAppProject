import React from "react"
import { useState } from "react";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

// class Question extends React.Component
function Question(props) {
    const [color, setColor] = useState("primary");

    return (
        <>
            <h2>{props.result.question}</h2>
            <p>{props.type === "multiple" && <ButtonGroup color={color} variant="contained" aria-label="outlined primary button group">
                <Button onClick={() => (props.answers[0] === props.answer) ? setColor("success") : setColor("error")}>{props.answers[0]}</Button>
                <Button onClick={() => (props.answers[1] === props.answer) ? setColor("success") : setColor("error")}>{props.answers[1]}</Button>
                <Button onClick={() => (props.answers[2] === props.answer) ? setColor("success") : setColor("error")}>{props.answers[2]}</Button>
                <Button onClick={() => (props.answers[3] === props.answer) ? setColor("success") : setColor("error")}>{props.answers[3]}</Button>
            </ButtonGroup>}</p>



            {(!(props.type === "multiple") && props.answer === "True") && <ButtonGroup color={color} variant="contained" aria-label="outlined primary button group">
                <Button onClick={() => setColor("success")}>{props.answer}</Button>
                <Button onClick={() => setColor("error")}>{props.wrong}</Button>
            </ButtonGroup>}
            {(!(props.type === "multiple") && props.answer === "False") && <ButtonGroup color={color} variant="contained" aria-label="outlined primary button group">
                <Button onClick={() => setColor("error")}>{props.wrong}</Button>
                <Button onClick={() => setColor("success")}>{props.answer}</Button>
            </ButtonGroup>}



        </>
    )

}

export default Question;