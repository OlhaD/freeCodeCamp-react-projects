import { ActionButtonValue } from "../../share/enums/actionButtonValue";

const maxInputLength = 20;
const maxInputLengthMessage = "DIGITAL LIMIT MET";

export function handleNumber(input, formula, text, setInput, setFormula){
    if(handleFirstNumber(input, formula, text, setInput, setFormula)) return;
    if(handleDoubleDot(input, text)) return;
    if(handleTooLongNumber(input, setInput)) return;
    handleInputAccordingToLastCharType(input, text, setInput);
    setCleanedUpFormulaForNumber(formula, text, setFormula);
}

function handleFirstNumber(input, formula, text, setInput, setFormula){
    // 0 -> 1
    if(input.length === 1 && input === "0" || formula.includes("=")){
        setInput(text);
        setFormula(text);
        return true;
    }
}

function handleDoubleDot(input, text){
    // to avoid 232.34.3
    if(text === '.' && input.includes('.'))
    {
        return true;
    }
}

function handleTooLongNumber(input, setInput){
    if(input.length + 1 > maxInputLength){
        const prevValue = input;
        setInput(maxInputLengthMessage);
        setTimeout(() => {
            setInput(prevValue);
        }, 500);
        return true;
    }
}

function handleInputAccordingToLastCharType(input, text, setInput){
    const lastChar = input[input.length - 1];
    if(!isNumber(lastChar)){
        setInput(text);
    }else{
        // 34
        setInput(prevValue => prevValue + text)
    }
}

function setCleanedUpFormulaForNumber(formula, text, setFormula){
    if(formula === ""){
        setFormula(text);
        return;
    }

    setFormula(prev => prev + text);
}

export function handleAction(input, formula, actionValue, text, setInput, setFormula){
    switch (actionValue) {
        case ActionButtonValue.MULTIPLY: {
            setInput("X");
            setCleanedUpFormulaForAction(input, formula, "*", setInput, setFormula);
            return;
        }
        case ActionButtonValue.CLEAN: {
            setInput("0");
            setFormula("");
            return;
        }
        case ActionButtonValue.EQUALS: {
            try{
                const result = eval(formula).toString();
                setInput(result);
                setFormula(prev => `${prev}=${result}`);
                return;
            }
            finally{
                return;
            }
        }
        default: {
            setInput(text);
            setCleanedUpFormulaForAction(input, formula, text, setInput, setFormula);
            return;
        }
    }
}

function setCleanedUpFormulaForAction(input, formula, text, setInput, setFormula){
    if(handleFirstAction(formula, text, setInput, setFormula)) return;
    if(handleAfterEquals(input, formula, text, setInput, setFormula)) return;
    if(handleTwoMinusInRow(formula, text)) return;
    if(handleActionsConsequenceWithMinus(input, formula, text, setInput, setFormula)) return;

    setFormula(prev => prev + text);
}

function handleFirstAction(formula, text, setInput, setFormula){
    if(formula === ""){
        setInput(text);
        setFormula(`0${text}`);
        return true;
    }
}

function handleAfterEquals(input, formula, text, setInput, setFormula){
    if(formula.includes("=")){
        setInput(text);
        setFormula(`${input}${text}`);
        return true;
    }
}

function handleTwoMinusInRow(formula, text){
    // -- is not valid
    if(text === '-' && getLastChair(formula) === '-'){
        return true;
    }
}

function handleActionsConsequenceWithMinus(input, formula, text, setInput, setFormula){
    // +-+ -> ++ is not valid
    if(getLastChair(formula) === "-" && !isNumber(formula[formula.length - 2])){
        setInput(text);
        setFormula(formula.slice(0, formula.length - 2) + text);
        return true;
    }
    
    // *- is ok; */ is not
    if(text !== '-' && !isNumber(getLastChair(formula))){
        let value = formula;
        let newValue = value.replaceAt(value.length - 1, text);
        setFormula(newValue);
        return true;
    }
}

function getLastChair(text){
    if(text.length < 1) return;
    return text[text.length - 1];
}

function isNumber(val){
    return (val !== "+" && !isNaN(val) && !isNaN(parseFloat(val)) || val === '.')
}