import FloatingInput from "./FloatingInput";

const CreateAccount = () => {
    return (
        <div className="flex justify-center">
            <div className="flex flex-col justify-between bg-[#F7F8F9] w-[375px] h-[730px] m-4 p-5 pb-8 gap-6 border rounded-lg border-gray-300">
                <div className="mt-5 flex flex-col gap-2">
                    <div className="mr-4 pr-20 font-bold text-3xl">Create your PopX account</div>
                    <form className="pt-4 space-y-5">
                        <FloatingInput label="Full Name" name="fullname" value="Marry Doe" required />
                        <FloatingInput label="Phone number" name="phone" value="Marry Doe" required />
                        <FloatingInput label="Email address" name="email" type="email" value="Marry Doe" required />
                        <FloatingInput label="Password" name="password" type="text" value="Marry Doe" required />
                        <FloatingInput label="Company name" name="company" value="Marry Doe" />

                        {/* Agency Radio */}
                        <div>
                            <label className="block text-sm mb-2">
                            Are you an Agency?<span className="text-red-500">*</span>
                            </label>
                            <div className="flex items-center space-x-6">
                            <label className="flex items-center space-x-2">
                                <input type="radio" name="agency" defaultChecked className="accent-[#6c25ff] h-4 w-4" />
                                <span>Yes</span>
                            </label>
                            <label className="flex items-center space-x-2">
                                <input type="radio" name="agency" className="accent-[#6c25ff] h-4 w-4" />
                                <span>No</span>
                            </label>
                            </div>
                        </div>
                    </form>
                </div>

                <a href="/Account" className="py-3 px-1 text-sm font-medium bg-[#6C25FF] text-white rounded-lg w-full flex justify-center items-center">Create Account</a>
            </div>
        </div>
    )
}

export default CreateAccount;