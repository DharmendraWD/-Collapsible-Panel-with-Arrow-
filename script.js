document.addEventListener('DOMContentLoaded', function () {
    var questions = document.querySelectorAll('.question');

    questions.forEach(function (question) {
        question.addEventListener('click', function () {
            var answer = question.nextElementSibling;

            // Collapse all other answers
            questions.forEach(function (otherQuestion) {
                if (otherQuestion !== question) {
                    var otherAnswer = otherQuestion.nextElementSibling;
                    otherAnswer.classList.remove('show');
                    otherQuestion.querySelector('.arrow').style.transform = 'rotate(0deg) translateY(-50%)';
                }
            });

            // Toggle the visibility of the clicked answer
            if (answer.classList.contains('show')) {
                answer.classList.remove('show');
                question.querySelector('.arrow').style.transform = 'rotate(0deg) translateY(-50%)';
            } else {
                answer.classList.add('show');
                question.querySelector('.arrow').style.transform = 'rotate(90deg) translateY(-50%)';
            }
        });
    });
});
