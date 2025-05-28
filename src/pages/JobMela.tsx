import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const sections = [
    {
        title: "🌟 What We’re Doing",
        description:
            "Our Mega Job Mela is not just about filling vacancies — it’s about building futures. We’re connecting half a million Indians to meaningful employment across sectors such as:",
        list: [
            "Information Technology",
            "Manufacturing & Industrial",
            "Healthcare & Life Sciences",
            "Logistics & Transportation",
            "Banking, Financial Services & Insurance (BFSI)",
            "Sales & Marketing",
            "Education & Training",
            "Administrative & Support Services",
            "Customer Service & BPO",
        ],
    },
    {
        title: "🤝 How We’re Changing Lives",
        list: [
            "👨‍👩‍👧‍👦 Direct Impact on 500,000 Families: Each job offered means a better future for an entire family, bringing in financial stability, access to better healthcare, education, and an improved quality of life.",
            "📈 Uplifting Local Economies: With over 200 cities participating, the influx of employment opportunities will boost local economies, support small businesses, and drive regional development.",
            "🧠 Skilling & Upskilling for the Future: We’re not just hiring — we’re also training and skilling the workforce to meet industry standards through specialized onboarding and learning programs in collaboration with top training partners.",
        ],
    },
    {
        title: "National Benefits – Economically, Socially & Financially",
        list: [
            "🏭 Economic Growth: Adding 500,000 productive contributors to the economy will enhance the national GDP, boost productivity, and reduce unemployment levels substantially.",
            "🕊 Social Inclusion & Equity: We are especially committed to ensuring inclusive hiring — offering equal opportunities to women, persons with disabilities, economically disadvantaged individuals, and fresh graduates.",
            "💰 Financial Empowerment: Employment translates to financial independence, improved savings, investment capacity, and reduced burden on social welfare systems.",
            "🧘 Mental Well-being & Stability: Having a stable job contributes to mental peace, reduced stress, and a more secure future for millions of Indian citizens.",
            "🌱 Sustainable Development: This drive is a model for sustainable economic development — nurturing talent domestically and reducing dependence on external labor forces.",
        ],
    },
    {
        title: "🛠 Building India’s Workforce of the Future",
        description:
            "This is more than a job fair — it’s a movement toward building “Bharat’s Skilled Workforce” — a future-ready talent pool that powers innovation, growth, and prosperity for generations to come. We invite you to be a part of this historic initiative — whether as a job seeker, a corporate partner, or a contributor to India’s transformation story.",
    },
    {
        title: "📍 Coming Soon to a City Near You",
        description:
            "Stay tuned for announcements, city-wise schedules, and registration details. Join us and become part of the mission to build a stronger, skilled, and self-reliant India. Together, we are not just offering jobs. We are creating hope. Building futures. Transforming India.",
    },
];

export default function MegaJobMelaPage() {

    const handleClick = () => {
        window.location.href = "https://forms.gle/RE4fqx1MGpuwvy8g6"
    }
    return (
        <div>
            <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white py-24">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -right-64 -top-64 w-[40rem] h-[40rem] rounded-full bg-primary-500 opacity-10"></div>
                    <div className="absolute -left-32 -bottom-32 w-[30rem] h-[30rem] rounded-full bg-secondary-500 opacity-10"></div>
                </div>

                <div className="container mx-auto  relative z-10">
                    <div className="max-w-full">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                                <span className="text-red-700">India’s Second Largest Mega Job Mela Across 200 Cities
                                </span>
                                <h3 className="text-xl md:text-2xl font-semibold text-blue-600">
                                    Empowering 5 Lakh Talents. Enriching Millions of Lives
                                </h3>
                            </h1>
                            <p className="text-xl text-neutral-200 mb-8 leading-relaxed">
                                We are a high-value recruitment agency dedicated to delivering top-tier talent at extraordinary scale. Backed by a deep commitment to precision hiring and workforce transformation, our agency is proudly contracted to recruit 500,000 employees exclusively for Amrown, a global disruptor in technology, digital infrastructure, and human-centric innovation.

                                Our mission is to redefine employment by aligning the right people with the right roles—across 200+ cities in India—within a framework of integrity, growth, and impact.

                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>
            <div className="max-w-6xl mx-auto space-y-14 md:px-20 md:py-6">
                {sections.map((section, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: idx * 0.1 }}
                    >
                        <div className="bg-gradient-to-br from-blue-200 to-white shadow-xl rounded-3xl p-8 md:p-10 space-y-5">
                            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#902537]">
                                {section.title}
                            </h2>
                            {section.description && (
                                <p className="text-lg md:text-xl text-blue-900/80 leading-relaxed">
                                    {section.description}
                                </p>
                            )}
                            {section.list && (
                                <ul className="list-disc list-inside space-y-3 text-blue-900/90 text-base md:text-lg">
                                    {section.list.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </motion.div>
                ))}

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    className="text-center pt-12"
                >
                    <button className="bg-blue-700 hover:bg-blue-800 text-white text-lg px-8 py-4 rounded-full shadow-lg flex items-center gap-2 transition-all"
                        onClick={handleClick}>
                        Register Your Interest <ArrowRight className="w-5 h-5" />
                    </button>
                </motion.div>
            </div>
        </div>
    );
}
