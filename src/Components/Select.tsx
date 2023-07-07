import React, {useCallback, useRef, useState} from "react";
import {useOutsideClick} from "./useOutsideClick";

type SelectProps = {
    value: number
    onChange: (value: number) => void
}

export function Select(props: SelectProps) {

    const items = [{value: 5}, {value: 10}, {value: 15}]
    const [active, setActive] = useState<boolean>(false)
    const reference = useRef(null)
    const onClose = useCallback(() => {
        setActive(false)
    },[])
        
    useOutsideClick(reference, onClose)

    const selectedItem = items.find(i => i.value === props.value)
    const togglePopup = () => {
        setActive(!active)
    }
    const itemClicked = (value: any) => {
        props.onChange(value);
        togglePopup()
    }
    return <>
        <div tabIndex={0}
             className="sort"
             ref={reference}
        >
            <div className="sort__label">
                <svg
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
                        fill="#2C2C2C"
                    />
                </svg>

                <b>Items on page:</b>
                <span onClick={togglePopup}>{selectedItem && selectedItem.value}</span>
            </div>

            {active && <div className="sort__select">
                <ul>
                    {items.map(i =>
                        <li
                            className={selectedItem === i ? "active" : ""}
                            key={i.value}
                            onClick={() => {
                                itemClicked(i.value)
                            }}>
                            {i.value}
                        </li>
                    )}
                </ul>
            </div>
            }
        </div>
    </>
}