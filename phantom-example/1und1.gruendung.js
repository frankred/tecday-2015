var webpage = require('webpage');
var page = webpage.create();

var url = 'https://de.wikipedia.org/wiki/1%261_Internet';

page.open(url, function (status) {

    if (status === 'success') {
        var year = page.evaluate(function () {
            return document.querySelector('[title*=Gründung]').parentNode.parentNode.childNodes[3].innerText;
        });

        console.log('Die 1&1 wurde gegründet ' + year);
    }

    //Page is loaded!
    phantom.exit();
});