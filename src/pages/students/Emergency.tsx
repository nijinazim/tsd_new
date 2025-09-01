// src/pages/students/Emergency.tsx
import React from "react";
import HeroSectionSmall from "../../components/HeroSectionSmall";
import TipsCarousel from "../../components/TipsCarousel";
import { jsPDF } from "jspdf";
import { Download, Printer } from "lucide-react";
import "../../style/print.css";
import NavigationButtons from "../../components/NavigationButtons";

const emergencyTips = [
  { title: "Know Numbers", description: "Keep emergency numbers handy at all times." },
  { title: "Health Services", description: "Familiarize yourself with nearby hospitals and clinics." },
  { title: "Embassy Contacts", description: "Know your embassy’s contact for urgent assistance." },
  { title: "Student Support", description: "Reach out to university support for emergencies." },
];

// Function to generate PDF with logo
const generatePDF = () => {
  const doc = new jsPDF();

  // Add logo
  const logoImg = new Image();
  logoImg.src = "/images/tsd-logo.png";
  logoImg.onload = () => {
    doc.addImage(logoImg, "PNG", 80, 10, 50, 20); // x, y, width, height

    doc.setFont("helvetica", "bold");
    doc.setFontSize(16);
    doc.text("Emergency & Essential Contacts (UAE)", 14, 40);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(12);
    let y = 50;

    const sections = [
      {
        title: "General Emergencies",
        contacts: [
          ["Police", "999", "Crime, personal safety, suspicious activity"],
          ["Ambulance", "998", "Medical emergencies"],
          ["Fire Department", "997", "Fires, smoke, gas leaks"],
          ["Civil Defence", "996", "Natural hazards, disaster support"],
          ["Traffic Accidents", "999", "Call police directly if you’re in or witness an accident"],
        ],
      },
      {
        title: "Health & Medical Support",
        contacts: [
          ["DHA", "800 342", "Licensed clinics, hospitals, vaccines"],
          ["SEHA (Abu Dhabi)", "800 50", "Clinics & health queries"],
          ["NMC", "800 6624", "Non-emergency & emergency treatment"],
          ["Aster Healthcare", "www.asterdmhealthcare.com", "Hospitals & clinics"],
          ["Mediclinic", "800 2000", "Hospitals & clinics"],
          ["Mental Health (Dubai)", "04 519 2519", "Rashid Hospital Psychiatry Dept. (24/7)"],
        ],
      },
      {
        title: "Embassy & Consulate Assistance",
        contacts: [
          ["Indian Embassy (Abu Dhabi)", "02 449 2700"],
          ["Pakistan Consulate (Dubai)", "04 397 3600"],
          ["British Embassy (Abu Dhabi)", "02 610 1100"],
          ["US Embassy (Abu Dhabi)", "02 414 2200"],
          ["Philippine Consulate (Dubai)", "04 220 7100"],
        ],
      },
    ];

    sections.forEach((section) => {
      doc.setFont("helvetica", "bold");
      doc.text(section.title, 14, y);
      y += 8;

      doc.setFont("helvetica", "normal");
      section.contacts.forEach((c) => {
        doc.text(`• ${c[0]}: ${c[1]} ${c[2] ? `- ${c[2]}` : ""}`, 16, y);
        y += 7;
      });

      y += 6; // spacing
    });

    doc.save("emergency_contacts.pdf");
  };
};

// Print version
const printPage = () => {
  window.print();
};

export default function Emergency() {
  return (
    <main className="max-w-6xl mx-auto">

      {/* Hero Section */}
      <HeroSectionSmall
        title="Emergency & Essential Contacts"
        subtitle="Important contacts for medical emergencies, police, embassies, and student support services."
        icon="/icons/emergency.svg"
        image="/images/student-hero-emergency.jpg"
      />

      <div className="py-16 px-6 space-y-16">
        {/* Action Buttons */}
        <div className="print:hidden">
          <div className="flex justify-end gap-3 mb-6">
            <button
              onClick={generatePDF}
              className="flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg shadow transition"
            >
              <Download className="w-4 h-4" />
              Download PDF
            </button>

            <button
              onClick={printPage}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow transition"
            >
              <Printer className="w-4 h-4" />
              Print Version
            </button>
          </div>
        </div>

        {/* Intro Section */}
        <section className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-2xl font-bold mb-4">Emergency Contacts & Services</h2>
          <p className="text-gray-700">
            Whether it’s a minor issue or an emergency, knowing who to call can make all the difference.
            Save these numbers in your phone and share with your flatmates and friends, just in case.
          </p>
        </section>

        {/* General Emergencies */}
<section>
  <h2 className="text-2xl font-bold mb-4">General Emergencies</h2>
  <div className="overflow-x-auto">
    <table className="min-w-full bg-white rounded-lg shadow">
      <thead className="bg-red-100">
        <tr>
          <th className="px-4 py-2 text-left">Service</th>
          <th className="px-4 py-2 text-left">Number</th>
          <th className="px-4 py-2 text-left">What it’s for</th>
        </tr>
      </thead>
      <tbody className="divide-y">
        <tr>
          <td className="px-4 py-2">Police</td>
          <td className="px-4 py-2">999</td>
          <td className="px-4 py-2">Crime, personal safety, or suspicious activity</td>
        </tr>
        <tr>
          <td className="px-4 py-2">Ambulance</td>
          <td className="px-4 py-2">998</td>
          <td className="px-4 py-2">Medical emergencies</td>
        </tr>
        <tr>
          <td className="px-4 py-2">Fire Department</td>
          <td className="px-4 py-2">997</td>
          <td className="px-4 py-2">Fires, smoke, gas leaks</td>
        </tr>
        <tr>
          <td className="px-4 py-2">Civil Defence</td>
          <td className="px-4 py-2">996</td>
          <td className="px-4 py-2">Natural hazards, disaster support</td>
        </tr>
        <tr>
          <td className="px-4 py-2">Traffic Accidents</td>
          <td className="px-4 py-2">999</td>
          <td className="px-4 py-2">Call police directly if you’re in or witness an accident</td>
        </tr>
      </tbody>
    </table>
  </div>
</section>
{/* Health & Medical Support */}
 <section>
   <h2 className="text-2xl font-bold mb-4">Health & Medical Support</h2> 
   <div className="overflow-x-auto"> 
    <table className="min-w-full bg-white rounded-lg shadow">
       <thead className="bg-blue-100"> <tr>
        <th className="px-4 py-2 text-left">Service</th> 
        <th className="px-4 py-2 text-left">Contact</th> 
        </tr>
         </thead>
          <tbody className="divide-y"> 
            <tr><td className="px-4 py-2">Dubai Health Authority (DHA)</td>
            <td className="px-4 py-2">800 342 (DHA)</td></tr>
             <tr><td className="px-4 py-2">Abu Dhabi SEHA Hotline</td>
             <td className="px-4 py-2">800 50</td></tr> 
             <tr><td className="px-4 py-2">NMC / Aster / Mediclinic Clinics</td>
             <td className="px-4 py-2">NMC: 800 6624<br/>Aster: <a href="https://www.asterdmhealthcare.com/" target="_blank"className="text-blue-600 underline">Website</a>
             <br/>Mediclinic: 800 2000</td></tr>
              <tr><td className="px-4 py-2">Mental Health Support (Dubai)</td>
              <td className="px-4 py-2">04 519 2519 (Rashid Hospital Psychiatry Dept., 24/7)</td></tr> 
              </tbody> </table> 
              </div> 
              </section> 
              {/* Embassy & Consulate Assistance */} 
              <section> 
                <h2 className="text-2xl font-bold mb-4">Embassy & Consulate Assistance</h2> 
                <p className="mb-4 text-gray-700">If you lose your passport or face a legal issue, contact your embassy for immediate support.</p> 
                <div className="overflow-x-auto"> <table className="min-w-full bg-white rounded-lg shadow"> 
                  <thead className="bg-green-100"> 
                    <tr> <th className="px-4 py-2 text-left">Embassy</th> 
                    <th className="px-4 py-2 text-left">General Contact</th>
                     </tr> 
                     </thead> 
                     <tbody className="divide-y">
                      <tr><td className="px-4 py-2">Indian Embassy (Abu Dhabi)</td>
                      <td className="px-4 py-2">02 449 2700</td></tr> 
                      <tr><td className="px-4 py-2">Pakistan Consulate (Dubai)</td>
                      <td className="px-4 py-2">04 397 3600</td></tr>
                       <tr><td className="px-4 py-2">British Embassy (Abu Dhabi)</td>
                       <td className="px-4 py-2">02 610 1100</td></tr> 
                       <tr><td className="px-4 py-2">US Embassy (Abu Dhabi)</td>
                       <td className="px-4 py-2">02 414 2200</td></tr>
                        <tr><td className="px-4 py-2">Philippine Consulate (Dubai)</td>
                        <td className="px-4 py-2">04 220 7100</td></tr>
                         </tbody>
                          </table> 
                          </div>
                           <p className="mt-4 text-gray-600 text-sm"> *For other nationalities, check your embassy’s UAE page or contact Ministry of Foreign Affairs at <strong>800 44444</strong>.
             </p>
              </section>

        {/* Tips Carousel */}
        <section>
          <div className="print:hidden">
            <h2 className="text-2xl font-semibold mb-4">TSD Pro Tips!</h2>
            <TipsCarousel tips={emergencyTips} duration={30} />
          </div>
        </section>
      </div>

      <div className="print:hidden">
        <NavigationButtons />
      </div>
    </main>
  );
}
