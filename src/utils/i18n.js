// Simple internationalization utility
const translations = {
  en: {
    'admin.title': 'Admin Panel',
    'admin.fleet_status': 'Fleet Status',
    'admin.live_fleet_map': 'Live Fleet Map',
    'driver.title': 'Driver Dashboard',
    'driver.trip_control': 'Trip Control',
    'driver.current_status': 'Current Status',
    'driver.trip_history': 'Trip History',
    'commuter.title': 'Bus Tracker',
    'bus_search.title': 'Find Your Bus',
    'bus_search.found_buses': 'Found {count} bus(es)',
    'route_search.title': 'Plan Your Journey',
    'route_search.available_routes': 'Available Routes',
    'bus_queue.title': 'Bus Queue & Schedule',
    'contact.title': 'Contact Us',
    'contact.send_message': 'Send us a Message',
    'about.title': 'About TrackMyBus',
    'about.our_mission': 'Our Mission',
    'footer.trackmybus': 'TrackMyBus',
    'landing.title': 'TrackMyBus',
    'landing.why_choose': 'Why Choose TrackMyBus?',
    'landing.ready_transform': 'Ready to Transform Your Commute?',
    'bus_tracker.select_bus': 'Select a bus to view live tracking'
  }
};

export const t = (key, params = {}) => {
  let translation = translations.en[key] || key;
  Object.keys(params).forEach(param => {
    translation = translation.replace(`{${param}}`, params[param]);
  });
  return translation;
};