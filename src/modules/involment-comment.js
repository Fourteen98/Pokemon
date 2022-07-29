const key = '0rucBNxYXY17tjHN06zy';
const apiUrl = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${key}/comments/`;

const involvementPostComments = (data) => fetch(apiUrl, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
});

const involvementFetchLikes = async (id) => {
  try {
    return await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${key}/comments/?item_id=${id}`)
      .then((response) => response.json())
      .then((data) => data);
  } catch (error) {
    return error;
  }
};

export default {
  postComment: involvementPostComments,
  getComment: involvementFetchLikes,
};