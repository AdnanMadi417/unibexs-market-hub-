// Video companion to "Why Unibexs" — sits beside it in a two-column layout
// (see app/page.js). Embeds the same walkthrough video unibexs.com uses
// elsewhere: "See How Unibexs Simplifies the Business Behind Student
// Recruitment" (youtube.com/watch?v=xLGXsp3U6dU).
export default function SectionVideo() {
  return (
    <div className="section-video-wrap">
      <a
        className="video-eyebrow"
        href="https://www.youtube.com/watch?v=xLGXsp3U6dU"
        target="_blank"
        rel="noopener"
      >
        <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor">
          <path d="M8 5v14l11-7z" />
        </svg>
        See How Unibexs Works
      </a>
      <div className="video-frame">
        <iframe
          src="https://www.youtube.com/embed/xLGXsp3U6dU?iv_load_policy=3&rel=0&modestbranding=1&playsinline=1"
          title="See How Unibexs Simplifies the Business Behind Student Recruitment"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
        />
      </div>
    </div>
  );
}
