"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroLogo from '@/components/sections/hero/HeroLogo';
import AboutPhoneTimeline from '@/components/sections/about/AboutPhoneTimeline';
import FeatureCardNine from '@/components/sections/feature/FeatureCardNine';
import PricingCardOne from '@/components/sections/pricing/PricingCardOne';
import MetricCardFour from '@/components/sections/metrics/MetricCardFour';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import FaqBase from '@/components/sections/faq/FaqBase';
import ContactCenterForm from '@/components/sections/contact/ContactCenterForm';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { Award, Github, Linkedin, Mail, Shield, Sparkles, TrendingUp, Twitter, Users, Zap } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-bubble"
      defaultTextAnimation="reveal-blur"
      borderRadius="soft"
      contentWidth="small"
      sizing="large"
      background="animatedGrid"
      cardStyle="glass-elevated"
      primaryButtonStyle="layered-depth"
      secondaryButtonStyle="glass"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          brandName="SaasFlow"
          navItems={[
            { name: "Features", id: "features" },
            { name: "Pricing", id: "pricing" },
            { name: "About", id: "about" },
            { name: "FAQ", id: "faq" },
            { name: "Contact", id: "contact" }
          ]}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroLogo
          logoText="SaasFlow"
          description="Streamline your workflow with powerful collaboration tools built for modern teams"
          buttons={[
            { text: "Get Started Free", href: "contact" },
            { text: "Watch Demo", href: "https://www.youtube.com/embed/dQw4w9WgXcQ" }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763829556979-397pgov6.jpg"
          imageAlt="Modern tech startup office with team working"
          showDimOverlay={true}
        />
      </div>

      <div id="about" data-section="about">
        <AboutPhoneTimeline
          tag="About Us"
          title="Built for Teams That Move Fast"
          description="SaasFlow empowers teams to collaborate seamlessly, automate repetitive tasks, and ship features faster than ever before. Our platform is trusted by thousands of companies worldwide."
          phoneOne={{
            imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763829557735-aamtwxrp.jpg"
          }}
          phoneTwo={{
            imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763829558239-kycxvmm6.jpg"
          }}
          buttons={[
            { text: "Learn More", href: "features" }
          ]}
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardNine
          title="Powerful Features"
          description="Everything you need to transform your team's productivity"
          tag="Features"
          tagIcon={Sparkles}
          showStepNumbers={true}
          textboxLayout="default"
          features={[
            {
              id: 1,
              title: "Seamless Collaboration",
              description: "Real-time collaboration with team members. Share files, comments, and updates instantly across your entire organization.",
              phoneOne: {
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763829558856-w5afwf6t.jpg"
              },
              phoneTwo: {
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763829559644-g3kjb84p.jpg"
              }
            },
            {
              id: 2,
              title: "Smart Automation",
              description: "Automate repetitive workflows and save hours every week. Create custom workflows without writing code using our visual builder.",
              phoneOne: {
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763829560291-d9a1lxkc.jpg"
              },
              phoneTwo: {
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763829560823-8br7nvan.jpg"
              }
            }
          ]}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardOne
          title="Simple, Transparent Pricing"
          description="Choose the plan that fits your team's needs. Always start free, upgrade anytime."
          tag="Pricing"
          tagIcon={Zap}
          textboxLayout="default"
          animationType="slide-up"
          plans={[
            {
              id: "starter",
              badge: "For Teams",
              price: "$29/mo",
              subtitle: "Perfect for small teams just getting started",
              features: [
                "Up to 10 team members",
                "Basic collaboration tools",
                "5GB storage",
                "Email support"
              ],
              badgeIcon: Users
            },
            {
              id: "pro",
              badge: "Most Popular",
              price: "$79/mo",
              subtitle: "Ideal for growing businesses",
              features: [
                "Up to 50 team members",
                "Advanced automation",
                "100GB storage",
                "Priority support",
                "Custom integrations"
              ],
              badgeIcon: Sparkles
            },
            {
              id: "enterprise",
              badge: "Enterprise",
              price: "Custom",
              subtitle: "For large-scale operations",
              features: [
                "Unlimited team members",
                "Unlimited everything",
                "Dedicated support",
                "Custom SLA",
                "Advanced security"
              ],
              badgeIcon: Shield
            }
          ]}
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardFour
          title="Trusted by Leading Companies"
          description="See how SaasFlow drives real results for our customers"
          tag="Impact"
          textboxLayout="default"
          metrics={[
            {
              id: "1",
              icon: TrendingUp,
              title: "Growth",
              value: "300%",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763829561702-e7hg8f47.jpg"
            },
            {
              id: "2",
              icon: Users,
              title: "Active Users",
              value: "50K+",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763829562449-jxaufccy.jpg"
            },
            {
              id: "3",
              icon: Award,
              title: "Satisfaction",
              value: "98%",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763829563274-zykxg0dp.jpg"
            },
            {
              id: "4",
              icon: Zap,
              title: "Uptime",
              value: "99.9%",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763829563957-v9yjch5d.jpg"
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwo
          title="Loved by Teams Worldwide"
          description="See what our customers have to say about SaasFlow"
          tag="Testimonials"
          textboxLayout="default"
          animationType="slide-up"
          testimonials={[
            {
              id: "1",
              name: "Sarah Chen",
              role: "CEO & Founder",
              testimonial: "SaasFlow transformed how our team collaborates. We cut our project timelines in half and our team loves the intuitive interface. Highly recommend!",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763829564548-yec4847y.jpg"
            },
            {
              id: "2",
              name: "Michael Rodriguez",
              role: "VP of Product",
              testimonial: "The automation features alone saved us hundreds of hours every month. The support team is responsive and the product keeps improving.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763829565246-svzy8s16.jpg"
            },
            {
              id: "3",
              name: "Emily Watson",
              role: "Operations Manager",
              testimonial: "We tried several solutions before SaasFlow. This is the only one that actually integrates seamlessly with our existing workflow.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763829565842-cr7eckrb.jpg"
            },
            {
              id: "4",
              name: "David Kim",
              role: "Engineering Lead",
              testimonial: "Outstanding product. The team clearly understands what developers need. We've rolled it out across our entire organization.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763829566754-ymq4lj5m.jpg"
            },
            {
              id: "5",
              name: "Jessica Martinez",
              role: "Marketing Director",
              testimonial: "Our marketing team's productivity increased dramatically. SaasFlow makes project management actually enjoyable to use.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763829567259-1z9hxn1l.jpg"
            },
            {
              id: "6",
              name: "Alex Thompson",
              role: "Founder",
              testimonial: "Best investment we made for our team. The ROI was immediate and the scalability has been perfect as we grow.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763829567993-6iihkcra.png"
            }
          ]}
        />
      </div>

      <div id="socialproof" data-section="socialproof">
        <SocialProofOne
          title="Trusted by Industry Leaders"
          description="Join thousands of companies using SaasFlow to transform their workflow"
          tag="Partners"
          textboxLayout="default"
          showCard={true}
          logos={[
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763829568746-vaf6xhs3.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763829569283-hyxsich6.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763829569858-9qkrbema.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763829570506-y9ral2ab.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763829570988-xpam73u1.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763829571454-jksgf4sc.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763829572033-ax67vvm0.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763829572627-3e66n4hs.jpg"
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqBase
          title="Frequently Asked Questions"
          description="Everything you need to know about SaasFlow"
          tag="Help"
          textboxLayout="default"
          animationType="smooth"
          showCard={true}
          faqs={[
            {
              id: "1",
              title: "What is SaasFlow?",
              content: "SaasFlow is a modern collaboration and automation platform designed for teams of all sizes. It combines project management, communication, and workflow automation in one intuitive interface."
            },
            {
              id: "2",
              title: "How do I get started?",
              content: "Getting started is easy! Sign up for a free account, invite your team members, and start collaborating instantly. No credit card required for the free tier."
            },
            {
              id: "3",
              title: "Can I try SaasFlow for free?",
              content: "Yes! We offer a free tier with essential features. You can upgrade to a paid plan anytime as your team grows. All plans include a 14-day free trial of premium features."
            },
            {
              id: "4",
              title: "How secure is my data?",
              content: "We take security seriously. All data is encrypted in transit and at rest. We comply with SOC 2, GDPR, and HIPAA standards. Your information is backed up automatically."
            },
            {
              id: "5",
              title: "What integrations are available?",
              content: "SaasFlow integrates with 500+ popular tools including Slack, GitHub, Jira, Salesforce, and more. You can also build custom integrations using our API."
            },
            {
              id: "6",
              title: "What is your support like?",
              content: "We offer email support for free users and priority support for paid plans. Pro and Enterprise users get dedicated support with guaranteed response times."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenterForm
          title="Get Started Today"
          description="Join thousands of teams already using SaasFlow. Get your free account in minutes."
          inputs={[
            {
              name: "name",
              type: "text",
              placeholder: "Your Name",
              required: true
            },
            {
              name: "email",
              type: "email",
              placeholder: "your@email.com",
              required: true
            },
            {
              name: "company",
              type: "text",
              placeholder: "Company Name",
              required: false
            },
            {
              name: "teamsize",
              type: "text",
              placeholder: "Team Size",
              required: false
            }
          ]}
          textarea={{
            name: "message",
            placeholder: "Tell us about your needs...",
            rows: 5,
            required: false
          }}
          buttonText="Start Free Trial"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSocial
          logoText="SaasFlow"
          copyrightText="© SaasFlow, Inc. 2025. All rights reserved."
          columns={[
            {
              title: "Product",
              items: [
                { label: "Features", href: "features" },
                { label: "Pricing", href: "pricing" },
                { label: "Security", href: "https://saasflow.com/security" },
                { label: "Roadmap", href: "https://saasflow.com/roadmap" }
              ]
            },
            {
              title: "Company",
              items: [
                { label: "About", href: "about" },
                { label: "Blog", href: "https://saasflow.com/blog" },
                { label: "Careers", href: "https://saasflow.com/careers" },
                { label: "Press", href: "https://saasflow.com/press" }
              ]
            },
            {
              title: "Resources",
              items: [
                { label: "Documentation", href: "https://docs.saasflow.com" },
                { label: "Support", href: "https://saasflow.com/support" },
                { label: "Community", href: "https://community.saasflow.com" },
                { label: "API", href: "https://api.saasflow.com" }
              ]
            },
            {
              title: "Legal",
              items: [
                { label: "Privacy", href: "https://saasflow.com/privacy" },
                { label: "Terms", href: "https://saasflow.com/terms" },
                { label: "Contact", href: "contact" }
              ]
            }
          ]}
          socialLinks={[
            { icon: Twitter, href: "https://twitter.com/saasflow", ariaLabel: "Twitter" },
            { icon: Linkedin, href: "https://linkedin.com/company/saasflow", ariaLabel: "LinkedIn" },
            { icon: Github, href: "https://github.com/saasflow", ariaLabel: "GitHub" },
            { icon: Mail, href: "mailto:hello@saasflow.com", ariaLabel: "Email" }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}