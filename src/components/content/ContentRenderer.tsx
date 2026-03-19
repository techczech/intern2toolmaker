import type { ContentBlock, ShapeContent } from '../../data/types';
import Heading from './Heading';
import BulletList from './BulletList';
import ImageBlock from './ImageBlock';
import SmartArtDiagram from './SmartArtDiagram';
import VideoPlayer from './VideoPlayer';
import ShapeBlock from './ShapeBlock';

interface ContentRendererProps {
  content: ContentBlock;
  theme?: 'light' | 'dark';
  fillSpace?: boolean;
  size?: 'default' | 'large' | 'featured';
  noBullets?: boolean;
}

export default function ContentRenderer({ content, theme = 'light', fillSpace = false, size = 'default', noBullets = false }: ContentRendererProps) {
  switch (content.type) {
    case 'heading':
      return <Heading content={content} theme={theme} />;
    case 'list':
      return <BulletList content={content} theme={theme} size={size} noBullets={noBullets} />;
    case 'image':
      return <ImageBlock content={content} />;
    case 'smart_art':
      return <SmartArtDiagram content={content} fillSpace={fillSpace} theme={theme} />;
    case 'video':
      return <VideoPlayer content={content} />;
    case 'shape': {
      const shape = content as ShapeContent;
      // Only skip truly empty generic shapes (plain rectangles/ovals with no text, color, or meaning)
      const hasVisualProps = shape.text?.trim() || shape.fill_color || shape.line_color;
      const isMeaningfulType = /brace|bracket|arrow|callout|math|equal|plus|minus|multiply|divide|check/i.test(shape.shape_type);
      if (!hasVisualProps && !isMeaningfulType) return null;
      return <ShapeBlock content={shape} />;
    }
    default:
      return null;
  }
}
