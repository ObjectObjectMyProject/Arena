import {validation} from '../../validation/validation';
import {checkValidation} from '../../validation/validation';


export default {
    name: 'loginModal',
    data: function() {
        return {

            loginName: {
                text: '',
                error: false,
                init: false
            },
            loginPassword: {
                text: '',
                error: false,
                init: false
            }
        }
    },
    methods: {

        checkName:  function() {
            if(this.loginName.text.length > 2){
                console.dir(checkValidation.isValid(validation.mail, this.loginName.text));
            }
        }

    }
}