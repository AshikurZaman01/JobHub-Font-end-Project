
const Category = () => {
    return (
        <div className="space-y-5">

            <div className="text-center space-y-5">
                <h1 className="text-4xl font-semibold">Job Category List</h1>
                <p className="text-xl font-normal text-gray-600">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam, alias.</p>
            </div>

            <section className="md:flex md:flex-row md:justify-between flex-col items-center py-10 gap-10">
                <div className="border shadow shadow-gray-500 p-5 w-[200px] space-y-3 h-[170px]">
                    <div>
                        <img src="https://github.com/ProgrammingHero1/career-hub/blob/main/assets/icons/accounts.png?raw=true" alt="" />
                    </div>
                    <div className="space-y-2">
                        <h1 className="font-semibold">Account & Finance</h1>
                        <p className="font-normal text-gray-600">100+ Job Available</p>
                    </div>
                </div>

                <div className="border shadow shadow-gray-500 p-5 w-[200px] space-y-3 h-[170px]">
                    <div>
                        <img src="https://github.com/ProgrammingHero1/career-hub/blob/main/assets/icons/creative.png?raw=true" alt="" />
                    </div>
                    <div className="space-y-2">
                        <h1 className="font-semibold">Creative Design</h1>
                        <p className="font-normal text-gray-600">120+ Job Available</p>
                    </div>
                </div>

                <div className="border shadow shadow-gray-500 p-5 w-[200px] space-y-3 h-[170px]">
                    <div>
                        <img src="https://github.com/ProgrammingHero1/career-hub/blob/main/assets/icons/marketing.png?raw=true" alt="" />
                    </div>
                    <div className="space-y-2">
                        <h1 className="font-semibold">Marketing & Sales</h1>
                        <p className="font-normal text-gray-600">190+ Job Available</p>
                    </div>
                </div>

                <div className="border shadow shadow-gray-500 p-5 w-[200px] space-y-3 h-[170px]">
                    <div>
                        <img src="https://github.com/ProgrammingHero1/career-hub/blob/main/assets/icons/chip.png?raw=true" alt="" />
                    </div>
                    <div className="space-y-2">
                        <h1 className="font-semibold">Engineering Job</h1>
                        <p className="font-normal text-gray-600">300+ Job Available</p>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Category;