function bfs(rootNode, vertices, edges){
    let queue = []
    let recordOfSearch = []

    rootNode.distance = 0
    queue.push(rootNode)
    
    while(queue.length > 0){
        let firstNode = queue.shift()
        recordOfSearch.push(firstNode)
        let adjacentVertices = findAdjacent(firstNode.name, vertices, edges)

        markDistanceAndPredecessor(firstNode, adjacentVertices)

        for(let vertex in adjacentVertices){
            queue.push(adjacentVertices[vertex])
        }
    }

    return recordOfSearch
}


function findAdjacent(nodeName, vertices, edges){
    let adjacentNodes = []

    edges.forEach(edge => {
        let indexInEdge = edge.indexOf(nodeName)

        if(indexInEdge == 0){
            adjacentNodes.push(edge[1])
        }else if(indexInEdge == 1){
            adjacentNodes.push(edge[0])
        }
    })

    return vertices.filter(vertex => { 
        return adjacentNodes.includes(vertex.name) && vertex.distance === null
    })
}

function markDistanceAndPredecessor(predNode, adjacentNodes){
    adjacentNodes.forEach(node => {
        node.predecessor = predNode
        node.distance = predNode.distance + 1
    })
}