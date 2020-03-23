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
        case 'asian':
            increment = 1.05;
        default:
            break;
    }

    return increment
}

export const getPlan = plan =>{
    return ( plan === 'basic' ) ? 1.20 : 1.50;
}