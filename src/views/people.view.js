class PeopleView {
    constructor() {
        this.button = document.getElementById('clickButton');
    }

    bindButton(handlerButton) {
        this.button.addEventListener('click', _ => handlerButton());
    }
}