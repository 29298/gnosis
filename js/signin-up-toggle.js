function signinButton() {
    document.querySelector('#signin-btn').classList.add('open');
    document.querySelector('#signup-btn').classList.remove('open');
    document.querySelector('#signin-area').classList.add('open');
    document.querySelector('#signup-area').classList.remove('open');
    action();
}

function signupButton() {
    document.querySelector('#signup-btn').classList.add('open');
    document.querySelector('#signin-btn').classList.remove('open');
    document.querySelector('#signup-area').classList.add('open');
    document.querySelector('#signin-area').classList.remove('open');
    action();
}