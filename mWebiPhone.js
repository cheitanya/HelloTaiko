const { openBrowser, goto, click, textBox, focus, into, write, text, closeBrowser } = require('taiko');
const {strict: assert} = require("assert");
(async () => {
    try {
        var val = Math.floor(1000 + Math.random() * 9000);
        console.log(val);
        await openBrowser();
        await goto("http://localhost:3000/");
        await click("LOGIN");
        await click("Create a new account");
        await focus(textBox('email'));
        await write('testdata'+val+'@gmail.com',into(textBox('email')));
        await write('testdata1',into(textBox('password')));
        await write('testdata1',into(textBox('password Confirmation')));
        await click("Create");
        await assert.ok(await text('Welcome! You have signed up successfully.').exists());
    } catch (error) {
        console.error(error);
    } finally {
        await closeBrowser();
    }
})();
