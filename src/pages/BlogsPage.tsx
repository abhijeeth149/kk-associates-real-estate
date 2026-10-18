import React, { useState } from 'react';
import { BookOpen, Calendar, Clock, ArrowRight } from 'lucide-react';
import { WhatsAppButton } from '../components/common/WhatsAppButton';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: 'Market Trends' | 'Documentation & Legal' | 'Investment Guide' | 'Payment Schemes';
  readTime: string;
  date: string;
  image: string;
  content: string[];
  keyTakeaways: string[];
}

const BLOG_POSTS: BlogPost[] = [
  {
    id: 'neopolis-kokapet-growth-corridor',
    title: 'Why Neopolis Kokapet is Hyderabad’s Hottest Real Estate Corridor',
    excerpt: 'Rising 57 storeys into the sky, Neopolis has transformed from an open auction ground into Telangana’s most coveted high-rise commercial and luxury residential epicentre.',
    category: 'Market Trends',
    readTime: '5 min read',
    date: 'April 2026',
    image: '/assets/projects/godrej-epoque-neopolis/images/render_page_1.jpg',
    content: [
      'Neopolis in Kokapet is redefining the architectural skyline of South India. With auction rates setting record highs and world-class developers like Godrej Properties, Lansum, and Brigade entering the fray, Neopolis represents the pinnacle of modern urban planning.',
      'Unlike older micro-markets that suffer from narrow approach roads, Neopolis is engineered with 100-to-150-foot wide arterial masterplan boulevards, underground utility corridors, dedicated green spaces, and direct signal-free ramps onto the Outer Ring Road (ORR).',
      'The corridor benefits from direct proximity to Osman Sagar lake and over 1,00,000 acres of protected GO 111 green vistas, ensuring high-rise residents enjoy perpetual green horizons that cannot be built over.'
    ],
    keyTakeaways: [
      'Record capital appreciation supported by massive IT/BFSI office developments.',
      '57-storey high-rises commanding panoramic lake and green belt vistas.',
      'Minutes to Financial District, US Consulate, and Outer Ring Road Exit 1.'
    ]
  },
  {
    id: 'property-due-diligence-rera-title-checklist',
    title: 'Property Due Diligence in Telangana: TS RERA, Layout Sanctions & Title Verification',
    excerpt: 'Before paying token money for a plot or apartment in Hyderabad, understand the essential legal due diligence: TS RERA verification, 30-year link documents, and layout approvals.',
    category: 'Documentation & Legal',
    readTime: '6 min read',
    date: 'March 2026',
    image: '/assets/projects/lansum-elena/images/render_page_1.jpg',
    content: [
      'A critical priority for buyers in Hyderabad is ensuring statutory legal compliance and title safety. TS RERA regulates project timelines, financial escrow accounts, and builder-buyer agreements, while sanctioned layout plans confirm road widths, open green zones, and utility infrastructure without zoning conflicts.',
      'Always insist on verifying the 30-year link documents, starting from the original pattadar or titleholder down to the present seller.',
      'Ensure the Encumbrance Certificate (EC) reflects Nil transactions or matches the exact title flow without unexplained gaps or unreleased bank mortgages.'
    ],
    keyTakeaways: [
      'Verify the Sanctioned Layout Plan (LP Number) with municipal/panchayat authorities.',
      'Confirm the active TS RERA registration number before signing the Agreement of Sale.',
      'Obtain a Nil Encumbrance Certificate for 30 continuous years from the Sub-Registrar.'
    ]
  },
  {
    id: 'budvel-rajendra-nagar-lakefront-frontier',
    title: 'Budvel & Rajendra Nagar: The Next High-Rise Frontier with Lake Views',
    excerpt: 'How Prestige City (64 Acres) and Prestige Spring Heights (10.59 Acres) are transforming Budvel into Hyderabad’s premier lakeside residential destination.',
    category: 'Market Trends',
    readTime: '4 min read',
    date: 'April 2026',
    image: '/assets/projects/the-prestige-city/images/render_page_1.jpg',
    content: [
      'For years, West Hyderabad’s expansion focused on Gachibowli and Kondapur. However, as available land parcels in the core IT corridor reached saturation, the spotlight shifted decisively towards Budvel and Rajendra Nagar.',
      'Surrounded by the serene waters of Himayat Sagar and Mulagund Lake and adjoining thousands of acres of reserve forest, Budvel offers a rare combination: clean air, water views, and 15-minute connectivity to Rajiv Gandhi International Airport via the PVNR Expressway and ORR.',
      'Mega-townships like The Prestige City designed by Hafeez Contractor are creating integrated miniature cities with high-street retail, international schools, and sports academies right at your doorstep.'
    ],
    keyTakeaways: [
      'Direct connection to Airport (15 mins) and Financial District via ORR.',
      'Overlooking Himayat Sagar and Mulagund Lake with extensive reserve forests.',
      'Attractive entry prices compared to Kokapet and Neopolis with strong growth runway.'
    ]
  },
  {
    id: 'smart-payment-schemes-emi-azadi',
    title: 'Smart Payment Schemes Explained: EMI Azadi & 40:60 Construction Plans',
    excerpt: 'Understand how developer-borne pre-EMI schemes and construction milestone plans reduce the financial pressure of paying rent and EMIs simultaneously.',
    category: 'Payment Schemes',
    readTime: '5 min read',
    date: 'April 2026',
    image: '/assets/projects/prestige-spring-heights/images/render_page_1.jpg',
    content: [
      'For home buyers currently staying in rented accommodations, the biggest obstacle to booking an under-construction home is the double burden of rent and loan EMIs.',
      'Special payment schemes like Prestige Spring Heights\' "EMI Azadi Plan" address this directly. The buyer pays an initial 10% contribution, while the developer absorbs all pre-EMI interest charged by partner banks (Axis Bank and ICICI Bank) until October 2028.',
      'Crucially, the interest paid by the developer does not accumulate or get added to the customer\'s balance, allowing families to save substantially while securing homes at today’s prices.'
    ],
    keyTakeaways: [
      'Zero Pre-EMI payments until late 2028 under the EMI Azadi scheme.',
      'No "Rent + EMI" double pressure for tenants and working professionals.',
      'Pre-EMI is completely absorbed by the builder with zero accumulated debt.'
    ]
  }
];

export const BlogsPage: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Market Trends', 'Documentation & Legal', 'Payment Schemes'];

  const filteredPosts = activeCategory === 'All'
    ? BLOG_POSTS
    : BLOG_POSTS.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#F8FAF8] pb-24 text-[#172522]">
      
      {/* Hero Header */}
      <section className="bg-gradient-to-b from-[#0B1315] to-[#172522] text-white pt-12 pb-16 px-4 sm:px-6 lg:px-8 border-b border-white/10">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#DFCA98] text-xs font-semibold">
            <BookOpen className="w-3.5 h-3.5" />
            <span>KK Associates Real Estate Knowledge Hub</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display tracking-tight text-white leading-tight">
            Hyderabad Real Estate Insights & Guides
          </h1>

          <p className="max-w-2xl mx-auto text-sm sm:text-base text-gray-300 leading-relaxed font-normal">
            Authoritative analysis on micro-market price movements, legal due diligence checklists, and architectural developments across West Hyderabad.
          </p>

          {/* Category Tabs */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#C7A76C] text-[#172522] shadow-sm'
                    : 'bg-white/10 text-white/80 hover:bg-white/20'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          {filteredPosts.map(post => (
            <article
              key={post.id}
              className="bg-white rounded-3xl overflow-hidden border border-gray-100 hover:border-emerald-300 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Image & Category */}
              <div className="relative h-60 w-full overflow-hidden bg-gray-100">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#075E54] text-white text-xs font-bold shadow-md">
                  {post.category}
                </span>

                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white/90 text-xs">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-[#DFCA98]" />
                    <span>{post.date}</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-[#DFCA98]" />
                    <span>{post.readTime}</span>
                  </span>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold font-display text-gray-900 group-hover:text-[#075E54] transition-colors leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

                {/* Key Takeaways preview */}
                <div className="p-3.5 rounded-xl bg-[#F8FAF8] border border-gray-100 text-xs text-gray-700 space-y-1">
                  <span className="font-bold text-[#075E54] block text-[11px] uppercase">Key Insight</span>
                  <p className="text-gray-600 truncate">• {post.keyTakeaways[0]}</p>
                </div>

                <div className="pt-2 border-t border-gray-100 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedPost(post)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#075E54] hover:text-[#043E37] cursor-pointer"
                  >
                    <span>Read Full Guide</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <span className="text-[11px] text-gray-400">
                    By KK Associates Desk
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Advisory Consultation Banner */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-[#075E54] to-[#043E37] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl text-left">
          <div className="space-y-2 max-w-2xl">
            <h3 className="text-2xl font-bold font-display">Have Questions About a Specific Locality or Project?</h3>
            <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
              Our Gachibowli team offers complimentary one-on-one consultation regarding RERA verification, pricing sheets, and site visits across West Hyderabad.
            </p>
          </div>
          <div className="shrink-0">
            <WhatsAppButton
              size="lg"
              variant="glass"
              label="Ask KK Associates on WhatsApp"
            />
          </div>
        </div>
      </div>

      {/* Full Post Reader Modal */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-10 text-left space-y-6 relative shadow-2xl">
            
            <button
              onClick={() => setSelectedPost(null)}
              className="absolute top-5 right-5 p-2 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-600 transition-colors"
              aria-label="Close modal"
            >
              ✕
            </button>

            <div className="space-y-2 pr-8">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#E8F5F2] text-[#075E54]">
                {selectedPost.category}
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-gray-900 leading-tight">
                {selectedPost.title}
              </h2>
              <div className="flex items-center gap-4 text-xs text-gray-500 pt-1">
                <span>Published: {selectedPost.date}</span>
                <span>•</span>
                <span>{selectedPost.readTime}</span>
                <span>•</span>
                <span>KK Associates Advisory</span>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden h-64 sm:h-72 w-full bg-gray-100">
              <img src={selectedPost.image} alt={selectedPost.title} className="w-full h-full object-cover" />
            </div>

            {/* Key takeaways box */}
            <div className="p-4 sm:p-5 rounded-2xl bg-amber-50 border border-amber-200 text-xs sm:text-sm text-amber-900 space-y-2">
              <span className="font-bold uppercase tracking-wider text-xs block text-[#C7A76C]">
                Key Takeaways for Buyers & Investors
              </span>
              <ul className="space-y-1.5">
                {selectedPost.keyTakeaways.map((point, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#C7A76C] font-bold">✓</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Content paragraphs */}
            <div className="space-y-4 text-sm sm:text-base text-gray-700 leading-relaxed">
              {selectedPost.content.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            {/* Bottom Actions */}
            <div className="pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-xs text-gray-500">Need specific guidance on this topic?</span>
              <div className="flex items-center gap-2">
                <WhatsAppButton
                  size="sm"
                  variant="primary"
                  label="Discuss on WhatsApp"
                />
                <button
                  onClick={() => setSelectedPost(null)}
                  className="py-2 px-4 rounded-xl bg-gray-100 hover:bg-gray-200 text-xs font-bold text-gray-800"
                >
                  Close
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
