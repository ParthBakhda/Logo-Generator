const inquirer = require('inquirer');
const svgCaptcha = require('svg-captcha');
const fs = require('fs');

inquirer
  .prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter up to three characters for the logo:',
      validate: function (value) {
        var regex = /^[A-Za-z0-9]{1,3}$/;
        if (value.length > 3) {
          return 'Please enter up to three characters.';
        } else if (!regex.test(value)) {
          return 'Please enter only letters and numbers.';
        } else {
          return true;
        }
      },
    },
    {
      type: 'input',
      name: 'textColor',
      message:
        'Enter a color keyword (e.g. "red") or a hexadecimal color code (e.g. "#FF0000") for the text:',
      validate: function (value) {
        var regex = /^#?[0-9A-Fa-f]{6}$/;
        if (!value.match(/^[a-zA-Z]+$/) && !regex.test(value)) {
          return 'Please enter a valid color keyword or a hexadecimal color code.';
        } else {
          return true;
        }
      },
    },
    {
    