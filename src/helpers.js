export const ExtensionID = "heoejcamgchindphgghdhmjpgmldnepl";

export function getUserAvatarFromUid(uid) {
  return `https://graph.facebook.com/${uid}/picture?height=500&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`;
}

export async function getUserInfoFromUid(uid) {
  const text = await fetchGraphQl({
    fb_api_req_friendly_name: "ProfileCometHeaderQuery",
    doc_id: "4159355184147969",
    variables: {
      userID: uid,
      shouldDeferProfilePic: false,
      useVNextHeader: false,
      scale: 1.5,
    },
  });
  console.log(JSON.parse("[" + text.split("\n").join(",") + "]"));

  return {
    uid: uid,
    name: decodeEscapedUnicodeString(/"name":"(.*?)"/.exec(text)?.[1]),
    avatar: decodeEscapedUnicodeString(
      /"profilePicLarge":{"uri":"(.*?)"/.exec(text)?.[1] ||
        /"profilePicMedium":{"uri":"(.*?)"/.exec(text)?.[1] ||
        /"profilePicSmall":{"uri":"(.*?)"/.exec(text)?.[1] ||
        /"profilePic160":{"uri":"(.*?)"/.exec(text)?.[1]
    ),
    gender: /"gender":"(.*?)"/.exec(text)?.[1],
    alternateName: decodeEscapedUnicodeString(
      /"alternate_name":"(.*?)"/.exec(text)?.[1]
    ),
  };
}

export function wrapGraphQlParams(params = {}) {
  const formBody = [];
  for (const property in params) {
    const encodedKey = encodeURIComponent(property);
    const value =
      typeof params[property] === "string"
        ? params[property]
        : JSON.stringify(params[property]);
    const encodedValue = encodeURIComponent(value);
    formBody.push(encodedKey + "=" + encodedValue);
  }
  return formBody.join("&");
}

export function fetchGraphQl(params = {}) {
  let form = "";
  if (typeof params === "string") form = "&q=" + encodeURIComponent(params);
  else form = wrapGraphQlParams(params);

  return sendMessage({
    action: "request_graphql",
    query: form,
  });
}

export function sendMessage(data) {
  return new Promise((resolve, reject) => {
    if (!window || !window?.chrome?.runtime)
      return reject(new Error("Cannot connect to extension"));

    try {
      window.chrome.runtime.sendMessage(ExtensionID, data, function (res) {
        res && !res.error
          ? resolve(res)
          : reject(res ? res.error : new Error("Cannot connect to extension"));
      });
    } catch (err) {
      return reject(err);
    }
  });
}

// helpers
export function decodeEscapedUnicodeString(str) {
  if (!str) return "";
  let res = str;
  while (res.includes("\\u")) {
    res = decodeURIComponent(JSON.parse('"' + res.replace(/\"/g, '\\"') + '"'));
  }
  return res;
}
