"use client";
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import React from 'react'
import { cn } from '@/lib/utils'

const Header = () => {
    const pathname = usePathname();
    return (
        <header className="my-10 flex justify-between gap-5">
            <Link href="/">
                <Image src="/icons/logo.svg" alt='work please' width={40} height={40} />
            </Link>
            <ul className="flex flex-row items-center gap-8">
                <Link href="/library" className={cn('text-base cursor-pointer capitalize', pathname === "/library" ? "text-light-200" : "text-light-100")}>Library</Link>
            </ul>
        </header>
    )
}

export default Header
