import {RefObject, useEffect} from "react";

export function useOutsideClick(elementRef:RefObject<any>, func:Function, opened = true) {
    useEffect(() => {
        if (!opened) return;
        const handleClick = (e:MouseEvent) => {
            if (!elementRef.current) return
            if (!elementRef.current.contains(e.target)) {
                func()
            }
        }
        document.addEventListener("click", handleClick)
        return () => {
            document.removeEventListener("click", handleClick)
        }
    }, [elementRef, func, opened])
}