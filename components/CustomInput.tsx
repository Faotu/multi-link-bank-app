import React from "react";
import { FormControl, FormField, FormLabel, FormMessage } from "./ui/form";
import { Control, FieldPath, Form } from "react-hook-form";
import { Input } from "./ui/input";
import { z } from "zod";
import { authformSchema } from "@/lib/utils";

const formSchema = authformSchema("sign-up");

interface CustomInput {
  control: Control<z.infer<typeof formSchema>>;
  //   name: "email" | "password";
  name: FieldPath<z.infer<typeof formSchema>>;
  label: string;
  placeholder: string;
}
const CustomInput = ({ control, name, label, placeholder }: CustomInput) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <div className="form-item">
          <FormLabel className="form-label">{label}</FormLabel>
          <div className="flex w-full flex-col">
            <FormControl>
              <Input
                placeholder={placeholder}
                className="input-class"
                type={name === "password" ? "password" : "text"}
                {...field}
              />
            </FormControl>
            <FormMessage className="form-message mt-2" />
          </div>
        </div>
      )}
    />
  );
};

export default CustomInput;