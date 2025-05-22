const Home = () => {
    return (
        <div className="flex justify-center">
            <div className="flex flex-col bg-[#F7F8F9] w-[375px] h-[730px] m-4 p-5 pb-8 gap-6 border rounded-lg border-gray-300 justify-end">
                <div className="flex flex-col gap-2">
                <div className="text-2xl font-bold">Welcome to PopX</div>
                <div className="mr-10 pr-6 text-black opacity-60 font-medium">Lorem ipsum, dolor sit amet, consectetur adipisicing elit.</div>
                </div>
                <div className="flex flex-col items-center gap-2">
                <a
                href="/register"
                className="py-3 px-1 text-sm font-medium bg-[#6C25FF] text-white rounded-lg w-full flex justify-center items-center">
                    Create Account</a>
                <a
                href="/login"
                className="py-3 px-1 text-sm font-medium bg-[#6C25FF4B] rounded-lg w-full flex justify-center items-center"
                >Already Registered? Login</a>
                </div>
            </div>
        </div>
    );
}

export default Home;
