const validation = (obj, val) => {
    switch (obj) {
        case 'name':
            if (val.length < 2) {
                return { valid: false, text: <p>Name should have at least 2 characters</p> }
            } else {
                return { valid: true, text: null };
            }
        case "lastName":
            if (val.length < 2) {
                return { valid: false, text: <p>Lastname should have at least 2 characters</p> }
            } else {
                return { valid: true, text: null };
            }
        case "email":
            if (!/^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val)) {
                return { valid: false, text: <p>Invalid email</p> }
            } else {
                return { valid: true, text: null };
            }
        case "personas":
            if (val.length === 0 || val < 10 || val > 50) {
                return { valid: false, text: <p>mínimo: 10  máximo: 50</p> }
            } else {
                return { valid: true, text: null };
            }
        default:
            return null;
    }
}

export default validation;