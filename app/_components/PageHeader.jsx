const PageHeader = ({ title, subtitle, showViewAll = false, viewAllLink = "" }) => {
    return (
        <div className="grid md:grid-cols-4 mb-16 pt-8">
            <div className=""></div>
            <div className="col-span-2 text-center">
                <h2 className="text-xl font-medium pb-3 text-gray-700 flex items-center justify-center">
                    <span className="w-8 h-[2px] bg-red-500 mr-3"></span>
                    {subtitle}
                    <span className="w-8 h-[2px] bg-red-500 ml-3"></span>
                </h2>
                <h1 className="text-4xl font-semibold">
                    {title.split(' ').map((word, index, array) => (
                        index === array.length - 1 
                            ? <span key={index} className="text-red-500">{word}</span>
                            : <span key={index}>{word} </span>
                    ))}
                </h1>
            </div>
            {showViewAll && (
                <div className="flex justify-end items-start pt-10 pr-4">
                    <Link 
                        href={viewAllLink}
                        className="inline-flex items-center px-6 py-2.5 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-full hover:from-red-600 hover:to-red-700 transition-all duration-300 shadow-md hover:shadow-lg group"
                    >
                        View All
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </Link>
                </div>
            )}
        </div>
    );
};

export default PageHeader; 