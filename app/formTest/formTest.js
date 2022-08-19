export default class FormTest extends crsbinding.classes.ViewBase {
    async connectedCallback(){
        await super.connectedCallback();
        this.firstNameInput = this._element.querySelector('#firstNameInput');
        this.firstNameChangeHandler = this.firstNameChange.bind(this)
        this.firstNameInput.addEventListener('change', this.firstNameChangeHandler);

        this.lastNameInput = this._element.querySelector('#lastNameInput');
        this.lastNameChangeHandler = this.lastNameChange.bind(this)
        this.lastNameInput.addEventListener('change', this.lastNameChangeHandler);

        this.bookingResult = this._element.querySelector('#booking');

        this.ageInput = this._element.querySelector('.age');
        this.ageHandler = this.ageChange.bind(this);
        this.ageInput.addEventListener('change', this.ageHandler);

        this.sliderValue = this._element.querySelector('#range');
        this.slideHandler = this.ageChange.bind(this);
        this.sliderValue.addEventListener('change', this.slideHandler);

        this.ageResult = this._element.querySelector('#age');
    }

    async disconnectedCallback() {
        this.firstNameInput.removeEventListener('change', this.firstNameChangeHandler);
        this.firstNameChangeHandler = null;

        this.lastNameInput.removeEventListener('change', this.lastNameChangeHandler);
        this.lastNameChangeHandler = null;

        this.ageInput.removeEventListener('change', this.ageChangeHandler);
        this.ageHandler = null;

        this.sliderValue.removeEventListener('change', this.slideHandler);
        this.slideHandler = null;
    }

    firstNameChange(event){
        let firstNameResult = this.firstNameInput.value;
        this.updateBooking(); 
    }

    lastNameChange(event){
        let lastNameResult = this.lastNameInput.value;
        this.updateBooking(); 
    }

    updateBooking() {
        this.bookingResult.textContent = `The booking is for ${this.firstNameInput.value} ${this.lastNameInput.value} `;
    }

    ageChange(){
        let sliderAge = this.sliderValue.value;
        let age = this.ageInput.value;

        if(sliderAge > age){
            this.ageResult.textContent = sliderAge; 
        }
        else{
            this.ageResult.textContent = age;
        }

        if(sliderAge  <= 18 && age <= 18){
            this._element.querySelector(".form").style.background = "#0276C2";  
        }
        else if(age > 18 && age <= 36 || sliderAge > 18 && sliderAge <= 36){
            this._element.querySelector(".form").style.background = "#bcc909";
        }
        else{
            this._element.querySelector(".form").style.background = "#b30000";
        }
        }
    }