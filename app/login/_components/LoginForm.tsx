"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAppDispatch } from "@/redux/hooks";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useLoginUserMutation } from "@/redux/features/authApi";
import { setUser } from "@/redux/slice/userSlice";

const loginSchema = z.object({
  UserName: z.string().min(1, "Email is required"),
  Password: z.string().min(1, "Password is required"),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  const router = useRouter();
  const [loginUser, { isLoading }] = useLoginUserMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      UserName: "",
      Password: "",
    },
  });

  const dispatch = useAppDispatch();

  const onLogin = async (data: LoginFormValues) => {
    const toastId = toast.loading("Logging in...");
    try {
      const response = await loginUser(data).unwrap();
      if (response) {
        toast.success("Login successful!", { id: toastId });
        dispatch(setUser(response));
        router.push("/dashboard");
      }
    } catch (error: any) {
      const errorMessage =
        error.data?.message || "Login failed. Please try again.";
      toast.error(errorMessage, { id: toastId });
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <form onSubmit={handleSubmit(onLogin)} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="UserName">Email</Label>
        <Input
          id="UserName"
          type="text"
          placeholder="Enter your email"
          autoComplete="username"
          {...register("UserName")}
          disabled={isLoading}
        />
        {errors.UserName && (
          <p className="text-sm text-error">{errors.UserName.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="Password">Password</Label>
        <div className="relative">
          <Input
            id="Password"
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            autoComplete="current-password"
            {...register("Password")}
            disabled={isLoading}
          />
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="absolute right-0 top-0 h-full px-3"
            onClick={toggleShowPassword}
          >
            {showPassword ? (
              <EyeOff className="h-4 w-4" />
            ) : (
              <Eye className="h-4 w-4" />
            )}
            <span className="sr-only">
              {showPassword ? "Hide Password" : "Show Password"}
            </span>
          </Button>
        </div>
        {errors.Password && (
          <p className="text-sm text-error">{errors.Password.message}</p>
        )}
      </div>

      <Button type="submit" className="w-full"  disabled={isLoading} >
        {isLoading ? "Signing in..." : "Sign In"}
      </Button>
    </form>
  );
}
