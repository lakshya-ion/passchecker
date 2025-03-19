"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var passcheck_1 = require("../src/passcheck");
var passChecker = function (pass) {
    passcheck_1.Password.passChecker(pass);
};
describe("Passchecker", function () {
    it("The password should be 8 characters long", function () {
        var testArr = [
            {
                password: "$Ab12e",
                expected: "Password must be at least 8 characters long",
            },
            {
                password: "$Yz12",
                expected: "Password must be at least 8 characters long",
            },
        ];
        testArr.forEach(function (pass) {
            expect(function () { return passChecker(pass.password); }).toThrow(new RegExp("^".concat(pass.expected, "$")));
        });
    });
    it("Should return error if the password doesn't have 2 numbers", function () {
        var testArr = [
            {
                password: "A$bcdefgh",
                expected: "Password must contain at least 2 numbers",
            },
            {
                password: "Lm$opqr1t",
                expected: "Password must contain at least 2 numbers",
            },
        ];
        testArr.forEach(function (pass) {
            expect(function () { return passChecker(pass.password); }).toThrow(new RegExp("^".concat(pass.expected, "$")));
        });
    });
    it("should return error in case of a capital letter not being present", function () {
        var testArr = [
            {
                password: "abcd$1234",
                expected: "Password must contain at least 1 capital letter",
            },
            {
                password: "lmr1$234",
                expected: "Password must contain at least 1 capital letter",
            },
        ];
        testArr.forEach(function (pass) {
            expect(function () { return passChecker(pass.password); }).toThrow(new RegExp("^".concat(pass.expected, "$")));
        });
    });
    it("should return error in case of a special character not being present", function () {
        var testArr = [
            {
                password: "Abcde1234",
                expected: "Password must contain at least 1 special character",
            },
            {
                password: "Lmr1t234",
                expected: "Password must contain at least 1 special character",
            },
        ];
        testArr.forEach(function (pass) {
            expect(function () { return passChecker(pass.password); }).toThrow(new RegExp("^".concat(pass.expected, "$")));
        });
    });
    it("should return pass in case of a valid password", function () {
        var testArr = [
            { password: "1aksHya%%4", expected: "" },
            { password: "Ash@123$$", expected: "" },
        ];
        testArr.forEach(function (pass) {
            expect(function () { return passChecker(pass.password); }).not.toThrow();
        });
    });
    it("Should return multiple errors if the password doesn't have 2 numbers and is shorter than 8 characters", function () {
        var testArr = [
            {
                password: "Abcdefg$",
                expected: "Password must contain at least 2 numbers",
            },
            {
                password: "Abcdef12",
                expected: "Password must contain at least 1 special character",
            },
            {
                password: "abcdef12$",
                expected: "Password must contain at least 1 capital letter",
            },
            {
                password: "Ab1$",
                expected: "Password must be at least 8 characters long\nPassword must contain at least 2 numbers",
            },
            {
                password: "abcdefg$",
                expected: "Password must contain at least 2 numbers\nPassword must contain at least 1 capital letter",
            },
            {
                password: "abcdef12",
                expected: "Password must contain at least 1 capital letter\nPassword must contain at least 1 special character",
            },
            {
                password: "Abcde12",
                expected: "Password must be at least 8 characters long\nPassword must contain at least 1 special character",
            },
            {
                password: "Abc1$",
                expected: "Password must be at least 8 characters long\nPassword must contain at least 2 numbers",
            },
            {
                password: "abc12$",
                expected: "Password must be at least 8 characters long\nPassword must contain at least 1 capital letter",
            },
            {
                password: "Abcde$",
                expected: "Password must be at least 8 characters long\nPassword must contain at least 2 numbers",
            },
            {
                password: "abc12",
                expected: "Password must be at least 8 characters long\nPassword must contain at least 1 capital letter\nPassword must contain at least 1 special character",
            },
            {
                password: "Abc$",
                expected: "Password must be at least 8 characters long\nPassword must contain at least 2 numbers",
            },
            {
                password: "abc1$",
                expected: "Password must be at least 8 characters long\nPassword must contain at least 2 numbers\nPassword must contain at least 1 capital letter",
            },
            {
                password: "Abc12",
                expected: "Password must be at least 8 characters long\nPassword must contain at least 1 special character",
            },
            {
                password: "abc$",
                expected: "Password must be at least 8 characters long\nPassword must contain at least 2 numbers\nPassword must contain at least 1 capital letter",
            },
        ];
        testArr.forEach(function (pass) {
            expect(function () { return passChecker(pass.password); }).toThrow(new RegExp("^".concat(pass.expected, "$")));
        });
    });
});
