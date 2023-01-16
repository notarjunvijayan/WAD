const validate =()=>{
    var user = document.getElementById("usr-input").value
    var pw = document.getElementById('pw-input').value
    var name = document.getElementById('name-input').value
    var zip = document.getElementById('zip-input').value
    var mail = document.getElementById('email-input').value
    var country = document.getElementById('country').value
    var english = document.getElementById('english').checked
    var non = document.getElementById('non-english').checked
    let flag = 0

    const usr =()=>{
        if(user === '' || user.length<= 5 || user.length >= 12){
            document.getElementById('valid-usr').innerHTML = '<p>User Id should be between 5-12 charecters</p>'
            flag = 1
        }
        else{
            flag = 0
        }
    }
    const passw =()=>{
        if( pw=== '' || pw.length <=7 || pw.length >=12){
            document.getElementById('valid-pw').innerHTML = '<p>Password should be between 7-12 charecters</p>'
            flag = 1
        }
    }
    const nme =()=>{
        if( name=== '' || /\d/.test(name)){
            document.getElementById('valid-name').innerHTML = '<p>Name is required and alphabets only</p>'
            flag = 1
        }
        else{
            flag = 0
        }
    }
    const zipval = ()=>{
        if(zip === '' || !(/\d/.test(zip))){
            document.getElementById('valid-zip').innerHTML = '<p>Enter valid zip</p>'
            flag = 1
        }
        else{
            flag = 0
        }
    }
    const countryvalid =()=>{
        if(country === 'Select country'){
            document.getElementById('valid-country').innerHTML = '<p>Country Required</p>'
            flag = 1
        }
    }
    const email =()=>{
        if(mail === ''){
            document.getElementById('valid-mail').innerHTML = '<p>Email ID Required</p>'
            flag = 1
        }
        else{
            var len = mail.length
            var i,j
            var fl = false
            for(i=0;i<len;i++){
               if(mail.charAt(i) === '@'){
                    for(j=i+1;j<len;j++){
                        if(mail.charAt(j) === '.'){
                            fl = true
                        }
                    }
               }
            }
            if(fl === true){
                flag = 0
            }
            else{
                document.getElementById('valid-mail').innerHTML = '<p>Email ID Required</p>'
                flag = 1
            }
        }
    }
    const gender =()=>{
        var sexm = document.getElementById('male')
        var sexf = document.getElementById('female')
        var male = sexm.checked
        var female = sexf.checked
        if(male === false && female === false){
            document.getElementById('valid-gender').innerHTML = '<p>Gender Required</p>'
            flag = 1
        }
        else{
            flag = 0
        }
    }

    const language=()=>{
        if(english === false && non === false){
            document.getElementById('valid-lang').innerHTML = '<p>Language Required</p>'
            flag = 1
        }
        else{
            flag = 0
        }
    }
    passw(pw);
    usr(user);
    nme(name);
    zipval(zip);
    email(mail);
    gender();
    countryvalid(country);
    language()
    if(flag === 1){
        return false;
    }
    else{
        alert("Submission Success")
        return true;
    }
}