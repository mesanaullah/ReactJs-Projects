import React, { useState, useEffect } from 'react';
import { GoClock } from "react-icons/go";
import { BsCalendarDate } from "react-icons/bs";

function TimeAndDate() {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000); // Update every 1 second

        return () => clearInterval(intervalId); // Cleanup on unmount
    }, []);

    return (
        <>
            <div className="TimeAndDate">
                <GoClock className="clock" /> Current Time: {currentTime.toLocaleTimeString()}

            </div><div className="TimeAndDate">
                <BsCalendarDate className="clock" /> Date: {currentTime.toLocaleDateString()}

            </div>
        </>
    );
}

export default TimeAndDate;