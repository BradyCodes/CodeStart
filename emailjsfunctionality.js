(function() {
    emailjs.init("user_9GIoGw8r0z8WrEqHbdUkV");
})();


    function send(){
    
        var templateParams = {
            parents_name: document.getElementById('pName').value,
            childs_name: document.getElementById('cName').value,
            age: document.getElementById('age').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            message: 'Good Luck! (from Brady, of course❤️)',
        };
        
        function rsend(){
        //sends to person registering
        emailjs.send('service_8y5p22k', 'template_hbtj6yf', templateParams, 'user_9GIoGw8r0z8WrEqHbdUkV')
            .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            }, function(error) {
            console.log('FAILED...', error);
        });
       };
       //sends to me
        emailjs.send('service_8y5p22k', 'template_g86a9wo', templateParams, 'user_9GIoGw8r0z8WrEqHbdUkV')
            .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            //setTimeout(() => {
            //    document.location.href = "redir.html";
            //}, 1000);
            }, function(error) {
            console.log('FAILED...', error);
            document.write('Something went wrong... Refresh the page and try again - sorry for the inconvenience!')
        });
        rsend();
    };