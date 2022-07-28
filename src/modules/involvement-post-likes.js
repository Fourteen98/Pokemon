/* eslint-disable no-console, consistent-return */
const getAppKey = '0rucBNxYXY17tjHN06zy';
const apiUrl = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${getAppKey}/likes/`;

const involvementPostLikes = async (e, likes) => {
  try {
    return await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        item_id: e.target.id,
        likes,
      }),
    });
  } catch (error) {
    console.log(error);
  }
};

export default involvementPostLikes;