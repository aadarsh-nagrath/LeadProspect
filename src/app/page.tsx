"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { 
  Search, 
  TrendingUp, 
  MessageCircle, 
  Bell, 
  Zap, 
  Shield, 
  BarChart3, 
  ArrowRight, 
  CheckCircle2, 
  Star,
  Play,
  Users,
  Target,
  Globe,
  Mail,
  Twitter,
  Linkedin,
  Github,
  Menu,
  X,
  ChevronRight,
  Sparkles,
  Brain,
  Clock,
  Layers
} from "lucide-react";
import { useState } from "react";

const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME || "LeadProspect";

const stats = [
  { label: "Leads Found", value: "2.4M+", icon: Target },
  { label: "Conversion Rate", value: "47%", icon: TrendingUp },
  { label: "Active Users", value: "12K+", icon: Users },
  { label: "Time Saved", value: "20hrs/week", icon: Clock },
];

const features = [
  {
    icon: Search,
    title: "Smart Discovery",
    description: "AI-powered search across Reddit, X, and LinkedIn finds exactly what you're looking for."
  },
  {
    icon: Brain,
    title: "AI Scoring",
    description: "Machine learning scores leads by intent, helping you focus on the highest-value opportunities."
  },
  {
    icon: MessageCircle,
    title: "Reply Assistant",
    description: "Get context-aware response suggestions that sound natural and professional."
  },
  {
    icon: Bell,
    title: "Instant Alerts",
    description: "Real-time notifications ensure you never miss a qualified lead."
  },
  {
    icon: BarChart3,
    title: "Analytics",
    description: "Track performance with detailed dashboards and exportable reports."
  },
  {
    icon: Shield,
    title: "Data Privacy",
    description: "Enterprise-grade security with GDPR compliance and data encryption."
  }
];

const platforms = [
  { name: "Reddit", icon: "reddit", color: "bg-orange-500/20 text-orange-400" },
  { name: "X (Twitter)", icon: "twitter", color: "bg-sky-500/20 text-sky-400" },
  { name: "LinkedIn", icon: "linkedin", color: "bg-blue-500/20 text-blue-400" },
];

const pricingPlans = [
  {
    name: "Starter",
    description: "Perfect for solopreneurs",
    price: "$49",
    period: "/mo",
    features: [
      "500 leads/month",
      "2 platforms",
      "Basic keywords",
      "Email support",
      "CSV export"
    ],
    popular: false
  },
  {
    name: "Pro",
    description: "For growing teams",
    price: "$149",
    period: "/mo",
    features: [
      "2,500 leads/month",
      "All platforms",
      "AI scoring",
      "Reply suggestions",
      "Priority support",
      "CRM integrations"
    ],
    popular: true
  },
  {
    name: "Enterprise",
    description: "For large organizations",
    price: "$499",
    period: "/mo",
    features: [
      "Unlimited leads",
      "Custom AI models",
      "API access",
      "Dedicated support",
      "SSO & SAML",
      "Custom integrations"
    ],
    popular: false
  }
];

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Growth Lead at TechFlow",
    avatar: "SC",
    content: "LeadProspect changed how we source leads. We've seen a 3x increase in qualified conversations since switching.",
    metric: "3x more qualified leads"
  },
  {
    name: "Marcus Johnson",
    role: "Founder, ScaleUp Agency",
    avatar: "MJ",
    content: "The AI scoring is incredible. It literally knows which leads are worth our time before we even reach out.",
    metric: "47% conversion rate"
  },
  {
    name: "Emily Rodriguez",
    role: "Sales Director, CloudOps",
    avatar: "ER",
    content: "We save about 20 hours per week on lead research. The time-to-first-response dropped by 70%.",
    metric: "20hrs/week saved"
  }
];

const faqs = [
  {
    question: "How does LeadProspect find leads?",
    answer: "Our AI monitors millions of conversations across Reddit, X (Twitter), and LinkedIn in real-time. We use advanced keyword matching and natural language processing to identify people actively seeking solutions you provide."
  },
  {
    question: "Is there a free trial?",
    answer: "Yes! We offer a 7-day free trial with full access to all features. No credit card required."
  },
  {
    question: "Which platforms are supported?",
    answer: "Currently we support Reddit, X (Twitter), and LinkedIn. We're constantly adding more platforms based on user feedback."
  },
  {
    question: "Can I export leads?",
    answer: "Absolutely. You can export leads to CSV, or connect directly to popular CRMs like Salesforce, HubSpot, and Pipedrive."
  },
  {
    question: "How accurate is the AI scoring?",
    answer: "Our AI scoring model has a 94% accuracy rate in predicting lead quality. It analyzes hundreds of signals including engagement, sentiment, and buyer intent."
  }
];

function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 bg-primary rounded-xl flex items-center justify-center animate-pulse-glow">
              <Sparkles className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold gradient-text">{APP_NAME}</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Features
            </Link>
            <Link href="#how-it-works" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              How it Works
            </Link>
            <Link href="#pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Pricing
            </Link>
            <Link href="#testimonials" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Testimonials
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" size="sm" className="text-muted-foreground">
              Log in
            </Button>
            <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium">
              Start Free Trial
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border/50 glass">
          <div className="px-4 py-4 space-y-3">
            <Link href="#features" className="block text-sm text-muted-foreground hover:text-foreground">
              Features
            </Link>
            <Link href="#how-it-works" className="block text-sm text-muted-foreground hover:text-foreground">
              How it Works
            </Link>
            <Link href="#pricing" className="block text-sm text-muted-foreground hover:text-foreground">
              Pricing
            </Link>
            <div className="pt-3 space-y-2">
              <Button variant="ghost" className="w-full">Log in</Button>
              <Button className="w-full bg-primary">Start Free Trial</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen mesh-gradient grid-pattern pt-24 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-1/4 -left-32 w-64 h-64 bg-primary/20 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">AI-Powered Lead Generation</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight animate-fade-in-up">
            Find Your Perfect
            <br />
            <span className="gradient-text">Leads Automatically</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in-up stagger-2 opacity-0">
            Discover high-intent leads from Reddit, X & LinkedIn with AI-powered 
            scoring. Stop prospecting and start closing.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-in-up stagger-3 opacity-0">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 h-12 text-base hover-lift">
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button variant="outline" size="lg" className="border-border hover:bg-secondary px-8 h-12 text-base hover-lift">
              <Play className="w-4 h-4 mr-2" />
              Watch Demo
            </Button>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground animate-fade-in-up stagger-4 opacity-0">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-primary" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-primary" />
              <span>7-day free trial</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-primary" />
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>

        {/* Dashboard Preview */}
        <div className="mt-20 relative animate-fade-in-up stagger-5 opacity-0">
          <div className="absolute inset-0 bg-primary/5 blur-3xl rounded-full" />
          <Card className="relative bg-card/80 border-border/50 backdrop-blur-xl overflow-hidden">
            <CardContent className="p-6">
              {/* Mock dashboard header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                  <Zap className="w-3 h-3 mr-1" />
                  Live Data
                </Badge>
              </div>

              {/* Stats grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                {stats.map((stat, i) => (
                  <div key={i} className="bg-secondary/50 rounded-xl p-4 border border-border/30 hover:border-primary/30 transition-colors">
                    <div className="flex items-center gap-2 mb-2">
                      <stat.icon className="w-4 h-4 text-primary" />
                      <span className="text-xs text-muted-foreground">{stat.label}</span>
                    </div>
                    <div className="text-2xl font-bold">{stat.value}</div>
                  </div>
                ))}
              </div>

              {/* Lead preview */}
              <div className="bg-secondary/30 rounded-xl p-4 border border-border/30">
                <div className="flex items-center justify-between text-sm mb-3">
                  <span className="text-muted-foreground">Recent High-Intent Leads</span>
                  <Button variant="ghost" size="sm" className="text-primary h-8">
                    View All <ChevronRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
                <div className="space-y-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-center justify-between p-3 bg-background/50 rounded-lg hover:bg-background/80 transition-colors cursor-pointer">
                      <div className="flex items-center gap-3">
                        <Avatar className="w-8 h-8">
                          <AvatarFallback className="text-xs">U{i}</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="text-sm font-medium">Looking for {["CRM software", "email automation", "sales tools"][i-1]}</div>
                          <div className="text-xs text-muted-foreground">Reddit • 2h ago</div>
                        </div>
                      </div>
                      <Badge className="bg-primary/10 text-primary border-primary/20 text-xs">
                        92% match
                      </Badge>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

function Features() {
  return (
    <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary border-primary/20">
            Features
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Everything You Need to
            <br />
            <span className="gradient-text">Scale Your Outreach</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Powerful tools that work together to help you find, qualify, and convert more leads.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <Card key={i} className="group bg-card/50 border-border/50 hover:border-primary/30 hover:bg-card/80 transition-all duration-300 hover-lift">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function Platforms() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 border-y border-border/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-muted-foreground mb-6">Monitor conversations across</p>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {platforms.map((platform, i) => (
              <div key={i} className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
                <div className={`w-10 h-10 rounded-lg ${platform.color} flex items-center justify-center`}>
                  <Globe className="w-5 h-5" />
                </div>
                <span className="font-medium">{platform.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Set Your Keywords",
      description: "Define the topics and phrases that matter to your business. Our system understands context, not just keywords."
    },
    {
      number: "02",
      title: "AI Does the Work",
      description: "Our AI scans millions of conversations, scoring each lead by intent, budget authority, and timeline."
    },
    {
      number: "03",
      title: "Convert & Close",
      description: "Engage with personalized suggestions and turn conversations into customers on autopilot."
    }
  ];

  return (
    <section id="how-it-works" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary border-primary/20">
            How It Works
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            From Discovery to
            <br />
            <span className="gradient-text">Revenue in 3 Steps</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="relative">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-full w-full h-px bg-gradient-to-r from-primary/50 to-transparent" />
              )}
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-24 h-24 bg-primary/10 rounded-2xl mb-6 border border-primary/20">
                  <span className="text-3xl font-bold gradient-text">{step.number}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary border-primary/20">
            Testimonials
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Loved by
            <br />
            <span className="gradient-text">Growth Teams</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <Card key={i} className="bg-card/50 border-border/50 hover:border-primary/30 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center gap-3">
                  <Avatar className="w-10 h-10">
                    <AvatarFallback className="bg-primary/20 text-primary text-sm">
                      {testimonial.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-border/30">
                  <span className="text-primary font-semibold">{testimonial.metric}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary border-primary/20">
            Pricing
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Simple, Transparent
            <br />
            <span className="gradient-text">Pricing</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Choose the plan that fits your needs. All plans include a 7-day free trial.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricingPlans.map((plan, i) => (
            <Card 
              key={i} 
              className={`relative bg-card/50 border-border/50 hover:border-primary/30 transition-all hover-lift ${plan.popular ? 'border-primary/50 bg-primary/5' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground">
                    Most Popular
                  </Badge>
                </div>
              )}
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <h3 className="text-lg font-semibold mb-1">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground">{plan.description}</p>
                </div>
                <div className="text-center mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className={`w-full ${plan.popular ? 'bg-primary hover:bg-primary/90' : ''}`}
                  variant={plan.popular ? "default" : "outline"}
                >
                  Start Free Trial
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary/20">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary border-primary/20">
            FAQ
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Frequently Asked
            <span className="gradient-text"> Questions</span>
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <Card 
              key={i} 
              className="bg-card/50 border-border/50 overflow-hidden"
            >
              <button
                className="w-full p-4 text-left flex items-center justify-between"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="font-medium pr-4">{faq.question}</span>
                <ChevronRight className={`w-5 h-5 text-muted-foreground transition-transform ${openIndex === i ? 'rotate-90' : ''}`} />
              </button>
              {openIndex === i && (
                <CardContent className="px-4 pb-4 pt-0">
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 mesh-gradient" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/20 blur-[150px] rounded-full" />
      
      <div className="relative max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
          Ready to Transform Your
          <br />
          <span className="gradient-text">Lead Generation?</span>
        </h2>
        <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto">
          Join thousands of sales teams who have already switched to AI-powered lead generation.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 h-12 text-base hover-lift">
            Start Free Trial
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          <Button variant="outline" size="lg" className="border-border hover:bg-secondary px-8 h-12 text-base">
            Book a Demo
          </Button>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-16 px-4 sm:px-6 lg:px-8 border-t border-border/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-primary rounded-xl flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold gradient-text">{APP_NAME}</span>
            </div>
            <p className="text-muted-foreground text-sm">
              AI-powered lead generation for modern sales teams.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="#" className="hover:text-foreground transition-colors">Features</Link></li>
              <li><Link href="#" className="hover:text-foreground transition-colors">Pricing</Link></li>
              <li><Link href="#" className="hover:text-foreground transition-colors">Integrations</Link></li>
              <li><Link href="#" className="hover:text-foreground transition-colors">Changelog</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="#" className="hover:text-foreground transition-colors">About</Link></li>
              <li><Link href="#" className="hover:text-foreground transition-colors">Blog</Link></li>
              <li><Link href="#" className="hover:text-foreground transition-colors">Careers</Link></li>
              <li><Link href="#" className="hover:text-foreground transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="#" className="hover:text-foreground transition-colors">Privacy</Link></li>
              <li><Link href="#" className="hover:text-foreground transition-colors">Terms</Link></li>
              <li><Link href="#" className="hover:text-foreground transition-colors">Security</Link></li>
            </ul>
          </div>
        </div>

        <Separator className="mb-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2026 {APP_NAME}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <Twitter className="w-5 h-5" />
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <Linkedin className="w-5 h-5" />
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <Github className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Features />
      <Platforms />
      <HowItWorks />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}
