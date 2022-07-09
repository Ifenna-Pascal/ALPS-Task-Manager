import sanityClient from "./sanityInit";

const getUserDetails = async (id) => {
  const data = await sanityClient.fetch(
    `*[_type == 'user' && _id == "${id}"]{..., "imageUrl": userImage.asset->url, "headerUrl": headerImage.asset->url}[0]`
  );
  console.log(data);
  return data;
};

const updateUserDetails = async (
  user_id,
  {
    userName,
    firstName,
    lastName,
    contact,
    address,
    userBioData,
    dateOfBirth,
    country,
    origin,
  }
) => {
  const data = sanityClient
    .patch(`${user_id}`)
    .set({
      userName,
      firstName,
      lastName,
      contact,
      address,
      userBioData,
      dateOfBirth,
      country,
      origin,
    })
    .commit();
  return data;
};

 

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

const allMessages = async (id) => {
  const data = await sanityClient.fetch(
    `*[_type == 'messages' && references('${id}') && dateTime(_updatedAt) > dateTime(now()) - 60*60*24*7] | order(_createdAt desc)`
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

export {
  getUserDetails,
  updateUserDetails,
  getUserTasks,
  allTasks,
  oneUserTask,
  // uploadImage,
  filteredTasks,
  allMessages
};
