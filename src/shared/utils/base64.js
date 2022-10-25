function toBinary(string) {
    const codeUnits = Uint16Array.from(
        { length: string.length },
        (element, index) => string.charCodeAt(index)
    );
    const charCodes = new Uint8Array(codeUnits.buffer);

    let result = "";
    charCodes.forEach((char) => {
        result += String.fromCharCode(char);
    });
    return result;
}

function fromBinary(binary) {
    const bytes = Uint8Array.from({ length: binary.length }, (element, index) =>
        binary.charCodeAt(index)
    );
    const charCodes = new Uint16Array(bytes.buffer);

    let result = "";
    charCodes.forEach((char) => {
        result += String.fromCharCode(char);
    });
    return result;
}

export const encodeBase64 = (string) => {
    try {
        return window.btoa(toBinary(string));
    } catch (err) {
        console.log(err);
    }
}

export const decodeBase64 = (hash) => {
    try {
        return fromBinary(window.atob(hash));
    } catch (err) {
        console.log(err);
    }
}