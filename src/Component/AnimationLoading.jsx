import React from 'react';

const AnimationLoading = () => {
    return (
       <>
            <div className='w-full max-h-80 bg-black-100 shadow-xl col-span-3 sm:col-span-1 row-span-3 p-4 rounded-2xl lg:h-full'>
                <div className="animate-pulse flex flex-col gap-8">
                    <div className='h-2 bg-slate-700 rounded w-12'></div>
                    <div className='flex items-center'>
                        <div className="rounded-full bg-slate-700 w-16 h-16 2xl:h-20 2xl:w-20"></div>
                    </div>
                    <div className='h-2 bg-slate-700 rounded w-20'></div>
                    <div className='space-y-3'>
                        <div className='flex items-center gap-1'>
                            <div className="h-2 bg-slate-700 rounded w-full"></div>
                        </div>
                        <div className='flex items-center gap-1'>
                            <div className="h-2 bg-slate-700 rounded w-full"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className=' flex flex-col gap-5 bg-black-100 shadow-xl text-white row-span-4 col-span-3 p-4 rounded-2xl'>
                <div className="animate-pulse flex flex-col gap-4">
                    <div className='h-2 bg-slate-700 rounded w-32'></div>
                    <ul className='w-full grid lg:grid-cols-2 grid-rows-2 gap-4'>
                        <li className='w-full h-40 flex flex-col gap-8 bg-black-200 rounded-lg p-3'>
                            <div className='flex items-center justify-between'>
                                <div className='h-2 bg-slate-700 rounded w-28'></div>
                                <div className='h-2 bg-slate-700 rounded w-12'></div>
                            </div>
                            <div className='flex items-center justify-between gap-4'>
                                <div className="rounded-full bg-slate-700 w-14 h-14 2xl:h-20 2xl:w-20"></div>
                                <div className='flex items-center flex-col gap-4'>
                                    <div className='flex items-center justify-between gap-2 2xl:gap-8'>
                                        <div className='h-2 bg-slate-700 rounded w-10 2xl:w-14'></div>
                                        <div className='h-2 bg-slate-700 rounded w-10 2xl:w-14'></div>
                                        <div className='h-2 bg-slate-700 rounded w-10 2xl:w-14'></div>
                                        <div className='h-2 bg-slate-700 rounded w-10 2xl:w-14'></div>
                                    </div>
                                    <div className='h-2 bg-slate-700 rounded w-full'></div>
                                </div>
                            </div>
                        </li>
                        <li className='w-full flex flex-col gap-8 bg-black-200 rounded-lg p-3'>
                            <div className='flex items-center justify-between'>
                                <div className='h-2 bg-slate-700 rounded w-28'></div>
                            </div>
                            <div className='flex items-center justify-between gap-4'>
                                <div className='flex items-center gap-4'>
                                    <div className="rounded-full bg-slate-700 w-14 h-14 2xl:h-20 2xl:w-20"></div>
                                    <div className='flex items-center flex-col gap-4'>
                                        <div className='flex items-center justify-between gap-12'>
                                            <div className='h-2 bg-slate-700 rounded w-10 2xl:w-14'></div>
                                        </div>
                                        <div className='h-2 bg-slate-700 rounded w-16 2xl:w-28'></div>
                                    </div>
                                </div>
                                <div className='flex items-center gap-4'>
                                    <div className="rounded-full bg-slate-700 w-14 h-14 2xl:h-20 2xl:w-20"></div>
                                    <div className='flex items-center flex-col gap-4'>
                                        <div className='flex items-center justify-between gap-12'>
                                            <div className='h-2 bg-slate-700 rounded w-10 2xl:w-14'></div>
                                        </div>
                                        <div className='h-2 bg-slate-700 rounded w-16 2xl:w-28'></div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className='w-full flex gap-4'>
                            <div className='w-full bg-black-200 rounded-lg p-3 flex flex-col justify-between gap-2'>
                                <div className='h-2 bg-slate-700 rounded w-14'></div>
                                <div className='flex items-center justify-between gap-2'>
                                    <div className="rounded-full bg-slate-700 w-12 h-12 2xl:h-20 2xl:w-20"></div>
                                    <div className='h-2 bg-slate-700 rounded w-14 2xl:w-20'></div>
                                </div>
                            </div>
                            <div className='w-full bg-black-200 rounded-lg p-3 flex flex-col justify-between gap-2'>
                                <div className='h-2 bg-slate-700 rounded w-14'></div>
                                <div className='flex items-center justify-between gap-2'>
                                    <div className="rounded-full bg-slate-700 w-12 h-12 2xl:h-20 2xl:w-20"></div>
                                    <div className='h-2 bg-slate-700 rounded w-14 2xl:w-20'></div>
                                </div>
                            </div>
                        </li>
                        <li className='w-full flex gap-4'>
                            <div className='w-full bg-black-200 rounded-lg p-3 flex flex-col justify-between gap-2'>
                                <div className='h-2 bg-slate-700 rounded w-14'></div>
                                <div className='flex items-center justify-between gap-2'>
                                    <div className="rounded-full bg-slate-700 w-12 h-12 2xl:h-20 2xl:w-20"></div>
                                    <div className='h-2 bg-slate-700 rounded w-14 2xl:w-20'></div>
                                </div>
                            </div>
                            <div className='w-full bg-black-200 rounded-lg p-3 flex flex-col justify-between gap-2'>
                                <div className='h-2 bg-slate-700 rounded w-14'></div>
                                <div className='flex items-center justify-between gap-2'>
                                    <div className="rounded-full bg-slate-700 w-12 h-12 2xl:h-20 2xl:w-20"></div>
                                    <div className='h-2 bg-slate-700 rounded w-14 2xl:w-20'></div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            <div className='w-full max-h-80 flex flex-col gap-2 2xl:gap-3 bg-black-100 text-white-100 col-span-3 row-span-3 p-4 rounded-2xl sm:row-start-1 sm:col-start-2 sm:col-span-2 lg:col-span-1 lg:row-start-auto lg:col-start-auto'>
                <div className="animate-pulse flex flex-col gap-4">
                    <div className='h-2 bg-slate-700 rounded w-20'></div>
                    <ul className='space-y-2'>
                        <div className='flex items-center gap-10'>
                            <div className='flex items-center gap-6 w-full'>
                                <div className="rounded-full bg-slate-700 h-10 w-10"></div>
                                <div className="h-2 bg-slate-700 rounded max-w-[300px] w-full"></div>
                            </div>
                        </div>
                        <div className='flex items-center gap-10'>
                            <div className='flex items-center gap-6 w-full'>
                                <div className="rounded-full bg-slate-700 h-10 w-10"></div>
                                <div className="h-2 bg-slate-700 rounded max-w-[300px] w-full"></div>
                            </div>
                        </div>
                        <div className='flex items-center gap-10'>
                            <div className='flex items-center gap-6 w-full'>
                                <div className="rounded-full bg-slate-700 h-10 w-10"></div>
                                <div className="h-2 bg-slate-700 rounded max-w-[300px] w-full"></div>
                            </div>
                        </div>
                        <div className='flex items-center gap-10'>
                            <div className='flex items-center gap-6 w-full'>
                                <div className="rounded-full bg-slate-700 h-10 w-10"></div>
                                <div className="h-2 bg-slate-700 rounded max-w-[300px] w-full"></div>
                            </div>
                        </div>
                        <div className='flex items-center gap-10'>
                            <div className='flex items-center gap-6 w-full'>
                                <div className="rounded-full bg-slate-700 h-10 w-10"></div>
                                <div className="h-2 bg-slate-700 rounded max-w-[300px] w-full"></div>
                            </div>
                        </div>
                    </ul>
                </div>
            </div>

            <div className="w-full h-full flex flex-col gap-4 col-span-3 row-span-2 text-white-100">
                <div className="animate-pulse flex flex-col gap-8 h-full">
                    <div className='h-2 bg-slate-700 rounded w-16'></div>
                    <ul className='today w-full h-full flex items-center gap-3 overflow-scroll'>
                        <li className='min-w-[80px] w-full h-full flex items-center justify-center gap-3 flex-col bg-black-100 rounded-2xl p-2'>
                            <div className='h-2 bg-slate-700 rounded w-12'></div>
                            <div className="rounded-full bg-slate-700 h-16 w-16"></div>
                            <div className='h-2 bg-slate-700 rounded w-8'></div>
                        </li>
                        <li className='min-w-[80px] w-full h-full flex items-center justify-center gap-3 flex-col bg-black-100 rounded-2xl p-2'>
                            <div className='h-2 bg-slate-700 rounded w-12'></div>
                            <div className="rounded-full bg-slate-700 h-16 w-16"></div>
                            <div className='h-2 bg-slate-700 rounded w-8'></div>
                        </li>
                        <li className='min-w-[80px] w-full h-full flex items-center justify-center gap-3 flex-col bg-black-100 rounded-2xl p-2'>
                            <div className='h-2 bg-slate-700 rounded w-12'></div>
                            <div className="rounded-full bg-slate-700 h-16 w-16"></div>
                            <div className='h-2 bg-slate-700 rounded w-8'></div>
                        </li>
                        <li className='min-w-[80px] w-full h-full flex items-center justify-center gap-3 flex-col bg-black-100 rounded-2xl p-2'>
                            <div className='h-2 bg-slate-700 rounded w-12'></div>
                            <div className="rounded-full bg-slate-700 h-16 w-16"></div>
                            <div className='h-2 bg-slate-700 rounded w-8'></div>
                        </li>
                        <li className='min-w-[80px] w-full h-full flex items-center justify-center gap-3 flex-col bg-black-100 rounded-2xl p-2'>
                            <div className='h-2 bg-slate-700 rounded w-12'></div>
                            <div className="rounded-full bg-slate-700 h-16 w-16"></div>
                            <div className='h-2 bg-slate-700 rounded w-8'></div>
                        </li>
                        <li className='min-w-[80px] w-full h-full flex items-center justify-center gap-3 flex-col bg-black-100 rounded-2xl p-2'>
                            <div className='h-2 bg-slate-700 rounded w-12'></div>
                            <div className="rounded-full bg-slate-700 h-16 w-16"></div>
                            <div className='h-2 bg-slate-700 rounded w-8'></div>
                        </li>
                        <li className='min-w-[80px] w-full h-full flex items-center justify-center gap-3 flex-col bg-black-100 rounded-2xl p-2'>
                            <div className='h-2 bg-slate-700 rounded w-12'></div>
                            <div className="rounded-full bg-slate-700 h-16 w-16"></div>
                            <div className='h-2 bg-slate-700 rounded w-8'></div>
                        </li>
                        <li className='min-w-[80px] w-full h-full flex items-center justify-center gap-3 flex-col bg-black-100 rounded-2xl p-2'>
                            <div className='h-2 bg-slate-700 rounded w-12'></div>
                            <div className="rounded-full bg-slate-700 h-16 w-16"></div>
                            <div className='h-2 bg-slate-700 rounded w-8'></div>
                        </li>
                        <li className='min-w-[80px] w-full h-full flex items-center justify-center gap-3 flex-col bg-black-100 rounded-2xl p-2'>
                            <div className='h-2 bg-slate-700 rounded w-12'></div>
                            <div className="rounded-full bg-slate-700 h-16 w-16"></div>
                            <div className='h-2 bg-slate-700 rounded w-8'></div>
                        </li>
                        
                    </ul>
                </div>
            </div>
       </>
    );
}

export default AnimationLoading;
