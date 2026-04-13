"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";

export default function ApplyPage() {
  const [type, setType] = useState(null); // 'admission' or 'teacher'

  return (
    <main className="min-h-screen bg-[#F1F4F8] flex flex-col items-center py-10 md:py-20 px-4 relative overflow-x-hidden">
      {/* Dynamic Back Button */}
      <div className="w-full max-w-5xl mb-8 flex justify-start">
        <Link 
          href="/" 
          className="group flex items-center gap-2 text-[#0f2a4c]/60 hover:text-[#0f2a4c] font-bold text-xs md:text-sm tracking-widest uppercase transition-all"
        >
          <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm group-hover:shadow-md group-hover:-translate-x-1 transition-all">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
          </div>
          Back to Home
        </Link>
      </div>

      <div className="w-full max-w-4xl relative z-10">
        {/* Branding Header */}
        <div className="text-center mb-10 md:mb-16">
          <div className="relative w-[280px] md:w-[400px] h-[100px] md:h-[140px] mx-auto mb-6 md:mb-8">
            <Image 
              src="/logos/Transparent.png" 
              alt="Bab-Ul-Ilm Logo" 
              fill 
              className="object-contain" 
              priority
            />
          </div>
          <span className="inline-block text-[10px] md:text-[11px] tracking-[0.25em] uppercase text-[#d4a843] font-bold mb-3 md:mb-4">
            Application Portal
          </span>
          <AnimatePresence mode="wait">
            {!type ? (
              <motion.div
                key="title-select"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                <h1 className="font-cormorant text-[36px] md:text-[56px] font-semibold text-[#0f2a4c] tracking-tight leading-tight">
                  Choose Your Path
                </h1>
                <p className="mt-2 md:mt-4 text-[#0f2a4c]/60 text-sm md:text-base font-medium">Select an application type to get started.</p>
              </motion.div>
            ) : (
              <motion.div
                key="title-form"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <h1 className="font-cormorant text-[36px] md:text-[56px] font-semibold text-[#0f2a4c] tracking-tight leading-tight">
                  {type === 'admission' ? 'Student Admission' : 'Faculty Application'}
                </h1>
                <p className="mt-2 md:mt-4 text-[#0f2a4c]/60 text-sm md:text-base font-medium">
                  {type === 'admission' ? 'Complete the form below to enroll your child.' : 'Join our professional online teaching staff.'}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <AnimatePresence mode="wait">
          {!type ? (
            <motion.div 
              key="selection"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5 }}
              className="grid sm:grid-cols-2 gap-6 md:gap-8"
            >
              {/* Admission Card */}
              <button
                onClick={() => setType('admission')}
                className="group relative bg-[#0f2a4c] rounded-[2rem] p-8 md:p-10 text-left transition-all duration-500 hover:shadow-2xl hover:shadow-[#0f2a4c]/40 hover:-translate-y-2 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#d4a843]/10 rounded-bl-full" />
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-white/10 flex items-center justify-center text-[#d4a843] mb-6 md:mb-8 group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 md:w-8 md:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342" />
                  </svg>
                </div>
                <h2 className="font-cormorant text-2xl md:text-3xl font-bold text-white mb-3">Admission</h2>
                <p className="text-white/60 text-sm md:text-[15px] font-light leading-relaxed mb-8">
                  For students from Playgroup to Intermediate academic levels.
                </p>
                <div className="inline-flex items-center gap-2 text-[#d4a843] font-bold text-xs tracking-widest uppercase">
                  Start Application
                  <svg className="w-4 h-4 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5l6 6m0 0l-6 6m6-6H3.75" />
                  </svg>
                </div>
              </button>

              {/* Teacher Card */}
              <button
                onClick={() => setType('teacher')}
                className="group relative bg-white rounded-[2rem] p-8 md:p-10 text-left transition-all duration-500 hover:shadow-2xl hover:shadow-[#0f2a4c]/10 hover:-translate-y-2 overflow-hidden border border-stone-200"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#d4a843]/5 rounded-bl-full" />
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-[#0f2a4c]/5 flex items-center justify-center text-[#0f2a4c] mb-6 md:mb-8 group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 md:w-8 md:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                  </svg>
                </div>
                <h2 className="font-cormorant text-2xl md:text-3xl font-bold text-[#0f2a4c] mb-3">Faculty</h2>
                <p className="text-stone-500 text-sm md:text-[15px] font-light leading-relaxed mb-8">
                  For professional educators with online teaching experience.
                </p>
                <div className="inline-flex items-center gap-2 text-[#d4a843] font-bold text-xs tracking-widest uppercase">
                  Apply Now
                  <svg className="w-4 h-4 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5l6 6m0 0l-6 6m6-6H3.75" />
                  </svg>
                </div>
              </button>
            </motion.div>
          ) : (
            <motion.div 
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-3xl p-6 sm:p-10 md:p-14 shadow-2xl border border-stone-200"
            >
              <button 
                onClick={() => setType(null)}
                className="mb-8 flex items-center gap-2 text-[#0f2a4c]/40 hover:text-[#0f2a4c] font-bold text-[10px] md:text-xs uppercase tracking-widest transition-colors"
              >
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                </svg>
                Change Application
              </button>

              <form className="space-y-10 md:space-y-14">
                {/* Personal Information */}
                <div>
                  <h3 className="font-bold text-sm text-[#0f2a4c] flex items-center gap-2 mb-8">
                    <span className="w-5 h-[2px] bg-[#d4a843]" /> Personal Information
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
                    <InputField label="First Name" placeholder="Your first name" />
                    <InputField label="Last Name" placeholder="Your last name" />
                    <InputField label="Contact Number" placeholder="+92 XXX XXXXXXX" type="tel" />
                    <InputField label="Email Address" placeholder="name@example.com" type="email" />
                    <InputField label="City" placeholder="Residential city" />
                    {type === 'admission' ? (
                      <InputField label="Date of Birth" type="date" />
                    ) : (
                      <InputField label="CNIC / ID Number" placeholder="XXXXX-XXXXXXX-X" />
                    )}
                  </div>
                </div>

                {type === 'admission' ? (
                  <>
                    {/* Parent/Guardian Details */}
                    <div>
                      <h3 className="font-bold text-sm text-[#0f2a4c] flex items-center gap-2 mb-8">
                        <span className="w-5 h-[2px] bg-[#d4a843]" /> Parent / Guardian Details
                      </h3>
                      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
                        <div className="space-y-4">
                          <label className="text-[10px] font-black uppercase text-[#d4a843]">Father Details</label>
                          <input className="form-input" placeholder="Name" />
                          <input className="form-input" placeholder="CNIC" />
                          <input className="form-input" placeholder="Contact" />
                        </div>
                        <div className="space-y-4 sm:border-l sm:pl-8 lg:border-l-0 lg:pl-0 border-stone-100">
                          <label className="text-[10px] font-black uppercase text-[#d4a843]">Mother Details</label>
                          <input className="form-input" placeholder="Name" />
                          <input className="form-input" placeholder="CNIC" />
                          <input className="form-input" placeholder="Contact" />
                        </div>
                        <div className="space-y-4 lg:border-l lg:pl-8 border-stone-100 sm:col-span-2 lg:col-span-1">
                          <label className="text-[10px] font-black uppercase text-[#d4a843]">Guardian (Optional)</label>
                          <input className="form-input" placeholder="Name" />
                          <input className="form-input" placeholder="Relationship" />
                          <input className="form-input" placeholder="Contact" />
                        </div>
                      </div>
                    </div>

                    {/* Academic Details */}
                    <div>
                      <h3 className="font-bold text-sm text-[#0f2a4c] flex items-center gap-2 mb-8">
                        <span className="w-5 h-[2px] bg-[#d4a843]" /> Academic Enrollment
                      </h3>
                      <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
                        <SelectField label="Grade Level" options={[
                          { label: "Pre-College", options: ["Matric", "Intermediate"] },
                          { label: "Secondary", options: ["6th", "7th", "8th", "Pre-9th"] },
                          { label: "Primary", options: ["1st", "2nd", "3rd", "4th", "5th"] },
                          { label: "Pre-School", options: ["Playgroup", "KG1", "KG2"] },
                        ]} />
                        <SelectField label="Curriculum" options={[
                          { label: "Punjab Board (PECTA)" },
                          { label: "Oxford Syllabus" },
                          { label: "Hybrid / Mixed" },
                        ]} />
                        <div className="space-y-2">
                          <label className="text-[10px] font-black uppercase tracking-widest text-[#d4a843]">Prefered Shift</label>
                          <div className="flex gap-4">
                            {['Morning', 'Evening'].map((shift) => (
                              <label key={shift} className="flex-1 flex items-center justify-center gap-2 h-14 rounded-xl border border-stone-100 bg-stone-50 cursor-pointer hover:bg-stone-100 transition-all">
                                <input type="radio" name="shift" value={shift.toLowerCase()} className="accent-[#d4a843]" />
                                <span className="text-sm font-medium">{shift}</span>
                              </label>
                            ))}
                          </div>
                        </div>
                        <InputField label="Student B-Form #" placeholder="XXXXX-XXXXXXX-X" />
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    {/* Professional Details */}
                    <div>
                      <h3 className="font-bold text-sm text-[#0f2a4c] flex items-center gap-2 mb-8">
                        <span className="w-5 h-[2px] bg-[#d4a843]" /> Professional Background
                      </h3>
                      <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
                        <InputField label="Subject Expertise" placeholder="e.g. Mathematics, Urdu" />
                        <SelectField label="Highest Qualification" options={[
                          { label: "Ph.D" },
                          { label: "Masters / M.Phil" },
                          { label: "Bachelors (B.A / B.Sc)" },
                          { label: "Other" },
                        ]} />
                        <SelectField label="Teaching Experience" options={[
                          { label: "5+ Years Online" },
                          { label: "2-5 Years Online" },
                          { label: "1 Year Online" },
                          { label: "Less than 1 Year" },
                        ]} />
                        <InputField label="Current/Last Workplace" placeholder="School or Platform name" />
                        <div className="sm:col-span-2 space-y-2">
                          <label className="text-[10px] font-black uppercase tracking-widest text-[#d4a843]">Attach CV / Resume</label>
                          <div className="relative border-2 border-dashed border-stone-200 rounded-2xl p-8 flex flex-col items-center justify-center bg-stone-50 hover:bg-stone-100 transition-colors cursor-pointer">
                            <input type="file" className="absolute inset-0 opacity-0 cursor-pointer" accept=".pdf,.doc,.docx" />
                            <svg className="w-8 h-8 text-[#d4a843]/40 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 16v-8m0 0l-4 4m4-4l4 4m-12 4h16" />
                            </svg>
                            <span className="text-xs font-medium text-stone-400">PDF or Word document (Max 5MB)</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )}

                {/* Final Submit */}
                <div className="pt-6">
                  <button type="submit" className="w-full h-16 rounded-2xl bg-[#0f2a4c] text-white font-black tracking-[0.2em] uppercase text-xs shadow-xl shadow-black/20 hover:shadow-2xl hover:-translate-y-0.5 transition-all active:scale-[0.98]">
                    {type === 'admission' ? 'Confirm Admission Request' : 'Submit Faculty Application'}
                  </button>
                  <p className="mt-4 text-center text-[10px] text-stone-400 font-medium">
                    By submitting this form, you agree to our terms and admission policies.
                  </p>
                </div>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Decorative Accents */}
      <div className="fixed top-0 right-0 w-[800px] h-[800px] bg-[#d4a843]/5 rounded-full blur-[150px] -z-10 pointer-events-none" />
      <div className="fixed bottom-0 left-0 w-[600px] h-[600px] bg-[#0f2a4c]/5 rounded-full blur-[120px] -z-10 pointer-events-none" />

      <style jsx>{`
        .form-input {
          width: 100%;
          height: 3rem;
          border-radius: 0.75rem;
          border: 1px solid #f1f4f8;
          background-color: #f8fafc;
          padding: 0 1rem;
          font-size: 0.875rem;
          outline: none;
          transition: all 0.2s;
        }
        .form-input:focus {
          border-color: #d4a843;
          background-color: white;
        }
      `}</style>
    </main>
  );
}

function InputField({ label, placeholder, type = "text" }) {
  return (
    <div className="space-y-2">
      <label className="text-[10px] font-black uppercase tracking-widest text-[#d4a843]">{label}</label>
      <input 
        type={type} 
        className="w-full h-14 rounded-xl border border-stone-200 bg-stone-50 px-5 outline-none transition-all focus:border-[#d4a843] focus:shadow-sm focus:bg-white text-sm" 
        placeholder={placeholder} 
        required 
      />
    </div>
  );
}

function SelectField({ label, options }) {
  return (
    <div className="space-y-2">
      <label className="text-[10px] font-black uppercase tracking-widest text-[#d4a843]">{label}</label>
      <select className="w-full h-14 rounded-xl border border-stone-200 bg-stone-50 px-5 outline-none focus:border-[#d4a843] focus:bg-white text-sm" required>
        <option value="">Select an option</option>
        {options.map((group, i) => (
          group.options ? (
            <optgroup key={i} label={group.label}>
              {group.options.map(opt => <option key={opt}>{opt}</option>)}
            </optgroup>
          ) : (
            <option key={group.label}>{group.label}</option>
          )
        ))}
      </select>
    </div>
  );
}
