"use client";

import { useState, useEffect } from "react";

import Image from "next/image";
import CircularProgress from "@mui/material/CircularProgress";
import { constants, axiosReq, formatStringValues as formatStr } from "@/utils";
import { ErrorContainer, showErrorToast } from "@/components/shared";

const User = ({ params }: { params: { id: string } }) => {
  const { id } = params; // this is login attribute from user
  const baseUrl = constants.GITHUB_API_BASE_URL;
  const resource = constants.GITHUB_API_USERS_RESOURCE;
  const path = baseUrl + resource + id;

  const [user, setUser] = useState<any>({}); //change to type based on expected response
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axiosReq({
      reqOption: "get",
      path,
      onSuccess: (response) => {
        const data = response.data;
        const rawUser = data;
        console.log(rawUser);
        setUser(rawUser);
      },
      onError: (error) => {
        setIsError(true);
        console.log(error);
      },
      callback: () => {
        setIsLoading(false);
      },
    });
  }, [path]);

  useEffect(() => {
    if (isError) showErrorToast("An error has ocurred...");
  }, [isError]);

  return (
    <div className="flex  flex-col items-center text-white p-8">
      {isLoading && <CircularProgress />}
      {isError && <ErrorContainer />}
      {user.hasOwnProperty("avatar_url") && (
        <div className="w-full flex flex-col justify-center items-center">
          <div className="p-4">
            <Image
              className="rounded-full border border-gray-600"
              src={user.avatar_url}
              alt="avatar"
              width={128}
              height={128}
            />
          </div>
          <div className="p-2">
            <div className="flex items-center">
              <div className="italic text-blue-300 mr-2">Name:</div>
              <span className="text-sm">{`${user.name}`}</span>
            </div>

            <div className="flex items-center">
              <div className="italic text-blue-300 mr-2">Github User:</div>
              <span className="text-sm">{`${user.login}`}</span>
            </div>

            <div className="flex items-center">
              <div className="italic text-blue-300 mr-2">Email:</div>
              <span className="text-sm">{`${formatStr(user.email)}`}</span>
            </div>

            <div className="flex items-center">
              <div className="italic text-blue-300 mr-2">Location:</div>
              <span className="text-sm">{`${formatStr(user.location)}`}</span>
            </div>

            <div className="flex items-center">
              <div className="italic text-blue-300 mr-2">Bio:</div>
              <span className="text-sm">{`${formatStr(user.bio)}`}</span>
            </div>

            <div className="flex items-center">
              <div className="italic text-blue-300 mr-2">Company:</div>
              <span className="text-sm">{`${formatStr(user.company)}`}</span>
            </div>

            <div className="flex items-center">
              <div className="italic text-blue-300 mr-2">Followers:</div>
              <span className="text-sm">{`${user.followers}`}</span>
            </div>

            <div className="flex items-center">
              <div className="italic text-blue-300 mr-2">Public Repos:</div>
              <span className="text-sm">{`${user.public_repos}`}</span>
            </div>

            <div className="flex items-center">
              <div className="italic text-blue-300 mr-2">Public gists:</div>
              <span className="text-sm">{`${user.public_gists}`}</span>
            </div>

            <div className="flex items-center">
              <div className="italic text-blue-300 mr-2">Github URL:</div>
              <a className="underline" href={user.html_url}>
                <span className="text-sm">{`${formatStr(user.html_url)}`}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default User;
