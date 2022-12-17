import searcherAPI from "~/shared/searcher-api";
import TEST_TEMPLATE from "./test_template.json";

const useUsernameInfo = async (username, template_url) => {
    const uuid = 'random-string';
    //return { data: TEST_TEMPLATE };
    return searcherAPI.post('/username-analyze', {
        string: username, 
        origin_url: template_url,
        uuid,
    });
}

export default {
    useUsernameInfo,
}