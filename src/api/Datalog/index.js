import requests from "../request"

function getDataInfoByMac(macAddr, pageSize, currentPage){
    return requests.get("/getDatalog", {
        params:{
            macAddr,
            pageSize,
            currentPage
        }
    })
}


export {getDataInfoByMac}