import type { FlatSlide, ContentBlock, ContentPosition } from '../../data/types';
import ContentRenderer from '../content/ContentRenderer';

// Standard widescreen slide dimensions in EMUs
const SLIDE_W = 12192000;
const SLIDE_H = 6858000;

function toPct(emu: number, total: number) {
  return (emu / total) * 100;
}

interface SpatialSlideProps {
  slide: FlatSlide;
}

/**
 * Renders slide content using absolute positioning based on PowerPoint coordinates.
 * Used when content blocks have position data, giving a layout closer to the original slide.
 */
export default function SpatialSlide({ slide }: SpatialSlideProps) {
  // Filter out content that duplicates the slide title
  const contentItems = slide.content.filter(c =>
    c.type !== 'heading' || ('text' in c && c.text !== slide.title)
  );

  return (
    <div
      className="h-full flex flex-col"
      style={{ background: 'var(--color-card)' }}
    >
      {/* Title */}
      <h2
        className="text-2xl md:text-3xl font-bold px-6 pt-4 pb-2 shrink-0"
        style={{ color: 'var(--color-primary)' }}
      >
        {slide.title}
      </h2>

      {/* Spatial canvas - maintains 16:9 ratio */}
      <div className="flex-1 relative px-4 pb-4 min-h-0">
        <div
          className="relative w-full h-full mx-auto"
          style={{ maxWidth: '100%', aspectRatio: '16 / 9' }}
        >
          {contentItems.map((block, index) => {
            const pos = (block as ContentBlock & { position?: ContentPosition }).position;
            if (!pos) {
              // No position — render in flow at the bottom
              return (
                <div key={index} className="mb-2">
                  <ContentRenderer content={block} size="large" />
                </div>
              );
            }

            const left = toPct(pos.left, SLIDE_W);
            const top = toPct(pos.top, SLIDE_H);
            const width = toPct(pos.width, SLIDE_W);
            const height = toPct(pos.height, SLIDE_H);

            return (
              <div
                key={index}
                className="absolute overflow-hidden"
                style={{
                  left: `${left}%`,
                  top: `${top}%`,
                  width: `${width}%`,
                  height: `${height}%`,
                }}
              >
                <ContentRenderer content={block} size="default" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
