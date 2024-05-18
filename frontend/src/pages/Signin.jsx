import BottomWarning from "@/components/BottomWarning"
import { Button } from "@/components/Button"
import Heading from "@/components/Heading"
import InputBox from "@/components/InputBox"
import { SubHeading } from "@/components/SubHeading"

const Signin = () => {
  return (
    <div className="bg-slate-300 h-screen flex justify-center">
        <div className="flex flex-col justify-center">
            <div className="bg-white rounded-lg w-80 text-center p-2 h-max px-4">
                <Heading label={"Signin"}/>
                <SubHeading label={"Enter your credentials to access your account"}/>
                <InputBox label={"Email"} placeholder="harkirat@gmail.com"/>
                  <InputBox label = {"Password"} placeholder="123456" />
                <Button label={"Sign in"} />
                  <BottomWarning label={"Don't have an account?"} buttonText={"Sign up"} to={"/signup"} />

            </div>
        </div>
    </div>
  )
}

export default Signin