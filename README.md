# 🚌 Real-Time Bus Tracking System

**A comprehensive Swiggy-style bus tracking application** - Track buses in real-time with live location updates, route planning, and queue management.

## 🌟 Key Features

### 🗺️ **Journey Planning (Like "Where is my Train")**
- **From-To Route Search**: Enter source and destination to find available routes
- **Multiple Route Options**: Compare different routes with time, fare, and stops
- **Real-time Route Information**: Distance, duration, frequency, and fare details
- **Smart Route Suggestions**: Get the best routes based on your preferences

### 🔍 **Bus Search & Discovery**
- **Search by Bus Number**: Find specific buses (e.g., DL-1PC-0101)
- **Search by Driver Name**: Locate buses by driver information
- **Route-based Filtering**: Filter buses by specific routes
- **Real-time Bus Status**: Running, At Stop, Delayed status indicators
- **Occupancy Levels**: Visual indicators for bus crowding

### ⏰ **Bus Queue & Schedule ("Where is my Bus")**
- **Live Bus Queue**: See upcoming buses in arrival order
- **ETA Predictions**: Accurate arrival time estimates
- **Queue Position**: Know exactly which bus is coming next
- **Occupancy Forecast**: Plan based on expected bus crowding
- **Frequency Information**: Bus intervals and schedule details

### 📍 **Live Bus Tracking (Swiggy-style)**
- **Real-time Location**: Live GPS tracking with moving bus icons
- **Route Visualization**: Complete route path with stops marked
- **Live Status Updates**: Speed, next stop, and current status
- **Driver Information**: Contact details for emergencies
- **Coverage Area**: Visual radius showing bus proximity
- **Animated Movement**: Smooth real-time position updates

### 📱 **Enhanced User Experience**
- **Tab-based Navigation**: Easy switching between features
- **Live Tracking Banner**: Persistent tracking status (like food delivery)
- **Emergency Contacts**: Quick access to driver and control room
- **Popular Routes**: Quick access to frequently used routes
- **Search History**: Remember recent searches
- **Mobile Responsive**: Optimized for all devices

## 🛠️ Tech Stack

- **React 18** - Modern frontend framework
- **React Router** - Client-side navigation
- **Tailwind CSS** - Utility-first styling
- **Leaflet.js** - Interactive mapping
- **React Leaflet** - React integration for maps
- **Custom Icons** - SVG-based bus and stop markers

## 🚀 Installation & Setup

1. **Clone and navigate to project:**
```bash
cd transport-tracker
```

2. **Install dependencies:**
```bash
npm install
```

3. **Start development server:**
```bash
npm start
```

4. **Open in browser:**
```
http://localhost:3000
```

## 📁 Enhanced Project Structure

```
src/
├── components/
│   ├── Navbar.jsx          # Navigation component
│   ├── Map.jsx             # Basic map component
│   ├── BusTracker.jsx      # Live bus tracking with route
│   ├── RouteSearch.jsx     # Journey planning component
│   ├── BusSearch.jsx       # Bus finder component
│   └── BusQueue.jsx        # Bus queue & schedule
├── pages/
│   ├── Landing.jsx         # Landing page
│   ├── Commuter.jsx        # Enhanced commuter dashboard
│   ├── Driver.jsx          # Driver interface
│   └── Admin.jsx           # Admin dashboard
├── data/
│   └── mockData.js         # Comprehensive mock data
├── App.js                  # Main app component
└── index.js               # Entry point
```

## 🎯 Core Features Implemented

### ✅ **Journey Planning**
- From-to route search with multiple options
- Fare calculation and time estimation
- Route comparison with detailed information
- Smart suggestions based on stops

### ✅ **Bus Discovery**
- Advanced search by number, driver, or route
- Real-time status and occupancy display
- Queue position tracking
- Driver contact information

### ✅ **Live Tracking**
- Real-time GPS simulation with smooth movement
- Complete route visualization with stops
- Live status updates (speed, next stop, ETA)
- Emergency contact integration

### ✅ **Queue Management**
- Upcoming buses in chronological order
- Real-time ETA updates
- Occupancy predictions
- Interactive bus selection

### ✅ **User Experience**
- Swiggy-style tracking interface
- Tab-based navigation system
- Live tracking banner
- Mobile-responsive design

## 📊 Mock Data Features

### **Comprehensive Bus Network:**
- **15 Bus Stops** across Delhi NCR
- **5 Major Routes** with different colors
- **6 Active Buses** with real-time data
- **Queue Management** for each route

### **Real-time Simulation:**
- Live GPS coordinates with movement
- Dynamic ETA calculations
- Status updates (Running, At Stop, Delayed)
- Occupancy level tracking
- Driver information and contact details

### **Route Information:**
- Complete stop sequences
- Distance and duration data
- Fare structure
- Frequency information
- Color-coded route identification

## 🎨 UI/UX Highlights

- **Swiggy-inspired Design**: Familiar tracking interface
- **Live Status Indicators**: Animated pulse effects for active tracking
- **Color-coded Routes**: Easy visual identification
- **Occupancy Bars**: Visual crowding indicators
- **Emergency Access**: Quick contact options
- **Responsive Layout**: Works on all screen sizes

## 🔮 Future Enhancements

- **Real Backend Integration**: Connect to actual GPS systems
- **Push Notifications**: Bus arrival alerts
- **User Accounts**: Personalized experience
- **Payment Integration**: Digital ticketing
- **Offline Mode**: Cached data for poor connectivity
- **Multi-language Support**: Regional language options
- **Accessibility Features**: Screen reader support
- **Analytics Dashboard**: Usage patterns and insights

## 🎯 Use Cases

1. **Daily Commuters**: Plan and track regular routes
2. **Tourists**: Discover new routes and navigate the city
3. **Students**: Affordable and reliable transport tracking
4. **Office Workers**: Optimize commute timing
5. **Emergency Situations**: Quick access to driver contacts

---

**Built with ❤️ for SIH 2025** - Making public transport as trackable as food delivery!