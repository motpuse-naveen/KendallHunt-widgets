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
        q: `&#x00BF;Qu&#x00E9; se describe al inicio de esta presentaci&#x00F3;n?`,
        q2: ``,
        q3: [],
        option: [`La definici&#x00F3;n de la evaluaci&#x00F3;n colectiva`, `La definici&#x00F3;n del aprendizaje colaborativo`, `La definici&#x00F3;n de programas educativos`, `La definici&#x00F3;n de normas de comunicaci&#x00F3;n`],
        optionStyleType: `st-upper-alpha`,
        answer: [1],
        ansText: `Q1 Rationale Text should goes here`,
        state: `notAnswered`,
        userAnswered: []
    },
    {
        q: `Seg&#x00FA;n esta presentaci&#x00F3;n, &#x00BF;cu&#x00E1;l es un beneficio para los alumnos al participar en aprendizajes colaborativos?`,
        q2: ``,
        q3: [],
        option: [`Aumento de la autoestima`, `Aumento de la asistencia a debates`, `Aumento del trabajo individual`, `Aumento de problemas de indisciplina`],
        optionStyleType: `st-upper-alpha`,
        answer: [0],
        ansText: `Q2 Rationale Text should goes here`,
        state: `notAnswered`,
        userAnswered: []
    },
    {
        q: `Seg&#x00FA;n esta presentaci&#x00F3;n, &#x00BF;cu&#x00E1;l es una condici&#x00F3;n clave para implementar el aprendizaje colaborativo?`,
        q2: ``,
        q3: [],
        option: [`El promover el di&#x00E1;logo y el respeto entre los alumnos`, `El difundir la filosof&#x00ED;a del trabajo grupal entre los docentes`, `El aplicar diferentes formas tradicionales de coevaluaci&#x00F3;n`, `El excluir a los alumnos que tienen dificultades diariamente`],
        optionStyleType: `st-upper-alpha`,
        answer: [0],
        ansText: `Q3 Rationale Text should goes here`,
        state: `notAnswered`,
        userAnswered: []
    },
    {
        q: `Seg&#x00FA;n esta presentaci&#x00F3;n, &#x00BF;qu&#x00E9; es lo que probablemente debe hacer el docente para implementar exitosamente el aprendizaje colaborativo en el aula?`,
        q2: ``,
        q3: [],
        option: [`Estudiar las reglas de disciplina para que los alumnos las usen en clase`, `Aplicar cuestionarios a los alumnos para saber lo que les gusta o disgusta`, `Indagar qu&#x00E9; ayuda a los alumnos que no cumplen con sus presentaciones`, `Incluir solo a los alumnos m&#x00E1;s brillantes como jefes de equipo`],
        optionStyleType: `st-upper-alpha`,
        answer: [1],
        ansText: `Q3 Rationale Text should goes here`,
        state: `notAnswered`,
        userAnswered: []
    },
    {
        q: `El sin&#x00F3;nimo de colaborativo es ###INPUT_TYPE###`,
        q2: ``,
        q3: [],
        type:`INPUT_TYPE`,
        option: [],
        answer: [`cooperativo`],
        ansText: `Q6 Rationale Text should goes here`,
        state: `notAnswered`,
        userAnswered: []
    },
];
