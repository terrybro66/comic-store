import React from 'react'

const Pagination = ({ comicsPerPage, totalComics, paginate, prevNext, current }) => {
    const pageNumbers = [];
  
    for (let i = 1; i <= Math.ceil(totalComics / comicsPerPage); i++) {
      pageNumbers.push(i);
    }

    const stepPage = event => {
        const direction = (event.target.value)
        if (current < 5 && direction === ">" || current > 1 && direction === "<"){
            prevNext(direction)

        }
        
    }

    const changePage = event => {
        paginate(event.target.value)
    }

    return (
        <div>
            <input type="button" value="<" onClick={stepPage}/>
            {pageNumbers.map(number => (           
                <input type='button' value={number} onClick={changePage} key={number}/>           
            ))}
            <input type='button' value=">" onClick={stepPage}/>
        </div>
    )
}

export default Pagination;