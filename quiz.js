document.addEventListener('DOMContentLoaded', ()=> {
    let score = 0;
    const correct_list = document.querySelectorAll('.correct');
    const incorrect_list = document.querySelectorAll('.incorrect');
    document.querySelector('#question_one').onclick = () => {
        const q1 = document.querySelector('input[name=greenhouse_gases]:checked').value;
        if (q1 === 'argon') {
            score += 25;
            correct_list[0].style.display = 'inline';
            incorrect_list[0].style.display = 'none';
            document.querySelector('#question_one').disabled = true;
        } else {
            incorrect_list[0].style.display = 'inline';
        }
        document.querySelector('h3').innerHTML = `Your score: ${score}`;
    }
    document.querySelector('#question_two').onclick = () => {
        const q2 = document.querySelector('input[name=human_activities]:checked').value;
        if (q2 === 'ev') {
            score += 25;
            correct_list[1].style.display = 'inline';
            incorrect_list[1].style.display = 'none';
            document.querySelector('#question_two').disabled = true;
        } else {
            incorrect_list[1].style.display = 'inline';
        }
        document.querySelector('h3').innerHTML = `Your score: ${score}`;
    }
    document.querySelector('#question_three').onclick = () => {
        const q3 = document.querySelectorAll('.effects');
        if (q3[0].checked && q3[1].checked && q3[2].checked && !q3[3].checked) {
            score += 25;
            correct_list[2].style.display = 'inline';
            incorrect_list[2].style.display = 'none';
            document.querySelector('#question_three').disabled = true;
        } else {
            incorrect_list[2].style.display = 'inline';
        }
        document.querySelector('h3').innerHTML = `Your score: ${score}`;
    }
    document.querySelector('#question_four').onclick = () => {
        const q4 = document.querySelectorAll('.responses');
        if (q4[0].checked && !q4[1].checked && !q4[2].checked && q4[3].checked) {
            score += 25;
            correct_list[3].style.display = 'inline';
            incorrect_list[3].style.display = 'none';
            document.querySelector('#question_four').disabled = true;
        } else {
            incorrect_list[3].style.display = 'inline';
        }
        document.querySelector('h3').innerHTML = `Your score: ${score}`;
    }
});