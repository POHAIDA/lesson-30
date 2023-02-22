function validateEmail(email) {
    if (email == '') return false;
    if (typeof email != 'string') return false;

    if (!email.split('').includes('@') || email.split('')[0] === '@') return false
    
    if (email.length <= 5) return false;
    if (email.includes('@') == 1) {
        return false
    }
    let email1 = email.split('');
    if (email.includes('.@')||email1[1] == '.') {
        return false
    }

}


