import Search from '@/components/ui/search'
import Image from 'next/image'
import circle from '/public/circle.png'

const HomePage = () => {
    return (
        <div className='relative flex flex-col md:flex-row items-center justify-evenly px-4 md:px-12 py-8 md:py-16'>
            {/* Kontainer Gambar untuk Mobile - Berada di belakang */}
            <div className='absolute inset-0 z-0 md:hidden opacity-20'>
                <div className='relative w-full h-full'>
                    <Image
                        alt='circle background'
                        src={circle}
                        fill
                        className='object-contain object-center'
                        priority
                    />
                </div>
            </div>

            {/* Kontainer Teks di Kiri - Ditinggikan di atas gambar */}
            <div className='relative z-10 w-full md:w-1/2 text-center md:text-left px-4 md:px-0'>
                <div className='font-bold text-3xl md:text-4xl lg:text-5xl w-full mb-4'>
                    <h1>Mari Sukseskan</h1>
                    <h1><span className='text-[#4F9CF9]'>Event</span> Kamu Bersama</h1>
                    <h1><span className='text-[#4F9CF9]'>EventEase</span></h1>
                </div>
                <p className='mb-6 text-base md:text-lg max-w-prose mx-auto md:mx-0'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, magni?
                </p>
                <div className='flex justify-center md:justify-start'>
                    <Search />
                </div>
            </div>

            {/* Gambar di Kanan untuk Desktop */}
            <div className='hidden md:block w-5/12 max-w-md'>
                <div className='relative w-full aspect-square'>
                    <Image
                        alt='circle'
                        src={circle}
                        fill
                        className='object-contain'
                        priority
                    />
                </div>
            </div>
        </div>
    )
}

export default HomePage