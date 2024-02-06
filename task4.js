// На HTML-сторінці є 6 чекбоксів. 
// Напишіть скріпт, який після того, 
// як користувач позначив будь-які 3 чекбокси,
// всі чекбокси робить неактивними.

// Завдання виділене вставкою Task4

$(function () {
    $("input[type='checkbox']").click(function(){
        const checkedCount = $("input[type='checkbox']:checked").length;
        if (checkedCount >= 3) {
            $("input[type='checkbox']").prop("disabled", true);
        }
    });
});
