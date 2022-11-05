import { OBJECT_TYPE } from './types';
import { encodeBase64, decodeBase64 } from "~/shared/utils/base64";
export const createDataSnap = (data = {}, layoutID = "0") => {
    try {
        if (!data) throw new Error("data is undefined!");
        const gateway = OBJECT_TYPE.map((key) => {
            if (key in data) return data[key];
            throw new Error("something went wrong!");
        });
        // { v: "layout-id", d: [] } //dataobject format
        const dataObject = JSON.stringify({ v: layoutID, d: gateway });
        return encodeBase64(dataObject);
    } catch (err) {
        throw err;
    }
};
export const decodeDataSnap = (hash = "") => {
    try {
        if (!hash) throw new Error("hash is empty!");
        const { v, d } = JSON.parse(decodeBase64(hash));
        // { v: "layout-id", d: [] } //dataobject format
        let data = {};
        OBJECT_TYPE.map((key, i) => {
            data[key] = d[i];
        });
        return [v, data];
    } catch (err) {
        return ["0", {}];
    }
}