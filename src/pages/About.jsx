import { t } from '../utils/i18n';

const About = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 overflow-hidden transition-colors duration-500 pt-20">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <span className="material-icons text-6xl text-blue-600 mb-4 block">info</span>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            {t('about.title')}
          </h1>
          <p className="text-xl text-gray-600">Real-time bus tracking made simple</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white/80 backdrop-blur-xl rounded-xl p-6 shadow-xl border border-white/20">
            <span className="material-icons text-3xl text-blue-600 mb-4 block">directions_bus</span>
            <h3 className="text-xl font-bold mb-3">Real-time Tracking</h3>
            <p className="text-gray-600">Track buses in real-time with precise GPS locations, just like food delivery apps.</p>
          </div>

          <div className="bg-white/80 backdrop-blur-xl rounded-xl p-6 shadow-xl border border-white/20">
            <span className="material-icons text-3xl text-green-600 mb-4 block">schedule</span>
            <h3 className="text-xl font-bold mb-3">Smart ETAs</h3>
            <p className="text-gray-600">Get accurate arrival times and never miss your bus again with intelligent predictions.</p>
          </div>

          <div className="bg-white/80 backdrop-blur-xl rounded-xl p-6 shadow-xl border border-white/20">
            <span className="material-icons text-3xl text-purple-600 mb-4 block">route</span>
            <h3 className="text-xl font-bold mb-3">Route Planning</h3>
            <p className="text-gray-600">Plan your journey with multiple route options and real-time updates.</p>
          </div>

          <div className="bg-white/80 backdrop-blur-xl rounded-xl p-6 shadow-xl border border-white/20">
            <span className="material-icons text-3xl text-orange-600 mb-4 block">group</span>
            <h3 className="text-xl font-bold mb-3">For Everyone</h3>
            <p className="text-gray-600">Designed for passengers, drivers, and administrators with role-based access.</p>
          </div>
        </div>

        <div className="bg-white/80 backdrop-blur-xl rounded-xl p-8 shadow-xl border border-white/20 text-center">
          <h2 className="text-2xl font-bold mb-4">{t('about.our_mission')}</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            To revolutionize public transportation by providing real-time tracking and smart features 
            that make commuting more efficient, reliable, and stress-free for everyone.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;