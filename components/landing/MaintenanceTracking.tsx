import Image from 'next/image';
import { Zap, Star, ClipboardCheck, Clock } from 'lucide-react';

const MaintenanceTracking: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <p className="text-[#FFBD7A] uppercase font-medium text-sm mb-2">HOW IT WORKS</p>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          Maintenance tracking<br />you&apos;ll enjoy using
        </h2>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-12">
          {/* Feature 1 */}
          <div className="flex items-start space-x-5">
            <div className="flex-shrink-0">
              <div className="bg-[#FFBD7A]/10 p-3 rounded-full">
                <Zap className="h-6 w-6 text-[#FFBD7A]" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Designed to move fast</h3>
              <p className="text-gray-600">
                Streamlined interfaces and intelligent automation reduce administrative overhead and response times.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex items-start space-x-5">
            <div className="flex-shrink-0">
              <div className="bg-[#FFBD7A]/10 p-3 rounded-full">
                <ClipboardCheck className="h-6 w-6 text-[#FFBD7A]" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Built for maintenance teams, not IT experts</h3>
              <p className="text-gray-600">
                Every feature is designed with detailing professionals in mind, eliminating the steep learning curve and technical jargon found in generic alternatives.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex items-start space-x-5">
            <div className="flex-shrink-0">
              <div className="bg-[#FFBD7A]/10 p-3 rounded-full">
                <Star className="h-6 w-6 text-[#FFBD7A]" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">See everything that matters, nothing that doesn&apos;t</h3>
              <p className="text-gray-600">
                Clear, uncluttered dashboards show critical information at a glance, helping your team focus on priorities without drowning in unnecessary data and complex menus.
              </p>
            </div>
          </div>
        </div>

        {/* Image section */}
        <div className="relative rounded-lg shadow-2xl overflow-hidden">
          <Image 
            src="/light.png" 
            alt="Maintenance tracking software interface" 
            width={600} 
            height={500}
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default MaintenanceTracking;