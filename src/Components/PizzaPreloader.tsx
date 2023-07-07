import React from "react"
import ContentLoader from "react-content-loader"

export const PizzaPreloader = () => (

    <ContentLoader
        className={"pizza-block"}
        speed={2}
        width={280}
        height={465}
        viewBox="0 0 280 465"
        backgroundColor="#c0c0c0"
        foregroundColor="#ffffff"

    >
        <circle cx="130" cy="130" r="130" />
        <rect x="0" y="270" rx="10" ry="10" width="280" height="27" />
        <rect x="4" y="314" rx="0" ry="0" width="280" height="87" />
        <rect x="0" y="420" rx="0" ry="0" width="280" height="45" />
    </ContentLoader>
)


