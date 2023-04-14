function countTokens(text) {
    const tokens = text
        .trim()
        .split(/\s+/)
        .map(token => {
            if (/^[\u1100-\u11FF\u3130-\u318F\uAC00-\uD7AF]+$/g.test(token)) { // Korean
                return token.length;
            }
            return token.replace(/[^\x00-\x7F]/g, "").length ? 1 : 0;
        });

    const totalTokens = tokens.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    return totalTokens;
}
