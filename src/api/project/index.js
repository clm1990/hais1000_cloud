import requests from "../request"

function getProjectInfo(pageSize, currentPage){
    return requests.get("/getProjectInfo", {
        params:{
            pageSize,
            currentPage
        }
    })
}

function getProjectInfoByParam(pageSize, currentPage, projectName, macAddr){
    return requests.get("/getProjectInfoByParam", {
        params:{
            pageSize,
            currentPage,
            projectName,
            macAddr
        }
    })
}

function addProjectInfo(projectName, projectAddress,  macAddr, projectSn){
    return requests.post("/addProjectInfo", {
        projectName,
        projectAddress,
        macAddr,
        projectSn
    })   
}

function updateProjectInfo(projectId, projectName, projectAddress,  macAddr, projectSn){
    return requests.post("/updateProjectInfo", {
        projectId,
        projectName,
        projectAddress,
        macAddr,
        projectSn
    })   
}

function delProjectInfo(projectID){
    return requests.get("/delProjectInfo", {
        params:{
            projectID
        }
    })   
}

export {getProjectInfo, addProjectInfo, getProjectInfoByParam, updateProjectInfo, delProjectInfo}