"use client";
import React, { useState } from "react";
import {
  Soup,
  Ear,
  AudioLines,
  Speech,
  BookText,
  Brain,
  Volume2Icon,
  MessageSquareText,
  Baby,
  MessageCircle,
  Sparkles,
  AccessibilityIcon,
  Stethoscope,
  Waves,
  Megaphone,
  HeartPulse,
  Shield,
  ClipboardCheck,
  UserCheck,
  AudioWaveform,
  Eye,
  RotateCcw,
  Scan,
  PersonStanding,
} from "lucide-react";

const tabs = [
  "Speech Therapy",
  "Language Therapy",
  "Voice Therapy",
  "Swallow Therapy",
  "Hearing Care",
  "Vertigo Care",
];

export default function ServicesSection() {
  const [active, setActive] = useState(0);

  return (
    <div className="p-15  bg-linear-to-r from-[#E3F2FD] to-[#FFFFFF]">
      <h2 className="text-4xl highlight-text mb-10">Our Services</h2>

      {/* Tabs */}
      <div className="flex gap-6 mb-12 overflow-x-auto no-scrollbar scroll-smooth py-2">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActive(index)}
            className={`px-10 py-2 min-w-max rounded-full border text-lg whitespace-nowrap transition-all duration-300 font-medium
              ${
                active === index
                  ? "bg-[#0c2249] text-white border-[#0c2249]"
                  : "bg-white text-gray-800 border-gray-300"
              }
            `}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* TAB CONTENT */}
      {active === 0 && <SpeechTherapy />}
      {active === 1 && <LanguageTherapy />}
      {active === 2 && <VoiceTherapy />}
      {active === 3 && <SwallowTherapy />}
      {active === 4 && <HearingCare />}
      {active === 5 && <VertigoCare />}
    </div>
  );
}

function SpeechTherapy() {
  return (
    <ServiceLayout
      title="Speech Therapy"
      description="Our clinic offers specialized speech therapy for children, adults, and seniors, helping improve speech clarity, language skills, voice quality, fluency, and articulation function. We provide assessment, diagnosis, and treatment for a wide range of conditions, including:"
      points={[
        {
          title: "Stuttering & Fluency Disorders",
          icon: <AudioLines />,
          desc: "Helping improve flow and confidence in speech",
        },
        {
          title: "Articulation & Pronunciation Disorders",
          icon: <Speech />,
          desc: " Enhancing vocabulary, grammar, and comprehension",
        },
        {
          title: "Language Delay & Developmental Disorders ",
          icon: <BookText />,
          desc: "Helping improve flow and confidence in speech",
        },
        {
          title: "Apraxia of Speech & Dysarthria",
          icon: <Brain />,
          desc: "Strengthening motor planning and muscle control for speech",
        },
        {
          title: "Voice Disorders",
          icon: <Volume2Icon />,
          desc: "Improving pitch, tone, and vocal health",
        },
        {
          title: "Aphasia",
          icon: <MessageSquareText />,
          desc: "Restoring language skills after stroke or brain injury",
        },
        {
          title: "Dysphagia (Swallowing Disorders)",
          icon: <Soup />,
          desc: "Safe, effective swallowing rehabilitation",
        },
      ]}
      bottomTitle="Personalized Treatment"
      bottomText="Using evidence-based techniques and advanced therapy tools, we create personalized therapy plans for lasting results. Whether your needs are developmental, neurological, oncological, or post-surgical, we are committed to restoring communication and improving quality of life."
    />
  );
}

function LanguageTherapy() {
  return (
    <ServiceLayout
      title="Language Therapy"
      description="Our language therapy services help children and adults develop and restore effective communication skills for daily life, academics, and work. We specialize in assessing and treating:"
      points={[
        {
          title: "Language Delay ",
          icon: <Baby />,
          desc: "Helping children reach age-appropriate speech and language milestones",
        },
        {
          title: "Developmental Language Disorder (DLD)",
          icon: <BookText />,
          desc: "Improving vocabulary, grammar, and sentence structure",
        },
        {
          title: "Aphasia",
          icon: <MessageSquareText />,
          desc: "Restoring comprehension and expression after stroke or brain injury",
        },
        {
          title: "Cognitive-Communication Disorders",
          icon: <Brain />,
          desc: "Enhancing memory, attention, and problem-solving for better communication",
        },
        {
          title: "Social Communication Disorders",
          icon: <MessageCircle />,
          desc: "Improving conversation skills, understanding social cues, and pragmatic language use",
        },
      ]}
      bottomTitle="Designed for Bilingual Needs"
      bottomText="Our therapy programs are tailored for bilingual, multilingual, and diverse communication needs. Using evidence-based techniques, we focus on improving understanding, expression, reading, and writing skills to enhance confidence and independence."
    />
  );
}

function VoiceTherapy() {
  return (
    <ServiceLayout
      title="Voice Therapy"
      description="Our voice therapy services help children, adults, and professional voice users regain clear, strong, and healthy vocal function. We provide expert assessment and treatment for:"
      points={[
        {
          title: "Hoarseness & Vocal Fatigue ",
          icon: <Volume2Icon />,
          desc: "Reducing strain and improving voice endurance",
        },
        {
          title: "Vocal Nodules, Polyps & Lesions",
          icon: <Sparkles />,
          desc: "Therapy-based rehabilitation to avoid or support surgery",
        },
        {
          title: "Muscle Tension Dysphonia (MTD)",
          icon: <AccessibilityIcon />,
          desc: "Relaxing and balancing voice production",
        },
        {
          title: "Voice Changes After Surgery or Illness",
          icon: <Stethoscope />,
          desc: "Post-laryngectomy or post-intubation recovery",
        },
        {
          title: "Spasmodic Dysphonia",
          icon: <Waves />,
          desc: "Improving vocal control and reducing breaks or strain",
        },
        {
          title: "Professional Voice Care ",
          icon: <Megaphone />,
          desc: "Singers, teachers, speakersSupporting singers, teachers, public speakers, and other voice-intensive professions",
        },
      ]}
      bottomTitle="Advanced Vocal Training"
      bottomText="Using specialized vocal exercises, breathing techniques, and resonance training, our therapy helps improve pitch, tone, projection, and vocal stamina while preventing future injury.
Whether your voice issues are caused by overuse, neurological conditions, or medical treatment, we offer personalized, evidence-based care to restore your best voice.
"
    />
  );
}

function SwallowTherapy() {
  return (
    <ServiceLayout
      title="Swallow Therapy"
      description="Our swallow therapy services help individuals of all ages regain safe, comfortable, and efficient swallowing. We assess, diagnose, and treat a wide range of swallowing disorders (dysphagia) caused by:"
      points={[
        {
          title: "Stroke & Neurological Conditions ",
          icon: <HeartPulse />,
          desc: " Parkinson’s disease, ALS, multiple sclerosis",
        },
        {
          title: "Head & Neck Cancer Treatment",
          icon: <Shield />,
          desc: "Surgery, chemotherapy, or radiation side effects like carcinoma tongue, carcinoma buccal mucosa, etc.",
        },
        {
          title: "Post-Surgical Recovery",
          icon: <ClipboardCheck />,
          desc: "After tracheostomy, intubation, or esophageal surgery",
        },
        {
          title: "Pediatric Feeding Disorders",
          icon: <Baby />,
          desc: "Premature birth, cleft palate, or oral-motor delays",
        },
        {
          title: "Age-Related Swallowing Issues",
          icon: <UserCheck />,
          desc: "Presbyphagia in Older Adults",
        },
      ]}
      bottomTitle="Advanced Rehabilitation"
      bottomText="Our therapy combines evidence-based swallowing maneuvers, oral-motor exercises, postural techniques, and diet modifications to prevent aspiration, improve nutrition, and restore quality of life. We offer an advanced Swallow Rehabilitation including VitalStim Therapy (VST), Expiratory Muscle Strength Training (EMST), Biofeedback etc. We also work closely with ENTs, oncologists, neurologists, and dietitians for holistic care."
    />
  );
}

function HearingCare() {
  return (
    <ServiceLayout
      title="Hearing Care"
      description="Our clinic provides comprehensive hearing evaluations and hearing aid solutions for children, adults, and seniors. Using advanced diagnostic tools, we accurately assess hearing ability, identify the type and degree of hearing loss, and recommend the most effective treatment options.

We offer a full range of hearing tests, including:
"
      points={[
        {
          title: "Pure Tone Audiometry (PTA)",
          icon: <AudioWaveform />,
          desc: " Measures hearing sensitivity across frequencies",
        },
        {
          title: "Tympanometry",
          icon: <Waves />,
          desc: "Checks middle ear function and fluid presence",
        },
        {
          title: "Otoacoustic Emissions (OAE)",
          icon: <Ear />,
          desc: "Evaluates inner ear (cochlear) function",
        },
        {
          title: "Speech Audiometry",
          icon: <Speech />,
          desc: " Assesses understanding of speech in quiet and noisy environments",
        },
        {
          title: "Newborn Hearing Screening",
          icon: <Baby />,
          desc: "Early detection for timely intervention",
        },
      ]}
      bottomTitle="Hearing Aid Services"
      bottomText="We provide digital hearing aids from leading global brands, customized to match your hearing profile, lifestyle, and comfort. Our services include professional fitting and programming, trial and demonstration sessions, regular servicing, repairs, battery replacement, and detailed counseling on hearing aid use and maintenance. Whether your hearing difficulty is caused by age-related changes, noise exposure, ear infections, or underlying medical conditions, our audiologists ensure accurate diagnosis and the most effective solution tailored to your needs.
"
    />
  );
}

function VertigoCare() {
  return (
    <ServiceLayout
      title="Vertigo Assessment & Management"
      description="Our clinic provides specialized Vertigo Assessment & Management to identify and treat the root causes of dizziness, spinning sensations, and balance problems. Vertigo often stems from inner ear (vestibular) disorders, and a proper evaluation helps restore stability and confidence in daily life.
Our Vertigo Assessment Includes:
"
      points={[
        {
          title: "Detailed Case History",
          icon: <ClipboardCheck />,
          desc: "Understanding symptoms, triggers, duration, and patterns to identify the underlying cause of vertigo.",
        },
        {
          title: "Eye Movement & Balance Testing",
          icon: <Eye />,
          desc: "Evaluating how your eyes and body respond to movement, helping detect vestibular dysfunction.",
        },
        {
          title: "Positional Tests for BPPV",
          icon: <RotateCcw />,
          desc: "Assessing head and body positions to identify Benign Paroxysmal Positional Vertigo (BPPV).",
        },
        {
          title: "Gait & Posture Evaluation",
          icon: <PersonStanding />,
          desc: "Analyzing walking patterns, posture stability, and coordination to assess balance issues.",
        },
        {
          title: "Screening for Vestibular Conditions",
          icon: <Scan />,
          desc: "Checking for vestibular neuritis, Ménière’s disease, and motion sensitivity to determine specific vestibular disorders.",
        },
      ]}
      bottomTitle="Treatment & Rehabilitation"
      bottomText="We offer repositioning maneuvers, VRT, home exercises, lifestyle guidance, and ENT/neurology collaboration.Our goal is to help you regain balance, reduce dizziness, and return to daily activities safely and confidently."
    />
  );
}

function ServiceLayout({
  title,
  description,
  points,
  bottomTitle,
  bottomText,
}) {
  return (
    <div className="">
      <h2 className="text-2xl font-medium highlight-text mb-5">{title}</h2>
      <p className=" text-xl leading-relaxed mb-10">{description}</p>
      <div className="grid md:grid-cols-3 gap-6 mb-10">
        {points.map((point, idx) => (
          <div
            key={idx}
            className="bg-[#A6D7F8] hover:scale-105 duration-300 backdrop-blur-xl rounded-2xl  border border-[#0D2F5C]/80 shadow-lg flex-col place-items-center place-content-center  text-white"
          >
            <h3 className="text-3xl highlight-text m-6 px-10 text-center">
              {point.title}
            </h3>

            <div className="relative w-full flex items-center justify-center my-2">
              <div className="absolute w-full h-0.5 bg-white"></div>
              <div className="relative z-10 flex items-center justify-center scale-180 size-10 rounded-full text-black bg-white backdrop-blur-md">
                {React.cloneElement(point.icon, { strokeWidth: 1 })}
              </div>
            </div>

            <p className="my-6 mx-8 text-md text-black text-justify">
              {point.desc}
            </p>
          </div>
        ))}
      </div>
      <div className="space-y-2">
        <h3 className="text-2xl highlight-text mb-5">{bottomTitle}</h3>
        <p className="text-xl leading-relaxed">{bottomText}</p>
      </div>
    </div>
  );
}
