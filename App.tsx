
import React, { useState } from 'react';
import { PAPER_INFO } from './constants';
import Section from './components/Section';
import ChatInterface from './components/ChatInterface';

const App: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const copyBibtex = () => {
    navigator.clipboard.writeText(PAPER_INFO.bibtex);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // 这里的图片链接可以替换为你上传到图床后的真实链接
  const IMAGES = {
    overview: "/images/intro.png",
    methodology: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=1200", 
    distributions: "/images/stats.png",
    cumulative: "/images/longtail.png",
    occlusions: "/images/occlutions.png", // 代表城市建筑
    seasonal: "/images/seasonal.png", // 代表季节变化
    lighting: "/images/lighting.png", // 代表阳光/光影
    ambiguity: "/images/similar.png",
    segmentation: "/images/binary.png"
  };

  return (
    <div className="min-h-screen text-slate-800 bg-white">
      {/* Hero Section */}
      <header className="pt-24 pb-20 px-6 text-center bg-gradient-to-b from-emerald-50 to-white border-b border-emerald-100">
        <div className="max-w-5xl mx-auto">
          <div className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-widest text-emerald-700 uppercase bg-emerald-100 rounded-full">
            CVPR 2026 Submission #32465
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-8 serif leading-tight text-slate-900">
            {PAPER_INFO.title}
          </h1>
          
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-10">
            {PAPER_INFO.authors.map((author, idx) => (
              <div key={idx} className="flex items-start gap-1">
                <span className="text-xl font-medium text-slate-700">
                  {author.name}
                </span>
                <sup className="text-xs text-emerald-600 font-bold">
                  {author.affiliationIndex}
                </sup>
              </div>
            ))}
          </div>

          <div className="flex flex-col items-center gap-2 mb-12 text-slate-500 max-w-2xl mx-auto">
            {PAPER_INFO.affiliations.map(aff => (
              <p key={aff.index} className="text-base italic">
                {aff.name}
              </p>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-5">
            <a href={PAPER_INFO.links.pdf} className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-600 text-white rounded-full font-bold hover:bg-emerald-700 transition shadow-xl hover:-translate-y-1">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>
              Read Paper
            </a>
            <a href={PAPER_INFO.links.code} className="inline-flex items-center gap-2 px-8 py-4 bg-white border-2 border-slate-200 text-slate-700 rounded-full font-bold hover:border-emerald-300 hover:text-emerald-700 transition shadow-lg hover:-translate-y-1">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              GitHub / Dataset
            </a>
          </div>
        </div>
      </header>

      <main>
        {/* Abstract & Key Stats */}
        <Section>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="md:col-span-3">
              <h2 className="text-3xl font-bold mb-6 serif border-l-4 border-emerald-500 pl-4">Abstract</h2>
              <p className="text-xl leading-relaxed text-slate-700 text-justify mb-6">
                {PAPER_INFO.abstract}
              </p>
              <div className="bg-emerald-50 border border-emerald-100 p-6 rounded-2xl italic text-emerald-800">
                <span className="font-bold uppercase tracking-tight mr-2">TL;DR:</span> {PAPER_INFO.tldr}
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                <div className="text-4xl font-black text-emerald-600 mb-1">12M+</div>
                <div className="text-slate-400 text-xs font-bold uppercase tracking-widest">Images</div>
              </div>
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                <div className="text-4xl font-black text-emerald-600 mb-1">8,363</div>
                <div className="text-slate-400 text-xs font-bold uppercase tracking-widest">Species</div>
              </div>
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                <div className="text-4xl font-black text-emerald-600 mb-1">133</div>
                <div className="text-slate-400 text-xs font-bold uppercase tracking-widest">Countries</div>
              </div>
            </div>
          </div>
        </Section>

        {/* Global Overview (Figure 1) */}
        <Section title="World's First Large-Scale Street Tree Benchmark" className="bg-slate-50 border-y border-slate-100">
          <div className="space-y-8">
            <div className="bg-white p-4 rounded-3xl shadow-2xl border border-slate-200">
              <img src={IMAGES.overview} alt="Figure 1: Dataset Overview" className="w-full rounded-2xl object-cover h-[500px]" />
            </div>
            <p className="text-center text-slate-500 text-sm italic max-w-3xl mx-auto">
              Figure 1. Overview of StreetTree dataset. Spanning 133 countries, it integrates hierarchical taxonomy, street view imagery, seasonal information, and temporal records for over 3 million urban trees.
            </p>
          </div>
        </Section>

        {/* Methodology (Flowchart) */}
        <Section title="Data Construction Pipeline">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-slate-600 leading-relaxed">
                Our construction process consists of two stages: first, we collect and preprocess taxonomic and geolocation data from multiple sources. Then, we utilize a two-stage filtering procedure to ensure image quality and target centering.
              </p>
              <ul className="space-y-4">
                {[
                  { t: "Global Tree Catalog", d: "Aligned with GBIF Global Species Occurrences API." },
                  { t: "Azimuth Angle Calculation", d: "Ensuring images are correctly centered on the target tree." },
                  { t: "Binary Quality Filtering", d: "Deep-feature similarity screening to remove occluded or invalid samples." }
                ].map(item => (
                  <li key={item.t} className="flex gap-4">
                    <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <div>
                      <span className="block font-bold text-slate-800">{item.t}</span>
                      <span className="text-slate-500 text-sm">{item.d}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200 shadow-inner">
              <img src={IMAGES.methodology} alt="Methodology Flowchart" className="w-full rounded-xl" />
            </div>
          </div>
        </Section>

        {/* Distributions (Figure 3 & Cumulative) */}
        <Section title="Taxonomic & Seasonal Distributions" className="bg-emerald-950" dark>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="bg-white/5 p-4 rounded-2xl border border-white/10">
                <img src={IMAGES.distributions} alt="Distribution Statistics" className="w-full rounded-xl" />
              </div>
              <p className="text-emerald-300/60 text-sm italic">
                Figure 3. Statistics of StreetTree dataset showing distributions across Order, Family, Genus, and Species.
              </p>
            </div>
            <div className="space-y-6">
              <div className="bg-white/5 p-4 rounded-2xl border border-white/10">
                <img src={IMAGES.cumulative} alt="Cumulative Curves" className="w-full rounded-xl" />
              </div>
              <div className="bg-emerald-900/50 p-6 rounded-2xl border border-emerald-800 text-emerald-50">
                <h4 className="font-bold mb-2">The Long-Tail Challenge</h4>
                <p className="text-sm opacity-80">The top 20% of species contribute over 97% of the dataset, reflecting the extreme natural imbalance of urban flora and imposing high demands on model generalization.</p>
              </div>
            </div>
          </div>
        </Section>

        {/* Real-world Challenges (Occlusions, Lighting, Seasonal) */}
        <Section title="Real-World Complexities">
          <div className="space-y-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 bg-slate-50 p-4 rounded-2xl shadow-xl border border-slate-200">
                 <img src={IMAGES.occlusions} alt="Occlusion Challenges" className="w-full rounded-xl aspect-video object-cover" />
              </div>
              <div className="order-1 md:order-2">
                <h3 className="text-2xl font-bold mb-4 serif">Urban Infrastructure Occlusions</h3>
                <p className="text-slate-600 leading-relaxed">
                  Street view imagery is frequently affected by buildings, traffic signs, and large vehicles, which can partially or fully block tree crowns.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4 serif">Seasonal Phenology</h3>
                <p className="text-slate-600 leading-relaxed">
                  The same individual tree exhibits dramatic visual variations across seasons. StreetTree captures these phenological cycles, supporting research into robust multi-seasonal classification.
                </p>
              </div>
              <div className="bg-slate-50 p-4 rounded-2xl shadow-xl border border-slate-200">
                 <img src={IMAGES.seasonal} alt="Seasonal Variation" className="w-full rounded-xl aspect-video object-cover" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 bg-slate-50 p-4 rounded-2xl shadow-xl border border-slate-200">
                 <img src={IMAGES.lighting} alt="Lighting Conditions" className="w-full rounded-xl aspect-video object-cover" />
              </div>
              <div className="order-1 md:order-2">
                <h3 className="text-2xl font-bold mb-4 serif">Extreme Lighting Conditions</h3>
                <p className="text-slate-600 leading-relaxed">
                  From lens flare in high-glare environments to deep shadows in low-light urban canyons, diverse lighting conditions pose significant challenges for feature extraction.
                </p>
              </div>
            </div>
          </div>
        </Section>

        {/* Interactive Q&A */}
        <Section title="Chat with StreetTree" className="bg-emerald-50 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h3 className="text-4xl font-extrabold serif text-emerald-900 leading-tight">
                Ask Gemini about our Benchmark
              </h3>
              <p className="text-xl text-slate-600 leading-relaxed">
                Curious about the dataset statistics or our experimental setup? We've integrated an AI assistant that understands the full scope of the StreetTree paper.
              </p>
            </div>
            <ChatInterface />
          </div>
        </Section>

        {/* Binary Classification (Figure 2) & Ambiguity (Figure 6) */}
        <Section title="Fine-Grained Complexity">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
              <div className="space-y-4">
                <h4 className="font-bold text-slate-800 uppercase tracking-wider text-sm">Visual Ambiguity</h4>
                <div className="bg-white p-3 rounded-2xl shadow-lg border border-slate-200">
                  <img src={IMAGES.ambiguity} alt="Visually Ambiguous Species" className="w-full rounded-lg" />
                </div>
              </div>
              <div className="space-y-4">
                <h4 className="font-bold text-slate-800 uppercase tracking-wider text-sm">Automated Quality Control</h4>
                <div className="bg-white p-3 rounded-2xl shadow-lg border border-slate-200">
                  <img src={IMAGES.segmentation} alt="Segmentation masks" className="w-full rounded-lg" />
                </div>
              </div>
           </div>
        </Section>

        {/* Citation Section */}
        <Section title="Citation" id="citation" dark className="bg-slate-900">
          <div className="max-w-3xl mx-auto">
            <div className="relative group">
              <pre className="bg-slate-950 p-8 rounded-3xl overflow-x-auto text-sm text-emerald-400 font-mono leading-relaxed border border-white/5">
                {PAPER_INFO.bibtex}
              </pre>
              <button 
                onClick={copyBibtex}
                className={`absolute top-6 right-6 px-6 py-2 rounded-xl font-bold text-xs transition-all shadow-lg ${
                  copied ? 'bg-emerald-500 text-white' : 'bg-white/10 text-white hover:bg-white/20 backdrop-blur-md'
                }`}
              >
                {copied ? '✓ BibTeX Copied' : 'Copy BibTeX'}
              </button>
            </div>
          </div>
        </Section>
      </main>

      {/* Footer */}
      <footer className="py-20 border-t border-slate-100 bg-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <div className="w-16 h-1 bg-emerald-500 mx-auto mb-8 rounded-full"></div>
          <p className="text-slate-500 font-medium italic mb-2">"Driving new advancements at the intersection of computer vision and urban science."</p>
          <p className="text-slate-400 text-sm">© 2026 StreetTree Dataset Project. CVPR 2026 Submission #32465.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
