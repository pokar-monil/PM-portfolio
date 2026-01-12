import { useState, useEffect } from 'react';
import {
  ChevronDown,
  Mail,
  Linkedin,
  Github,
  CheckCircle2,
  TrendingUp,
  Users,
  Target,
  Lightbulb,
  BarChart3,
  Zap,
  Play
} from 'lucide-react';
import { useRef } from 'react';

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);
  const cursorRef = useRef(null);
  const dotRef = useRef(null);
  const [ripples, setRipples] = useState([]);

  // Handle scroll events for navbar styling and active section
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Determine active section
      const sections = ['hero', 'about', 'shipped', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Water ripple effect on cursor movement
  useEffect(() => {
    let lastRippleTime = 0;
    const rippleThrottle = 50; // Create ripple every 50ms
    let rippleIdCounter = 0;

    const onMove = (e) => {
      const now = Date.now();
      if (now - lastRippleTime > rippleThrottle) {
        const newRipple = {
          id: rippleIdCounter++,
          x: e.clientX,
          y: e.clientY,
          timestamp: now
        };

        setRipples(prev => [...prev, newRipple]);
        lastRippleTime = now;

        // Remove ripple after animation completes (1.5s)
        setTimeout(() => {
          setRipples(prev => prev.filter(r => r.id !== newRipple.id));
        }, 1500);
      }
    };

    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  // Cursor effects: blob + dot with slight lag and hover amplification
  useEffect(() => {
    let rafId;
    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const lerp = { x: pos.x, y: pos.y };

    const onMove = (e) => {
      pos.x = e.clientX;
      pos.y = e.clientY;
    };

    const onOver = (e) => {
      const interactive = e.target.closest && e.target.closest('a,button,input,textarea,select,label');
      if (cursorRef.current) {
        if (interactive) cursorRef.current.classList.add('cursor--active');
        else cursorRef.current.classList.remove('cursor--active');
      }
    };

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseover', onOver, { passive: true });

    const loop = () => {
      lerp.x += (pos.x - lerp.x) * 0.12;
      lerp.y += (pos.y - lerp.y) * 0.12;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${lerp.x - cursorRef.current.offsetWidth / 2}px, ${lerp.y - cursorRef.current.offsetHeight / 2}px, 0)`;
      }
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${pos.x - dotRef.current.offsetWidth / 2}px, ${pos.y - dotRef.current.offsetHeight / 2}px, 0)`;
      }

      rafId = requestAnimationFrame(loop);
    };

    loop();

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseover', onOver);
      cancelAnimationFrame(rafId);
    };
  }, []);

  // ============================================================
  // CUSTOMIZABLE CONTENT - UPDATE THESE SECTIONS WITH YOUR INFO
  // ============================================================

  const personalInfo = {
    name: "Monil Pokar",
    tagline: "AI Product and Delivery | IIT Kanpur",
    email: "monilpokar.usa@gmail.com",
    linkedin: "https://www.linkedin.com/in/monil-pokar/",
    github: "https://github.com/pokar-monil"
  };

  const aboutContent = {
    bio: [
      "AI Product manager with 6.5+ years of experience delivering enterprise AI solutions for BFSI and SaaS clients. Proven track record of owning AI projects end-to-end—from Proof of Concept to production—across LLM, RAG, and Vision-based systems, working cross-functionally with Sales, Engineering, and client stakeholders.",
      "I've led product delivery across enterprise AI platforms, healthtech, and BFSI, working with cross-functional teams to take concepts from POC through production rollout. My approach combines rapid experimentation, user research, and data-driven iteration to ship solutions that create measurable business impact.",
      "What drives me is building AI products that solve real problems. I'm equally comfortable designing evaluation frameworks, debugging API integrations, conducting user interviews, or training enterprise teams on AI adoption best practices."
    ],
    skills: [
      { icon: Target, name: "AI/ML Products", color: "text-blue-600" },
      { icon: Users, name: "Enterprise Delivery", color: "text-purple-600" },
      { icon: BarChart3, name: "LLM Evaluation", color: "text-green-600" },
      { icon: Lightbulb, name: "RAG & Agents", color: "text-yellow-600" },
      { icon: TrendingUp, name: "POC to Production", color: "text-red-600" },
      { icon: Zap, name: "API Integration", color: "text-indigo-600" }
    ]
  };

  const workExperience = [
    {
      company: "Lumio AI",
      role: "Senior Product Manager",
      industry: "Enterprise AI",
      duration: "12 months",
      period: "Jan 2025 - Present",
      color: "border-blue-600"
    },
    {
      company: "Plum Insurance",
      role: "Product Initiatives, CTO's Office",
      industry: "Insurtech",
      duration: "10 months",
      period: "Feb 2024 - Nov 2024",
      color: "border-green-600"
    },
    {
      company: "RISA Health",
      role: "Product Analyst",
      industry: "Healthtech",
      duration: "24 months",
      period: "Feb 2022 - Jan 2024",
      color: "border-purple-600"
    },
    {
      company: "Societe Generale",
      role: "Software Developer",
      industry: "BFSI",
      duration: "30 months",
      period: "Jul 2019 - Jan 2022",
      color: "border-red-600"
    }
  ];

  const shippedProducts = [
    {
      title: "Logistics Document Extraction using AI Agents",
      company: "Lumio AI",
      period: "2025",
      summary: "Built an end-to-end document extraction pipeline for logistics agreements using LLMs + Vision models, achieving ~90% extraction accuracy. Designed a model-agnostic, configurable architecture enabling rapid switching across OCR, embedding, and LLM providers. Implemented an evaluation framework to benchmark prompts, models, and chunking strategies across accuracy, latency, and cost. Built a human-in-the-loop review system allowing manual correction and feedback to continuously improve extraction quality.",
      videoUrl: "https://www.loom.com/share/a5635574278a4eb8ada7a2672898f18c",
      impact: [
        "Achieved ~90% extraction accuracy",
        "Model-agnostic architecture with rapid provider switching",
        "Built evaluation framework for accuracy, latency, and cost benchmarking"
      ],
      technologies: ["LLMs", "Vision Models", "OCR", "Python", "Embeddings", "RAG"],
      image: "logistics-ai-placeholder.jpg"
    },
    {
      title: "LLM Evaluation Platform",
      company: "Lumio AI",
      period: "2025",
      summary: "Designed and built an LLM evaluation system to assess document extraction pipelines across multiple AI configurations. Independently built an MVP using bolt.dev (no engineering support), demoed to enterprise clients, and closed a $10K deal within 40 days. Tracked key delivery metrics including cost per extraction, OCR accuracy, LLM accuracy, latency, prompt versions, and back-testing results.",
      videoUrl: "https://www.loom.com/share/4c1cb2de8b3849a695694327aec14594",
      impact: [
        "Closed $10K enterprise deal in 40 days",
        "Built MVP independently using bolt.dev",
        "Enabled scalable evaluation for any document extraction workflow"
      ],
      technologies: ["bolt.dev", "LLMs", "Python", "Evaluation Frameworks"],
      image: "llm-eval-placeholder.jpg"
    },
    {
      title: "RAG-Based Customer Support Agent",
      company: "Lumio AI (HP Project)",
      period: "2025",
      summary: "Built an internal RAG-powered support chatbot to automate resolution of ~10% of business support tickets. Partnered with HP business teams to understand workflows and restructure knowledge bases for optimal retrieval. Delivered a production-ready agent that reduced manual effort and improved average handling time for support queries.",
      videoUrl: "https://drive.google.com/file/d/194nfxUmY9CVwonjs6bo3jSC2ItueGh4U/view?usp=sharing",
      impact: [
        "Automated ~10% of support tickets",
        "Reduced average handling time by ~18%",
        "Restructured knowledge bases for optimal retrieval"
      ],
      technologies: ["RAG", "LLMs", "Vector Databases", "Python", "Knowledge Management"],
      image: "rag-support-placeholder.jpg"
    }
  ];


  // ============================================================
  // END CUSTOMIZABLE CONTENT
  // ============================================================

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-xl font-bold text-gray-900 hover:text-primary-600 transition-colors"
            >
              {personalInfo.name.split(' ')[0]}
            </button>
            <div className="hidden md:flex space-x-8">
              {[
                { id: 'about', label: 'About' },
                { id: 'shipped', label: 'Recent Projects' },
                { id: 'contact', label: 'Contact' }
              ].map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`text-sm font-medium transition-colors ${
                    activeSection === id
                      ? 'text-primary-600 border-b-2 border-primary-600'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-gray-50 via-blue-50 to-gray-100">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 animate-fade-in">
            {personalInfo.name}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 animate-fade-in-delay">
            {personalInfo.tagline}
          </p>
          <button
            onClick={() => scrollToSection('about')}
            className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700 transition-colors animate-bounce-slow"
          >
            <span className="text-sm font-medium">Learn more</span>
            <ChevronDown className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">About Me</h2>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Photo Placeholder */}
            <div className="flex justify-center items-center">
              <div className="w-80 h-80 rounded-2xl bg-gradient-to-br from-primary-100 to-blue-200 shadow-xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-white/50 flex items-center justify-center">
                    <Users className="w-16 h-16 text-primary-600" />
                  </div>
                  <p className="text-gray-600 text-sm">Add your professional photo here</p>
                </div>
              </div>
            </div>

            {/* Bio */}
            <div className="flex flex-col justify-center space-y-4">
              {aboutContent.bio.map((paragraph, index) => (
                <p key={index} className="text-gray-600 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Core Competencies</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {aboutContent.skills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <div
                    key={index}
                    className="flex flex-col items-center p-6 bg-gray-50 rounded-xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-default"
                  >
                    <Icon className={`w-8 h-8 mb-3 ${skill.color}`} />
                    <span className="text-sm font-medium text-gray-700 text-center">{skill.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Work Experience Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Work Experience</h2>

          <div className="space-y-4">
            {workExperience.map((job, index) => (
              <div
                key={index}
                className={`bg-white border-l-4 ${job.color} rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-6`}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900">{job.role}</h3>
                  </div>
                  <div className="text-right">
                    <h3 className="text-xl font-bold text-gray-900">{job.company}</h3>
                    <p className="text-sm text-gray-600 mt-1">{job.industry}</p>
                    <p className="text-sm text-gray-600">{job.period} • {job.duration}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Projects Section */}
      <section id="shipped" className="py-24 bg-gradient-to-b from-white to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 mb-4">
              <CheckCircle2 className="w-8 h-8 text-green-600" />
              <h2 className="text-4xl font-bold text-gray-900">Recent Projects</h2>
            </div>
            <p className="text-xl text-gray-600">Recent Work & Impact</p>
          </div>

          <div className="grid grid-cols-1 gap-8">
            {shippedProducts.map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden border-2 border-green-100"
              >
                {/* Product Image Placeholder */}
                <div className="h-48 bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
                  <CheckCircle2 className="w-16 h-16 text-green-600" />
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-1">{product.title}</h3>
                      <p className="text-sm text-gray-500">{product.company} • {product.period}</p>
                    </div>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Live
                    </span>
                  </div>

                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {product.summary || product.description}
                  </p>

                  {/* Watch Demo CTA */}
                  {product.videoUrl && (
                    <div className="mb-4">
                      <a
                        href={product.videoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors shadow-sm"
                      >
                        <Play className="w-4 h-4" />
                        <span>Watch Demo</span>
                      </a>
                    </div>
                  )}

                  {/* Impact Metrics */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Impact:</h4>
                    <ul className="space-y-1">
                      {product.impact.map((metric, i) => (
                        <li key={i} className="flex items-center text-sm text-gray-600">
                          <TrendingUp className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />
                          {metric}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {product.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gradient-to-b from-gray-50 to-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Let's Build Something Together</h2>
          <p className="text-xl text-gray-600 mb-12">
            Interested in working together or just want to chat about product? I'd love to hear from you.
          </p>

          <div className="flex justify-center space-x-6 mb-12">
            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center space-x-2 px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl"
            >
              <Mail className="w-5 h-5" />
              <span>Email Me</span>
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
            >
              <Linkedin className="w-5 h-5" />
              <span>LinkedIn</span>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 text-gray-400">
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="hover:text-gray-600 transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href={`mailto:${personalInfo.email}`} className="hover:text-primary-600 transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} {personalInfo.name}. Built with React, Tailwind, and passion for great products.
          </p>
        </div>
      </footer>

      {/* Water ripples overlay */}
      <div className="pointer-events-none fixed inset-0 z-40 overflow-hidden">
        {ripples.map(ripple => (
          <div
            key={ripple.id}
            className="water-ripple"
            style={{
              left: ripple.x,
              top: ripple.y,
            }}
          />
        ))}
      </div>

      {/* Cursor effects overlay (pointer-events none) */}
      <div className="pointer-events-none fixed inset-0 z-50">
        <div ref={cursorRef} className="cursor-blob" aria-hidden="true" />
        <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
      </div>
    </div>
  );
}

export default App;
