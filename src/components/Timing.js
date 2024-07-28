"use client";
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

const formatTime = (time) => {
    const getTwoDigitValue = (value) => value.toString().padStart(2, '0');
    const hours = getTwoDigitValue(Math.floor(time / 3600));
    const minutes = getTwoDigitValue(Math.floor((time % 3600) / 60));
    const seconds = getTwoDigitValue(time % 60);
    return `${hours}:${minutes}:${seconds}`;
};

const Timing = () => {
    const [time, setTime] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const timerRef = useRef(null);
    const [intervalSpeed, setIntervalSpeed] = useState(1000);

    useEffect(() => {
        if (isActive) {
            timerRef.current = setInterval(() => {
                setTime((prevTime) => prevTime + 1);
            }, intervalSpeed);
        } else {
            clearInterval(timerRef.current);
        }
        return () => clearInterval(timerRef.current);
    }, [isActive]);

    const handleStart = () => setIsActive(true);
    const handlePause = () => setIsActive(false);
    const handleReset = () => {
        setIsActive(false);
        setTime(0);
    };

    const handleIntervalChange = (e) => {
        const speed = parseInt(e.target.value, 10);
        if (!isNaN(speed) && speed > 0) {
            setIntervalSpeed(speed);
        }
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1 className='mb-[50px]'>Stopwatch</h1>
            <div className="w-[300px] h-[70px] border-2 border-black text-center" style={{ fontSize: '48px', margin: "auto" }}>
                {formatTime(time)}
            </div>
            <div style={{ marginTop: '20px' }} className='flex gap-3 justify-center '>
                <button onClick={handleStart} disabled={isActive} className='border-2 border-black rounded p-2'>
                    Start
                </button>
                <button onClick={handlePause} disabled={!isActive} className='border-2 border-black rounded p-2'>
                    Pause
                </button>
                <button onClick={handleReset} className='border-2 border-black rounded p-2'>Reset</button>
            </div>
            <div style={{ marginTop: '20px' }}>
                <label>
                    Interval (ms): 
                    <input 
                        type="number" 
                        value={intervalSpeed} 
                        disabled={isActive}
                        onChange={handleIntervalChange} 
                        className='border-2 border-black rounded p-2'
                        min="1"
                    />
                    <span className='ml-2'>By Default it will run on 1 second</span>
                </label>
            </div>
            <button className='border-2 border-black rounded p-2 mt-[80px] hover:bg-[#f0f0f0]'><Link href="/">Back To Home</Link></button>
        </div>
    );
};

export default Timing;
