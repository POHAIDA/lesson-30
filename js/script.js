function validateEmail(email) {
    if (email == '') return false;
    if (typeof email != 'string') return false;

    if (!email.split('').includes('@') || email.split('')[0] === '@') return false
    
    if (email.length <= 5) return false;
    if (email.includes('@') == 1) {
        return false
    }
    
    if (email.indexOf('.') < email.indexOf('@')) {
        return false
    }
}


