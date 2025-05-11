import { LoginForm } from "@/app/login/_components/LoginForm";
import login from "@/assets/images/mobile-login-animate.svg";
import FadeInWrapper from "@/components/common/FadeInWrapper";
import Image from "next/image";

export default function LoginPage() {
  return (
<FadeInWrapper>
      <div className="min-h-screen flex flex-col md:flex-row ">
      <div className="hidden md:block md:w-1/2 relative ">
        <div className="absolute inset-0 flex items-center justify-center">
          <Image
            src={login}
            width={300}
            height={300}
            priority
            alt="Quiz illustration"
            className="mx-auto w-full h-auto lg:max-w-lg xl:max-w-lg"
          />
        </div>
      </div>

      <div className="flex-1 flex flex-col justify-center p-6 md:p-12 lg:p-16 ">
        <div className="mx-auto w-full max-w-md space-y-6">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold">Welcome to Sugary</h1>
            <p className="text-muted-foreground">
              Enter your credentials to access your account
            </p>
          </div>
          <LoginForm />
        </div>
      </div>
    </div>
</FadeInWrapper>
  );
}
