import { GoLaw } from "react-icons/go";
export default function LawyerWebsiteUI() {
  return (
    <div className="min-h-screen bg-[#F8F5F0] text-[#1A1A1A] font-sans">
      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-[#E5E0D8]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-wide text-[#0F172A]">
              Justice & Co.
            </h1>
            <p className="text-xs text-[#8B6F47] tracking-[3px] uppercase">
              Legal Consultants
            </p>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-[15px] font-medium">
            <a href="#home" className="hover:text-[#8B6F47] transition">
              Home
            </a>
            <a href="#services" className="hover:text-[#8B6F47] transition">
              Services
            </a>
            <a href="#about" className="hover:text-[#8B6F47] transition">
              About
            </a>
            <a href="#contact" className="hover:text-[#8B6F47] transition">
              Contact
            </a>
          </nav>

          <button className="bg-[#8B6F47] hover:bg-[#6D5536] text-white px-5 py-3 rounded-xl text-sm font-semibold shadow-lg transition-all">
            Book Consultation
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="relative overflow-hidden bg-gradient-to-br from-[#0F172A] via-[#111827] to-[#1E293B] text-white"
      >
        <div
          className="absolute inset-0  bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1974&auto=format&fit=crop')",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-36 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 px-4 py-2 rounded-full mb-6">
              <div className="w-2 h-2 rounded-full bg-[#C8A97E]" />
              <span className="text-sm text-[#E5D3B3]">
                Trusted Legal Excellence
              </span>
            </div>

            <h2 className="text-5xl lg:text-7xl font-bold leading-tight tracking-tight">
              Professional Legal Solutions For Modern Clients
            </h2>

            <p className="mt-8 text-lg text-[#D1D5DB] leading-8 max-w-xl">
              We provide strategic legal representation and business-focused
              advisory services with integrity, precision, and professionalism.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <button className="bg-[#C8A97E] hover:bg-[#B18D5E] text-black px-7 py-4 rounded-2xl font-semibold transition shadow-2xl">
                Schedule Meeting
              </button>

              <button className="border border-white/20 hover:bg-white/10 px-7 py-4 rounded-2xl bg-black font-semibold transition">
                Explore Services
              </button>
            </div>

            <div className="grid grid-cols-3 gap-6 mt-16">
              {[
                { number: "15+", label: "Years Experience" },
                { number: "1200+", label: "Cases Solved" },
                { number: "98%", label: "Client Satisfaction" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white/5 border border-white/10 rounded-2xl p-5"
                >
                  <h3 className="text-3xl font-bold text-[#E5D3B3]">
                    {item.number}
                  </h3>
                  <p className="mt-2 text-sm text-[#CBD5E1]">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#C8A97E]/20 blur-3xl rounded-full" />

            {/* <div className="relative bg-white/10 border border-white/10 backdrop-blur-xl rounded-[32px] overflow-hidden shadow-2xl">
              <img
                src="/hero.jpg"
                alt="Lawyer"
                className="w-full h-[650px] object-cover"
              />

              <div className="absolute bottom-6 left-6 right-6 bg-white text-black p-6 rounded-3xl shadow-2xl">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">Senior Advocate</p>
                    <h3 className="text-2xl font-bold mt-1">
                      Adv. Michael Carter
                    </h3>
                  </div>

                  <div className="bg-[#0F172A] text-white px-4 py-2 rounded-xl text-sm font-medium">
                    Supreme Court
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
            <div>
              <p className="text-[#8B6F47] uppercase tracking-[4px] text-sm font-semibold">
                Our Expertise
              </p>
              <h2 className="text-4xl lg:text-5xl font-bold mt-4 leading-tight text-[#0F172A] max-w-2xl">
                Legal Services Tailored For Businesses & Individuals
              </h2>
            </div>

            <p className="text-gray-600 max-w-xl leading-8 text-lg">
              Our multidisciplinary legal team provides comprehensive support in
              corporate law, property disputes, criminal defense, and civil
              litigation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {[
              {
                title: "Corporate Law",
                desc: "Business agreements, compliance, partnerships, mergers, and legal structuring.",
              },
              {
                title: "Property Disputes",
                desc: "Professional representation for land, property ownership, and real estate matters.",
              },
              {
                title: "Criminal Defense",
                desc: "Strategic legal defense with confidential and dedicated case handling.",
              },
              {
                title: "Family Law",
                desc: "Divorce, child custody, domestic matters, and family legal advisory.",
              },
              {
                title: "Civil Litigation",
                desc: "Efficient dispute resolution and courtroom representation for civil matters.",
              },
              {
                title: "Startup Advisory",
                desc: "Legal setup, contracts, intellectual property, and compliance guidance.",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="group bg-[#F8F5F0] border flex flex-row border-[#ECE7DF] hover:bg-[#0F172A] rounded-[28px] p-8 transition-all duration-500 shadow-sm hover:shadow-2xl"
              >
                <div className="w-16 h-16 rounded-2xl bg-[#E8DDCC] group-hover:bg-[#C8A97E] transition flex items-center justify-center text-2xl mb-8">
                  <GoLaw className="w-6 h-6" />
                </div>
                <div className=" flex justify-center flex-col">
                  <h3 className="text-2xl font-bold text-[#111827] group-hover:text-white transition">
                    {service.title}
                  </h3>

                  <p className="mt-5 text-gray-600 group-hover:text-[#CBD5E1] leading-8 transition">
                    {service.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-[#F8F5F0]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -bottom-8 -right-8 bg-[#C8A97E] rounded-3xl p-8 shadow-2xl">
              <h3 className="text-4xl font-bold text-black">20+</h3>
              <p className="mt-2 text-sm text-black/70 font-medium">
                Legal Professionals
              </p>
            </div>

            <img
              src="/hero2.jpg"
              alt="Law Firm"
              className="rounded-[36px] w-full h-[650px] object-cover shadow-2xl"
            />
          </div>

          <div>
            <p className="text-[#8B6F47] uppercase tracking-[4px] text-sm font-semibold">
              About Our Firm
            </p>

            <h2 className="text-4xl lg:text-5xl font-bold mt-5 leading-tight text-[#0F172A]">
              Trusted Legal Representation With Strategic Thinking
            </h2>

            <p className="mt-8 text-lg text-gray-600 leading-8">
              Justice & Co. is a modern legal consultancy focused on delivering
              result-oriented legal services with professionalism and complete
              transparency.
            </p>

            <div className="space-y-6 mt-10">
              {[
                "Dedicated legal experts across multiple practice areas",
                "Transparent communication and ethical representation",
                "Client-focused strategy and personalized solutions",
                "Technology-driven modern legal workflow",
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#C8A97E] flex items-center justify-center text-black font-bold">
                    ✓
                  </div>

                  <p className="text-lg text-gray-700 leading-8">{item}</p>
                </div>
              ))}
            </div>

            <button className="mt-12 bg-[#0F172A] hover:bg-[#111827] text-white px-8 py-4 rounded-2xl font-semibold transition shadow-xl">
              Read More About Us
            </button>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-[#0F172A] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_white,_transparent)]" />

        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <p className="uppercase tracking-[4px] text-[#E5D3B3] text-sm font-semibold">
            Professional Legal Consultation
          </p>

          <h2 className="text-4xl lg:text-6xl font-bold mt-6 leading-tight">
            Need Reliable Legal Advice For Your Case?
          </h2>

          <p className="mt-8 text-lg text-[#CBD5E1] leading-8 max-w-3xl mx-auto">
            Connect with our experienced legal professionals for strategic
            consultation and effective legal solutions.
          </p>

          <button className="mt-10 bg-[#C8A97E] hover:bg-[#B18D5E] text-black px-8 py-4 rounded-2xl font-bold text-lg transition shadow-2xl">
            Contact Our Team
          </button>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16">
          <div>
            <p className="text-[#8B6F47] uppercase tracking-[4px] text-sm font-semibold">
              Contact Us
            </p>

            <h2 className="text-4xl lg:text-5xl font-bold mt-5 text-[#0F172A] leading-tight">
              Let’s Discuss Your Legal Requirements
            </h2>

            <p className="mt-8 text-lg text-gray-600 leading-8 max-w-xl">
              Reach out to our legal team for confidential consultation,
              professional guidance, and strategic representation.
            </p>

            <div className="space-y-6 mt-12">
              {[
                {
                  title: "Office Address",
                  value: "Business Bay Towers, Pune, Maharashtra",
                },
                {
                  title: "Phone Number",
                  value: "+91 98765 43210",
                },
                {
                  title: "Email Address",
                  value: "contact@justiceco.com",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-5 bg-[#F8F5F0] p-6 rounded-3xl border border-[#ECE7DF]"
                >
                  <div className="w-14 h-14 rounded-2xl bg-[#0F172A] text-white flex items-center justify-center text-xl">
                    ⚖️
                  </div>

                  <div>
                    <p className="text-sm text-gray-500">{item.title}</p>
                    <h3 className="mt-2 text-lg font-semibold text-[#111827]">
                      {item.value}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#F8F5F0] border border-[#ECE7DF] rounded-[36px] p-8 lg:p-10 shadow-lg">
            <h3 className="text-3xl font-bold text-[#0F172A]">Send Inquiry</h3>

            <p className="mt-3 text-gray-600 leading-7">
              Fill out the form and our team will contact you shortly.
            </p>

            <div className="mt-10 space-y-6">
              <div>
                <label className="block text-sm font-semibold mb-3">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full h-14 rounded-2xl border border-[#DDD6CC] bg-white px-5 outline-none focus:ring-2 focus:ring-[#C8A97E]"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-3">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full h-14 rounded-2xl border border-[#DDD6CC] bg-white px-5 outline-none focus:ring-2 focus:ring-[#C8A97E]"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-3">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="Enter subject"
                  className="w-full h-14 rounded-2xl border border-[#DDD6CC] bg-white px-5 outline-none focus:ring-2 focus:ring-[#C8A97E]"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-3">
                  Message
                </label>
                <textarea
                  rows={5}
                  placeholder="Write your message"
                  className="w-full rounded-2xl border border-[#DDD6CC] bg-white p-5 outline-none focus:ring-2 focus:ring-[#C8A97E]"
                />
              </div>

              <button className="w-full bg-[#0F172A] hover:bg-[#111827] text-white py-4 rounded-2xl font-semibold text-lg transition shadow-xl">
                Submit Request
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0B1120] text-white pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <h2 className="text-3xl font-bold">Justice & Co.</h2>
            <p className="mt-6 text-[#CBD5E1] leading-8">
              Professional legal consultancy delivering trusted and strategic
              legal services.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Quick Links</h3>
            <div className="mt-6 flex flex-col gap-4 text-[#CBD5E1]">
              <a href="#home" className="hover:text-white transition">
                Home
              </a>
              <a href="#services" className="hover:text-white transition">
                Services
              </a>
              <a href="#about" className="hover:text-white transition">
                About Us
              </a>
              <a href="#contact" className="hover:text-white transition">
                Contact
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Practice Areas</h3>
            <div className="mt-6 flex flex-col gap-4 text-[#CBD5E1]">
              <p>Corporate Law</p>
              <p>Criminal Defense</p>
              <p>Property Disputes</p>
              <p>Civil Litigation</p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Newsletter</h3>

            <p className="mt-6 text-[#CBD5E1] leading-8">
              Subscribe for legal insights and professional updates.
            </p>

            <div className="mt-6 flex gap-3">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 h-12 rounded-xl bg-white/10 border border-white/10 px-4 outline-none"
              />

              <button className="bg-[#C8A97E] hover:bg-[#B18D5E] text-black px-5 rounded-xl font-semibold transition">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-10 mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-[#94A3B8]">
          <p>© 2026 Justice & Co. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
