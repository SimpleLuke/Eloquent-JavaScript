const roads = [
  "Alice's House-Bob's House",
  "Alice's House-Cabin",
  "Alice's House-Post Office",
  "Bob's House-Town Hall",
  "Daria's House-Ernie's House",
  "Daria's House-Town Hall",
  "Ernie's House-Grete's House",
  "Grete's House-Farm",
  "Grete's House-Shop",
  "Marketplace-Farm",
  "Marketplace-Post Office",
  "Marketplace-Shop",
  "Marketplace-Town Hall",
  "Shop-Town Hall",
];

// Build relationships for each place
function buildGraph(edges) {
  let graph = Object.create(null);
  function addEdge(from, to) {
    if (graph[from] == null) {
      graph[from] = [to];
    } else {
      graph[from].push(to);
    }
  }
  for (let [from, to] of edges.map((r) => r.split("-"))) {
    addEdge(from, to);
    addEdge(to, from);
  }
  return graph;
}
const roadGraph = buildGraph(roads);
console.log(roadGraph);

// Interface for the current place and parcels to deliver
class VillageState {
  constructor(place, parcels) {
    this.place = place;
    this.parcels = parcels;
  }

  move(destination) {
    if (!roadGraph[this.place].includes(destination)) {
      return this;
    } else {
      let parcels = this.parcels
        .map((p) => {
          if (p.place != this.place) return p;
          return { place: destination, address: p.address };
        })
        .filter((p) => p.place != p.address);
      return new VillageState(destination, parcels);
    }
  }

  static random(parcelCount = 5) {
    let parcels = [];
    for (let i = 0; i < parcelCount; i++) {
      let address = randomPick(Object.keys(roadGraph));
      let place;
      do {
        place = randomPick(Object.keys(roadGraph));
      } while (place == address);
      parcels.push({ place, address });
    }
    return new VillageState("Post Office", parcels);
  }
}

// Run the robot to excute next move until no more parcels left
function runRobot(state, robot, memory) {
  for (let turn = 0; ; turn++) {
    // console.log(state.parcels)
    if (state.parcels.length == 0) {
      console.log(`Done in ${turn} turns`);
      return turn;
      break;
    }
    let action = robot(state, memory);
    state = state.move(action.direction);
    memory = action.memory;
    console.log(`Moved to ${action.direction}`);
  }
}

function randomPick(array) {
  let choice = Math.floor(Math.random() * array.length);
  return array[choice];
}

// Least efficient with random moves
function randomRobot(state) {
  return { direction: randomPick(roadGraph[state.place]) };
}

let first = new VillageState("Post Office", [
  { place: "Post Office", address: "Alice's House" },
]);
let next = first.move("Alice's House");
// console.log(next.place); // → Alice's House
// console.log(next.parcels); // → []
// console.log(first.place); // → Post Office

runRobot(VillageState.random(), randomRobot);

const mailRoute = [
  "Alice's House",
  "Cabin",
  "Alice's House",
  "Bob's House",
  "Town Hall",
  "Daria's House",
  "Ernie's House",
  "Grete's House",
  "Shop",
  "Grete's House",
  "Farm",
  "Marketplace",
  "Post Office",
];

// Fixed route robot
function routeRobot(state, memory) {
  if (memory.length == 0) {
    memory = mailRoute;
  }
  return { direction: memory[0], memory: memory.slice(1) };
}

// Find route with roadGraph.
// Loop through each possible place to go, then append a new option in work list
// Choose the option with least places on the route
function findRoute(graph, from, to) {
  let work = [{ at: from, route: [] }];
  for (let i = 0; i < work.length; i++) {
    let { at, route } = work[i];
    for (let place of graph[at]) {
      if (place == to) {
        return route.concat(place); // connection equals to destination
      }
      if (!work.some((w) => w.at == place)) {
        work.push({ at: place, route: route.concat(place) });
      }
    }
  }
}

// Focus on deliver the parcels
function goalOrientedRobot({ place, parcels }, route) {
  if (route.length == 0) {
    let parcel = parcels[0];
    if (parcel.place != place) {
      route = findRoute(roadGraph, place, parcel.place);
    } else {
      route = findRoute(roadGraph, place, parcel.address);
    }
  }
  return { direction: route[0], memory: route.slice(1) };
}

// Prioritise to consider the route to pick up parcels along the path
function lazyRobot({ place, parcels }, route) {
  if (route.length === 0) {
    let routes = parcels.map((parcel) => {
      if (place !== parcel.place) {
        return {
          route: findRoute(roadGraph, place, parcel.place),
          pickUp: true,
        };
      } else {
        return {
          route: findRoute(roadGraph, place, parcel.address),
          pickUp: false,
        };
      }
    });

    function score({ pickUp, route }) {
      return (pickUp ? 0.5 : 0) - route.length;
    }

    route = routes.reduce((a, b) => (score(a) > score(b) ? a : b)).route;
  }
  return { direction: route[0], memory: route.slice(1) };
}

// Similar to runRobot, but return the count steps
function countSteps(state, robot, memory) {
  for (let steps = 0; ; steps++) {
    if (state.parcels.length === 0) return steps;

    const action = robot(state, memory);
    state = state.move(action.direction);
    memory = action.memory;
  }
}

// Compare robots with their average steps to finish a task
function compareRobots(robot1, memory1, robot2, memory2) {
  let turn1 = 0,
    turn2 = 0;

  for (let i = 0; i < 100; i++) {
    const state = VillageState.random();
    turn1 += countSteps(state, robot1, memory1);
    turn2 += countSteps(state, robot2, memory2);
  }

  console.log(robot1, turn1 / 100);
  console.log(robot2, turn2 / 100);

  return { robot1: turn1 / 100, robot2: turn2 / 100 };
}

console.log(compareRobots(lazyRobot, [], goalOrientedRobot, []));
