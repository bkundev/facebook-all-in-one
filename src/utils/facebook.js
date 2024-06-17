import lodash_get from 'lodash/get';
import { sendMessage } from './extesion';

// #region helper
export function wrapGraphQlParams(params = {}) {
    const formBody = [];
    for (const property in params) {
        const encodedKey = encodeURIComponent(property);
        const value =
            typeof params[property] === 'string'
                ? params[property]
                : JSON.stringify(params[property]);
        const encodedValue = encodeURIComponent(value);
        formBody.push(encodedKey + '=' + encodedValue);
    }
    return formBody.join('&');
}

export function fetchGraphQl(params = {}) {
    let form = '';
    if (typeof params === 'string') form = '&q=' + encodeURIComponent(params);
    else form = wrapGraphQlParams(params);

    return sendMessage({
        action: 'request_graphql',
        query: form,
    });
}
// #endregion

export function getUserAvatarFromUid(uid) {
    return `https://graph.facebook.com/${uid}/picture?height=500&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`;
}

export async function getEntityInfoFromId(entityID, context = 'DEFAULT') {
    let res = await fetchGraphQl({
        fb_api_req_friendly_name: 'CometHovercardQueryRendererQuery',
        variables: {
            actionBarRenderLocation: 'WWW_COMET_HOVERCARD',
            context: context,
            entityID: entityID,
            includeTdaInfo: true,
            scale: 1,
        },
        doc_id: '7257793420991802',
    });

    return JSON.parse(res);
}

export async function getUserInfoFromUid(uid) {
    const text = await fetchGraphQl({
        fb_api_req_friendly_name: 'ProfileCometHeaderQuery',
        doc_id: '4159355184147969',
        variables: {
            userID: uid,
            shouldDeferProfilePic: false,
            useVNextHeader: false,
            scale: 1.5,
        },
    });
    const json = JSON.parse('[' + text.split('\n').join(',') + ']');
    console.log(json);

    return {
        uid: uid,
        gender: lodash_get(json, '0.data.user.gender', ''),
        name: lodash_get(json, '0.data.user.name', ''),
        alternateName: lodash_get(json, '0.data.user.alternate_name', ''),
        avatar: {
            id: lodash_get(json, '0.data.user.profile_photo.id', ''),
            link: lodash_get(json, '0.data.user.profile_photo.url', ''),
            uri: lodash_get(json, '0.data.user.profilePicLarge.uri', ''),
        },
        cover: {
            id: lodash_get(json, '0.data.user.cover_photo.photo.id', ''),
            link: lodash_get(json, '0.data.user.cover_photo.photo.url', ''),
            uri: lodash_get(json, '0.data.user.cover_photo.photo.image.uri', ''),
        },
    };
}

export function getFbUrlFromId(id) {
    return `https://fb.com/${id}`;
}

export async function getAllMessages() {
    const res = await fetchGraphQl(
        'viewer(){message_threads{count,nodes{customization_info{emoji,outgoing_bubble_color,participant_customizations{participant_id,nickname}},all_participants{nodes{messaging_actor{name,id,profile_picture}}},thread_type,name,messages_count,image,id}}}'
    );
    const msgData = JSON.parse(res);
    let { count: threadCount, nodes } = msgData.viewer.message_threads;
    let data = nodes
        .map((node, i) => ({ ...node, recent: i })) // inject recent rank
        .map(node => {
            let participants = node.all_participants.nodes.map(p => ({
                id: p.messaging_actor.id,
                name: p.messaging_actor.name,
                avatar: p.messaging_actor.profile_picture.uri,
                avatar_large: getUserAvatarFromUid(p.messaging_actor.id),
            }));

            let d = {
                recent: node.recent,
                type: node.thread_type,
                id: atob(node.id)?.split(':')?.[1],
                count: node.messages_count,
                name: node.name || participants[0]?.name || '-no data-',
                participants: participants,
            };
            return {
                ...d,
                url: `https://www.facebook.com/messages/t/${d.id}`,
                isGroup: d.type === 'GROUP',
            };
        });

    return data;
}
