"use client";
import React, { useState } from "react";
import {
  AlertTriangle,
  Baby,
  Ban,
  Brain,
  BrainCircuit,
  Clock,
  HeartCrack,
  HeartPulse,
  Hospital,
  Layers,
  Megaphone,
  RotateCcw,
  Shield,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  UserMinus,
  UtensilsCrossed,
  Volume2,
  Soup,
  Accessibility,
} from "lucide-react";

const fullTabNames = [
  "FEES",
  "Vitalstim Therapy (VST)",
  "Neonatal & Pediatric Feeding Intervention",
  "Voice Rehabilitation",
  "Swallow Rehabilitation",
];

export default function SpecialtiesPage() {
  const [active, setActive] = useState(0);

  return (
    <div className="p-4 sm:p-6 md:p-10 lg:p-15 bg-linear-to-r from-blue-50 to-white min-h-screen">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl highlight-text  mb-6 sm:mb-8 lg:mb-10">
        Our Specialities
      </h1>

      {/* Tabs */}
      <div className="flex gap-3 sm:gap-4 lg:gap-6 mb-8 sm:mb-10 lg:mb-12 overflow-x-auto no-scrollbar scroll-smooth py-2">
        {fullTabNames.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActive(index)}
            className={`px-4 sm:px-6 lg:px-10 py-2 sm:py-2.5 min-w-max rounded-full border 
                      text-sm sm:text-base lg:text-lg whitespace-nowrap transition-all duration-300 font-medium
              ${
                active === index
                  ? "bg-[#0c2249] text-white border-[#0c2249] shadow-lg"
                  : "bg-white text-gray-800 border-gray-300 hover:border-gray-400"
              }
            `}
          >
            <span className="hidden sm:inline">{fullTabNames[index]}</span>
            <span className="sm:hidden">{tab}</span>
          </button>
        ))}
      </div>

      {/* TAB CONTENT */}
      {active === 0 && <FEES />}
      {active === 1 && <VST />}
      {active === 2 && <Neonatal />}
      {active === 3 && <VoiceRehab />}
      {active === 4 && <SwallowRehab />}
    </div>
  );
}

function FEES() {
  return (
    <SpecialityLayout
      title="Fibreoptic Endoscopic Evaluation of Swallowing (FEES)"
      description="Our clinic offers Fibreoptic Endoscopic Evaluation of Swallowing (FEES) - a highly accurate, radiation-free test used to diagnose swallowing disorders (dysphagia). FEES allows us to directly view how your throat and vocal structures work while you swallow food, liquids, or saliva. During the procedure, a very thin and flexible scope is gently inserted through the nose, providing a clear, real-time view of your swallowing function. This helps us identify aspiration, residue, delayed swallow response, and other abnormalities that may not be visible through standard clinical exams. FEES is especially beneficial for patients experiencing:"
      cards={[
        {
          title: "Coughing or Choking While Eating",
          icon: <AlertTriangle />,
          desc: "Many individuals experience coughing or choking when food or liquids enter the airway. FEES helps visualize this in real time and determines whether aspiration is occurring.",
        },
        {
          title: "Food Sticking in the Throat",
          icon: <UtensilsCrossed />,
          desc: "A common sign of pharyngeal residue, where food fails to clear properly. FEES identifies where food is getting stuck and why, enabling targeted treatment.",
        },
        {
          title: "Frequent Throat Clearing",
          icon: <RotateCcw />,
          desc: "Repeated throat clearing may indicate irritation or incomplete swallow. FEES helps detect pooling, residue, or airway penetration causing the discomfort.",
        },
        {
          title: "Difficulty Swallowing After Stroke or Surgery",
          icon: <Hospital />,
          desc: "Post-stroke or post-surgical patients often struggle with safe swallowing. FEES assesses swallow safety and guides rehabilitation planning.",
        },
        {
          title: "Neurological Disorders Affecting Swallow Safety",
          icon: <Brain />,
          desc: "Conditions like Parkinson's, ALS, and neuropathies can impair swallowing coordination. FEES shows the severity of impairment and aids treatment decisions.",
        },
      ]}
      bottomTitle="Personalized Treatment"
      bottomText="By using FEES, our specialists create highly personalized therapy programs that improve swallowing strength, coordination, and safety."
    />
  );
}

function VST() {
  return (
    <SpecialityLayout
      title="VitalStim Therapy (VST)"
      description="We are one of the few specialized centers offering VitalStim Therapy, an FDA-approved treatment that uses neuromuscular electrical stimulation (NMES) to strengthen weakened swallowing muscles. Small electrodes placed on the neck deliver gentle electrical pulses that stimulate the muscles responsible for swallowing. When combined with targeted therapeutic exercises, VitalStim helps patients rebuild muscle strength and improve coordination. VitalStim Therapy is highly effective for individuals with swallowing difficulties caused by:"
      cards={[
        {
          title: "Stroke-Related Swallowing Difficulty",
          icon: <HeartCrack />,
          desc: "Stroke can weaken or delay swallowing muscles. VitalStim helps activate and retrain these muscles to regain function.",
        },
        {
          title: "Parkinson's & Neurological Disorders",
          icon: <BrainCircuit />,
          desc: "Neurodegenerative conditions reduce muscle control. VitalStim improves coordination and strength for safer swallowing.",
        },
        {
          title: "Head & Neck Cancer Treatment",
          icon: <ShieldCheck />,
          desc: "Radiation or surgery can impair swallowing. VitalStim supports recovery by stimulating weakened muscles.",
        },
        {
          title: "Age-Related Muscle Weakness",
          icon: <UserMinus />,
          desc: "Swallowing muscles weaken with age. VitalStim enhances muscle activation and improves efficiency.",
        },
        {
          title: "Prolonged ICU Stay or Intubation",
          icon: <Hospital />,
          desc: "Extended intubation reduces swallowing strength. VitalStim helps rebuild muscle function for safer oral intake.",
        },
      ]}
      bottomTitle="Personalized Treatment"
      bottomText="Our certified VitalStim therapists ensure safe, comfortable, and evidence-based sessions tailored to each patient's needs."
    />
  );
}

function Neonatal() {
  return (
    <SpecialityLayout
      title="Neonatal & Pediatric Feeding Intervention"
      description="Feeding challenges in infants and children require gentle, expert guidance — and our clinic specializes in Neonatal & Pediatric Feeding Intervention. We support babies who struggle with breastfeeding or bottle-feeding, as well as children facing difficulties with chewing, swallowing, or transitioning to solid foods. Common reasons children visit us include:"
      cards={[
        {
          title: "Poor Latch or Suck",
          icon: <Baby />,
          desc: "Weak or inefficient sucking makes feeding difficult for infants. Therapy helps improve latch strength, oral coordination, and feeding efficiency.",
        },
        {
          title: "Prematurity-Related Feeding Issues",
          icon: <Clock />,
          desc: "Premature babies often struggle with coordination of sucking, swallowing, and breathing. Early intervention supports safe and effective feeding.",
        },
        {
          title: "Gagging, Choking, or Coughing During Meals",
          icon: <AlertTriangle />,
          desc: "These signs indicate poor oral-motor control or sensory sensitivity. Therapy ensures safe swallowing and reduces meal-time stress.",
        },
        {
          title: "Food Refusal or Picky Eating",
          icon: <Ban />,
          desc: "Children may refuse foods due to sensory aversion or past negative experiences. Therapy builds positive exposure and acceptance.",
        },
        {
          title: "Sensory Processing Issues",
          icon: <Sparkles />,
          desc: "Over-sensitivity or under-responsiveness affects feeding behaviors. Therapy helps normalize sensory responses to food textures and temperatures.",
        },
        {
          title: "Oral-Motor Delays",
          icon: <Accessibility />,
          desc: "Weak or delayed oral movements can affect chewing and swallowing. Therapy strengthens muscles and improves coordination.",
        },
        {
          title: "Difficulty Accepting New Textures",
          icon: <Layers />,
          desc: "Children may avoid textured foods due to sensory or oral-motor challenges. Gradual texture introduction helps expand diet safely.",
        },
      ]}
      bottomTitle="Personalized Treatment"
      bottomText="We use evidence-based techniques, play-based therapy, and caregiver training to ensure safe feeding, improved nutrition, and stress-free mealtimes. Parents are guided at every step so home feeding becomes easier, safer, and more successful."
    />
  );
}

function VoiceRehab() {
  return (
    <SpecialityLayout
      title="Voice Rehabilitation"
      description="Our Voice Rehabilitation services support individuals dealing with voice changes due to aging, neurological disorders, surgery, or prolonged voice misuse. For voice disorders, we offer specialized therapy for:"
      cards={[
        {
          title: "Hoarseness or Breathy Voice",
          icon: <Volume2 />,
          desc: "Often due to vocal fold swelling or misuse. Therapy restores clarity and vocal strength.",
        },
        {
          title: "Vocal Nodules",
          icon: <Sparkles />,
          desc: "Benign lesions from vocal overuse. Behavioral therapy reduces strain and promotes healing.",
        },
        {
          title: "Chronic Vocal Strain",
          icon: <Volume2 />,
          desc: "Occurs with excessive speaking or improper technique. Therapy retrains healthy vocal habits.",
        },
        {
          title: "Voice Changes After Illness or Surgery",
          icon: <Stethoscope />,
          desc: "Infections, intubation, or surgeries can alter voice quality. Rehab supports recovery and function.",
        },
        {
          title: "Professional Voice Demands",
          icon: <Megaphone />,
          desc: "Targeted training for teachers, singers, actors, and public speakers to enhance projection, stamina, and vocal efficiency in demanding environments.",
        },
      ]}
      bottomTitle="Personalized Treatment"
      bottomText="Using evidence-based exercises, breathing techniques, and personalized programs, we help restore vocal clarity, protect the airway."
    />
  );
}

function SwallowRehab() {
  return (
    <SpecialityLayout
      title="Swallow Rehabilitation"
      description="Our Swallow Rehabilitation services support individuals dealing with swallowing difficulties due to aging, neurological disorders, surgery. For swallowing disorders, we offer specialized therapy for:"
      cards={[
        {
          title: "Weak Swallow Muscles",
          icon: <Soup />,
          desc: "Reduced strength in the tongue or throat muscles can make swallowing effortful. Therapy strengthens these muscles for safer and smoother swallowing.",
        },
        {
          title: "Poor Airway Protection",
          icon: <Shield />,
          desc: "Weak laryngeal closure can allow food or liquid to enter the airway. Rehabilitation focuses on airway protection techniques and safety strategies.",
        },
        {
          title: "Coughing or Choking During Meals",
          icon: <AlertTriangle />,
          desc: "A sign of aspiration risk or poor swallow coordination. Therapy improves timing, coordination, and safe swallowing techniques.",
        },
        {
          title: "Post-Stroke Swallow Recovery",
          icon: <HeartPulse />,
          desc: "Neurological damage from stroke often affects swallowing. Targeted exercises help restore control and reduce aspiration risk.",
        },
        {
          title: "Head & Neck Cancer Rehabilitation",
          icon: <Hospital />,
          desc: "Cancer treatment can reduce mobility and sensation needed for swallowing. Therapy restores function through compensatory strategies and strengthening.",
        },
      ]}
      bottomTitle="Personalized Treatment"
      bottomText="Using evidence-based exercises, breathing techniques, and personalized programs, we help improve overall swallowing safety and comfort."
    />
  );
}

/* CARD COMPONENT */
function SpecialityLayout({
  cards,
  title,
  description,
  bottomText,
  bottomTitle,
}) {
  return (
    <div>
      <h2 className="text-xl sm:text-2xl lg:text-3xl font-medium highlight-text mb-3 sm:mb-4 lg:mb-5">
        {title}
      </h2>
      <p className="text-base sm:text-lg lg:text-xl leading-relaxed mb-6 sm:mb-8 lg:mb-10">
        {description}
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
        {cards.map((items, index) => (
          <div key={index} className="relative hover:scale-105 duration-300">
            {/* Blue Header Strip */}
            <div className="h-24 sm:h-32 lg:h-40 bg-[#86B3E3] rounded-t-2xl"></div>

            {/* White Card */}
            <div
              className="bg-white rounded-2xl shadow-md border border-[#8AB5E9] 
                          p-6 sm:p-8 lg:p-10 pt-16 sm:pt-18 lg:pt-20 
                          relative -mt-16 sm:-mt-18 lg:-mt-20"
            >
              {/* Floating Icon */}
              <div
                className="absolute -top-4 sm:-top-5 left-6 sm:left-8 lg:left-10 
                            w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16
                            bg-white shadow-lg rounded-full flex items-center justify-center 
                            border border-gray-300"
              >
                {React.cloneElement(items.icon, {
                  strokeWidth: 1,
                  className: "w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8",
                })}
              </div>

              {/* Title */}
              <h2 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl  mb-3 sm:mb-4">
                {items.title}
              </h2>

              {/* Description */}
              <p className="text-sm sm:text-base lg:text-lg xl:text-xl leading-relaxed text-gray-700">
                {items.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="space-y-2 sm:space-y-3 mt-6 sm:mt-8 lg:mt-10">
        <h3 className="text-xl sm:text-2xl lg:text-3xl highlight-text  mb-3 sm:mb-4 lg:mb-5">
          {bottomTitle}
        </h3>
        <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-gray-700">
          {bottomText}
        </p>
      </div>
    </div>
  );
}
