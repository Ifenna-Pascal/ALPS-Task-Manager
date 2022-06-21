import sanityClient from "./sanityInit";
import { basename } from "path";
// import { createReadStream } from "fs";
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

const uploadImage = async (userId, filePath) => {
  const data = sanityClient.assets
    .upload("image", createReadStream(filePath), {
      filename: basename(filePath),
    })
    .then((imageAsset) => {
      // Here you can decide what to do with the returned asset document.
      // If you want to set a specific asset field you can to the following:
      return client
        .patch(`${userId}`)
        .set({
          userImage: {
            _type: "image",
            asset: {
              _type: "reference",
              _ref: imageAsset._id,
            },
          },
        })
        .commit();
    });
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
  uploadImage,
  filteredTasks,
};
