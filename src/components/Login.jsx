import FloatingInput from "./FloatingInput";

const Login = () => {
    return (
        <div className="flex justify-center">
            <div className="flex flex-col bg-[#F7F8F9] w-[375px] h-[730px] m-4 p-5 pb-8 gap-3 border rounded-lg border-gray-300">
                    <div className="mr-4 pr-20 font-medium text-3xl">Signin to your PopX account</div>
                    <div className="mr-10 pr-6 text-black opacity-60 font-medium">Lorem ipsum, dolor sit amet, consectetur adipisicing elit.</div>
                    <form className="pt-4 space-y-5">
                        <FloatingInput label="Email address" name="email" type="email" placeholder="Enter email address" />
                        <FloatingInput label="Password" name="password" type="text" placeholder="Enter password" />
                    </form>
                    <a href="/Account" className="py-3 px-1 text-sm font-medium bg-[#CBCBCB] text-white rounded-lg w-full flex justify-center items-center">Login</a>
            </div>
        </div>
    );
};

export default Login;