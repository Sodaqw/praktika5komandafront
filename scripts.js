const scaleBlocks = document.querySelectorAll('.scale-block');

scaleBlocks.forEach(block => {
    block.addEventListener('click', () => {
        const value = block.getAttribute('data-value');

        scaleBlocks.forEach((b, i) => {
            if (i < value) {
                b.classList.add('selected');
            } else {
                b.classList.remove('selected');
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll(".option-btn");

    buttons.forEach(button => {
        button.addEventListener("click", function() {
            // Убираем активный класс со всех кнопок
            buttons.forEach(btn => btn.classList.remove("active"));
            // Добавляем активный класс только текущей кнопке
            this.classList.add("active");
        });
    });
});


const programButtons = document.querySelectorAll('.program-button');

programButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Удаляем активный класс у всех кнопок
        programButtons.forEach(btn => btn.classList.remove('active'));

        // Добавляем активный класс к нажатой кнопке
        button.classList.add('active');
    });
});

const buttons = document.querySelectorAll('.program-button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        // Удалить класс 'active' у всех кнопок
        buttons.forEach(btn => btn.classList.remove('active'));

        // Добавить класс 'active' к нажатой кнопке
        button.classList.add('active');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // Получаем все кнопки с классом yes-no
    const buttons = document.querySelectorAll('.yes-no');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            // Получаем номер вопроса из атрибута data-question
            const questionNumber = button.getAttribute('data-question');

            // Сбрасываем состояние для кнопок этого вопроса
            resetButtons(questionNumber);

            // Добавляем класс активности к нажатой кнопке
            button.classList.add('active');
        });
    });

    // Функция сброса состояния кнопок
    function resetButtons(questionNumber) {
        buttons.forEach(btn => {
            if (btn.getAttribute('data-question') === questionNumber) {
                btn.classList.remove('active');
            }
        });
    }
});

// Функция для установки рейтинга
function setRating(stars, rating) {
    stars.forEach((star, index) => {
        if (index < rating) {
            star.classList.add('selected');
        } else {
            star.classList.remove('selected');
        }
    });
}

// Поиск всех рейтинговых контейнеров
document.querySelectorAll('.rating').forEach(ratingContainer => {
    const stars = ratingContainer.querySelectorAll('.star');

    // Наведение мыши на звезду (меняет визуально, но не сохраняет рейтинг)
    stars.forEach(star => {
        star.addEventListener('mouseenter', () => {
            const hoverValue = star.getAttribute('data-value');
            setRating(stars, hoverValue);
        });

        // Возвращаемся к текущему рейтингу (или пустому состоянию) после убирания мыши
        star.addEventListener('mouseleave', () => {
            const currentRating = ratingContainer.getAttribute('data-rating') || 0;
            setRating(stars, currentRating);
        });

        // Клик по звезде для установки рейтинга
        star.addEventListener('click', () => {
            const selectedRating = star.getAttribute('data-value');
            ratingContainer.setAttribute('data-rating', selectedRating);
            setRating(stars, selectedRating);
        });
    });
});




const understandCheckboxes = document.querySelectorAll('.understand');
const masterCheckboxes = document.querySelectorAll('.master');

understandCheckboxes.forEach((checkbox, index) => {
    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            masterCheckboxes[index].checked = false;
        }
    });
});

masterCheckboxes.forEach((checkbox, index) => {
    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            understandCheckboxes[index].checked = false;
        }
    });
});

document.getElementById("scrollButton").addEventListener("click", function() {
    const block = document.getElementById("block2");
    block.scrollIntoView({ behavior: "smooth" });
});