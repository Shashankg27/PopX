const Account = () => {
    return (
        <div className="flex justify-center">
            <div className="flex flex-col bg-[#F7F8F9] w-[375px] h-[730px] m-4 gap-2 border rounded-lg border-gray-300">
                <div className="bg-white p-5 shadow-sm">Account Settings</div>

                <div class="flex mt-5 space-x-4 px-4.5">
                    <div class="relative w-20 h-20">
                        <img src="/ProfileImage.png" alt="Profile" class="w-full h-full rounded-full object-cover" />
                        
                        <img src="/camera.svg" 
                            alt="Camera Icon"
                            class="absolute bottom-0 right-0 w-6 h-6 bg-white rounded-full p-1 border border-white shadow-md" />
                    </div>

                    <div>
                        <h2 class="font-semibold text-m">Marry Doe</h2>
                        <p class="text-sm">Marry@Gmail.Com</p>
                    </div>
                </div>


                <div className="p-5 pb-3 text-sm">Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam</div>

                <div className="h-full mb-8 border-y border-dashed border-[#CBCBCB]"></div>
            </div>
        </div>
        
    )
}

export default Account;