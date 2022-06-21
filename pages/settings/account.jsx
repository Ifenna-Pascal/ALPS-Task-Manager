import { getSession } from "next-auth/react";
import React from "react";
import Settings from "../../components/userdashboard/Settings";
import MainLayout from "../../layout/MainLayout";
import { getUserDetails } from "../../store/apicall/userCalls";
import { loggedUser } from "../../store/slice/userSlice";
import { wrapper } from "../../store/store";
import { loadUser } from "../../util/tokenLoad";

export default function settings() {
  return (
    <MainLayout>
      <div>
        <Settings />
      </div>
    </MainLayout>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async ({ req, res }) => {
    const session = await getSession({ req })
    const fetchedUser = await loadUser(session?.user?.accessToken);
    const result = await getUserDetails(fetchedUser?._id);
    await store.dispatch(loggedUser(result));
  }
);