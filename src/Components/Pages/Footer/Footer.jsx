import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="bg-slate-950 text-white">
            <footer >

                <div className=' w-10/12 mx-auto py-10 md:grid md:grid-cols-6'>
                    <div className="col-span-2 px-10">
                        <section>
                            <h1 className="text-3xl font-semibold mb-4">CareerHub</h1>
                        </section>
                        <section>
                            <p className="text-justify mb-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum dolorem, eos nulla vero placeat amet obcaecati fugiat iure officiis minima quam delectus quasi odit porro.</p>
                        </section>
                        <section>
                            <img src="https://github.com/ProgrammingHero1/career-hub/blob/main/assets/icons/social.png?raw=true" alt="" />
                        </section>
                    </div>

                    <div className="col-span-1 ml-10 my-8 md:ml-0 md:my-0">
                        <section><h1 className="text-2xl font-semibold mb-4">Company</h1></section>
                        <section className="flex flex-col items-start gap-y-2">
                            <Link>About Us</Link>
                            <Link>Work</Link>
                            <Link>Latest News</Link>
                            <Link>Careers</Link>
                        </section>
                    </div>

                    <div className="col-span-1 ml-10 my-8 md:ml-0 md:my-0">
                        <section><h1 className="text-2xl font-semibold mb-4">Product</h1></section>
                        <section className="flex flex-col items-start gap-y-2">
                            <Link>Prototype</Link>
                            <Link>Plans & Pricing</Link>
                            <Link>Customers</Link>
                            <Link>Integatioins</Link>
                        </section>
                    </div>

                    <div className="col-span-1 ml-10 my-8 md:ml-0 md:my-0">
                        <section><h1 className="text-2xl font-semibold mb-4">Support</h1></section>
                        <section className="flex flex-col items-start gap-y-2">
                            <Link>Help Desk</Link>
                            <Link>Sales</Link>
                            <Link>Become a Partner</Link>
                            <Link>Developers</Link>
                        </section>
                    </div>

                    <div className="col-span-1 ml-10 my-8 md:ml-0 md:my-0">
                        <section><h1 className="text-2xl font-semibold mb-4">Contact</h1></section>
                        <section className="flex flex-col items-start gap-y-2">
                            <Link>524 Brodway, NYC</Link>
                            <Link>+1777-978-5570</Link>
                        </section>
                    </div>
                </div>

                <div className="border-t-2 border-gray-800 w-10/12 mx-auto"></div>

                <div className="w-10/12 mx-auto pt-10 pb-20 text-gray-500 font-light flex justify-between items-center ">
                    <section>
                        <p>@2024 <span>CareerHub</span> All Rights Reserved.</p>
                    </section>

                    <section>
                        <p>Powered By <span>CareerHub</span></p>
                    </section>
                </div>
            </footer>
        </div>
    );
};

export default Footer;