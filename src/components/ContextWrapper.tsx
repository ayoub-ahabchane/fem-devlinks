"use client";
import { Database } from "@/lib/supabase/database.types";
import * as Tabs from "@radix-ui/react-tabs";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import React from "react";
import { FileWithPath } from "react-dropzone";
import { FormProvider, useForm } from "react-hook-form";
import useSWR from "swr";

type FormData = {
  firstName?: string;
  lastName?: string;
  avatar?: string | FileWithPath;
  email?: string;
  links?: any[];
};

const ContextWrapper = ({ children }: { children: React.ReactNode }) => {
  const supabase = createClientComponentClient<Database>();
  const fetcher = async () => {
    const { data } = await supabase.from("userprofile").select("*").limit(1);
    return data ? data[0] : null;
  };

  const { data } = useSWR("userprofile", fetcher);

  const methods = useForm<FormData>({
    values: {
      firstName: data?.first_name,
      lastName: data?.last_name,
      email: data?.email,
      avatar: data?.avatar_url ?? undefined,
    },
    resetOptions: {
      keepDirtyValues: true,
      keepErrors: true,
    },
  });
  return (
    <>
      <Tabs.Root
        defaultValue="links"
        className="flex-1 flex flex-col overflow-auto"
      >
        <FormProvider {...methods}>
          <form className="flex-1 flex flex-col overflow-auto">{children}</form>
        </FormProvider>
      </Tabs.Root>
    </>
  );
};

export default ContextWrapper;
