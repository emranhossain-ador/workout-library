const PlansCalculate = ()=>{
    return (
        <div className="mt-5 grid grid-cols-1 overflow-hidden rounded-xl border border-[#242832] bg-[#15171c] sm:grid-cols-3">

            {/* Exercises */}
            <div className="border-b border-[#242832] px-5 py-5 sm:border-b-0 sm:border-r">
                <p className="text-[10px] font-medium text-gray-500">
                Exercises
                </p>

                <p className="mt-1 text-3xl font-black leading-none text-[#c6ff00]">
                2
                </p>
            </div>

            {/* Minutes */}
            <div className="border-b border-[#242832] px-5 py-5 sm:border-b-0 sm:border-r">
                <p className="text-[10px] font-medium text-gray-500">
                Minutes
                </p>

                <p className="mt-1 text-3xl font-black leading-none">
                23
                </p>
            </div>

            {/* Calories */}
            <div className="px-5 py-5">
                <p className="text-[10px] font-medium text-gray-500">
                Calories
                </p>

                <p className="mt-1 text-3xl font-black leading-none">
                190
                </p>
            </div>

        </div>
    )
}

export default PlansCalculate;