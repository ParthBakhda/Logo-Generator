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
