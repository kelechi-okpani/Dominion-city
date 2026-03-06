import { Calendar, MapPin, Zap, ArrowRight, CheckCircle, Flame, Star, Trophy, Clock, Sparkles } from 'lucide-react';

// --- DATA FOR 2025 (History & Replays) ---
export const pastEvents2025 = [
  {
    id: "25-1",
    title: "Global Camp Meeting",
    date: "April 17 - 21, 2025",
    location: "Golden Heart Place, Lekki-Epe, Lagos",
    theme: "Revival & Multiplication",
    description: "The landmark convocation that sparked a global wave of revival across 40 countries.",
    category: "Global",
    icon: <Flame size={20} className="text-[#D4AF37]" />
  },
  {
    id: "25-2",
    title: "Abuja Night of Glory",
    date: "December 5, 2025",
    location: "Moshood Abiola Stadium, Abuja",
    theme: "Raising Leaders, Transforming Society",
    description: "A record-breaking night of intercession and miracles with over 50,000 worshippers in person.",
    category: "Crusade",
    icon: <Star size={20} className="text-[#003399]" />
  },
  {
    id: "25-3",
    title: "Abuja Gospel Festival",
    date: "February 2025",
    location: "Dominion City Gudu HQ",
    theme: "Financial Dominion",
    description: "A specialized summit equipping the Gudu family with kingdom economic strategies.",
    category: "Summit",
    icon: <Trophy size={20} className="text-[#D4AF37]" />
  }
];

// --- DATA FOR 2026 (Upcoming Mandates) ---
export const upcomingEvents2026 = [
    
  {
    id: 1,
    title: "Global Camp Meeting 2026",
    date: "Tue. April 1 — Mon. April 6, 2026",
    location: "The Golden Heart Place / Online",
    theme: "UNLEASH THE POWER",
    description: "The premier global convocation. This year focuses on spiritual breakthroughs and positioning 'Kings and Priests' to lead in their various sectors.",
    category: "Global Convocation",
    icon: <Sparkles size={20} className="text-[#D4AF37]" />,
    highlight: "Guest Ministers: Andres Bissoni & Anthony Kani"
  },
 {
    id: 2,
    title: "RUN Conference 2026",
    date: "February 18 - 20, 2026", // Verified: Took place in February 2026
    location: "Dominion City Abuja HQ (Gudu)",
    theme: "HOW TO STAND ON THE SHOULDERS OF FATHERS",
    description: "A high-octane leadership conference designed to accelerate purpose by leveraging spiritual lineage and institutional legacy.",
    category: "Leadership",
    icon: <Zap size={20} className="text-[#003399]" />,
    highlight: "Featuring Dr. David Ogbueli"
  },
  {
    id: 3,
    title: "The Abuja Business Summit",
    date: "", // Date not officially confirmed; skipped per instructions
    location: "Abuja",
    theme: "ETHICAL WEALTH & GOVERNANCE",
    description: "Aligning professionals, civil servants, and entrepreneurs with Kingdom economic principles for national transformation.",
    category: "Marketplace",
    icon: <Trophy size={20} className="text-[#D4AF37]" />,
    highlight: "DLI Business Hub Launch"
  },
  {
    id: 4,
    title: "Asaba Post-Encounter 2026",
    date: "February 26 - March 1, 2026", // Verified: Concluded early March
    location: "Dominion City Asaba HQ",
    theme: "HOW TO HOST GOD'S PRESENCE",
    description: "An intensive focused on the mechanics of the spirit—learning to sustain the glory and lead culture change.",
    category: "Retreat",
    icon: <Flame size={20} className="text-orange-500" />,
    highlight: "Theme: Restoring the Dignity of Priesthood"
  },
  {
    id: 5,
    title: "International Pastors & Workers Conference",
    date: "", // Specific October dates not yet released; skipped
    location: "Lagos Headquarters",
    theme: "RESTORING THE ORDER",
    description: "The global gathering for ministers and workers to align with the systemic and spiritual order required for the next decade.",
    category: "Training",
    icon: <Clock size={20} className="text-[#003399]" />,
    highlight: "Certification for DLI Instructors"
  }
];