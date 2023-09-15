import React, {useMemo} from 'react';
import './pagination.scss'
import {usePagination} from "../../data/usePagination";


const range = (start: number, end: number) => {
    let length = end - start + 1;
    return Array.from({length}, (_, idx) => idx + start);
};

type PaginationProps = {
    limitOnPage: number
    totalAmountOfItems: number
    adjacentButtons: number
}

export const Pagination: React.FC<PaginationProps> = React.memo(({
                                                                     limitOnPage,
                                                                     totalAmountOfItems,
                                                                     adjacentButtons
                                                                 }) => {
    const {
        currentPage,
        totalPages,
        setPage,
        nextPage,
        prevPage
    } = usePagination(limitOnPage, totalAmountOfItems)

    const paginationRange = useMemo(() => {
        const DOTS = 0;
        const totalPageNumbers = adjacentButtons + 5;
        if (totalPageNumbers >= totalPages) {
            return range(1, totalPages);
        }
        const leftSiblingIndex = Math.max(currentPage - adjacentButtons, 1);
        const rightSiblingIndex = Math.min(
            currentPage + adjacentButtons,
            totalPages
        );
        const shouldShowLeftDots = leftSiblingIndex > 2;
        const shouldShowRightDots = rightSiblingIndex < totalPages - 2;
        const firstPageIndex = 1;
        const lastPageIndex = totalPages;
        if (!shouldShowLeftDots && shouldShowRightDots) {
            let leftItemCount = 3 + 2 * adjacentButtons;
            let leftRange = range(1, leftItemCount);

            return [...leftRange, DOTS, totalPages];
        }
        if (shouldShowLeftDots && !shouldShowRightDots) {

            let rightItemCount = 3 + 2 * adjacentButtons;
            let rightRange = range(
                totalPages - rightItemCount + 1,
                totalPages
            );
            return [firstPageIndex, DOTS, ...rightRange];
        }
        if (shouldShowLeftDots && shouldShowRightDots) {
            let middleRange = range(leftSiblingIndex, rightSiblingIndex);
            return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
        }
        return []
    }, [totalPages, totalAmountOfItems, limitOnPage, adjacentButtons, currentPage]);

    const prevPageBtn = <button className="sideBtn" onClick={prevPage}>{"<- Prev page"}</button>
    const nextPageBtn = <button className="sideBtn" onClick={nextPage}> {"Next page ->"}</button>

    return <div className="paginationContainer">
        <div className="root">
            {prevPageBtn}
            <div className="pages">
                {paginationRange.map((pageNumber, i) => {
                    if (pageNumber === 0) {
                        return <button key={i}>...</button>;
                    }
                    return <button
                        key={i}
                        className={currentPage === pageNumber ? "activeBtn" : ""}
                                   onClick={() => setPage(pageNumber)}>{pageNumber}
                    </button>
                })}
            </div>
            {nextPageBtn}
        </div>
    </div>

})
