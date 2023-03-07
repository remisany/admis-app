import React from "react";

//import components
import NoResult from "../NoResult";
import ScanResultCard from "./ScanResultCard";

const ScanResult = ({response, close}) => {
    return (
        response !== null ? <ScanResultCard response={response} close={close}/> : <NoResult/>
    )
}

export default ScanResult