"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useCallback, useEffect } from "react";
import { FileWithPath, useDropzone } from "react-dropzone";
import { Controller, useFormContext } from "react-hook-form";
import { IoImageOutline } from "react-icons/io5";

const Dropzone = () => {
  const { control, watch, setValue } = useFormContext();
  const currentAvatar = watch("avatar");
  useEffect(() => {
    typeof currentAvatar !== "string" && URL.revokeObjectURL(currentAvatar);
  }, [currentAvatar]);
  const onDropAccepted = useCallback(
    (acceptedFiles: FileWithPath[]) => {
      setValue("avatar", acceptedFiles[0], { shouldValidate: true });
    },
    [setValue]
  );
  const {
    getRootProps,
    getInputProps,
    isDragAccept,
    isFocused,
    isDragActive,
    isDragReject,
  } = useDropzone({
    onDropAccepted,
    accept: { "image/jpeg": [".jpg", ".jpeg"] },
    maxFiles: 1,
    maxSize: 40000000,
  });
  const overlayStatus =
    isDragAccept || isFocused || !currentAvatar ? "visible" : "invisible";

  const prompt = isDragReject
    ? "Unsupported file type"
    : currentAvatar && !isDragAccept
    ? "Change Image"
    : !currentAvatar
    ? "+ Upload Image"
    : "Drop it like it's hot!";

  return (
    <Controller
      name="avatar"
      control={control}
      render={({ field: { onChange } }) => {
        return (
          <div
            {...getRootProps({
              className:
                "aspect-square w-48 bg-dl-accent-200 rounded-lg cursor-pointer relative overflow-hidden relative group",
            })}
          >
            <input
              {...getInputProps({
                id: "avatarDropzone",
                onChange: (e) => {
                  e.target.files && onChange(e.target.files[0]);
                },
              })}
            />

            {currentAvatar && (
              <Image
                fill
                className={`object-cover object-center group-hover:grayscale transition-all ${
                  isDragActive && "grayscale"
                }`}
                src={
                  typeof currentAvatar === "string"
                    ? currentAvatar
                    : URL.createObjectURL(currentAvatar)
                }
                alt="current avatar picture"
                onLoad={() => {
                  typeof currentAvatar !== "string" &&
                    URL.revokeObjectURL(currentAvatar);
                }}
              />
            )}
            <motion.div
              variants={overlayVariants}
              initial={{ opacity: 0 }}
              animate={overlayStatus}
              transition={{ ease: "easeOut", duration: 0.25 }}
              className="bg-dl-accent-200 bg-opacity-50 absolute inset-0 flex flex-col items-center justify-center font-semibold text-dl-accent-400"
              whileHover={{
                opacity: 100,
              }}
            >
              {!currentAvatar && <IoImageOutline className="w-8 h-8" />}
              <span>{prompt}</span>
            </motion.div>
          </div>
        );
      }}
    />
  );
};

export default Dropzone;

const overlayVariants = {
  visible: {
    opacity: 100,
  },

  invisible: {
    opacity: 0,
  },
};
