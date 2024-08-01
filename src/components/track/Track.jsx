import '@fortawesome/fontawesome-free/css/all.min.css';

const Track = () => {
    return (
        <section>
            <div className="container mx-auto px-5 py-10 md:py-14">
                {/* main */}
                <div className="flex flex-wrap -m-4 text-center">
                    {/* Track 1 */}
                    <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
                        <div className="border-2 hover:shadow-xl hover:shadow-gray-200 border-gray-200 bg-gray-100 shadow-[inset_0_0_2px_rgba(0,0,0,0.6)] px-4 py-6 rounded-lg">
                            <i className="fas fa-tractor text-4xl mb-3 text-black"></i>
                            <h2 className="title-font font-medium text-lg text-gray-900">Advanced Farming Equipment</h2>
                            <p className="leading-relaxed">Discover our range of modern farming tools designed to increase efficiency and productivity on your farm.</p>
                        </div>
                    </div>

                    {/* Track 2 */}
                    <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
                        <div className="border-2 hover:shadow-xl hover:shadow-gray-200 border-gray-200 bg-gray-100 shadow-[inset_0_0_2px_rgba(0,0,0,0.6)] px-4 py-6 rounded-lg">
                            <i className="fas fa-leaf text-4xl mb-3 text-black"></i>
                            <h2 className="title-font font-medium text-lg text-gray-900">Sustainable Practices</h2>
                            <p className="leading-relaxed">Learn about sustainable farming techniques that help protect the environment and boost your yield by adopting sustainable practices.</p>
                        </div>
                    </div>

                    {/* Track 3 */}
                    <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
                        <div className="border-2 hover:shadow-xl hover:shadow-gray-200 border-gray-200 bg-gray-100 shadow-[inset_0_0_2px_rgba(0,0,0,0.6)] px-4 py-6 rounded-lg">
                            <i className="fas fa-people-carry text-4xl mb-3 text-black"></i>
                            <h2 className="title-font font-medium text-lg text-gray-900">Community Support</h2>
                            <p className="leading-relaxed">Join our community of farmers to share resources, get advice, and collaborate on innovative farming solutions.</p>
                        </div>
                    </div>

                    {/* Track 4 */}
                    <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
                        <div className="border-2 hover:shadow-xl hover:shadow-gray-200 border-gray-200 bg-gray-100 shadow-[inset_0_0_2px_rgba(0,0,0,0.6)] px-4 py-6 rounded-lg">
                            <i className="fas fa-seedling text-4xl mb-3 text-black"></i>
                            <h2 className="title-font font-medium text-lg text-gray-900">Organic Seeds</h2>
                            <p className="leading-relaxed">Access a variety of organic seeds to start your sustainable farming journey and produce healthy, organic crops.</p>
                        </div>
                    </div>

                    {/* Track 5 */}
                    <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
                        <div className="border-2 hover:shadow-xl hover:shadow-gray-200 border-gray-200 bg-gray-100 shadow-[inset_0_0_2px_rgba(0,0,0,0.6)] px-4 py-6 rounded-lg">
                            <i className="fas fa-chart-line text-4xl mb-3 text-black"></i>
                            <h2 className="title-font font-medium text-lg text-gray-900">Market Insights</h2>
                            <p className="leading-relaxed">Utilize our market insights to make informed decisions about crop production and sales, maximizing your profitability.</p>
                        </div>
                    </div>

                    {/* Track 6 */}
                    <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
                        <div className="border-2 hover:shadow-xl hover:shadow-gray-200 border-gray-200 bg-gray-100 shadow-[inset_0_0_2px_rgba(0,0,0,0.6)] px-4 py-6 rounded-lg">
                            <i className="fas fa-hand-holding-usd text-4xl mb-3 text-black"></i>
                            <h2 className="title-font font-medium text-lg text-gray-900">Financial Assistance</h2>
                            <p className="leading-relaxed">Explore our financial assistance programs designed to support farmers in need of capital for growth and development.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Track;
