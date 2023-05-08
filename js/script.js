var st = false
let ShowLoginPas = document.querySelector('#showlogin')
let ClosLoginPas = document.querySelector('#closlogin')

function login() {
    if (st) {
        document.querySelector('#password').setAttribute('type', 'password');
        ShowLoginPas.classList.add('d-none')
        ClosLoginPas.classList.remove('d-none')
        st = false
    } else {
        document.querySelector('#password').setAttribute('type', 'text');
        ClosLoginPas.classList.add('d-none')
        ShowLoginPas.classList.remove('d-none')
        st = true
    }
}
