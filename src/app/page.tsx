"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroLogo from '@/components/sections/hero/HeroLogo';
import SplitAbout from '@/components/sections/about/SplitAbout';
import FeatureCardSeven from '@/components/sections/feature/FeatureCardSeven';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import PricingCardThree from '@/components/sections/pricing/PricingCardThree';
import MetricCardTwo from '@/components/sections/metric/MetricCardTwo';
import TeamCardOne from '@/components/sections/team/TeamCardOne';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import SocialProofTwo from '@/components/sections/socialProof/SocialProofTwo';
import FaqBase from '@/components/sections/faq/FaqBase';
import BlogCardOne from '@/components/sections/blog/BlogCardOne';
import ContactCenterForm from '@/components/sections/contact/ContactCenterForm';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { Award, Facebook, Instagram, MapPin, Shield, Sparkles, Twitter } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="expand-hover"
      defaultTextAnimation="entrance-slide"
      borderRadius="pill"
      contentWidth="large"
      sizing="small"
      background="floatingGradient"
      cardStyle="glass-elevated"
      primaryButtonStyle="gradient"
      secondaryButtonStyle="radial-glow"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          navItems={[
            { name: "Services", id: "services" },
            { name: "About", id: "about" },
            { name: "Pricing", id: "pricing" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="PestShield Pro"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroLogo
          logoText="PestShield Pro"
          description="Professional pest control solutions delivered right to your door. Protecting homes and families with safe, effective treatments."
          buttons={[
            { text: "Get Free Quote", href: "contact" },
            { text: "Learn More", href: "about" }
          ]}
          imageSrc="https://pixabay.com/get/gb4b8b10edcc2bac3d46817bcea4ad535fd43e4764dfb12e07a6121b72fa788badada8d0490e113bac3dfd2e0ca822fe563289895977d0ff415eb81d043f537de_1280.jpg"
          imageAlt="Professional pest control service"
        />
      </div>

      <div id="about" data-section="about">
        <SplitAbout
          title="Why Choose PestShield Pro"
          description="We bring professional pest control directly to your doorstep with proven solutions and exceptional service."
          tag="About Us"
          bulletPoints={[
            {
              title: "Door-to-Door Service",
              description: "Convenient scheduling and direct home visits for personalized pest solutions",
              icon: MapPin
            },
            {
              title: "Safe & Effective",
              description: "EPA-approved treatments that are safe for your family and pets while eliminating pests",
              icon: Shield
            },
            {
              title: "Experienced Professionals",
              description: "Licensed technicians with years of experience in residential pest control",
              icon: Award
            }
          ]}
          imageSrc="https://pixabay.com/get/gb4b8b10edcc2bac3d46817bcea4ad535fd43e4764dfb12e07a6121b72fa788badada8d0490e113bac3dfd2e0ca822fe563289895977d0ff415eb81d043f537de_1280.jpg"
          imageAlt="Pest control professional at work"
          imagePosition="right"
          textboxLayout="default"
        />
      </div>

      <div id="feature" data-section="feature">
        <FeatureCardSeven
          title="Complete Pest Control Services"
          description="From termites to rodents, we handle all your pest control needs with professional-grade solutions."
          tag="Services"
          features={[
            {
              id: "1",
              title: "Termite Control",
              description: "Comprehensive termite inspection and treatment to protect your home's foundation and structure",
              imageSrc: "https://pixabay.com/get/g2d1c1258ff0960935ee813076e00421759ef0617df6c4ace68129be66c3a2ccfabad1bce952cde0da474cdb1785e8d1df116228374b94a9857dcb09068b219da_1280.jpg",
              imageAlt: "Termite control treatment"
            },
            {
              id: "2",
              title: "Ant Elimination",
              description: "Targeted ant control that eliminates colonies and prevents future infestations",
              imageSrc: "https://pixabay.com/get/g959aaf6d49d31c03df068164eac281b0dc0091c9412243ff67dec6d5d391884cb2b28ef164d1ae369bf43b8f4b7aa707eac6fe280069f145e2051e73f5502f02_1280.jpg",
              imageAlt: "Ant pest control"
            },
            {
              id: "3",
              title: "Rodent Control",
              description: "Safe and humane rodent removal with prevention strategies to keep them out",
              imageSrc: "https://pixabay.com/get/gb543e0e717da8efbfc6a14784de37d7cd9a30d2e336f5941fa8ecc2c8a71aa7eb46a2b41bb0f75fdd8de51d7b79e6ff80917ed5be4abb6f3395697ad3f7c102e_1280.jpg",
              imageAlt: "Rodent control service"
            },
            {
              id: "4",
              title: "Spider Treatment",
              description: "Effective spider control for common and dangerous species around your home",
              imageSrc: "https://pixabay.com/get/gd9cc3be4d3e548a05653e9544a77e5d9e06750c7d259374b0db9b1bfd11578115e05aed65d23e292b24e910c6c68954266083bc0b421fc36a65a43acaefdebe2_1280.jpg",
              imageAlt: "Spider pest treatment"
            }
          ]}
          textboxLayout="default"
          animationType="slide-up"
        />
      </div>

      <div id="product" data-section="product">
        <ProductCardTwo
          title="Featured Services"
          description="Our most popular pest control solutions with proven results"
          tag="Popular"
          products={[
            {
              id: "1",
              brand: "PestShield Pro",
              name: "Comprehensive Home Treatment",
              price: "$189",
              rating: 5,
              reviewCount: "2.3k",
              imageSrc: "https://pixabay.com/get/gb4b8b10edcc2bac3d46817bcea4ad535fd43e4764dfb12e07a6121b72fa788badada8d0490e113bac3dfd2e0ca822fe563289895977d0ff415eb81d043f537de_1280.jpg",
              imageAlt: "Home pest treatment"
            },
            {
              id: "2",
              brand: "PestShield Pro",
              name: "Termite Protection Plan",
              price: "$299",
              rating: 5,
              reviewCount: "1.8k",
              imageSrc: "https://pixabay.com/get/g2d1c1258ff0960935ee813076e00421759ef0617df6c4ace68129be66c3a2ccfabad1bce952cde0da474cdb1785e8d1df116228374b94a9857dcb09068b219da_1280.jpg",
              imageAlt: "Termite protection"
            },
            {
              id: "3",
              brand: "PestShield Pro",
              name: "Monthly Maintenance",
              price: "$89",
              rating: 4,
              reviewCount: "950",
              imageSrc: "https://pixabay.com/get/g959aaf6d49d31c03df068164eac281b0dc0091c9412243ff67dec6d5d391884cb2b28ef164d1ae369bf43b8f4b7aa707eac6fe280069f145e2051e73f5502f02_1280.jpg",
              imageAlt: "Monthly pest control"
            }
          ]}
          textboxLayout="default"
          gridVariant="three-columns-all-equal-width"
          animationType="blur-reveal"
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardThree
          title="Choose Your Protection Plan"
          description="Affordable pest control solutions tailored to your needs"
          tag="Pricing"
          plans={[
            {
              id: "basic",
              price: "$89",
              name: "Basic Treatment",
              buttons: [
                { text: "Get Started", href: "contact" },
                { text: "Learn More", href: "about" }
              ],
              features: [
                "One-time treatment",
                "Common pest control",
                "30-day warranty",
                "Phone support"
              ]
            },
            {
              id: "popular",
              badge: "Most Popular",
              badgeIcon: Sparkles,
              price: "$189",
              name: "Complete Protection",
              buttons: [
                { text: "Get Started", href: "contact" },
                { text: "Learn More", href: "about" }
              ],
              features: [
                "Comprehensive treatment",
                "All pest types covered",
                "90-day warranty",
                "Priority support",
                "Follow-up visit"
              ]
            },
            {
              id: "premium",
              price: "$89/month",
              name: "Monthly Maintenance",
              buttons: [
                { text: "Get Started", href: "contact" },
                { text: "Learn More", href: "about" }
              ],
              features: [
                "Monthly treatments",
                "Year-round protection",
                "Unlimited service calls",
                "Priority scheduling",
                "100% satisfaction guarantee"
              ]
            }
          ]}
          textboxLayout="default"
          animationType="scale-rotate"
        />
      </div>

      <div id="metric" data-section="metric">
        <MetricCardTwo
          title="Trusted by Homeowners"
          description="The numbers speak for our commitment to effective pest control"
          tag="Results"
          metrics={[
            {
              id: "1",
              value: "5,000+",
              description: "Homes Protected"
            },
            {
              id: "2",
              value: "98%",
              description: "Customer Satisfaction"
            },
            {
              id: "3",
              value: "15+",
              description: "Years Experience"
            },
            {
              id: "4",
              value: "24/7",
              description: "Emergency Service"
            }
          ]}
          textboxLayout="default"
          gridVariant="four-items-2x2-equal-grid"
          animationType="opacity"
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardOne
          title="Meet Our Expert Team"
          description="Licensed professionals dedicated to keeping your home pest-free"
          tag="Team"
          members={[
            {
              id: "1",
              name: "Mike Rodriguez",
              role: "Senior Technician",
              imageSrc: "https://pixabay.com/get/g5e11c29fb79a9a32b5087eb920743dd800daf72b3bcc5da91afb9d19c8488363eca4b37fffc26e3565b2be9e75a8c0bc4ebe6a070cc481ebac28c5b13345dd15_1280.jpg",
              imageAlt: "Mike Rodriguez pest control expert"
            },
            {
              id: "2",
              name: "Sarah Chen",
              role: "Inspection Specialist",
              imageSrc: "https://pixabay.com/get/gcb467c1b3e41aeb168396d579a6658cc00282126d8a06e43efa1bc15216b891a9d63bb21d28c9e1794aa263314693942cc83fa3a98525e610df13278bc794506_1280.jpg",
              imageAlt: "Sarah Chen pest inspector"
            },
            {
              id: "3",
              name: "David Thompson",
              role: "Treatment Coordinator",
              imageSrc: "https://pixabay.com/get/gf9b352ce7fa4e4949a88c1e0911afe4942b9926572c588d9cb74c5c26ca508448b2553aa68088000116b71a610256bb8a2fa6f16e18b5786cc21cda7f791027b_1280.png",
              imageAlt: "David Thompson coordinator"
            }
          ]}
          textboxLayout="default"
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
        />
      </div>

      <div id="testimonial" data-section="testimonial">
        <TestimonialCardOne
          title="What Our Customers Say"
          description="Real feedback from satisfied homeowners"
          tag="Reviews"
          testimonials={[
            {
              id: "1",
              name: "Jennifer Martinez",
              role: "Homeowner",
              company: "Satisfied Customer",
              rating: 5,
              imageSrc: "https://pixabay.com/get/g5e11c29fb79a9a32b5087eb920743dd800daf72b3bcc5da91afb9d19c8488363eca4b37fffc26e3565b2be9e75a8c0bc4ebe6a070cc481ebac28c5b13345dd15_1280.jpg",
              imageAlt: "Jennifer Martinez testimonial"
            },
            {
              id: "2",
              name: "Robert Johnson",
              role: "Property Owner",
              company: "Repeat Customer",
              rating: 5,
              imageSrc: "https://pixabay.com/get/gcb467c1b3e41aeb168396d579a6658cc00282126d8a06e43efa1bc15216b891a9d63bb21d28c9e1794aa263314693942cc83fa3a98525e610df13278bc794506_1280.jpg",
              imageAlt: "Robert Johnson testimonial"
            },
            {
              id: "3",
              name: "Lisa Wang",
              role: "Homeowner",
              company: "Happy Customer",
              rating: 5,
              imageSrc: "https://pixabay.com/get/gf9b352ce7fa4e4949a88c1e0911afe4942b9926572c588d9cb74c5c26ca508448b2553aa68088000116b71a610256bb8a2fa6f16e18b5786cc21cda7f791027b_1280.png",
              imageAlt: "Lisa Wang testimonial"
            },
            {
              id: "4",
              name: "Michael Brown",
              role: "Business Owner",
              company: "Commercial Client",
              rating: 5,
              imageSrc: "https://pixabay.com/get/g4f03ee0789d41dcd8ad3b7a573d326857bf258a1c0ec8cbd33783660b7aaf6563e751dc16d54b351c317a5f39e45f2d7de82dfd16e97b38092687ed27ceef6e2_1280.jpg",
              imageAlt: "Michael Brown testimonial"
            }
          ]}
          textboxLayout="default"
          gridVariant="four-items-2x2-equal-grid"
          animationType="blur-reveal"
        />
      </div>

      <div id="socialProof" data-section="socialProof">
        <SocialProofTwo
          title="Certified & Insured"
          description="Trusted by industry leaders and certified by professional organizations"
          tag="Credentials"
          logos={[
            "/placeholders/placeholder1.webp",
            "/placeholders/placeholder1.webp",
            "/placeholders/placeholder1.webp",
            "/placeholders/placeholder1.webp",
            "/placeholders/placeholder1.webp"
          ]}
          textboxLayout="default"
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqBase
          title="Frequently Asked Questions"
          description="Common questions about our door-to-door pest control services"
          tag="FAQ"
          faqs={[
            {
              id: "1",
              title: "Do you offer free estimates?",
              content: "Yes, we provide free in-home consultations and estimates for all pest control services. Our technicians will assess your specific needs and provide a detailed quote."
            },
            {
              id: "2",
              title: "Are your treatments safe for children and pets?",
              content: "Absolutely. We use only EPA-approved products and follow strict safety protocols. Our treatments are designed to eliminate pests while being safe for your family and pets."
            },
            {
              id: "3",
              title: "How long does a typical treatment take?",
              content: "Most residential treatments take 30-60 minutes depending on the size of your home and the extent of the pest problem. We'll provide an estimated timeframe during your consultation."
            },
            {
              id: "4",
              title: "Do you offer guarantees on your services?",
              content: "Yes, we stand behind our work with satisfaction guarantees ranging from 30-90 days depending on the service. If pests return within the guarantee period, we'll re-treat at no charge."
            },
            {
              id: "5",
              title: "What areas do you service?",
              content: "We provide door-to-door pest control services throughout the greater metropolitan area. Contact us to confirm service availability in your specific location."
            }
          ]}
          textboxLayout="default"
          animationType="smooth"
        />
      </div>

      <div id="blog" data-section="blog">
        <BlogCardOne
          title="Pest Control Tips & Insights"
          description="Expert advice and seasonal tips for keeping your home pest-free"
          tag="Blog"
          blogs={[
            {
              id: "1",
              category: "Prevention",
              title: "Spring Pest Prevention Tips",
              excerpt: "Essential steps to prevent common spring pests from invading your home",
              imageSrc: "https://pixabay.com/get/g959aaf6d49d31c03df068164eac281b0dc0091c9412243ff67dec6d5d391884cb2b28ef164d1ae369bf43b8f4b7aa707eac6fe280069f145e2051e73f5502f02_1280.jpg",
              imageAlt: "Spring pest prevention",
              authorName: "Mike Rodriguez",
              authorAvatar: "https://pixabay.com/get/g5e11c29fb79a9a32b5087eb920743dd800daf72b3bcc5da91afb9d19c8488363eca4b37fffc26e3565b2be9e75a8c0bc4ebe6a070cc481ebac28c5b13345dd15_1280.jpg",
              date: "15 Mar 2025"
            },
            {
              id: "2",
              category: "Treatment",
              title: "Understanding Termite Damage",
              excerpt: "How to identify early signs of termite damage and when to call professionals",
              imageSrc: "https://pixabay.com/get/g2d1c1258ff0960935ee813076e00421759ef0617df6c4ace68129be66c3a2ccfabad1bce952cde0da474cdb1785e8d1df116228374b94a9857dcb09068b219da_1280.jpg",
              imageAlt: "Termite damage signs",
              authorName: "Sarah Chen",
              authorAvatar: "https://pixabay.com/get/gcb467c1b3e41aeb168396d579a6658cc00282126d8a06e43efa1bc15216b891a9d63bb21d28c9e1794aa263314693942cc83fa3a98525e610df13278bc794506_1280.jpg",
              date: "10 Mar 2025"
            },
            {
              id: "3",
              category: "Safety",
              title: "Pet-Safe Pest Control Methods",
              excerpt: "Effective pest control solutions that keep your furry friends safe",
              imageSrc: "https://pixabay.com/get/gd9cc3be4d3e548a05653e9544a77e5d9e06750c7d259374b0db9b1bfd11578115e05aed65d23e292b24e910c6c68954266083bc0b421fc36a65a43acaefdebe2_1280.jpg",
              imageAlt: "Pet-safe pest control",
              authorName: "David Thompson",
              authorAvatar: "https://pixabay.com/get/gf9b352ce7fa4e4949a88c1e0911afe4942b9926572c588d9cb74c5c26ca508448b2553aa68088000116b71a610256bb8a2fa6f16e18b5786cc21cda7f791027b_1280.png",
              date: "5 Mar 2025"
            }
          ]}
          textboxLayout="default"
          animationType="slide-up"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenterForm
          title="Get Your Free Pest Control Quote"
          description="Schedule your free in-home consultation and receive a customized treatment plan for your property."
          inputs={[
            { name: "name", type: "text", placeholder: "Your Name", required: true },
            { name: "phone", type: "tel", placeholder: "Phone Number", required: true },
            { name: "address", type: "text", placeholder: "Property Address", required: true },
            { name: "pest_type", type: "text", placeholder: "Type of Pest Problem", required: false }
          ]}
          textarea={{
            name: "message",
            placeholder: "Describe your pest problem or any specific concerns...",
            rows: 4,
            required: false
          }}
          buttonText="Request Free Quote"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSocial
          logoText="PestShield Pro"
          columns={[
            {
              title: "Services",
              items: [
                { label: "Termite Control", href: "services" },
                { label: "Ant Control", href: "services" },
                { label: "Rodent Control", href: "services" },
                { label: "Spider Control", href: "services" }
              ]
            },
            {
              title: "Company",
              items: [
                { label: "About Us", href: "about" },
                { label: "Our Team", href: "team" },
                { label: "Service Areas", href: "areas" },
                { label: "Careers", href: "careers" }
              ]
            },
            {
              title: "Support",
              items: [
                { label: "Contact Us", href: "contact" },
                { label: "FAQs", href: "faq" },
                { label: "Emergency Service", href: "emergency" },
                { label: "Guarantee", href: "guarantee" }
              ]
            }
          ]}
          socialLinks={[
            {
              icon: Facebook,
              href: "https://facebook.com/pestshieldpro",
              ariaLabel: "Facebook"
            },
            {
              icon: Twitter,
              href: "https://twitter.com/pestshieldpro",
              ariaLabel: "Twitter"
            },
            {
              icon: Instagram,
              href: "https://instagram.com/pestshieldpro",
              ariaLabel: "Instagram"
            }
          ]}
          copyrightText="© 2025 PestShield Pro. All rights reserved."
        />
      </div>
    </ThemeProvider>
  );
}