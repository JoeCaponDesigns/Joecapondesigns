// src/blog/blog-data.ts

// -----------------------------
// Types
// -----------------------------
export interface BlogPost {
  slug: string
  title: string
  content: string
  excerpt: string
  created: string
  readTime: string
  category: string
  tags: string[]
}

// -----------------------------
// Static posts (THIS IS YOUR CMS FOR NOW)
// -----------------------------
const posts: BlogPost[] = [

  {
slug:"diy-vs-professional-website",
title:"DIY Website Builders vs Hiring a Developer: Which Is Right for You?",
excerpt:"Wix, Squarespace, or a custom build? I compare the pros and cons so you can make the best choice for your business and budget.",
content:`
<h3>The Big Question</h3>

<p>Should you build your own website using a platform like Wix or Squarespace, or should you hire a developer? The answer depends on your needs, budget, and how much time you have.</p>

<h3>DIY Website Builders</h3>

<p><strong>Pros:</strong></p>
<ul>
<li>Low upfront cost (£0-20/month)</li>
<li>No technical skills required</li>
<li>Quick to get started</li>
<li>Templates handle the design</li>
</ul>

<p><strong>Cons:</strong></p>

<ul>
<liLimited customisation></li>
<li>Can look generic</li>
<li>Often slower performance</li>
<li>Limited SEO capabilities</li>
<li>You're tied to the platform</li>
</ul>

<h3>Hiring a Developer</h3>
<p><strong>Pros:</strong></p>

<ul>
<li>Fully custom design</li>
<li>Optimised performance</li>
<li>Better SEO potential</li>
<li>You own your code</li>
<li>Professional, unique result</li>
</ul>

<p><strong>Cons:</strong></p>

<ul>
<li>Higher upfront cost</li>
<li>Takes longer to build</li>
<li>Need to find the right developer</li>
</ul>

<h3>When DIY Makes Sense</h3>

<p>If you're just starting out, have a very tight budget, or need something simple like a basic landing page, a DIY builder can work. It's also fine for hobby projects or testing an idea before investing more.</p>

<h3>When to Hire a Developer</h3>

<p>If your website is a core part of your business, if it needs to convert visitors, rank on Google, or represent your brand professionally then investing in a developer pays off. The performance, customisation, and polish you get are worth it..</p>

<h3>The Middle Ground</h3>

<p>Some businesses start with a DIY site, then upgrade to a custom build once they've grown. There's no shame in that, it's a smart way to validate your business first.</p>

<h3>My Honest Take</h3>

<p>I'm biased, but I've seen too many businesses struggle with slow, generic DIY sites. If your website matters to your business, working with a developer (even for a simple site) gives you a foundation you can build on.</p>`,
created:"2026-02-06",
readTime:"8 min read",
category:"Business",
tags:["Small Business", "Getting Started", "Comparisons"],
  },

  {
slug:"my-web-development-process",
title:"Behind the Scenes: My Web Development Process",
excerpt:"Ever wondered what goes into building a website from scratch? I walk you through my step-by-step process from questionnaire to launch.",
content:`
<h3>Why Process Matters</h3>

<p>Building a website isn't just about writing code. It's about understanding your business, your customers, and your goals. A good process ensures the final product actually serves your needs.</p>

<h3>Step 1: The Questionnaire</h3>

<p>Everything starts with my questionnaire. I ask about your business, your target audience, your competitors, and what you want your website to achieve. This gives me the foundation I need to create something that works for you.</p>

<h3>Step 2: Planning and Quote</h3>

<p>Based on your answers, I put together a plan and quote. This includes the site structure, features, timeline, and cost. No surprises, you know exactly what you're getting before we start.</p>

<h3>Step 3: Design Direction</h3>

<p>Before writing any code, I establish the visual direction. This includes colours, typography, and overall aesthetic. I'll share mockups or references so we're aligned on the look and feel.</p>

<h3>Step 4: Build and Communication</h3>

<p>This is where the magic happens. I build your site, keeping you updated along the way. You'll see progress, have opportunities to give feedback, and be involved in the process without being overwhelmed.</p>

<h3>Step 5: Review and Refine</h3>

<p>Once the initial build is complete, we review it together. This is your chance to request tweaks and adjustments. I want you to be completely happy before we launch.</p>

<h3>Step 6: Launch</h3>

<p>With your approval, we go live! I handle the technical details: domain setup, hosting, SSL certificates, so you don't have to worry about any of it.</p>

<h3>Step 7: Handover and Support</h3>

<p>You get full access to your site with documentation on how to make basic updates. I also offer ongoing support packages if you'd prefer to have me handle maintenance and updates.</p>

<h3>The Result</h3>

<p>A website that's fast, professional, and built specifically for your business. Not a template, something unique that represents you and converts visitors into customers.</p>
`,
created:"2026-01-30",
readTime:"6 min read",
category:"Process",
tags:["Process", "Getting Started", "Behind the Scenes"],
  },

  {
slug: "website-speed-matters",
title: "Why Website Speed Matters More Than You Think",
excerpt:"A slow website costs you visitors, customers, and Google rankings. Here's how speed impacts your business and what you can do about it.",
content:`
<h3>The 3-Second Rule</h3>

<p>Here's a sobering stat: 53% of mobile users abandon a site that takes longer than 3 seconds to load. Every second counts. A slow website isn’t just annoying; it’s costing you money.</p>

<h3>Impact on Conversions</h3>

<p>Amazon found that every 100ms of latency cost them 1% in sales. While you might not be Amazon, the principle holds. Faster sites convert better because visitors stay engaged instead of bouncing.</p>

<h3>Google Cares About Speed</h3>

<p>Page speed is a ranking factor for Google. Slow sites get pushed down in search results, which means less traffic. If you're investing in SEO but ignoring speed, you're fighting with one hand tied behind your back.</p>

<h3>What Slows Sites Down</h3>

<p>The usual culprits: </p>

<ul>
  <li><strong>Unoptimised images</strong> - Large files that should be compressed</li>
  <li><strong>Too many plugins</strong> - Each one adds weight</li>
  <li><strong>Cheap hosting</strong> - Slow servers = slow sites</li>
  <li><strong>Bloated code</strong> - Especially common with page builders</li>
  <li><strong>No caching</strong> - Making the server work harder than necessary</li>
  </ul>

<h3>Quick Wins</h3>

<p>Some things you can do right now: </p>

<ul>
  <li>Compress your images (use WebP format)</li>
  <li>Enable caching</li>
  <li>Upgrade your hosting if it's budget tier</li>
  <li>Remove plugins/features you don't need</li>
</ul>

<h3>The Professional Advantage</h3>

<p>This is one area where custom-built sites really shine. When I build a site, performance is baked in from the start — optimised images, clean code, and modern hosting. My sites consistently score 95+ on Google's PageSpeed Insights.</p>

<h3>Test Your Site</h3>

<p>Curious how your site stacks up? Run it through Google PageSpeed Insights (free tool). The results might surprise you.</p>
` ,
created:"2026-01-23",
readTime:"5 min read",
category:"Performance",
tags:["Performance", "SEO", "Conversions"],
  },
  {
slug: "seo-basics-for-small-businesses",
title: "SEO Basics: Getting Found on Google Without the Jargon",
excerpt:"SEO doesn't have to be complicated. Here's a plain-English guide to help your website show up when people search for what you offer.",
content: `
<h3>What Even Is SEO?</h3>

<p>SEO stands for Search Engine Optimisation. In plain English, it's the practice of making your website more likely to show up when someone searches for what you offer on Google (or any search engine).</p>

<h3>Keywords Matter</h3>

<p>Keywords are the words and phrases people type into Google. If you're a guitar teacher in Manchester, you want to show up when someone searches "guitar lessons Manchester." The trick is using these keywords naturally throughout your site, in titles, headings, and content.</p>

<h3>Page Titles and Descriptions</h3>

<p>Every page on your site has a title and description that Google displays in search results. These need to be clear, compelling, and include your keywords. Think of them as your first impression in search results.</p>

<h3>Quality Content</h3>

<p>Google rewards websites that provide genuine value. Write content that answers real questions your customers have. Blog posts, FAQs, and service descriptions all contribute to your site's SEO.</p>

<h3>Mobile and Speed</h3>

<p>Google prioritises mobile-friendly, fast websites. If your site is slow or doesn't work on phones, you'll struggle to rank well, no matter how good your content is.</p>

<h3>Local SEO</h3>

<p>For small businesses, local SEO is crucial. Claim your Google Business Profile, get reviews, and make sure your name, address, and phone number are consistent across the web.</p>

<h3>The Long Game</h3>

<p>SEO isn't instant. It takes time for Google to notice and reward your efforts. But the payoff is worth it: free, organic traffic from people actively searching for what you offer.</p>

<h3>Getting Started</h3>

<p>You don't need to be an expert to improve your SEO. Start with the basics: good titles, quality content, and a fast, mobile-friendly site. Build from there.</p>
`,
created:"2026-01-16",
readTime:"6 min read",
category:"SEO",
tags:["SEO", "Google", "Marketing", "Small Business"],
},
{
slug: "why-every-small-business-needs-a-website",
title: "Why Every Small Business Needs a Website in 2026",
excerpt:"In today's digital world, having a professional website isn't optional — it's essential. Here's why your small business can't afford to skip it.",
content: `
<h3>The Digital Storefront</h3>

<p>In 2024, your website is often the first impression potential customers have of your business. Before they ever walk through your door or pick up the phone, they're Googling you. And if you don’t show up, or worse, if your site looks outdated, you’ve already lost them.</p>

<h3>Credibility and Trust</h3>

<p>A professional website instantly builds credibility. Think about it: when was the last time you trusted a business that didn't have a website? Customers expect to find you online, and a clean, modern site signals that you're legitimate, professional, and here to stay.</p>

<h3>Available 24/7</h3>

<p>Unlike a physical location, your website never closes. It’s working for you around the clock, answering questions, showcasing your services, and capturing leads while you sleep. That's powerful.</p>

<h3>Your Competitors Already Have One</h3>

<p>If your competitors have websites and you don't, guess who's getting the business? Even a simple site puts you in the game and gives potential customers a reason to choose you over the competition.</p>

<h3>Cost-Effective Marketing</h3>

<p>Compared to traditional advertising, a website is incredibly cost-effective. Once it's built, it continues to work for you with minimal ongoing costs. Add some basic SEO, and you've got a marketing machine that attracts customers organically.</p>

<h3>The Bottom Line</h3>

<p>A website isn’t just a nice-to-have anymore; it’s essential infrastructure for any business that wants to grow. If you're ready to establish your online presence, I'd love to help you get started.</p>
`,
created:"2026-01-09",
readTime:"5 min read",
category:"Business",
tags:["Small Business", "Marketing", "Getting Started"],
},
{
    slug: "what-makes-a-good-website",
    title: "What Actually Makes a Good Website?",
    excerpt:
      "It's not just about looking pretty. I break down the key elements that separate an okay website from one that actually converts visitors into customers.",
    content: `
<h3>More Than Just Pretty</h3>
<p>A lot of people think a good website is just about looking nice. And while aesthetics matter, they're only part of the equation. A truly good website is one that achieves your business goals, whether that’s getting enquiries, selling products, or building trust.</p>

<h3>Clear Purpose</h3>
<p>Every page should have a clear purpose. What do you want visitors to do? Call you? Fill out a form? Buy something? A good website guides visitors toward that action without making them think too hard.</p>

<h3>Fast Loading Times</h3>
<p>Speed matters more than you think. Studies show that 53% of mobile users leave a site that takes longer than 3 seconds to load. A good website is optimised for performance, with compressed images, clean code, and fast hosting.</p>

<h3>Mobile-First Design</h3>
<p>More than half of web traffic comes from mobile devices. If your site doesn't work beautifully on a phone, you're losing customers. Good websites are designed mobile-first, then enhanced for larger screens.</p>

<h3>Easy Navigation</h3>

<p>Visitors should be able to find what they're looking for in seconds. Simple, intuitive navigation keeps people on your site longer and reduces frustration. If they can't find it, they'll leave.</p>

<h3>Trust Signals</h3>

<p>Testimonials, reviews, certifications, and professional photos all build trust. A good website strategically places these elements to reassure visitors that you're the real deal.</p>

<h3>Accessibility</h3>

<p>A good website works for everyone, including people with disabilities. Proper contrast, alt text for images, and keyboard navigation aren’t just nice to have; they’re essential.</p>

<h3>The Takeaway</h3>

<p>A good website isn't about flashy animations or trendy designs. It's about clarity, speed, and purpose. It's about making it easy for visitors to become customers.</p>
    `,
    created: "2026-01-02",
    readTime: "7 min read",
    category: "Web Design",
    tags: ["Web Design", "Conversions", "UX"],
  },
]

// -----------------------------
// Public API (same names as before)
// -----------------------------
export async function fetchBlogPosts(): Promise<BlogPost[]> {
  return posts
}

export async function fetchBlogPost(slug: string): Promise<BlogPost | null> {
  return posts.find((p) => p.slug === slug) ?? null
}

export async function fetchAllTags(): Promise<string[]> {
  const tags = new Set<string>()
  posts.forEach((p) => p.tags.forEach((t) => tags.add(t)))
  return Array.from(tags)
}

