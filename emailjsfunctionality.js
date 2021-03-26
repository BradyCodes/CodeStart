(function() {
    emailjs.init("INSERT YOUR OWN");
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
        emailjs.send('SERVICEID', 'TEMPLATEID', templateParams, 'USERID')
            .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            setTimeout(() => {
                document.location.href = "redir.html";
            }, 1000);
            }, function(error) {
            console.log('FAILED...', error);
            document.write('Something went wrong... Refresh the page and try again - sorry for the inconvenience!')
        });
       };
       rsend();
    };
