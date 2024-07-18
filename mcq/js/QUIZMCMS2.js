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
        q: `&#x00BF;Por qu&#x00E9; Marie dej&#x00F3; de estudiar a los 15 a&#x00F1;os?`,
        q2: ``,
        q3: [],
        option: [`Porque en su pa&#x00ED;s no exist&#x00ED;an escuelas de educaci&#x00F3;n superior para mujeres`, `Porque le gustaba jugar en el laboratorio de su pap&#x00E1;`, `Porque las mujeres de su edad solo pod&#x00ED;an irse a estudiar a Francia`, `Porque la universidad no exist&#x00ED;a cuando ella naci&#x00F3;`],
        optionStyleType: `st-upper-alpha`,
        answer: [0],
        ansText: `Q1 Rationale Text should goes here`,
        state: `notAnswered`,
        userAnswered: []
    },
    {
        q: `&#x00BF;Por qu&#x00E9; Marie se fue a estudiar a Francia?`,
        q2: ``,
        q3: [],
        option: [`Porque en Francia pudo continuar estudiando en la universidad`, `Porque quer&#x00ED;a casarse con su esposo en Francia`, `Porque quer&#x00ED;a trabajar en la universidad de Francia`, `Porque la invitaron a mudarse a Par&#x00ED;s`],
        optionStyleType: `st-upper-alpha`,
        answer: [0],
        ansText: `Q2 Rationale Text should goes here`,
        state: `notAnswered`,
        userAnswered: []
    },
    {
        q: `&#x00BF;En qu&#x00E9; a&#x00F1;o ella gan&#x00F3; su segundo premio nobel?`,
        q2: ``,
        q3: [],
        option: [`1903`, `1906`, `1911`, `1934`],
        optionStyleType: `st-upper-alpha`,
        answer: [2],
        ansText: `Q3 Rationale Text should goes here`,
        state: `notAnswered`,
        userAnswered: []
    },
    {
        q: `&#x00BF;Cu&#x00E1;l fue la contribuci&#x00F3;n a la ciencia m&#x00E1;s importante de Marie Curie?`,
        q2: ``,
        q3: [],
        option: [`haber trabajado con su esposo en la Sorbona`, `haber colocado dos elementos en la tabla peri&#x00F3;dica`, `haber descubierto la relatividad del tiempo`, `haber elaborado la tabla peri&#x00F3;dica de las escuelas`],
        optionStyleType: `st-upper-alpha`,
        answer: [1],
        ansText: `Q3 Rationale Text should goes here`,
        state: `notAnswered`,
        userAnswered: []
    },
    {
        q: `Ant&#x00F3;nimo de arduamente ###INPUT_TYPE###`,
        q2: ``,
        q3: [],
        type:`INPUT_TYPE`,
        option: [],
        answer: [`fácilmente`],
        ansText: `Q6 Rationale Text should goes here`,
        state: `notAnswered`,
        userAnswered: []
    },
];