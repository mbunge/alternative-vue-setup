/**
 * Is called an returns all given arguments
 * Used as ga wrapper
 * @returns {Arguments}
 */
export default function(...args){
    console.log('dummy', args);
    return args;
}
