import { SearchIcon } from 'lucide-react'
import React from 'react'

const Search = () => {
    return (
        <>
            <div className='flex flex-row items-center w-5/6 mt-4'>
                <input type="text" placeholder='search...' className='px-4 h-10 w-full border border-[#4F9CF9] rounded-md rounded-r-none' />
                <SearchIcon className='bg-[#4F9CF9] text-white h-10 w-8 rounded-l-none rounded-md' />
            </div>
        </>
    )
}

export default Search