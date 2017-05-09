export const isItBalanced = str => {
    let LEFT_BRACKET    = 0,
        RIGHT_BRACKET   = 0,
        LEFT_CURLY      = 0,
        RIGHT_CURLY     = 0,
        LEFT_PAREN      = 0,
        RIGHT_PAREN     = 0,
        EXIT_WITH_FALSE = false

    const LAST_OPENED = [],
          VALIDATE_CLOSING_WRAPPER = n => LAST_OPENED.shift() === n,
          ALL_OPEN_AND_CLOSED_WRAPPERS_REGEXP = /\(|\)|\{|\}|\[|\]/g,
          OPERATIONS  = {
            '(': () => {
                LAST_OPENED.unshift('LEFT_PAREN')
                LEFT_PAREN++
            },
            '[': () => {
                LAST_OPENED.unshift('LEFT_BRACKET')
                LEFT_BRACKET++
            },
            '{': () => {
                LAST_OPENED.unshift('LEFT_CURLY')
                LEFT_CURLY++
            },
            ')': () => {
                if (!VALIDATE_CLOSING_WRAPPER('LEFT_PAREN')) 
                    EXIT_WITH_FALSE = true
                
                RIGHT_PAREN++
            },
            ']': () => {
                if (!VALIDATE_CLOSING_WRAPPER('LEFT_BRACKET')) 
                    EXIT_WITH_FALSE = true
                
                RIGHT_BRACKET++
            },
            '}': () => {
                if (!VALIDATE_CLOSING_WRAPPER('LEFT_CURLY')) 
                    EXIT_WITH_FALSE = true
                
                RIGHT_CURLY++
            }
          }

    str.replace(
        ALL_OPEN_AND_CLOSED_WRAPPERS_REGEXP, 
        e => EXIT_WITH_FALSE || OPERATIONS[e]()
    )

    return EXIT_WITH_FALSE ? false :
           LEFT_CURLY   === RIGHT_CURLY   &&
           LEFT_BRACKET === RIGHT_BRACKET &&
           LEFT_PAREN   === RIGHT_PAREN
}