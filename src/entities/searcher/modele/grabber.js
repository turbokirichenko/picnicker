import searcherAPI from "~/shared/searcher-api";

const useUsernameInfo = async (username, template_url) => {
    const uuid = 'random-string';
    return searcherAPI.post('/username-analyze', {
        string: username, 
        origin_url: template_url,
        uuid,
    });
}

export default {
    useUsernameInfo,
}