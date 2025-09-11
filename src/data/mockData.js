// Bus stops data
export const busStops = [
  { id: 1, name: "Central Station", lat: 28.6139, lng: 77.2090 },
  { id: 2, name: "Connaught Place", lat: 28.6315, lng: 77.2167 },
  { id: 3, name: "India Gate", lat: 28.6129, lng: 77.2295 },
  { id: 4, name: "Red Fort", lat: 28.6562, lng: 77.2410 },
  { id: 5, name: "Chandni Chowk", lat: 28.6506, lng: 77.2334 },
  { id: 6, name: "Karol Bagh", lat: 28.6519, lng: 77.1909 },
  { id: 7, name: "Rajouri Garden", lat: 28.6469, lng: 77.1200 },
  { id: 8, name: "Dwarka", lat: 28.5921, lng: 77.0460 },
  { id: 9, name: "Airport Terminal 3", lat: 28.5665, lng: 77.1031 },
  { id: 10, name: "Gurgaon Cyber City", lat: 28.4950, lng: 77.0890 },
  { id: 11, name: "Noida Sector 18", lat: 28.5678, lng: 77.3261 },
  { id: 12, name: "Greater Noida", lat: 28.4744, lng: 77.5040 },
  { id: 13, name: "Faridabad", lat: 28.4089, lng: 77.3178 },
  { id: 14, name: "Ghaziabad", lat: 28.6692, lng: 77.4538 },
  { id: 15, name: "AIIMS", lat: 28.5672, lng: 77.2100 }
];

// Enhanced bus routes with detailed stops
export const busRoutes = [
  {
    id: 1,
    name: "Route 101 - Red Line",
    from: "Central Station",
    to: "Airport Terminal 3",
    color: "#ef4444",
    stops: [1, 2, 6, 7, 8, 9],
    distance: "45 km",
    duration: "90 mins",
    fare: 25,
    frequency: "Every 15 mins"
  },
  {
    id: 2,
    name: "Route 202 - Blue Line",
    from: "Connaught Place",
    to: "Noida Sector 18",
    color: "#3b82f6",
    stops: [2, 3, 4, 5, 11],
    distance: "32 km",
    duration: "65 mins",
    fare: 20,
    frequency: "Every 12 mins"
  },
  {
    id: 3,
    name: "Route 303 - Green Line",
    from: "India Gate",
    to: "Gurgaon Cyber City",
    color: "#10b981",
    stops: [3, 2, 1, 10],
    distance: "28 km",
    duration: "55 mins",
    fare: 18,
    frequency: "Every 10 mins"
  },
  {
    id: 4,
    name: "Route 404 - Yellow Line",
    from: "Red Fort",
    to: "Greater Noida",
    color: "#f59e0b",
    stops: [4, 5, 2, 11, 12],
    distance: "55 km",
    duration: "110 mins",
    fare: 35,
    frequency: "Every 20 mins"
  },
  {
    id: 5,
    name: "Route 505 - Purple Line",
    from: "AIIMS",
    to: "Faridabad",
    color: "#8b5cf6",
    stops: [15, 1, 2, 13],
    distance: "38 km",
    duration: "75 mins",
    fare: 22,
    frequency: "Every 18 mins"
  }
];

// Enhanced buses with real-time tracking
export const buses = [
  {
    id: 1,
    routeId: 1,
    number: "DL-1PC-0101",
    status: "Running",
    lat: 28.6315,
    lng: 77.2167,
    eta: "5 mins",
    passengers: 23,
    capacity: 50,
    speed: 35,
    nextStop: "Karol Bagh",
    driver: "Rajesh Kumar",
    phone: "+91-9876543210",
    lastUpdated: new Date().toISOString(),
    route: [28.6139, 77.2090, 28.6315, 77.2167, 28.6519, 77.1909]
  },
  {
    id: 2,
    routeId: 2,
    number: "DL-1PA-0202",
    status: "At Stop",
    lat: 28.6129,
    lng: 77.2295,
    eta: "12 mins",
    passengers: 15,
    capacity: 45,
    speed: 0,
    nextStop: "Red Fort",
    driver: "Suresh Singh",
    phone: "+91-9876543211",
    lastUpdated: new Date().toISOString(),
    route: [28.6315, 77.2167, 28.6129, 77.2295, 28.6562, 77.2410]
  },
  {
    id: 3,
    routeId: 3,
    number: "DL-1PB-0303",
    status: "Running",
    lat: 28.6139,
    lng: 77.2090,
    eta: "8 mins",
    passengers: 31,
    capacity: 50,
    speed: 42,
    nextStop: "Connaught Place",
    driver: "Amit Sharma",
    phone: "+91-9876543212",
    lastUpdated: new Date().toISOString(),
    route: [28.6129, 77.2295, 28.6315, 77.2167, 28.6139, 77.2090]
  },
  {
    id: 4,
    routeId: 1,
    number: "DL-1PC-0104",
    status: "Running",
    lat: 28.6519,
    lng: 77.1909,
    eta: "15 mins",
    passengers: 38,
    capacity: 50,
    speed: 28,
    nextStop: "Rajouri Garden",
    driver: "Vikram Yadav",
    phone: "+91-9876543213",
    lastUpdated: new Date().toISOString(),
    route: [28.6519, 77.1909, 28.6469, 77.1200, 28.5921, 77.0460]
  },
  {
    id: 5,
    routeId: 4,
    number: "DL-1PD-0405",
    status: "Delayed",
    lat: 28.6506,
    lng: 77.2334,
    eta: "22 mins",
    passengers: 42,
    capacity: 55,
    speed: 15,
    nextStop: "Connaught Place",
    driver: "Manoj Gupta",
    phone: "+91-9876543214",
    lastUpdated: new Date().toISOString(),
    route: [28.6562, 77.2410, 28.6506, 77.2334, 28.6315, 77.2167]
  },
  {
    id: 6,
    routeId: 5,
    number: "DL-1PE-0506",
    status: "Running",
    lat: 28.5672,
    lng: 77.2100,
    eta: "18 mins",
    passengers: 27,
    capacity: 48,
    speed: 38,
    nextStop: "Central Station",
    driver: "Ravi Verma",
    phone: "+91-9876543215",
    lastUpdated: new Date().toISOString(),
    route: [28.5672, 77.2100, 28.6139, 77.2090, 28.6315, 77.2167]
  }
];

// Queue data for upcoming buses
export const busQueue = {
  1: [ // Route 1
    { busId: 1, eta: "5 mins", occupancy: 46 },
    { busId: 4, eta: "15 mins", occupancy: 76 },
    { busId: 7, eta: "30 mins", occupancy: 32 }
  ],
  2: [ // Route 2
    { busId: 2, eta: "12 mins", occupancy: 33 },
    { busId: 8, eta: "24 mins", occupancy: 58 }
  ],
  3: [ // Route 3
    { busId: 3, eta: "8 mins", occupancy: 62 },
    { busId: 9, eta: "18 mins", occupancy: 41 }
  ]
};

export const analytics = {
  totalTrips: 156,
  averageDelay: "3.2 mins",
  activeBuses: 12,
  totalPassengers: 1247
};