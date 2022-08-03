export default class FormTest extends crsbinding.classes.ViewBase {
    async connectedCallback() {
        // this.innerHTML = await fetch(import.meta.url.replace(".js", ".html")).then(result => result.text());
        await super.connectedCallback();
        this.firstName = this._element.querySelector('#firstname').value;
        this.first_input = this._element.querySelector('#firstInput');


        // this.lastName = this._element.querySelector('#lastname').value;
        // this.last_input = this._element.querySelector('#lastInput');


        // this.slider = this._element.querySelector("#range");
        // this.output = this._element.querySelector("#slideVal");

        this.firstName.addEventListener("change" ,  function(event){
            if (this.firstName != null) {
            this.first_input.textContent = this.firstName.value;
            console.log(this.firstName.value);
            }
            else{
                console.log("not working");
            }
        });

        this.first_input.addEventListener('change', (event) => {
            this.first_input.textContent = this.firstName;
        })
        }



        disconnectedCallback(){
            this.first_input.removeEventListener('change', this.first_input);
            this.first_input = null;

            this.firstName.removeEventListener('change', this.firstName);
            this.firstName = null;
        }

        // async updateName(){
        //     if (this.firstName != null) {
        //         this.first_input.textContent = this.firstName.value;
        //         console.log(this.firstName.value);
        //         }
        //         else{
        //             console.log("not working");
        //         }
        // }
}
