import { Button, Label, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
        {/* left side */}
        <div className="flex-1">
          <Link to="/" className="text-4xl font-bold dark:text-white">
            <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
              Inupa's
            </span>
            Blogs
          </Link>
          <p className="mt-5 text-sm">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique, exercitationem ipsam. Temporibus, doloremque exercitationem! At, quia rerum provident inventore eum facere ab dolores neque quae sed beatae ut, perspiciatis magni.
          </p>
        </div>
        {/* right side */}
        <div className="flex-1">
          <form className="flex flex-col gap-4">
            <div>
              <Label value="Your username"></Label>
              <TextInput type="text" placeholder="Username" id="username"/>
            </div>
            <div>
              <Label value="Your email"></Label>
              <TextInput type="text" placeholder="name@company.com" id="email"/>
            </div>
            <div>
              <Label value="Your password"></Label>
              <TextInput type="password" placeholder="Password" id="password"/>
            </div>
            <Button gradientDuoTone='purpleToPink' type="submit">Sign Up</Button>
          </form>
          <div className="flex gap-2 text-sm mt-5">
            <span>Have an account?</span>
            <Link to='/sign-in' className="text-blue-500">Sign In</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
