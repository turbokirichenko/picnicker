export const parseParams = (path, result) => {
    let i=0, out={};
    let matches = result.pattern.exec(path);
    while (i < result.keys.length) {
        out[ result.keys[i] ] = matches[++i] || null;
    }
    return out;
}