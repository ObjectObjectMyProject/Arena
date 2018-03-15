export const validation = {
    mail: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    alphanumeric: /^[a-z0-9]+$/i
};

export const checkValidation = {
    isValid: function (reg, value) {
        return reg.test(value);
    }
};