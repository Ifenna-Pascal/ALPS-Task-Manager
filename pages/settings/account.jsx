import React from "react";
import Settings from "../../components/userdashboard/Settings";
import MainLayout from "../../layout/MainLayout";

export default function settings() {
  return (
    <MainLayout>
      <div>
        <Settings />
      </div>
    </MainLayout>
  );
}
