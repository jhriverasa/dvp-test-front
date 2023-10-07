"use client";

import { useState, useEffect } from "react";
import { useForm, FieldValues } from "react-hook-form";
import CircularProgress from "@mui/material/CircularProgress";

import { Input, Button, BarChart } from "@/components/primitive";
import { axiosReq, constants } from "@/utils";
import { UserLinkBox } from "@/components/boxes";

import { ErrorContainer, showErrorToast } from "@/components/shared";

const Home = () => {
  const baseUrl = constants.GITHUB_API_BASE_URL;
  const resource = constants.GITHUB_API_SEARCH_USERS_RESOURCE;
  const path = baseUrl + resource;

  const [usersFound, setUsersFound] = useState<any[]>([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit: onSubmit,
    formState: { errors },
  } = useForm<formInput>({
    criteriaMode: "all", //allows multiple validations
    defaultValues: {
      user: "",
    },
  });

  const handleSubmit = (data: FieldValues) => {
    const { user } = data;

    axiosReq({
      reqOption: "get",
      path,
      params: {
        q: user,
      },
      onSuccess: (response) => {
        const data = response.data;
        const usersRaw: Array<any> = data.items;

        //Get 10 users max
        const MAX_USERS = 10;
        const users = usersRaw.slice(0, MAX_USERS);

        setUsersFound(users);
      },
      onError: (error) => {
        setIsError(true);
        console.log(error);
      },
      callback: () => {
        setIsLoading(false);
      },
    });
  };
  useEffect(() => {
    if (isError) showErrorToast("An error has ocurred...");
  }, [isError]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <form onSubmit={onSubmit(handleSubmit)}>
        <h1 className="text-white text-center text-lg p-4">
          Search users in Github using Github-API
        </h1>
        <div className="container-form flex flex-col">
          <div className="container-users-input flex flex-col items-center p-2">
            <Input
              {...register("user", {
                /*A single Regular expression would be also valid but we're looking for specific message each case */
                required: "Users field is mandatory",
                minLength: {
                  value: 4,
                  message: "User should have at least 4 characters",
                },
                pattern: {
                  value: /^(?!\s*doublevpartners\s*$).*/, //REGEXP to avoid "doublevpartners" even with spaces
                  message: "Forbidden search",
                },
              })}
              label="Search Users"
              size="small"
              error={errors.hasOwnProperty("user")}
              helperText={errors.user && errors.user.message}
            ></Input>
          </div>
          <div className="container-button-input self-center p-2">
            <Button variant="outlined" size="medium" type="submit">
              Search
            </Button>
          </div>
          {isLoading && <CircularProgress />}
          {isError && <ErrorContainer />}
          <div className="flex flex-col items-center text-white">
            {/* 
            usersFound.length > 0 && (
              <BarChart
                xAxis={[
                  {
                    id: "barFollowers",
                    data: usersFound.map((user, i) => {
                      return i;
                    }),
                    scaleType: "band",
                    label: "Number of Followers",
                    
                  },
                ]}
                series={[
                  {
                    data: usersFound.map(() => {
                      return Math.floor(Math.random() * 50) + 1;
                    }),
                    color: "rgba(59, 130, 246, 0.5)",
                    
                  },
                ]}   
                width={512}
                height={300}
              />
              )*/}
            {usersFound.map((user) => {
              return <UserLinkBox {...user} key={user.id} />;
            })}
          </div>
        </div>
      </form>
    </div>
  );
};

type formInput = {
  user: string;
};

export default Home;
