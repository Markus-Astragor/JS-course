import { TIME_SEC } from "./config.js";

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

export const getJSON = async (url) => {
  try {
    const response = await Promise.race([fetch(url), timeout(TIME_SEC)]);
    const responseData = await response.json();

    if (!response.ok) throw new Error(`${responseData.data} ${responseData.status}`)

    return responseData;
  } catch (error) {
    throw error;
  }

}