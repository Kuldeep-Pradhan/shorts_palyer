import { InView } from "react-intersection-observer";

import React from 'react'

const InViewComponent = ({ children }) => {
    return (
        <InView>
            {children}
        </InView>
    )
}

export default InViewComponent
