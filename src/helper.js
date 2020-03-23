export const getYearDifference = year =>{
    return new Date().getFullYear()-year;
}

export const calculateMake = make =>{
    
    let increment;
    switch(make){
        case 'european':
            increment = 1.30;
            break;
        case 'american':
            increment = 1.15;
            break;
        case 'asian':
            increment = 1.05;
            break;
        default:
            break;
    }

    return increment
}

export const getPlan = plan =>{
    return ( plan === 'basic' ) ? 1.20 : 1.50;
}

export const FirstLetterCapital = text => {
    return text.charAt(0).toUpperCase() + text.slice(1);
}