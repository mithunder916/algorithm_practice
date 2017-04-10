// REACTO

// Write a function that determines if a path exists between two vertices of a graph.

// The graph will be represented as an object, each of whose keys represents a vertex of the graph and whose value represents all vertices that can be reached from the aforementioned key. In the example below, there is a connection from vertex a to vertex b and a connection from vertex b to vertices c and d but not a connection from vertex b to vertex a.

let graph1 = {a: ['c'],
 b: ['c'],
 c: ['s', 'r'],
 d: ['a'],
 s: ['a', 'c'],
 r: ['d'],
 z: ['z']
 };

// APPROACH
// traverse from start element - do either DFS or BFS
// if any of the nodes we encounter are the target, return true
var doesPathExist = function(graph, start, target, visited={}) {
  visited[start] = true;
  return graph[start].some(function(vertex){
    if (start === target) {
      return true;
    } else if (!visited[vertex]) {
      return doesPathExist(graph, vertex, target, visited);
    } else {
      return false;
    }
  });
};


console.log(doesPathExist(graph1, 'a', 'c', {})) // true
console.log(doesPathExist(graph1, 'a', 's', {})) // true
console.log(doesPathExist(graph1, 'a', 'b', {})) // false
console.log(doesPathExist(graph1, 'b', 'a', {})) // true
console.log(doesPathExist(graph1, 'a', 'd', {})) // true
console.log(doesPathExist(graph1, 's', 'r', {})) // true
console.log(doesPathExist(graph1, 'z', 'z', {})) // true
console.log(doesPathExist(graph1, 'c', 'c', {})) // true
