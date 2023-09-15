"use client";
import * as Tabs from "@radix-ui/react-tabs";
import { useFormContext } from "react-hook-form";
import Dropzone from "../Dropzone";

const ProfileTab = () => {
  const {
    register,
    formState: { errors },
    getFieldState,
    setValue,
  } = useFormContext();
  const firsNameErrors = getFieldState("firstName").error;
  const lastNameErrors = getFieldState("lastName").error;
  const emailErrors = getFieldState("email").error;

  return (
    <Tabs.Content
      value="profile"
      className="tabWrapper flex-1 flex flex-col overflow-auto"
    >
      <header className="mb-4">
        <h1 className="text-2xl font-bold leading-9 mb-2 text-dl-neutral-600">
          Profile Details
        </h1>
        <p className="text-body-m text-dl-neutral-300">
          Add your details to create a personal touch to your profile.
        </p>
      </header>
      <section className="flex flex-col gap-6 flex-1 overflow-auto">
        <article className="p-5 bg-dl-neutral-200 rounded-xl grid grid-flow-row gap-y-4">
          <label
            htmlFor="avatarDropzone"
            className="leading-6 text-dl-neutral-300"
          >
            Profile picture
          </label>
          <Dropzone />
          <p className="text-body-s text-dl-neutral-300">
            Image must be below 4MB. Use JPG or JPEG format.
          </p>
        </article>
        <article className="grid grid-flow-row auto-rows-fr gap-y-3 p-5 bg-dl-neutral-200 rounded-xl">
          <div className="grid grid-flow-row auto-rows-auto gap-y-1">
            <div className="flex items-end mb-1 justify-between">
              <label
                htmlFor="firstName"
                className="text-body-s text-dl-neutral-300"
              >
                First name
              </label>
              {firsNameErrors && (
                <span className="text-body-s text-dl-danger">
                  {firsNameErrors.message}
                </span>
              )}
            </div>
            <input
              id="firstName"
              placeholder="John"
              className={`px-4 py-3 rounded-lg border transition outline-none w-full ${
                firsNameErrors
                  ? "border-dl-danger"
                  : "border-dl-neutral-400 focus-within:border-dl-accent-400"
              } `}
              {...register("firstName", {
                required: { value: true, message: "Field cannot be empty." },
              })}
            />
          </div>
          <div className="grid grid-flow-row auto-rows-auto gap-y-1 ">
            <div className="flex items-end mb-1 justify-between">
              <label
                htmlFor="lastName"
                className="text-body-s text-dl-neutral-300"
              >
                Last name
              </label>
              {lastNameErrors && (
                <span className="text-body-s text-dl-danger">
                  {lastNameErrors.message}
                </span>
              )}
            </div>
            <input
              id="lastName"
              placeholder="Doe"
              className={`px-4 py-3 rounded-lg border transition outline-none w-full ${
                lastNameErrors
                  ? "border-dl-danger"
                  : "border-dl-neutral-400 focus-within:border-dl-accent-400"
              } `}
              {...register("lastName", {
                required: { value: true, message: "Field cannot be empty." },
              })}
            />
          </div>
          <div className="grid grid-flow-row auto-rows-auto gap-y-1">
            <div className="flex items-end mb-1 justify-between">
              <label
                htmlFor="email"
                className="text-body-s text-dl-neutral-300"
              >
                Email
              </label>
              {emailErrors && (
                <span className="text-body-s text-dl-danger">
                  {emailErrors.message}
                </span>
              )}
            </div>
            <input
              id="email"
              placeholder="john.doe@example.com"
              className={`px-4 py-3 rounded-lg border transition outline-none w-full ${
                emailErrors
                  ? "border-dl-danger"
                  : "border-dl-neutral-400 focus-within:border-dl-accent-400"
              } `}
              {...register("email", {
                required: { value: true, message: "Field cannot be empty." },
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Provide a valid email format.",
                },
              })}
            />
          </div>
        </article>
      </section>
    </Tabs.Content>
  );
};

export default ProfileTab;
