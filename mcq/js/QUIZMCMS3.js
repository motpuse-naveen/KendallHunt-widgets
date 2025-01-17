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
        q: `Seg&#x00FA;n esta presentaci&#x00F3;n, &#x00BF;qu&#x00E9; significa la palabra l&#x00E9;xico?`,
        q2: ``,
        q3: [],
        option: [`Palabras interesantes que se aprenden en la lectura`, `Palabras que sirven para expresar ideas correctamente`, `Palabras que se desconocen por no saber leer`, `Palabras que describen un g&#x00E9;nero de libros`],
        optionStyleType: `st-upper-alpha`,
        answer: [1],
        ansText: `Q1 Rationale Text should goes here`,
        state: `notAnswered`,
        userAnswered: []
    },
    {
        q: `Seg&#x00FA;n esta presentaci&#x00F3;n, &#x00BF;cu&#x00E1;l es un beneficio derivado de la lectura?`,
        q2: ``,
        q3: [],
        option: [`Incrementa la ansiedad`, `Disminuye el n&#x00FA;mero de emociones`, `Forma alumnos que ayudan a otras personas`, `Propicia el desarrollo de la imaginaci&#x00F3;n`],
        optionStyleType: `st-upper-alpha`,
        answer: [3],
        ansText: `Q2 Rationale Text should goes here`,
        state: `notAnswered`,
        userAnswered: []
    },
    {
        q: `Probablemente la ponente conoce los siguientes g&#x00E9;neros literarios:`,
        q2: ``,
        q3: [],
        option: [`fantas&#x00ED;a, ficci&#x00F3;n y no ficci&#x00F3;n`, `fantas&#x00ED;a, ciencia ficci&#x00F3;n y literatura tradicional`, `ciencia ficci&#x00F3;n, literatura tradicional y poes&#x00ED;a`, `poes&#x00ED;a, fantas&#x00ED;a y no ficci&#x00F3;n`],
        optionStyleType: `st-upper-alpha`,
        answer: [0],
        ansText: `Q3 Rationale Text should goes here`,
        state: `notAnswered`,
        userAnswered: []
    },
    {
        q: `Con base a la informaci&#x00F3;n que se proporciona, es probable que la ponente:`,
        q2: ``,
        q3: [],
        option: [`deje de leer por un tiempo`, `visite la hemeroteca peri&#x00F3;dicamente`, `estudie para ser grande`, `tenga un l&#x00E9;xico amplio`],
        optionStyleType: `st-upper-alpha`,
        answer: [3],
        ansText: `Q3 Rationale Text should goes here`,
        state: `notAnswered`,
        userAnswered: []
    },
    {
        q: `Sin&#x00F3;nimo de quimera  ###INPUT_TYPE###`,
        q2: ``,
        q3: [],
        type:`INPUT_TYPE`,
        option: [],
        answer: [`utopía`],
        ansText: `Q6 Rationale Text should goes here`,
        state: `notAnswered`,
        userAnswered: []
    },

];
