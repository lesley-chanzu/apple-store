import React, { useEffect, useState} from 'react'

const PageTransition = ({ activePage, children }) => {
    const [currentPage, setCurrentPage] = useState(activePage);
    const [transitioning, setTransitioning] = useState(false);
    const [previousPage, setPreviousPage] = useState(null);

    useEffect(() => {
        if (currentPage !== activePage) {
            setTransitioning(true);
            setPreviousPage(true)
            setTimeout(() => {
                setCurrentPage(activePage);
                setTransitioning(false);
                setPreviousPage(null)
            }, 500); // Match this duration with your CSS transition duration
        }
    }, [activePage, currentPage]);

    return (
        <div className={`w-full h-full overflow-hidden relative ${transitioning ? 'bg-image-class' : ''}`}>
            {/* Render the previous page during the transition */}
            {previousPage !== null && (
                <div
                    className={`absolute w-full h-full transition-transform duration-500 ${
                        transitioning ? '-translate-y-0' : 'translate-y-full'
                    }`}
                >
                    {children[previousPage]}
                </div>
            )}

            {/* Render the current page */}
            <div
                className={`absolute w-full h-full transition-transform duration-500 ${
                    transitioning ? 'translate-y-full' : 'translate-y-0'
                }`}
            >
                {children[currentPage]}
            </div>
        </div>
    )
}

export default PageTransition