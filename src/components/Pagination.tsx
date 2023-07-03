import React from 'react'
// import './Pagination.scss'

const Pagination = ({totalPage, limit, setCurrentPage, currentPage, background}:any) => {
    let pages = [];
    for(let i = 1; i <= Math.ceil(totalPage/limit); i++){
      pages.push(i)
    }
    
  return (
    <div className='flex gap-2 items-center'>
        {
        pages.map((page, index) => {
            return(
            <button key={index} className={`w-[30px] border h-[30px] font-semibold rounded-sm ${page === currentPage ? "bg-blue-300" : ""}`} onClick={() => setCurrentPage(page)}>{page}</button>
            )
        })
        }
    </div>
  )
}

export default Pagination