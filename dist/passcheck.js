"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Password = void 0;
var Password = /** @class */ (function () {
    function Password(initialPw) {
        //if the passChecker function throws an exception, then the constructor will also throw the same error
        this.passChecker(initialPw);
        this.pw = initialPw;
    }
    Password.prototype.passChecker = function (password) {
        if (password.length < 8) {
            throw new Error("Password must be at least 8 characters long");
        }
    };
    return Password;
}());
exports.Password = Password;
