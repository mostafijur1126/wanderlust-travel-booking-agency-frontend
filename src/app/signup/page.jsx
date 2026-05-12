"use client";
import { FcGoogle } from "react-icons/fc";
import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import {
  Button,
  Card,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  Separator,
  TextField,
} from "@heroui/react";
import { redirect } from "next/navigation";

const SingUpPage = () => {
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userData = Object.fromEntries(formData.entries());

    console.log(userData);

    const { data, error } = await authClient.signUp.email({
      name: userData.name,
      image: userData.image,
      email: userData.email,
      password: userData.password,
    });

    if (data) {
      await authClient.updateUser({
        url,
      });
    }
    if (data) {
      alert("Singup Successfully");
      redirect("/");
    }
    if (error) {
      alert(error.message);
    }
    // console.log(data, error);
  };

  const handelSingUpGoogle = async () => {
    await authClient.signIn.social({
      provider: "google",
    });
  };

  return (
    <div className="max-w-7xl mx-auto py-20">
      <div className="text-center mb-5">
        <h1 className="text-2xl font-bold">Create Accout</h1>
        <p> Start your adventre with Wanderlust</p>
      </div>
      <Card className="rounded-none">
        <Form className="flex w-96 flex-col gap-4" onSubmit={onSubmit}>
          <TextField isRequired name="name" type="text">
            <Label>Name</Label>
            <Input placeholder="Type your name" />
            <FieldError />
          </TextField>
          <TextField name="image" type="text">
            <Label>Image URL</Label>
            <Input placeholder="Enter Your Image URL" />
            <FieldError />
          </TextField>
          <TextField
            isRequired
            name="email"
            type="email"
            validate={(value) => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                return "Please enter a valid email address";
              }
              return null;
            }}
          >
            <Label>Email</Label>
            <Input placeholder="john@example.com" />
            <FieldError />
          </TextField>
          <TextField
            isRequired
            minLength={8}
            name="password"
            type="password"
            validate={(value) => {
              if (value.length < 8) {
                return "Password must be at least 8 characters";
              }
              if (!/[A-Z]/.test(value)) {
                return "Password must contain at least one uppercase letter";
              }
              if (!/[0-9]/.test(value)) {
                return "Password must contain at least one number";
              }
              return null;
            }}
          >
            <Label>Password</Label>
            <Input placeholder="Enter your password" />
            <Description>
              Must be at least 8 characters with 1 uppercase and 1 number
            </Description>
            <FieldError />
          </TextField>

          <div className="flex justify-center gap-2">
            <Button type="submit" className="bg-cyan-500 rounded-none w-full">
              <Check />
              Submit
            </Button>
          </div>
        </Form>
        <div className="flex justify-center items-center gap-3">
          <Separator></Separator>
          <div className="whitespace-nowrap">Or SingUp With Google</div>
          <Separator></Separator>
        </div>
        <div className="text-center">
          <Button
            onClick={handelSingUpGoogle}
            className="w-full"
            variant="outline"
          >
            <FcGoogle /> Google Singup
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default SingUpPage;
