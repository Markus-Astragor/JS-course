import { TIME_SEC } from "./config.js";

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};


export const AJAX = async (url, uploadData = undefined) => {
}

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

export const sendJSON = async (url, uploadData) => {
  try {
    const response = await Promise.race([fetch(url, {
      method: 'POST',
      //headers information about request itself
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(uploadData)
    }), timeout(TIME_SEC)]);
    const responseData = await response.json();

    if (!response.ok) throw new Error(`${responseData.data} ${responseData.status}`)

    return responseData;
  } catch (error) {
    throw error;
  }
}