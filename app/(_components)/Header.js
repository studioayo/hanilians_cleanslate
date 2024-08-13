'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <div className={`flex flex-row p-4 lg:px-16 lg:py-8 items-center justify-between h-16 lg:h-20 z-50 fixed top-0 left-0 right-0 transition-all duration-300 ${isScrolled ? 'bg-pastell-purple/80 backdrop-blur-xl border-b border-gray-950/10' : ''}`}>
                <div className="flex-none">
                    <Link href='https://www.hanilians.xyz/'>
                        <Image src='/logo.svg' alt='logo' width={100} height={100} />
                    </Link>
                </div>
                <nav className='hidden lg:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                    <ul className='flex flex-row gap-6'>
                        <li className='flex items-center text-gray-500 hover:text-gray-700 hover:font-medium transition-all duration-300'>
                            <Link href="https://www.hanilians.xyz/">홈</Link>
                        </li>
                        <li className='flex items-center text-gray-500 hover:text-gray-700 hover:font-medium transition-all duration-300'>
                            <Link href="https://www.hanilians.xyz/meals">급식</Link>
                        </li>
                        <li className='flex items-center text-gray-500 hover:text-gray-700 hover:font-medium transition-all duration-300'>
                            <Link href="https://www.hanilians.xyz/news">공지사항</Link>
                        </li>
                        <li className='flex items-center text-gray-500 hover:text-gray-700 hover:font-medium transition-all duration-300'>
                            <Link href="https://www.hanilians.xyz/memo">메모</Link>
                        </li>
                    </ul>
                </nav>
                <div className="flex-none flex items-center space-x-4">
                    <Link className='hidden lg:flex px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-full text-white transition-all duration-300' href="https://forms.gle/mzed2UYu9L5PY656A">프로그램 지원하기</Link>
                    <Link className='lg:hidden flex px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-full text-white text-sm transition-all duration-300' href="https://www.hanilians.xyz">웹 방문하기</Link>
                </div>
            </div>
            
            {/* Bottom CTA for mobile */}
            <div className='fixed lg:hidden bottom-0 left-0 right-0 p-4 z-50 bg-gradient-cta'>
                <Link className='flex justify-center w-full px-4 py-4 bg-blue-500 hover:bg-blue-600 rounded-xl text-white text-lg font-semibold transition-all duration-300' href="https://forms.gle/mzed2UYu9L5PY656A">
                    프로그램 지원하기
                </Link>
            </div>
        </>
    );
};