import React, { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import parse from 'html-react-parser'

const Guess = (props) => {
    const [freqOfCipher, setFreqOfCipher] = useState([]);
    const [predictionAlphabet, setPredictionAlphabet] = useState([]);
    const [generatedText, setGeneratedText] = useState("");

    useEffect(() => {
        if(props.analysis){
            setFreqOfCipher(Object.keys(props.analysis.letterFrequencies));
            setPredictionAlphabet(props.predictAlphabet ? props.predictAlphabet:Object.keys(props.analysis.letterFrequencies).map(x => ""));
            setGeneratedText(props.cipherText);
        }
    },[props.analysis]);

    const letterChangeHandler = (e) => {
        e.preventDefault();
        let opaSet = new Set(predictionAlphabet);
        let opa = predictionAlphabet;
        if(opaSet.has(e.target.value)){
            console.log("duplicate characters");
            e.target.value = "";
        }else{
            opa[e.target.id] = e.target.value;
            setPredictionAlphabet(opa);
            setGeneratedText(generatePredictionText());
        }

    };

    const generatePredictionText = () => {
        var text = props.cipherText.toLowerCase();
        var i = 0;
        for (i = 0; i < freqOfCipher.length; i++) {
            if (predictionAlphabet[i]) {
                text = text.replace(new RegExp(freqOfCipher[i], "g"), predictionAlphabet[i].toUpperCase());
            }
        }
        return text;
    }
    const cipherFreqLetters = freqOfCipher ? freqOfCipher.map((letter, index) => {
        return (
            <th scope="col" key={index}>{letter}</th>
        );
    }):null;

    const guessFreqLetters = predictionAlphabet ? predictionAlphabet.map((letter, index) => {
        return (
            <td key={index}>
                <input
                    id={index}
                    type="text"
                    maxLength="1"
                    className="guessInput"
                    onChange={letterChangeHandler}
                    value= {predictionAlphabet[index]}
                />
            </td>
        );
    }):null;

    return props.analysis ? (
        <div className="row">
            <h2 className="mt-3 text-center">
                Predictions
            </h2>
            <div className="card mt-2">
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    {cipherFreqLetters}
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    {guessFreqLetters}
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className="card mt-2">
                <div className="card-body">
                    {parse(generatedText)}
                </div>
            </div>
        </div>
    ):null;
};

export default Guess;

//ciphertext, alphabet