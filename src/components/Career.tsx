import { Mail, Phone, MapPin } from "lucide-react";

export default function CareerPage() {
  return (
    <div className="min-h-screen pt-20 font-['Inter']">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Left Side - Contact Information */}
          <div className="md:col-span-1 ">
            <div className="bg-white rounded-2xl shadow-lg p-8 sticky top-8">
              <h2 className="text-xl font-bold text-slate-800 mb-6">
                Get in Touch
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full border-2 border-yellow-400 bg-yellow-50 flex items-center justify-center">
                    <Mail className="w-6 h-6 text-yellow-500" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-600 mb-1">
                      Email HR
                    </p>
                    <a
                      href="mailto:hr@dignisys.com"
                      className="text-slate-800 hover:text-yellow-500 transition-colors font-medium"
                    >
                      hr@dignisys.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full border-2 border-yellow-400 bg-yellow-50 flex items-center justify-center">
                    <Phone className="w-6 h-6 text-yellow-500" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-600 mb-1">
                      Phone
                    </p>
                    <a
                      href="tel:+1845213-1121"
                      className="text-slate-800 hover:text-yellow-500 transition-colors font-medium"
                    >
                      +1 (845) 213-1121
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full border-2 border-yellow-400 bg-yellow-50 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-yellow-500" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-600 mb-1">
                      Location
                    </p>
                    <p className="text-slate-800 font-medium">
                      A-401, Tower A,
                      <br /> Bestech Business Tower, <br />
                      Sector – 66, Mohali 160066, <br /> PUNJAB
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-200">
                <p className="text-sm text-slate-600 leading-relaxed">
                  Have questions about opportunities? Feel free to reach out to
                  our HR team.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Career Content */}
          <div className="md:col-span-2">
            <div className="mb-12">
              <h1 className="text-3xl sm:text-4xl md:text-4xl font-bold text-slate-800 mb-4">
                Join Our Team
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed">
                Build your career with us and make an impact
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <h2 className="text-xl font-bold text-slate-800 mb-6">
                Why Work With Us
              </h2>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-slate-50 rounded-xl p-6">
                  <h3 className="font-semibold text-xl text-slate-800 mb-2">
                    Growth Opportunities
                  </h3>
                  <p className="text-slate-600">
                    Continuous learning and career advancement
                  </p>
                </div>
                <div className="bg-slate-50 rounded-xl p-6">
                  <h3 className="font-semibold text-lg text-slate-800 mb-2">
                    Work-Life Balance
                  </h3>
                  <p className="text-slate-600">
                    Flexible schedules and remote options
                  </p>
                </div>
                <div className="bg-slate-50 rounded-xl p-6">
                  <h3 className="font-semibold text-lg text-slate-800 mb-2">
                    Great Benefits
                  </h3>
                  <p className="text-slate-600">
                    Comprehensive health and wellness packages
                  </p>
                </div>
                <div className="bg-slate-50 rounded-xl p-6">
                  <h3 className="font-semibold text-lg text-slate-800 mb-2">
                    Collaborative Culture
                  </h3>
                  <p className="text-slate-600">
                    Work with talented and passionate people
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-6">
                Our Values
              </h2>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="font-semibold text-lg text-slate-800 mb-2">
                    Innovation
                  </h3>
                  <p className="text-slate-600">
                    We encourage creative thinking and new ideas
                  </p>
                </div>
                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="font-semibold text-lg text-slate-800 mb-2">
                    Integrity
                  </h3>
                  <p className="text-slate-600">
                    We operate with honesty and transparency
                  </p>
                </div>
                <div className="border-l-4 border-orange-500 pl-6">
                  <h3 className="font-semibold text-lg text-slate-800 mb-2">
                    Excellence
                  </h3>
                  <p className="text-slate-600">
                    We strive for the highest quality in everything we do
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
