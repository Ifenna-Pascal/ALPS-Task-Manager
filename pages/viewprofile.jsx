import { getSession } from "next-auth/react";
import React from "react";
import UserDetails from "../components/userdashboard/home/UserDetails";
import MainLayout from "../layout/MainLayout";
import { getUserDetails,  allMessages, } from "../store/apicall/userCalls";
import { userDetails, loggedUser, allMyMessages } from "../store/slice/userSlice";
import { wrapper } from "../store/store";
import { loadUser } from "../util/tokenLoad";

function Editprofile() {
  return (
    <MainLayout>
      <div className="grid lg:my-12 sticky top-0 lg:h-[calc(100vh-12rem)] grid-cols-1 md:max-w-[70%] mx-auto space-x-4">
        <div className="col-span-1">
          <UserDetails />
        </div>
      </div>
    </MainLayout>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async ({ req, res }) => {
    const session = await getSession({ req })
    const fetchedUser = await loadUser(session?.user?.accessToken);
    const result = await getUserDetails(fetchedUser?._id);
    const allMessage = await allMessages(fetchedUser?._id);
    await store.dispatch(allMyMessages(allMessage));
    await store.dispatch(loggedUser(result));
    await store.dispatch(userDetails(result));
  }
);

export default Editprofile;
