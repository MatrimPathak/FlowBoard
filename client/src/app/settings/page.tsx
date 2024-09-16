import Header from "@/components/Header";
import React from "react";

interface UserSettings {
  username: string;
  email: string;
  teamName: string;
  roleName: string;
}

const Settings: React.FC = () => {
  const userSettings: UserSettings = {
    username: "Matrim Pathak",
    email: "matrim.pathak@flowboard.com",
    teamName: "Development Team",
    roleName: "Developer",
  };

  const labelStyles = "block text-sm font-medium dark:text-white";
  const textStyles =
    "mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 dark:text-white";

  return (
    <div className="p-8">
      <Header name="Settings" />
      <div className="space-y-4">
        <div>
          <label className={labelStyles} htmlFor="username">
            Username
          </label>
          <div id="username" className={textStyles}>
            {userSettings.username}
          </div>
        </div>
        <div>
          <label className={labelStyles} htmlFor="email">
            Email
          </label>
          <div id="email" className={textStyles}>
            {userSettings.email}
          </div>
        </div>
        <div>
          <label className={labelStyles} htmlFor="teamName">
            Team Name
          </label>
          <div id="teamName" className={textStyles}>
            {userSettings.teamName}
          </div>
        </div>
        <div>
          <label className={labelStyles} htmlFor="role">
            Role
          </label>
          <div id="role" className={textStyles}>
            {userSettings.roleName}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
