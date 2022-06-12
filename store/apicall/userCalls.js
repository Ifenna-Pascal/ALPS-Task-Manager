import sanityClient from "./sanityInit";

const getUserDetails = async () => {
  const data = await sanityClient.fetch(
    `*[_type == 'user' && userName == 'chisom']{..., "imageUrl": userImage.asset->url}[0]`
  );
  console.log(data);
  return data;
};

const getUserTasks = async () => {
  const data = await sanityClient.fetch(
    `*[_type == 'tasks' && references('e687b3cb-736d-4948-a6fa-fa73d792e7f2') && taskProgress == 'assigned'] {..., user->}[0] `
  );
  return data;
};

const allTasks = async () => {
  const data = await sanityClient.fetch(
    `*[_type == 'tasks' && references('e687b3cb-736d-4948-a6fa-fa73d792e7f2')]`
  );

  return data;
};

const filteredTasks = async (id, status) => {
  const data = await sanityClient.fetch(
    `*[_type == 'tasks' && references('e687b3cb-736d-4948-a6fa-fa73d792e7f2') && taskProgress == "${status}" && _id != "${id}"]`
  );

  return data;
};
const oneUserTask = async (id) => {
  const data = await sanityClient.fetch(
    `*[_type == 'tasks' && _id == "${id}"][0]`
  );
  return data;
};

export { getUserDetails, getUserTasks, allTasks, oneUserTask, filteredTasks };
