function interpret(command: string): string {
    const HACK_CHECK = [')', 'a'] // () || (al)
    let result: string = ''

    for (let i = 0; i < command.length; i++){
        const currentCommand = command[i]
        switch (currentCommand) {
            case 'G':
                result += currentCommand;
                break;
            case '(':
                const typeCommand = HACK_CHECK.indexOf(command[i+1])
                result += typeCommand ? 'al' : 'o';
                i += typeCommand ? 2 : 1;
                break;
            default:
                break;
        }
    }

    return result
}

/*

function interpret(command: string): string {
    return command.replaceAll("()", "o").replaceAll("(al)", "al")
};

*/
