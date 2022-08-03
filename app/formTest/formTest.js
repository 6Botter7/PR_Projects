export default class FormTest extends crsbinding.classes.ViewBase {
    async connectedCallback() {
        // this.innerHTML = await fetch(import.meta.url.replace(".js", ".html")).then(result => result.text());
        await super.connectedCallback();
        this.firstName = this._element.querySelector('#firstname');
        this.first_input = this._element.querySelector('#firstInput');


        this.lastName = this._element.querySelector('#lastname');
        this.last_input = this._element.querySelector('#lastInput');

        this.booking = this._element.querySelector('#booking');

        this.updateBooking = this.updateBooking.bind(this);


        this.slider = this._element.querySelector("#range");
        this.output = this._element.querySelector("#slideVal");



        this.firstName.addEventListener('change', ()=>{
            if (this.firstName != null) {
            this.first_input.textContent = this.firstName.value;
            console.log(this.firstName.value);
            }
            else{
                console.log("not working");
            }
        });

        this.lastName.addEventListener('change', ()=>{
            if (this.lastName != null) {
            this.last_input.textContent = this.lastName.value;
            console.log(this.lastName.value);
            }
            else{
                console.log("not working");
            }
        });

        // this.booking.addEventListener('change', ()=>{
        //     if (this.booking.innerHTML != null) {
        //         console.log("Helllloooooo");
        //     this.booking.textContent = `The booking is for ${this.firstName}  ${this.lastName.value} `;
        //     console.log(this.booking.value);
        //     }
        //     else{
        //          console.log("not working");
        //      }

        //     // `The booking is for ${this.firstName}  ${this.lastName.value} `

        //     // const result = this._element.querySelector('.result');
        //     // result.textContent = `You like ${this.firstName.value}`
        // });

        // this.slider.addEventListener('change', ()=>{
        //     if (this.slider != null) {
        //     this.output.textContent = this.slider.value;
        //     console.log(this.slider.value);
        //     }
        //     else{
        //         console.log("not working");
        //     }
        // });

        this.slider.addEventListener('change', this.updateBooking());

        // this.slider.oninput = function(){
        //     this.output.textContent = this.slider.value;
        // }

        }



        disconnectedCallback(){
            // this.first_input.removeEventListener('change', this.first_input);
            // this.first_input = null;

            this.firstName.removeEventListener('change', this.firstName);
            this.firstName = null;

            this.lastName.removeEventListener('change', this.lastName);
            this.lastName = null;

            this.booking.removeEventListener('change', this.booking);
            this.booking = null;

            this.slider.removeEventListener('change', this.slider);
            this.slider = null;
        }

        async updateBooking(event){
            if (this.booking.innerHTML != null) {
                // console.log("Helllloooooo");
                const result = `The booking is for ${this.first_input.value}  ${this.lastName.value} `;
                // const result = "this is a booking for";
                this.booking.textContent = result;
                console.log(this.booking.value);
            }
            else{
                 console.log("not working");
             }
        }
}
