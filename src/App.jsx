import { useState, useEffect } from 'react';
import {
  ChevronDown,
  Mail,
  Linkedin,
  Github,
  CheckCircle2,
  Archive,
  TrendingUp,
  Users,
  Target,
  Lightbulb,
  BarChart3,
  Zap
} from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll events for navbar styling and active section
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Determine active section
      const sections = ['hero', 'about', 'shipped', 'unshipped', 'contact'];
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

  // ============================================================
  // CUSTOMIZABLE CONTENT - UPDATE THESE SECTIONS WITH YOUR INFO
  // ============================================================

  const personalInfo = {
    name: "Alex Morgan",
    tagline: "Product Manager | Turning Ideas into Impact",
    email: "alex.morgan@email.com",
    linkedin: "https://linkedin.com/in/yourprofile",
    github: "https://github.com/yourprofile"
  };

  const aboutContent = {
    bio: [
      "I'm a product manager with 6+ years of experience building products that users love and businesses need. My approach combines data-driven decision making with deep empathy for user needs, ensuring every feature we ship creates real value.",
      "I've led product development across B2B SaaS, consumer mobile apps, and internal tools, working with cross-functional teams to take concepts from ideation through launch and beyond. I believe the best products come from rapid experimentation, user feedback, and a willingness to pivot when the data tells us to.",
      "What drives me is the challenge of solving complex problems with elegant solutions. I'm equally comfortable diving into analytics dashboards, sketching wireframes with designers, or working through technical constraints with engineering teams."
    ],
    skills: [
      { icon: Target, name: "Product Strategy", color: "text-blue-600" },
      { icon: Users, name: "User Research", color: "text-purple-600" },
      { icon: BarChart3, name: "Data Analysis", color: "text-green-600" },
      { icon: Lightbulb, name: "Product Design", color: "text-yellow-600" },
      { icon: TrendingUp, name: "Growth & Metrics", color: "text-red-600" },
      { icon: Zap, name: "Agile & Scrum", color: "text-indigo-600" }
    ]
  };

  const shippedProducts = [
    {
      title: "Enterprise Analytics Dashboard",
      company: "TechCorp SaaS",
      period: "2023 - 2024",
      description: "Led the development of a comprehensive analytics platform that helps enterprise clients visualize and act on their data. Coordinated between 3 engineering teams and design to deliver a complex feature on time.",
      impact: [
        "Increased user engagement by 45%",
        "Reduced time-to-insight by 60%",
        "Achieved 92% customer satisfaction score"
      ],
      technologies: ["React", "Python", "SQL", "Mixpanel", "Figma"],
      image: "dashboard-placeholder.jpg"
    },
    {
      title: "Mobile Checkout Optimization",
      company: "ShopNow E-commerce",
      period: "2022 - 2023",
      description: "Redesigned the mobile checkout flow to reduce friction and cart abandonment. Conducted extensive A/B testing and user research to validate each iteration before full rollout.",
      impact: [
        "Reduced cart abandonment by 28%",
        "Increased mobile conversion rate by 35%",
        "Generated $2.3M additional annual revenue"
      ],
      technologies: ["React Native", "Firebase", "Stripe", "Google Analytics"],
      image: "mobile-checkout-placeholder.jpg"
    },
    {
      title: "Internal Team Collaboration Tool",
      company: "StartupXYZ",
      period: "2021 - 2022",
      description: "Built from scratch an internal tool to streamline communication between product, engineering, and design teams. Focused on async communication and reducing meeting overhead.",
      impact: [
        "Saved 12 hours per team per week",
        "Adopted by 200+ employees within 2 months",
        "Reduced cross-team meetings by 40%"
      ],
      technologies: ["Vue.js", "Node.js", "PostgreSQL", "WebSockets"],
      image: "collab-tool-placeholder.jpg"
    },
    {
      title: "AI-Powered Content Recommendations",
      company: "MediaStream Platform",
      period: "2020 - 2021",
      description: "Shipped a machine learning-based recommendation engine that personalizes content for users based on viewing history and preferences. Worked closely with ML engineers to balance accuracy with explainability.",
      impact: [
        "Increased user session time by 52%",
        "Improved content discovery by 67%",
        "Reached 500K daily active users"
      ],
      technologies: ["Python", "TensorFlow", "React", "AWS", "Redis"],
      image: "ai-recs-placeholder.jpg"
    }
  ];

  const unshippedProducts = [
    {
      title: "Social Shopping Features",
      company: "ShopNow E-commerce",
      period: "2023",
      description: "Proposed a suite of social features including shared wishlists, friend recommendations, and group buying. The concept showed promise in early user testing but required significant engineering resources.",
      reason: "Deprioritized due to technical complexity and competing priorities. The team needed to focus on core platform stability after rapid growth.",
      learnings: [
        "Validated the user desire for social shopping through surveys (78% interested)",
        "Learned to better assess technical feasibility earlier in the ideation process",
        "Realized that great ideas need the right timing and resources to succeed"
      ]
    },
    {
      title: "Voice-Activated Analytics",
      company: "TechCorp SaaS",
      period: "2022",
      description: "Envisioned a voice interface for querying analytics data, allowing users to ask questions and get insights without clicking through dashboards. Built a working prototype with promising results.",
      reason: "Pivot after user testing revealed most users preferred visual dashboards. Voice was interesting but not their primary pain point.",
      learnings: [
        "User interviews don't always predict actual usage behavior",
        "Tested with 45 users and found only 12% would use voice regularly",
        "Sometimes the most innovative solution isn't the right solution"
      ]
    },
    {
      title: "Automated Onboarding Flow",
      company: "StartupXYZ",
      period: "2021",
      description: "Designed an intelligent onboarding system that would adapt based on user role, team size, and use case. Would have significantly reduced time-to-value for new customers.",
      reason: "Company pivoted to focus on enterprise segment, requiring a different onboarding approach entirely. The original concept was too consumer-focused.",
      learnings: [
        "Market changes can invalidate even well-researched product decisions",
        "Built flexibility into future product roadmaps to handle pivots",
        "Salvaged key learnings and applied them to the new enterprise onboarding"
      ]
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
                { id: 'shipped', label: 'Shipped' },
                { id: 'unshipped', label: 'Unshipped' },
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

      {/* Shipped Products Section */}
      <section id="shipped" className="py-24 bg-gradient-to-b from-white to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 mb-4">
              <CheckCircle2 className="w-8 h-8 text-green-600" />
              <h2 className="text-4xl font-bold text-gray-900">Shipped Products</h2>
            </div>
            <p className="text-xl text-gray-600">Ideas That Got Built</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
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

                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {product.description}
                  </p>

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

      {/* Unshipped Products Section */}
      <section id="unshipped" className="py-24 bg-gradient-to-b from-green-50 to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 mb-4">
              <Archive className="w-8 h-8 text-gray-600" />
              <h2 className="text-4xl font-bold text-gray-900">Unshipped Products</h2>
            </div>
            <p className="text-xl text-gray-600">Ideas That Never Made It (But Taught Me Something)</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {unshippedProducts.map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border-2 border-gray-200"
              >
                {/* Product Header */}
                <div className="h-32 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <Archive className="w-12 h-12 text-gray-400" />
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{product.title}</h3>
                      <p className="text-sm text-gray-500">{product.company} • {product.period}</p>
                    </div>
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-200 text-gray-700">
                      Archived
                    </span>
                  </div>

                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {product.description}
                  </p>

                  {/* Reason */}
                  <div className="mb-4 p-3 bg-gray-50 rounded-lg">
                    <h4 className="text-xs font-semibold text-gray-900 mb-1">Why it didn't ship:</h4>
                    <p className="text-xs text-gray-600 leading-relaxed">{product.reason}</p>
                  </div>

                  {/* Learnings */}
                  <div>
                    <h4 className="text-xs font-semibold text-gray-900 mb-2">Key Learnings:</h4>
                    <ul className="space-y-1">
                      {product.learnings.map((learning, i) => (
                        <li key={i} className="flex items-start text-xs text-gray-600">
                          <Lightbulb className="w-3 h-3 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span>{learning}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 italic max-w-2xl mx-auto">
              "The best product managers learn as much from what doesn't ship as from what does.
              Every archived project is a lesson in prioritization, feasibility, and user needs."
            </p>
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
    </div>
  );
}

export default App;
