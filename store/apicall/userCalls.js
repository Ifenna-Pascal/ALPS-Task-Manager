import sanityClient from "./sanityInit";

const getUserDetails = async (id) => {
  const data = await sanityClient.fetch(
    `*[_type == 'user' && _id == "${id}"]{..., "imageUrl": userImage.asset->url, "headerUrl": headerImage.asset->url}[0]`
  );
  console.log(data);
  return data;
};

const updateUserDetails = async (user_id, userDetails) => {
  sanityClient
    .patch(`${user_id}`)
    .set({
      username: userDetails.userName,
      // email: userDetails.email
    })
    .commit()
    .then(updated => {
      console.log(updated)
    })
    .catch(err=> {
      console.log(err)
    })
}

const getUserTasks = async (id) => {
  const data = await sanityClient.fetch(
    `*[_type == 'tasks' && references("${id}") && taskProgress == 'assigned'] {..., user->}[0] `
  );
  return data;
};

const allTasks = async (id) => {
  const data = await sanityClient.fetch(
    `*[_type == 'tasks' && references('${id}')]`
  );

  return data;
};

const filteredTasks = async (id, status, user_id) => {
  const data = await sanityClient.fetch(
    `*[_type == 'tasks' && references("${user_id}") && taskProgress == "${status}" && _id != "${id}"]`
  );

  return data;
};
const oneUserTask = async (id) => {
  const data = await sanityClient.fetch(
    `*[_type == 'tasks' && _id == "${id}"][0]`
  );
  return data;
};

export { getUserDetails, updateUserDetails, getUserTasks, allTasks, oneUserTask, filteredTasks };
