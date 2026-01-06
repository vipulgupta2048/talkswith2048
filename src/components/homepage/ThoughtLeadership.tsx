import React, { memo } from "react";
import styles from "./ThoughtLeadership.module.scss";

// Types for unified content system
export type ContentType = 'blog' | 'twitter' | 'linkedin' | 'instagram' | 'youtube' | 'medium' | 'dev.to' | 'other';

export interface BaseContent {
  id: string;
  title: string;
  summary: string;
  url: string;
  date: string;
  readingTime?: string;
  topics: string[];
  pillar?: string;
  type: ContentType;
}

export interface BlogPost extends BaseContent {
  type: 'blog';
  platform?: string;
}

export interface SocialPost extends BaseContent {
  type: 'twitter' | 'linkedin' | 'instagram' | 'youtube';
  engagement?: {
    likes?: number;
    comments?: number;
    shares?: number;
    views?: number;
  };
  isRepost?: boolean;
  originalAuthor?: string;
}

export interface GenericPost extends BaseContent {
  type: 'medium' | 'dev.to' | 'other';
  platform: string;
}

export type MixsterPost = BlogPost | SocialPost | GenericPost;

// Sample data - replace with your actual content
const samplePosts: MixsterPost[] = [
  {
    id: '1',
    type: 'blog',
    title: 'Building Scalable Developer Communities',
    summary: 'A comprehensive framework for growing developer communities from 0 to 10,000+ members with sustainable engagement strategies.',
    url: 'https://mixster.dev/building-communities',
    date: '2024-09-15',
    readingTime: '8 min',
    topics: ['Community', 'Developer Relations', 'Growth'],
    pillar: 'Community Building',
    platform: 'mixster.dev'
  },
  {
    id: '2',
    type: 'linkedin',
    title: 'The Future of Developer Experience is Conversational',
    summary: 'Why AI-powered developer tools are shifting from command-line interfaces to natural language conversations.',
    url: 'https://linkedin.com/posts/vipulgupta2048_developer-experience-ai',
    date: '2024-09-12',
    readingTime: '3 min',
    topics: ['AI', 'Developer Experience', 'Future of Work'],
    pillar: 'Thought Leadership',
    engagement: {
      likes: 245,
      comments: 32,
      shares: 18
    }
  },
  {
    id: '3',
    type: 'twitter',
    title: 'Open Source Sustainability Thread',
    summary: 'A thread on how maintainers can build sustainable open source projects without burning out.',
    url: 'https://twitter.com/vipulgupta2048/status/thread',
    date: '2024-09-10',
    readingTime: '2 min',
    topics: ['Open Source', 'Sustainability', 'Maintainership'],
    pillar: 'Open Source',
    engagement: {
      likes: 156,
      comments: 24,
      shares: 42
    }
  },
  {
    id: '4',
    type: 'blog',
    title: 'Shipping Developer Experiences That Scale',
    summary: 'Lessons learned from building developer tools used by millions of developers worldwide.',
    url: 'https://mixster.dev/developer-experiences',
    date: '2024-09-08',
    readingTime: '12 min',
    topics: ['Developer Experience', 'Product', 'Scale'],
    pillar: 'Product Strategy',
    platform: 'mixster.dev'
  },
  {
    id: '5',
    type: 'youtube',
    title: 'Live: Building in Public - Community Platform Architecture',
    summary: 'A live coding session where I architect a new community platform, discussing trade-offs and decisions in real-time.',
    url: 'https://youtube.com/watch?v=example',
    date: '2024-09-05',
    readingTime: '45 min',
    topics: ['Architecture', 'Live Coding', 'Community'],
    pillar: 'Technical Content',
    engagement: {
      views: 1200,
      likes: 89,
      comments: 15
    }
  },
  {
    id: '6',
    type: 'medium',
    title: 'Why Documentation-Driven Development Works',
    summary: 'How writing documentation first leads to better API design and developer adoption.',
    url: 'https://medium.com/@vipulgupta2048/documentation-driven-development',
    date: '2024-09-01',
    readingTime: '6 min',
    topics: ['Documentation', 'API Design', 'Developer Experience'],
    pillar: 'Best Practices',
    platform: 'Medium'
  },
  {
    id: '7',
    type: 'linkedin',
    title: 'The Art of Technical Writing for Developers',
    summary: 'Breaking down complex technical concepts into digestible content that actually helps developers.',
    url: 'https://linkedin.com/posts/vipulgupta2048_technical-writing',
    date: '2024-08-28',
    readingTime: '4 min',
    topics: ['Technical Writing', 'Documentation', 'Communication'],
    pillar: 'Content Strategy',
    engagement: {
      likes: 189,
      comments: 45,
      shares: 23
    }
  },
  {
    id: '8',
    type: 'twitter',
    title: 'DevRel Career Path Thread',
    summary: 'A comprehensive thread about getting started in Developer Relations and growing your career.',
    url: 'https://twitter.com/vipulgupta2048/status/devrel-thread',
    date: '2024-08-25',
    readingTime: '3 min',
    topics: ['Developer Relations', 'Career', 'Community'],
    pillar: 'Career Advice',
    engagement: {
      likes: 203,
      comments: 67,
      shares: 89
    }
  },
  {
    id: '9',
    type: 'blog',
    title: 'From Code to Community: My Open Source Journey',
    summary: 'Reflections on 5+ years in open source, from first contribution to maintainer to community builder.',
    url: 'https://mixster.dev/open-source-journey',
    date: '2024-08-20',
    readingTime: '10 min',
    topics: ['Open Source', 'Career', 'Personal Story'],
    pillar: 'Personal Growth',
    platform: 'mixster.dev'
  },
  {
    id: '10',
    type: 'dev.to',
    title: 'Building APIs That Developers Love',
    summary: 'Best practices for API design from the perspective of developer experience and adoption.',
    url: 'https://dev.to/vipulgupta2048/building-apis-developers-love',
    date: '2024-08-15',
    readingTime: '7 min',
    topics: ['API Design', 'Developer Experience', 'Backend'],
    pillar: 'Technical Content',
    platform: 'Dev.to'
  }
];

type Props = {
  // allow overriding list if needed
  posts?: MixsterPost[];
  maxFeatured?: number;
  maxList?: number;
  // filter by content type if needed
  contentTypes?: ContentType[];
};

const formatDate = (iso: string) => {
  try {
    const d = new Date(iso);
    return d.toLocaleDateString(undefined, {
      year: "numeric",
      month: "short",
    });
  } catch {
    return iso;
  }
};

// Platform-specific styling and icons
const getPlatformInfo = (type: ContentType) => {
  const platformMap = {
    blog: { icon: "📝", label: "Blog Post", color: "#5865F2" },
    twitter: { icon: "𝕏", label: "Twitter", color: "#1DA1F2" },
    linkedin: { icon: "💼", label: "LinkedIn", color: "#0077B5" },
    instagram: { icon: "📷", label: "Instagram", color: "#E4405F" },
    youtube: { icon: "📺", label: "YouTube", color: "#FF0000" },
    medium: { icon: "✍️", label: "Medium", color: "#00AB6C" },
    "dev.to": { icon: "👩‍💻", label: "Dev.to", color: "#0A0A0A" },
    other: { icon: "🔗", label: "Article", color: "#666666" },
  };
  return platformMap[type] || platformMap.other;
};

const formatEngagement = (post: MixsterPost) => {
  if (post.type === 'twitter' || post.type === 'linkedin' || post.type === 'instagram' || post.type === 'youtube') {
    const { engagement } = post;
    if (!engagement) return null;
    
    const stats = [];
    if (engagement.views) stats.push(`${engagement.views} views`);
    if (engagement.likes) stats.push(`${engagement.likes} likes`);
    if (engagement.comments) stats.push(`${engagement.comments} comments`);
    if (engagement.shares) stats.push(`${engagement.shares} shares`);
    
    return stats.length > 0 ? stats.slice(0, 2).join(" • ") : null;
  }
  return null;
};

const FeaturedCard: React.FC<{ post: MixsterPost }> = ({ post }) => {
  const platformInfo = getPlatformInfo(post.type);
  const engagement = formatEngagement(post);
  
  return (
    <a className={styles.card} href={post.url} target="_blank" rel="noreferrer">
      <div className={styles.cardHeader}>
        <div className={styles.pill} aria-label={post.pillar || "Article"}>
          <span>●</span>
          <span>{post.pillar || "Article"}</span>
        </div>
        <div 
          className={styles.platformBadge} 
          style={{ borderColor: platformInfo.color }}
          title={platformInfo.label}
        >
          <span className={styles.platformIcon}>{platformInfo.icon}</span>
          <span className={styles.platformLabel}>{platformInfo.label}</span>
        </div>
      </div>
      <h3 className={styles.title}>{post.title}</h3>
      <div className={styles.meta}>
        <span>{formatDate(post.date)}</span>
        <span className={styles.dot} />
        <span>{post.readingTime || "5 min"}</span>
        {engagement && (
          <>
            <span className={styles.dot} />
            <span className={styles.engagement}>{engagement}</span>
          </>
        )}
      </div>
      <p className={styles.summary}>{post.summary}</p>
      <div className={styles.topics}>
        {post.topics.slice(0, 3).map((t) => (
          <span className={styles.tag} key={t}>
            {t}
          </span>
        ))}
      </div>
    </a>
  );
};

export const ThoughtLeadership: React.FC<Props> = memo(
  ({ posts = samplePosts, maxFeatured = 3, maxList = 6, contentTypes }) => {
    // Filter by content types if specified
    const filteredPosts = contentTypes 
      ? posts.filter(post => contentTypes.includes(post.type))
      : posts;
    
    const sorted = [...filteredPosts].sort((a, b) => (a.date < b.date ? 1 : -1));
    const featured = sorted.slice(0, maxFeatured);
    const rest = sorted.slice(maxFeatured, maxFeatured + maxList);

    return (
      <section className={styles.section} aria-labelledby="thought-leadership">
        <div className="container">
          <div className={styles.header}>
            <h2 id="thought-leadership">Writing & Talks</h2>
            <a className={styles.cta} href="https://mixster.dev" target="_blank" rel="noreferrer">
              Read more on Mixster.dev →
            </a>
          </div>
          <p className={styles.subcopy}>
            Practical insights from shipping code, building communities, and solving 
            real problems. No fluff — just what worked, what failed, and lessons learned.
          </p>

          <div className={styles.row}>
            <div className={styles.gridWrapper}>
              <div className={styles.grid}>
                {featured.map((p) => (
                  <FeaturedCard key={p.id} post={p} />
                ))}
              </div>
            </div>

            <div className={styles.listWrapper}>
              <div className={styles.list}>
                {rest.map((p) => {
                  const platformInfo = getPlatformInfo(p.type);
                  return (
                    <div key={p.id} className={styles.listItem}>
                      <div className={styles.listContent}>
                        <div className={styles.listTitle}>
                          <span 
                            className={styles.listPlatformIcon} 
                            title={platformInfo.label}
                          >
                            {platformInfo.icon}
                          </span>
                          <a href={p.url} target="_blank" rel="noreferrer">
                            {p.title}
                          </a>
                        </div>
                        <span className={styles.listMeta}>
                          {formatDate(p.date)} · {p.readingTime || "5 min"}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  },
);

ThoughtLeadership.displayName = "ThoughtLeadership";

export default ThoughtLeadership;
