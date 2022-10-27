import { OBJECT_TYPE } from './types';
import { encodeBase64, decodeBase64 } from "~/shared/utils/base64";
export const createDataSnap = (data = {}, v = "0") => {
    try {
        if (!data) throw new Error("data is undefined!");
        const gateway = OBJECT_TYPE.map((key) => {
            if (key in data) return data[key];
            throw new Error("something went wrong!");
        });
        // { v: "version", d: [] } //dataobject format
        const dataObject = JSON.stringify({ v, d: gateway });
        return encodeBase64(dataObject);
    } catch (err) {
        throw err;
    }
};
export const decodeDataSnap = (hash = "") => {
    try {
        if (!hash) throw new Error("hash is empty!");
        const { v, d } = JSON.parse(decodeBase64(hash));
        // { v: "version", d: [] } //dataobject format
        let data = {};
        OBJECT_TYPE.map((key, i) => {
            data[key] = d[i];
        });
        return [v, data];
    } catch (err) {
        return ["0", {}];
    }
}