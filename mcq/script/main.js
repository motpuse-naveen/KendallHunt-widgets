/* Version 19.5, Date:07 July 2022 */
/* Version 19.7, Date:08 JULY 2022 */
var correctFBText = "Correct."
var incorrectFBText = "Incorrect. Please try again."
if(typeof quizInstructions == 'undefined'){
    var quizInstructions = {
        correctFBText: "Correct.",
        incorrectFBText: "Incorrect. Please try again.",
        quesNumText: "Pregunta ",
        nextQuesBtnText: "Next Question",//"Próxima pregunta",
        checkAnsBtnText: "Check Answer",//"Checar respuesta",
        tryAgainBtnText: "Try Again",//"Intentar otra vez",
        showAnsBtnText: "Show Answer",//"Mostrar respuesta",
        needHelpText: "Need help with this one?",//"¿Necesitas ayuda con este?"
        selAnsCorrNotify: "Selected answer ##SEL_OPTION_TEXT##  is correct.",//"La respuesta seleccionada ##SEL_OPTION_TEXT## es correcta."
        selAnsIncorrNotify: "Selected answer ##SEL_OPTION_TEXT##  is incorrect.",//"La respuesta seleccionada ##SEL_OPTION_TEXT## es incorrecta."
        selAnsLengthNotify: "Incorrect. Please select any ##ANS_LENGTH## Option.",//"Incorrecto. Seleccione cualquier opción ##ANS_LENGTH##."
        corrAnsPreText: "Correct answer is ",//"La respuesta correcta es",
    }
}
if(quizInstructions){
    correctFBText = quizInstructions.correctFBText;
    incorrectFBText = quizInstructions.incorrectFBText;
}

var paginationTabindex = 10001;
var optionsIndex = 1;
const tabs = document.querySelector(".tab-content");
const tabButton = document.querySelectorAll(".step");
const contents = document.querySelectorAll(".tab-pane");
function getQuestionByEvent(e) {
    var id;
    if($(e.target.closest(".nav-item").length>1) || $(e.target.closest(".nav-link").length>1)){
        if ($(e.target).is('span')) {
            id = $(e.target).parent().attr('data-id');
        } else if ($(e.target).is('a')) {
            id = $(e.target).attr('data-id');
        }
        if (id) {
            getNewQuestion(parseInt(id.split('-')[1]));
            $('.nav-link').removeClass('active');
            if ($(e.target).is('span')) {
                $(e.target).parent().addClass("active");
            } else {
                $(e.target).addClass("active");
            }

            $('#questionNumber').focus();
            if (parseInt(id.split('-')[1]) === quiz.length) {
                $('.arrow-right').addClass('disabled');
                $('.arrow-left').removeClass('disabled');
            } else if (parseInt(id.split('-')[1]) === 1) {
                $('.arrow-left').addClass('disabled');
                $('.arrow-right').removeClass('disabled');
            } else {
                $('.arrow-right').removeClass('disabled');
                $('.arrow-left').removeClass('disabled');
            }
        }
    }
}
$(".steps").on('click keydown', function (e) {
    if ((e.type === 'keydown' && e.keyCode == 13) || e.type === 'click') {
        getQuestionByEvent(e);
        $ul = $('.steps ul');
        $ulWrapper = $ul//.parent();
        stepWidth = $('.steps ul li').outerWidth();
        ulWrapperWidth = $ulWrapper.width();
        wrapperCapacity = ulWrapperWidth / stepWidth;
        totalItemsWidth = $('.steps ul li').length * stepWidth;
        var stepAtCenter = -1;
        var $selectedStep = $(e.target);
        var selectedStep;
        if ($selectedStep.is('span')) {
            selectedStep = $selectedStep.parent().attr('data-id').split('-')[1];
        } else if ($selectedStep.is('a')) {
            selectedStep = $selectedStep.attr('data-id').split('-')[1];
        }
        autoDragPagination(selectedStep);
        // get central item by removing css.left
    }
});
function autoDragPagination(selectedStep) {
    $ul = $('.steps ul');
    $ulWrapper = $ul//.parent();
    stepWidth = $('.steps ul li').outerWidth();
    ulWrapperWidth = $ulWrapper.width();
    wrapperCapacity = ulWrapperWidth / stepWidth;
    totalItemsWidth = $('.steps ul li').length * stepWidth;
    var stepAtCenter = -1;

    var stepCountAtCenter = Math.floor(wrapperCapacity / 2);
    var oldLeft = parseInt($ul.css('left'))
    var minLeft = 0 - ((totalItemsWidth - ulWrapperWidth) + stepWidth);
    var maxLeft = 0;
    // evaluating Center
    if (oldLeft === 0) {
        stepAtCenter = stepCountAtCenter;
    } else {
        var hiddenToLeft = Math.floor(Math.abs(oldLeft) / stepWidth);
        stepAtCenter = hiddenToLeft + stepCountAtCenter;
    }
    // Applying left
    if ((ulWrapperWidth - (stepWidth * 2)) < totalItemsWidth) {
        if (selectedStep > stepAtCenter) {
            var newLeft = oldLeft - ((selectedStep - stepAtCenter) * stepWidth);
            if (newLeft < minLeft) {
                newLeft = minLeft;
            }
            // // (totalItemsWidth - ulWrapperWidth)
            // for(let i = 0; i&lt;=hiddenUnderLeft;i++) {
            //    // console.log()
            //    $($('.steps ul li')[i]).find('a').removeAttr('tabindex');
            // }
            $ul.css('left', newLeft);
        } else {
            var newLeft = oldLeft + ((stepAtCenter - selectedStep) * stepWidth);
            if (newLeft > maxLeft) {
                newLeft = maxLeft;
            }
            $ul.css('left', newLeft);
        }
    }
    // $('.steps ul li a').removeAttr('tabindex');
    // var hiddenUnderLeft = (Math.abs(newLeft)/stepWidth);
    // for (let i = hiddenUnderLeft+1; i&lt; hiddenUnderLeft + Math.floor(wrapperCapacity); i++) {
    //    $($('.steps ul li')[i]).find('a').attr('tabindex', 0);
    // }
}
var QuestionNumber = document.querySelector("#questionNumber");
var QuestionName = document.querySelector("#questionName");
var optionContainer = document.querySelector(".Multiple-choice");
var correctMsg = document.querySelector(".correct");
var indicator = document.querySelector(".nav-tabs");
var subHeadingContainer = document.querySelector(".content-heading");
var questionCounter = 0;
var currentQuestion;
var availableQuestion = [];
var availableOption = [];
var selectOption = [];
// add quiz question to new array;
function setAvailableQuestion() {
    var totalQuestion = quiz.length;
    for (var i = 0; i < totalQuestion; i++) {
        availableQuestion.push(quiz[i]);
    }
}
// goto question and new question of array
function getNewQuestion(question) {
    $('#mcq_button').show();
    selectOption = [];
    if(quizInstructions){
        QuestionNumber.innerText = quizInstructions.quesNumText + (question);
        QuestionNumber.setAttribute('aria-label', quizInstructions.quesNumText + (question));
    }
    else{
        QuestionNumber.innerText = "Question " + (question);
        QuestionNumber.setAttribute('aria-label', "Question " + (question));
    }

    QuestionNumber.setAttribute('role', "heading");
    QuestionNumber.setAttribute('tabindex', '0');
    optionsIndex++;
    // get random question
    //var questionIndex = quiz[question - 1];
    currentQuestion = quiz[question - 1];
    if(currentQuestion.type && currentQuestion.type == "INPUT_TYPE"){
        currentQuestion.q = currentQuestion.q.replace("###INPUT_TYPE###", "<div contenteditable='true' id='inputEditBox' class='inputEditBox'></div>")
    }
    QuestionName.innerHTML = currentQuestion.q;
    QuestionName.setAttribute('tabindex', '0');
    optionsIndex++
    if (currentQuestion.q2) {
        $('#subheading2').html(currentQuestion.q2);
        $('#subheading2').attr('tabindex', '0');
        $('#subheading2').show();
        optionsIndex++
    } else {
        $('#subheading2').removeAttr('aria-label');
        $('#subheading2').removeAttr('tabindex');
        $('#subheading2').hide();
        optionsIndex++
    }
    if (currentQuestion.q3.length) {
        $('#subheading3').html(currentQuestion.q3[0]);
        $('#subheading3').attr('tabindex', '0');
        $('#subheading3').show();
        optionsIndex++
    } else {
        $('#subheading3').removeAttr('aria-label');
        $('#subheading3').removeAttr('tabindex');
        $('#subheading3').hide();
        optionsIndex++
    }
    if (currentQuestion.optionStyleType != undefined && currentQuestion.optionStyleType != null && currentQuestion.optionStyleType != "") {
        optionContainer.setAttribute("styletype", currentQuestion.optionStyleType);
        $(".answer-controls").addClass("mar-left")
    }
    else {
        optionContainer.removeAttribute("styletype");
        $(".answer-controls").removeClass("mar-left")
    }
    var optionlen = currentQuestion.option.length;
    for (var i = 0; i < optionlen; i++) {
        availableOption.push(i);
    }
    optionContainer.innerHTML = '';
    for (var j = 0; j < optionlen; j++) {
        var option = document.createElement("li");
        option.innerHTML = currentQuestion.option[j];
        option.setAttribute('data-id', j);
        option.setAttribute('tabindex', '0');
        option.setAttribute('role', 'option');
        optionsIndex++;
        option.className = "focus-input";
        if (typeof currentQuestion.optionFeedback != 'undefined') {
            option.setAttribute('data-feedback', currentQuestion.optionFeedback[j]);
        }
        optionContainer.appendChild(option);
    }
    $('.inputEditBox').on('keyup', checkAndEnableButtons)
    $('.focus-input').on('keydown click', addActiveClass);
    $(".focus-input *").on("click", function (e) {
        if($(this).closest(".focus-input").length>0){
            $(this).closest(".focus-input").click();
        }
        e.stopPropagation()
    })
    if (typeof bind_glossary_events == "function") {
        bind_glossary_events();
    }
    

    $('.tab-pane ').attr('data-state', currentQuestion.state);
    $('.tab-pane ').attr('id', question);
    $(".ic-opt-fbk").remove();
    var optFeedback = ""
    if (currentQuestion.state === 'wrong') {
        if(currentQuestion.type=="INPUT_TYPE"){
            $(".inputEditBox").attr("data-correct", "false");
            $(".inputEditBox").removeAttr("contenteditable");
            $(".inputEditBox").addClass("focus-input wrong-input");
            $(".inputEditBox").html(currentQuestion.inputUserAnswered)
        }
        else{
            $('.focus-input').each(function () {
                if ($(this).attr('data-id') == currentQuestion.userAnswered) {
                    $(this).addClass('wrong');
                    if (typeof currentQuestion.optionFeedback != 'undefined') {
                        optFeedback = $(this).attr('data-feedback')
                    }
                }
            });
        }
        
        
        $('#mcq_button').removeClass('disabled');
        if(quizInstructions){
            $('#mcq_button').html(quizInstructions.tryAgainBtnText);
            $('#mcq_button').attr('title', quizInstructions.tryAgainBtnText);
        }
        else{
            $('#mcq_button').html('Try Again');
            $('#mcq_button').attr('title', 'Try Again');
        }
        $('#mcq_button').attr('en-text','Try Again');

        $('#mcq_button').attr('tabindex', '0');
        $('#answer_label').show();
        $('#Add_solution').hide();
        $('#need_help').show();
        $('#answer_label').html(incorrectFBText);
        if (optFeedback != undefined && optFeedback != "") {
            var feedback = $("<p>").addClass("ic-opt-fbk").html(optFeedback)
            $('#answer_label').after(feedback);
        }
        $('#answer_label').removeClass().addClass('not-quite');
    } else if (currentQuestion.state === 'correct') {
        if(currentQuestion.type=="INPUT_TYPE"){
            $(".inputEditBox").attr("data-correct", "true");
            $(".inputEditBox").removeAttr("contenteditable");
            $(".inputEditBox").addClass("focus-input correct-input");
            $(".inputEditBox").html(currentQuestion.inputUserAnswered)
        }
        if (question == quiz.length) {
            $('#mcq_button').html('Done').hide();
            $('#mcq_button').attr('title', 'Done');
        } else {
            if(quizInstructions){
                $('#mcq_button').html(quizInstructions.nextQuesBtnText);
                $('#mcq_button').attr('title', quizInstructions.nextQuesBtnText);
            }
            else{
                $('#mcq_button').html('Next Question');
                $('#mcq_button').attr('title', 'Next Question');
            }
            $('#mcq_button').attr('en-text','Next Question');
        }
        $('#mcq_button').removeClass('disabled');
        $('#mcq_button').attr('tabindex', '0');
        $('#answer_label').show();
        $('#Add_solution').children().html(currentQuestion.ansText);
        $('#Add_solution').show();
        $('#need_help').hide();
        $('#answer_label').html(correctFBText);
        $('#answer_label').removeClass().addClass('correct');
        unclickableOptions();
    } else {
        $('.focus-input').removeClass().addClass('focus-input');
        if(quizInstructions){
            $('#mcq_button').html(quizInstructions.checkAnsBtnText);
            $('#mcq_button').attr('title', quizInstructions.checkAnsBtnText);
        }
        else{
            $('#mcq_button').html('Check Answer');
            $('#mcq_button').attr('title', 'Check Answer');
        }
        $('#mcq_button').attr('en-text','Check Answer');
        
        $('#mcq_button').addClass('disabled');
        // $('#questionNumber').focus();
        
        // $('#mcq_button').removeAttr('tabindex');
        $('#mcq_button').attr('tabindex', '-1');
        $('#answer_label').hide();
        $('#Add_solution').hide();
        $('#need_help').show();
    }
    $('.nav-link').removeClass('active');
    $('.nav-link').each(function () {
        if ($(this).attr('data-id') == 'q-' + question) {
            $(this).addClass('active');
        }
    });
    currentQuestion.userAnswered.forEach(userAns => {
        let index = currentQuestion.answer.findIndex(currentQuest => currentQuest === userAns);
        if (index !== -1) {
            $("ul").find(`[data-id='${userAns}']`).removeClass().addClass("focus-input last-child");
        } else {
            $("ul").find(`[data-id='${userAns}']`).removeClass().addClass('focus-input wrong');
        }
    });
    //MathJax.typesetClear()
    //MathJax.typeset();
    questionCounter++;
    bind_annotLinkEvents();
}
function checkAndEnableButtons(evt){
    evt.preventDefault();
    evt.stopPropagation();
    if (evt.type === 'keyup'){
        if (currentQuestion.state !== 'wrong' && !$(evt.target).hasClass('wrong'))
        {
            if($(evt.target).text().trim() != ""){
                if(quizInstructions){
                    $('#mcq_button').html(quizInstructions.checkAnsBtnText);
                    $('#mcq_button').attr('title', quizInstructions.checkAnsBtnText);
                }
                else{
                    $('#mcq_button').html('Check Answer');
                    $('#mcq_button').attr('title', 'Check Answer');
                }
                $('#mcq_button').attr('en-text','Check Answer');
                
                $('#mcq_button').removeAttr('aria-disabled');
                $('#Add_solution').hide();
                $('#answer_label').hide();
                $('#mcq_button').removeClass('disabled');
                $('#mcq_button').attr('tabindex', '0');
            }
            else{
                $('#mcq_button').addClass('disabled');
                $('#mcq_button').attr('aria-disabled',"true");
            }
        }
    }
}
function addActiveClass(el) {
    el.preventDefault();
    el.stopPropagation();

    if ((el.type === 'keydown' && el.keyCode == 13) || el.type === 'click') {
        if (currentQuestion.state !== 'wrong' && !$(el.target).hasClass('wrong') && !$(el.target).hasClass('last-child')) {
            if (!$(el.target).hasClass("active")) {
                $(el.target).removeClass().addClass('focus-input');
                selectOption = [];
                $(el.target).removeClass().addClass('focus-input active');
                if (currentQuestion.type != undefined && currentQuestion.type != null && currentQuestion.type != ""
                    && currentQuestion.type == "MCSS" || currentQuestion.type == "TF") {
                    $(el.target).prevAll().removeClass().addClass('focus-input');
                    $(el.target).nextAll().removeClass().addClass('focus-input');
                    $(el.target).removeClass().addClass('focus-input active');
                }
                if(quizInstructions){
                    $('#mcq_button').html(quizInstructions.checkAnsBtnText);
                    $('#mcq_button').attr('title', quizInstructions.checkAnsBtnText);
                }
                else{
                    $('#mcq_button').html('Check Answer');
                    $('#mcq_button').attr('title', 'Check Answer');
                }
                $('#mcq_button').attr('en-text','Check Answer');

                $('#mcq_button').removeAttr('aria-disabled');
                $('#Add_solution').hide();
                $('#answer_label').hide();
                $('.tab-pane ').attr('data-state', 'answered');
                $('#mcq_button').removeClass('disabled');
                $('#mcq_button').attr('tabindex', '0');
                ariaAnnounce('Selected option is ' + $(el.target).text());
            }
            else {
                if ($('.focus-input.active').length > 1) {
                    $(el.target).removeClass("active");
                }
            }
        } else {
            if (currentQuestion.type != undefined && currentQuestion.type != null && currentQuestion.type != ""
                && currentQuestion.type == "MCSS" || currentQuestion.type == "TF") {
                selectOption = [];
                $(".ic-opt-fbk").remove();
                $(el.target).prevAll().removeClass().addClass('focus-input');
                $(el.target).nextAll().removeClass().addClass('focus-input');
                $(el.target).removeClass().addClass('focus-input active');
                $(el.target).removeClass('wrong');
                if(quizInstructions){
                    $('#mcq_button').html(quizInstructions.checkAnsBtnText);
                    $('#mcq_button').attr('title', quizInstructions.checkAnsBtnText);
                }
                else{
                    $('#mcq_button').html('Check Answer');
                    $('#mcq_button').attr('title', 'Check Answer');
                }
                $('#mcq_button').attr('en-text','Check Answer');

                $('#Add_solution').hide();
                $('#answer_label').hide();
                $('.tab-pane ').attr('data-state', 'answered');
                $('#mcq_button').removeClass('disabled');
                $('#mcq_button').removeAttr('aria-disabled');
                $('#mcq_button').attr('tabindex', '0');
            }
            else {
                if (!$(el.target).hasClass('wrong') && !$(el.target).hasClass('last-child')) {
                    $(el.target).removeClass().addClass('focus-input active');
                } else {
                    $(el.target).removeClass('wrong');
                }
            }
        }
    }
    return false;
}
// check the current option is true or not .
function check(answer, selectOption) {
    for (var i = 0; i < answer.length; i++) {
        if (answer[i] == selectOption[i]) {
        }
        else {
            return false;
            break;
        }
    }
    return true;
}

function getInputResult(){
    let answerText = $(".inputEditBox").text();
    let correctAnswer = currentQuestion.answer.map(el => el = el);
    correctAnswer = correctAnswer.join(',');
    var wrongAns = 0;
    let dataId = 'q-' + parseInt($('.tab-pane').attr('id'));
    if(answerText == correctAnswer){
        correctMsg.innerHTML = correctFBText;
        $(".inputEditBox").attr("data-correct", "true");
        $(".inputEditBox").addClass("focus-input correct-input");
        updateAnswerIndicator("correct");
        if (parseInt($('.tab-pane').attr('id')) == quiz.length) {
            $('#mcq_button').html('Done').hide();
            $('#mcq_button').attr('title', 'Done');
        } else {
            if(quizInstructions){
                $('#mcq_button').html(quizInstructions.nextQuesBtnText);
                $('#mcq_button').attr('title', quizInstructions.nextQuesBtnText);
            }
            else{
                $('#mcq_button').html('Next Question');
                $('#mcq_button').attr('title', 'Next Question');
            }
            $('#mcq_button').attr('en-text','Next Question');
        }
        $(".inputEditBox").removeAttr("contenteditable")
        $('#mcq_button').attr('tabindex', '0');
        $('#answer_label').show();
        $('#need_help').hide();
        $('#Add_solution').children().html(currentQuestion.ansText);
        $('#Add_solution').show();
        $('.tab-pane ').attr('data-state', 'correct');
        currentQuestion.state = 'correct';
        $('.nav-link').each(function () {
            if ($(this).attr('data-id') == dataId) {
                $(this).attr('data-correct', true);
            }
        });
        //ariaAnnounce('Selected answer ' + answerText + ' is correct.');
        ariaAnnounce(quizInstructions.selAnsCorrNotify.replace("##SEL_OPTION_TEXT##", answerText));
    }
    else{
        wrongAns = 1;
        correctMsg.classList.add("not-quite");
        correctMsg.innerHTML = incorrectFBText;
        $(".inputEditBox").removeAttr("contenteditable")
        $(".inputEditBox").removeAttr("data-correct");
        $(".inputEditBox").removeClass("focus-input last-child").addClass("focus-input wrong-input");
        updateAnswerIndicator("wrong");
        if(quizInstructions){
            $('#mcq_button').html(quizInstructions.tryAgainBtnText);
            $('#mcq_button').attr('title', quizInstructions.tryAgainBtnText);
        }
        else{
            $('#mcq_button').html('Try Again');
            $('#mcq_button').attr('title', 'Try Again');
        }
        $('#mcq_button').attr('en-text','Try Again');
        
        $('#mcq_button').attr('tabindex', '0');
        $('#answer_label').show();
        $('#need_help').show();
        $('.tab-pane ').attr('data-state', 'wrong');
        currentQuestion.state = 'wrong';
        $('.nav-link').each(function () {
            if ($(this).attr('data-id') == dataId) {
                $(this).attr('data-correct', false);
            }
        });
        //ariaAnnounce('Sected answer ' + answerText + ' is incorrect.');
        ariaAnnounce(quizInstructions.selAnsIncorrNotify.replace("##SEL_OPTION_TEXT##", answerText));
    }
    //currentQuestion.userAnswered = answerText;
    currentQuestion.inputUserAnswered = answerText;
    bind_annotLinkEvents();
}
function getResult(element) {
    var wrongAns = 0;
    var id = parseInt($(element[0]).attr('data-id'));
    for (var i = 0; i < element.length; i++) {
        selectOption.push(parseInt($(element[i]).attr('data-id')));
    }
    selectOption.sort();
    let dataId = 'q-' + parseInt($('.tab-pane').attr('id'));
    selectOption.forEach(option => {
        let index = currentQuestion.answer.findIndex(ans => ans === option);
        if (index !== -1) {
            $("ul").find(`[data-id='${option}']`).removeClass().addClass("focus-input last-child");
        } else {
            $("ul").find(`[data-id='${option}']`).removeClass().addClass('focus-input wrong');
            wrongAns++;
        }
    });
    if (wrongAns === 0 && check(currentQuestion.answer, selectOption) !== false) {
        correctMsg.innerHTML = correctFBText;
        $(element).parent().attr("data-correct", "true");
        $(element).attr("role", "img");
        updateAnswerIndicator("correct");
        if (parseInt($('.tab-pane').attr('id')) == quiz.length) {
            $('#mcq_button').html('Done').hide();
            $('#mcq_button').attr('title', 'Done');
        } else {
            if(quizInstructions){
                $('#mcq_button').html(quizInstructions.nextQuesBtnText);
                $('#mcq_button').attr('title', quizInstructions.nextQuesBtnText);
            }
            else{
                $('#mcq_button').html('Next Question');
                $('#mcq_button').attr('title', 'Next Question');
            }
            $('#mcq_button').attr('en-text','Next Question');
        }
        $('#mcq_button').attr('tabindex', '0');
        unclickableOptions();
        $('#answer_label').show();
        $('#need_help').hide();
        $('#Add_solution').children().html(currentQuestion.ansText);
        $('#Add_solution').show();
        $('.tab-pane ').attr('data-state', 'correct');
        currentQuestion.state = 'correct';
        $('.nav-link').each(function () {
            if ($(this).attr('data-id') == dataId) {
                $(this).attr('data-correct', true);
            }
        });
        //ariaAnnounce('Selected answer ' + $(element).text() + ' is correct.');
        ariaAnnounce(quizInstructions.selAnsCorrNotify.replace("##SEL_OPTION_TEXT##", answerText));
    }
    else {
        var optFeedback = $(element).attr('data-feedback')
        if (optFeedback != undefined && optFeedback != "") {
            var feedback = $("<p>").addClass("ic-opt-fbk").html(optFeedback)
            $('#answer_label').after(feedback);
        }
        if (currentQuestion.answer.length !== selectOption.length) {
            correctMsg.classList.add("not-quite");
            //correctMsg.innerHTML = "Incorrect. Please select any " + currentQuestion.answer.length + " Option.";
            correctMsg.innerHTML = quizInstructions.selAnsLengthNotify.replace("##ANS_LENGTH##", currentQuestion.answer.length);
        }
        else {
            correctMsg.classList.add("not-quite");
            correctMsg.innerHTML = incorrectFBText;
        }
        updateAnswerIndicator("wrong");
        if(quizInstructions){
            $('#mcq_button').html(quizInstructions.tryAgainBtnText);
            $('#mcq_button').attr('title', quizInstructions.tryAgainBtnText);
        }
        else{
            $('#mcq_button').html('Try Again');
            $('#mcq_button').attr('title', 'Try Again');
        }
        $('#mcq_button').attr('en-text','Try Again');
        
        $('#mcq_button').attr('tabindex', '0');
        $('#answer_label').show();
        $('#need_help').show();
        $('.tab-pane ').attr('data-state', 'wrong');
        $('.nav-link').each(function () {
            if ($(this).attr('data-id') == dataId) {
                $(this).attr('data-correct', false);
            }
        });
        currentQuestion.state = 'wrong';
        //ariaAnnounce('Sected answer ' + $(element).text() + ' is incorrect.');
        ariaAnnounce(quizInstructions.selAnsIncorrNotify.replace("##SEL_OPTION_TEXT##", answerText));
    }
    currentQuestion.userAnswered = selectOption;
    bind_annotLinkEvents();
}
function unclickableOptions() {
    var optionLen = optionContainer.children.length;
    for (var i = 0; i < optionLen; i++) {
        optionContainer.children[i].classList.add("already-answered")
    }
}
function answerIndicatot() {
    var totalQuestion = quiz.length;
    for (var i = 0; i < totalQuestion; i++) {
        var footerLi = document.createElement("li");
        indicator.appendChild(footerLi);
        footerLi.classList.add("nav-item");
        footerLi.setAttribute('role', 'option');
        var footerAnchor = document.createElement("a");
        footerLi.appendChild(footerAnchor);
        footerAnchor.classList.add("nav-link");
        footerAnchor.classList.add("step");
        footerAnchor.setAttribute("data-id", 'q-' + (parseInt(i) + 1));
        var footerSpan = document.createElement("span");
        footerAnchor.appendChild(footerSpan);
        if (parseInt(i) === 0) {
            footerAnchor.classList.add("active");
        }
        footerAnchor.setAttribute("title", 'page ' + (parseInt(i) + 1));
        footerAnchor.setAttribute('tabindex', '0');
        paginationTabindex++;
        footerSpan.innerHTML = (parseInt(i) + 1);
    }
}
function updateAnswerIndicator(markType) {
    let currentQuestionIndex = parseInt($('.tab-pane').attr('id')) - 1;
    if (markType === 'correct') {
        $('#answer_label').removeClass().addClass('correct');
        $('#Add_solution').children().html(quiz[currentQuestionIndex].ansText);
    } else if (markType === 'wrong') {
        $('#answer_label').removeClass().addClass('not-quite');
        $('#Add_solution').children().html(quiz[currentQuestionIndex].ansText);
    }
    bind_annotLinkEvents();
}
$('#mcq_button').on('mousedown click', function (e) {
    if ((e.type === 'keydown' && e.keyCode == 13) || e.type === 'click') {
        $(".ic-opt-fbk").remove();
        let buttonText = $('#mcq_button').attr('en-text').split(' ')[0].trim().toLocaleLowerCase();
        let currentQuestionIndex = parseInt($('.tab-pane').attr('id')) - 1;
        let question = quiz[currentQuestionIndex]
        if (buttonText === 'check') {
            if(question.type && question.type == "INPUT_TYPE"){
                getInputResult();
            }
            else{
                let answered = $('.Multiple-choice').find('.active');
                getResult(answered);
            } 
        } else if (buttonText === 'next') {
            selectOption = [];
            getNewQuestion(parseInt($('.tab-pane').attr('id')) + 1);
            $('#answer_label').hide();
            $('#Add_solution').hide();
            $('#need_help').show();
        } else if (buttonText === 'try') {
            selectOption = [];
            if(question.type && question.type == "INPUT_TYPE"){
                $(".inputEditBox").attr("contenteditable", true)
                $('.inputEditBox').removeClass('focus-input correct-input').removeClass("wrong-input")
                $('.inputEditBox').html('')
                $('#answer_label').hide();
                $('#Add_solution').hide();
            }
            else{
                $('.focus-input').removeClass().addClass('focus-input');
                $('#answer_label').hide();
                $('#Add_solution').hide();
                $('.nav-link').each(function () {
                    let dataId = 'q-' + parseInt($('.tab-pane').attr('id'));
                    if ($(this).attr('data-id') == dataId) {
                        $(this).removeAttr('data-correct');
                    }
                });
            }

            $('#mcq_button').addClass('disabled');
            $('#questionNumber').focus();
            if(quizInstructions){
                $('#mcq_button').html(quizInstructions.checkAnsBtnText);
                $('#mcq_button').attr('title', quizInstructions.checkAnsBtnText);
            }
            else{
                $('#mcq_button').html('Check Answer');
                $('#mcq_button').attr('title', 'Check Answer');
            }
            $('#mcq_button').attr('en-text','Check Answer');

            // $('#mcq_button').removeAttr('tabindex');
            $('#mcq_button').attr('tabindex', '-1');
            
            question.userAnswered = [];
            question.state = 'notAnswered';
        }
    }
})
window.onload = function () {
    $(".answer-controls").hide()
    setAvailableQuestion();
    getNewQuestion(1);
    $(".answer-controls").show()
    answerIndicatot();
    $('#Add_solution').hide();
    $('#Add_solution').children().html(quiz[0].ansText);
    $('.arrow-left').addClass('disabled')
    bind_annotLinkEvents();

    $("#need_help .instr-text").text(quizInstructions.needHelpText)
    $("#need_help .text-link").text(quizInstructions.showAnsBtnText)
};
$('#show_ans').on('click keydown', (function (e) {
    if ((e.type === 'keydown' && e.keyCode == 13) || e.type === 'click') {
        let currentQuestionIndex = parseInt($('.tab-pane').attr('id')) - 1;
        $('#Add_solution').children().html(quiz[currentQuestionIndex].ansText);
        $('#Add_solution').show();
        $("#show_ans").attr('aria-expanded', true);
        if(quizInstructions){
            $('#mcq_button').html(quizInstructions.tryAgainBtnText);
            $('#mcq_button').attr('title', quizInstructions.tryAgainBtnText);
        }
        else{
            $('#mcq_button').html('Try Again');
            $('#mcq_button').attr('title', 'Try Again');
        }
        $('#mcq_button').attr('en-text','Try Again');
        
        $('#mcq_button').removeClass('disabled');
        // $('#mcq_button').removeAttr('tabindex');
        $('#mcq_button').attr('tabindex', '0');
        $('.focus-input').removeClass('wrong');
        if(quiz[currentQuestionIndex].type && quiz[currentQuestionIndex].type == "INPUT_TYPE"){
            let correctAnswer = quiz[currentQuestionIndex].answer.map(el => el = el);
            correctAnswer = correctAnswer.join(',');
            $(".inputEditBox").html(correctAnswer)
            $(".inputEditBox").removeClass("focus-input wrong-input").addClass("focus-input correct-input")
            setTimeout(() => {
                ariaAnnounce((quizInstructions?quizInstructions.corrAnsPreText:'Correct answer is ') + correctAnswer);
            }, 200);
        }
        else{
            quiz[currentQuestionIndex].answer.forEach(option => {
                $("ul").find(`[data-id='${option}']`).removeClass().addClass("focus-input last-child");
                // ariaAnnounce('Correct answer is' + $(this).text());
            });
            let correctAnswer = quiz[currentQuestionIndex].answer.map(el => el = el + 1);
            correctAnswer = correctAnswer.join(',');
            setTimeout(() => {
                ariaAnnounce((quizInstructions?quizInstructions.corrAnsPreText:'Correct answer is ') + correctAnswer);
            }, 200);
        }

        $(".ic-opt-fbk").remove();
        $('#answer_label').hide();
        bind_annotLinkEvents();
    }
}));
$('.arrow-left').on('click keydown', function (e) {
    if ((e.type === 'keydown' && e.keyCode == 13) || e.type === 'click') {
        let currentQuestionIndex = parseInt($('.tab-pane').attr('id'));
        if (currentQuestionIndex === 1) {
            // getNewQuestion(quiz.length);
            // autoDragPagination(quiz.length);
        } else {
            if (currentQuestionIndex - 1 === 1) {
                $('.arrow-left').addClass('disabled');
            } else {
                $('.arrow-left').removeClass('disabled');
            }
            $('.arrow-right').removeClass('disabled');
            getNewQuestion(currentQuestionIndex - 1);
            autoDragPagination(currentQuestionIndex - 1);
        }
    }
});
$('.arrow-right').on('click keydown', function (e) {
    if ((e.type === 'keydown' && e.keyCode == 13) || e.type === 'click') {
        let currentQuestionIndex = parseInt($('.tab-pane').attr('id'));
        if (currentQuestionIndex === quiz.length) {
            // getNewQuestion(1);
            // autoDragPagination(1);
        } else {
            if (currentQuestionIndex + 1 === quiz.length) {
                $('.arrow-right').addClass('disabled');
            } else {
                $('.arrow-right').removeClass('disabled');
            }
            $('.arrow-left').removeClass('disabled');
            getNewQuestion(currentQuestionIndex + 1);
            autoDragPagination(currentQuestionIndex + 1);
        }
    }
});
function ariaAnnounce(msg) {
    console.log(msg);
    if (msg) {
        $('#ariaMessages').html(msg);
    }
    setTimeout(function () {
        $('#ariaMessages').html("");
    }, 5000);
};

function bind_annotLinkEvents() {
    $('.tab-pane a[href]').on('click', function (e) {
        var annotId = $(this).attr("href");
        if (!annotId.startsWith("#")) {
            annotId = "#" + annotId;
        }
        if ($(annotId).length > 0) {
            document.location.hash = annotId;
        }
        else {
            try {
                if (typeof parent.annotate_from_frame == "function") {
                    parent.annotate_from_frame(annotId);
                }
            }
            catch (err) {
                //$(this).hide();
            }
        }
        //e.stopPropagation();
        e.preventDefault();
    });
}



