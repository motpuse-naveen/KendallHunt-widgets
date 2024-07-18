//Constants for Instruction 
var quizInstructions = {
    correctFBText: "Correcto.",//"Correct.",
    incorrectFBText: "Incorrecto. Inténtalo de nuevo.",//"Incorrect. Please try again.",
    quesNumText: "Pregunta ",
    nextQuesBtnText: "Próxima pregunta",//"Next Question",
    checkAnsBtnText: "Checar respuesta",//"Check Answer",
    tryAgainBtnText: "Intentar otra vez",//"Try Again",
    showAnsBtnText: "Mostrar respuesta",//"Show Answer",
    needHelpText: "¿Necesitas ayuda con este?",//"Need help with this one?"
    selAnsCorrNotify: "La respuesta seleccionada ##SEL_OPTION_TEXT## es correcta.",//"Selected answer ##SEL_OPTION_TEXT##  is correct.",
    selAnsIncorrNotify: "La respuesta seleccionada ##SEL_OPTION_TEXT## es incorrecta.",//"Selected answer ##SEL_OPTION_TEXT##  is incorrect.",
    selAnsLengthNotify: "Incorrecto. Seleccione cualquier opción ##ANS_LENGTH##.",//"Incorrect. Please select any ##ANS_LENGTH## Option.",
    corrAnsPreText: "La respuesta correcta es",//"Correct answer is "
}
//Constants for Instruction End

var quiz = [
    {
        q: `El prop&#x00F3;sito de esta lecci&#x00F3;n es`,
        q2: ``,
        q3: [],
        option: [`Estudiar el origen de la luna`, `Informar sobre las fases de la luna que se observan en la NASA`, `Explicar las fases de la luna`, `Informar sobre las fases de la luna que se observan desde el Sol`],
        optionStyleType: `st-upper-alpha`,
        answer: [2],
        ansText: `Q1 Rationale Text should goes here`,
        state: `notAnswered`,
        userAnswered: []
    },
    {
        q: `De acuerdo con esta lecci&#x00F3;n, &#x00BF;por qu&#x00E9; podemos observar las fases de la luna?`,
        q2: ``,
        q3: [],
        option: [`Porque la forma de la luna cambia 8 veces`, `Porque la luz del sol ilumina la luna`, `Porque la Tierra realiza el movimiento de traslaci&#x00F3;n`, `Porque la luna gira alrededor de la Tierra`],
        optionStyleType: `st-upper-alpha`,
        answer: [1],
        ansText: `Q2 Rationale Text should goes here`,
        state: `notAnswered`,
        userAnswered: []
    },
    {
        q: `De acuerdo con esta lecci&#x00F3;n, &#x00BF;cu&#x00E1;nto dura el ciclo lunar?`,
        q2: ``,
        q3: [],
        option: [`29.5 d&#x00ED;as`, `7 d&#x00ED;as`, `384 d&#x00ED;as`, `14 d&#x00ED;as`],
        optionStyleType: `st-upper-alpha`,
        answer: [0],
        ansText: `Q3 Rationale Text should goes here`,
        state: `notAnswered`,
        userAnswered: []
    },
    {
        q: `De acuerdo con esta lecci&#x00F3;n, &#x00BF;cu&#x00E1;l es la fase lunar en la que la luna, el sol y la Tierra est&#x00E1;n alineados de manera casi perfecta?`,
        q2: ``,
        q3: [],
        option: [`Luna llena`, `Luna nueva`, `Luna creciente`, `Luna gibosa creciente`],
        optionStyleType: `st-upper-alpha`,
        answer: [0],
        ansText: `Q4 Rationale Text should goes here`,
        state: `notAnswered`,
        userAnswered: []
    },
    {
        q: `Probablemente el tema de las fases de la luna se puede investigar en`,
        q2: ``,
        q3: [],
        option: [`Peri&#x00F3;dicos digitales`, `Revistas sobre aeron&#x00E1;utica`, `Libros especializados`, `Art&#x00ED;culos sobre astronom&#x00ED;a`],
        optionStyleType: `st-upper-alpha`,
        answer: [3],
        ansText: `Q5 Rationale Text should goes here`,
        state: `notAnswered`,
        userAnswered: []
    },
    {
        q: `&#x00BF;Qu&#x00E9; significa la palabra fases en esta presentaci&#x00F3;n? ###INPUT_TYPE###`,
        q2: ``,
        q3: [],
        type:`INPUT_TYPE`,
        option: [],
        answer: [`Luna nueva, cuarto creciente, Luna llena, cuarto menguante`],
        ansText: `Q6 Rationale Text should goes here`,
        state: `notAnswered`,
        userAnswered: []
    },
];
