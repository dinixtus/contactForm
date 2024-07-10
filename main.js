document.addEventListener('DOMContentLoaded', (event) => {
    var mname = document.getElementById('mname'),
        lname = document.getElementById('lname'),
        email = document.getElementById('email'),
        textarea = document.getElementById('textarea'),
        checkbox = document.getElementById('consent'),
        query = document.getElementsByName('query')
        button = document.getElementById('sendButton'),
        errorText = document.getElementsByClassName('error-text'),
        ownAlert = document.getElementById('ownAlert'),
        regex = /^[A-Za-zА-Яа-яЁё]+$/;

    button.addEventListener('click', function(event) {
        event.preventDefault(); // Предотвращение перезагрузки страницы

        if (mname.value.trim() === '' || !regex.test(mname.value.trim())) {
            mname.classList.add('error');
            errorText[0].style.display = 'block'; // Обращаемся к первому элементу массива errorText
        } else {
            mname.classList.remove('error');
            errorText[0].style.display = 'none';
        }


        if (lname.value.trim() === '' || !regex.test(lname.value.trim())) {
            lname.classList.add('error');
            errorText[1].style.display = 'block'; // Обращаемся ко второму элементу массива errorText
        } else {
            lname.classList.remove('error');
            errorText[1].style.display = 'none';
        }


        if (email.value.trim() === '') {
            email.classList.add('error');
            errorText[2].style.display = 'block'; // Обращаемся ко второму элементу массива errorText
        } else if (!email.value.includes('@')) {
            email.classList.add('error');
            errorText[3].style.display = 'block';
            errorText[2].style.display = 'none';
        } else {
            email.classList.remove('error');
            errorText[2].style.display = 'none';
            errorText[3].style.display = 'none';
        }

        var radioValid = false;
        for (var i = 0; i < query.length; i++) {
            if (query[i].checked) {
                radioValid = true;
                break;
            }
        }

        if (!radioValid) {
            errorText[4].style.display = 'block';
        } else {
            errorText[4].style.display = 'none';
        }


        if (textarea.value.trim() === '') {
            textarea.style.borderColor = 'hsl(0, 66%, 54%)'; // Красная рамка
            errorText[5].style.display = 'block'; // Показать сообщение об ошибке
        } else {
            errorText[5].style.display = 'none';
            textarea.style.borderColor = 'hsl(186, 15%, 59%)';
        }

        if (!checkbox.checked) {
            errorText[6].style.display = 'block';
        } else {
            errorText[6].style.display = 'none';
        }


        // Проверка обоих полей на корректность ввода
        if (mname.value.trim() !== '' && regex.test(mname.value.trim()) &&
            lname.value.trim() !== '' && regex.test(lname.value.trim()) &&
            email.value.trim() !== '' && email.value.includes('@') &&
            textarea.value.trim() !== '' && 
            radioValid &&
            checkbox.checked) {
                mname.value = '',
                lname.value = '',
                email.value = '',
                textarea.value = '';
                for (var i = 0; i < query.length; i++) {
                    query[i].checked = false;
                };
                checkbox.checked = false,
                ownAlert.style.display = 'block'
        };
        window.addEventListener('click', function(event) {
            if (event.target == ownAlert) {
                ownAlert.style.display = 'none';
            }
        });
    });
});
