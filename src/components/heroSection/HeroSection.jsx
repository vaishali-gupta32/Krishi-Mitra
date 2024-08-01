import '@fortawesome/fontawesome-free/css/all.min.css';

const HeroSection = () => {
    return (
        <div className="relative">
            <img className="h-34 lg:h-full w-full" src="../img/farm2.jpg" alt="hero image" />
            <div className="absolute inset-x-0 top-1/4 flex items-start justify-center">
                <div className="text-center">
                    <h1 className="text-5xl font-bold text-white mb-4">Empowering Farmers, Cultivating Futures</h1>
                    <p className="text-xl text-black font-bold mb-8">Advanced Tools and Resources for Sustainable and Profitable Farming</p>
                    <div className="flex justify-around flex-wrap">
                        <div className="w-full lg:w-1/3 px-4 mb-8 mt-28">
                            <div className="flex flex-col items-center">
                                <i className="fas fa-seedling text-4xl mb-2 text-white"></i>
                                <h2 className="text-2xl font-semibold mb-2 text-white">Real-Time Monitoring</h2>
                                <p className='text-white'>Keep track of your farm's conditions with real-time data and remote system control, ensuring optimal growth and productivity.</p>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/3 px-4 mb-8 mt-28">
                            <div className="flex flex-col items-center">
                                <i className="fas fa-chart-line text-4xl mb-2 text-white"></i>
                                <h2 className="text-3xl font-semibold mb-2 text-white">AI-Driven Forecasting</h2>
                                <p className='text-[#F5F5F5]'>Utilize advanced AI to predict market needs and weather patterns, helping you make informed decisions and maximize your yield.</p>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/3 px-4 mb-8 mt-28">
                            <div className="flex flex-col items-center">
                                <i className="fas fa-store text-4xl mb-2 text-white"></i>
                                <h2 className="text-2xl font-semibold mb-2 text-white">Community Marketplace</h2>
                                <p className='text-white'>Connect directly with consumers and other farmers through our marketplace, promoting sustainable practices and profitable exchanges.</p>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/3 px-4 mb-8 mt-28">
                            <div className="flex flex-col items-center">
                                <i className="fas fa-cloud-sun-rain text-4xl mb-2 text-white"></i>
                                <h2 className="text-2xl font-semibold mb-2 text-white">Localized Weather Data</h2>
                                <p className='text-white'>Access real-time, localized weather updates to make timely decisions for irrigation, sowing, and harvesting, ensuring your crops get the care they need.</p>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/3 px-4 mb-8 mt-28">
                            <div className="flex flex-col items-center">
                                <i className="fas fa-exchange-alt text-4xl mb-2 text-white"></i>
                                <h2 className="text-2xl font-semibold mb-2 text-white">CropSwap</h2>
                                <p className='text-white'>Exchange seeds, tools, and other resources with fellow farmers to promote resource sharing and collaboration, fostering a community of sustainable practices.</p>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/3 px-4 mb-8 mt-28">
                            <div className="flex flex-col items-center">
                                <i className="fas fa-book-open text-4xl mb-2 text-white"></i>
                                <h2 className="text-2xl font-semibold mb-2 text-white">FarmStory</h2>
                                <p className='text-white'>Share your experiences, tips, and success stories through our FarmStory feature, and learn from others in the farming community to continually improve your practices.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeroSection;
