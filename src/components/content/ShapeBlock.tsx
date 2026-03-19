import type { ShapeContent } from '../../data/types';

interface ShapeBlockProps {
  content: ShapeContent;
}

function toHex(color: string | undefined): string {
  if (!color) return '#1e3a5f';
  return color.startsWith('#') ? color : `#${color}`;
}

// Check if shape is a container/border shape (rounded rectangle, rectangle with border)
function isContainerShape(shapeType: string): boolean {
  return shapeType.includes('rectangle') || shapeType.includes('rect');
}

// Check if shape is a brace/bracket
function isBraceShape(shapeType: string): boolean {
  return shapeType.includes('brace') || shapeType.includes('bracket');
}

// Map shape types to SVG renders for mathematical/symbol shapes
function renderSymbolShape(shapeType: string, color: string) {
  if (shapeType.includes('not_equal') || shapeType.includes('notEqual')) {
    return (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <line x1="20" y1="80" x2="80" y2="20" stroke={color} strokeWidth="12" strokeLinecap="round" />
        <line x1="15" y1="35" x2="85" y2="35" stroke={color} strokeWidth="12" strokeLinecap="round" />
        <line x1="15" y1="65" x2="85" y2="65" stroke={color} strokeWidth="12" strokeLinecap="round" />
      </svg>
    );
  }

  if (shapeType.includes('equal')) {
    return (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <line x1="15" y1="35" x2="85" y2="35" stroke={color} strokeWidth="12" strokeLinecap="round" />
        <line x1="15" y1="65" x2="85" y2="65" stroke={color} strokeWidth="12" strokeLinecap="round" />
      </svg>
    );
  }

  if (shapeType.includes('plus') || shapeType.includes('add')) {
    return (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <line x1="50" y1="15" x2="50" y2="85" stroke={color} strokeWidth="12" strokeLinecap="round" />
        <line x1="15" y1="50" x2="85" y2="50" stroke={color} strokeWidth="12" strokeLinecap="round" />
      </svg>
    );
  }

  if (shapeType.includes('minus') || shapeType.includes('subtract')) {
    return (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <line x1="15" y1="50" x2="85" y2="50" stroke={color} strokeWidth="12" strokeLinecap="round" />
      </svg>
    );
  }

  if (shapeType.includes('multiply') || shapeType.includes('times')) {
    return (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <line x1="20" y1="20" x2="80" y2="80" stroke={color} strokeWidth="12" strokeLinecap="round" />
        <line x1="80" y1="20" x2="20" y2="80" stroke={color} strokeWidth="12" strokeLinecap="round" />
      </svg>
    );
  }

  if (shapeType.includes('divide')) {
    return (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <circle cx="50" cy="25" r="8" fill={color} />
        <line x1="15" y1="50" x2="85" y2="50" stroke={color} strokeWidth="12" strokeLinecap="round" />
        <circle cx="50" cy="75" r="8" fill={color} />
      </svg>
    );
  }

  if (shapeType.includes('arrow_right') || shapeType.includes('rightArrow')) {
    return (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <line x1="10" y1="50" x2="75" y2="50" stroke={color} strokeWidth="10" strokeLinecap="round" />
        <polyline points="60,30 80,50 60,70" fill="none" stroke={color} strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (shapeType.includes('check') || shapeType.includes('checkmark')) {
    return (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <polyline points="20,55 40,75 80,25" fill="none" stroke={color} strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  return null;
}

export default function ShapeBlock({ content }: ShapeBlockProps) {
  const fillColor = toHex(content.fill_color);
  const lineColor = toHex(content.line_color);
  const hasText = content.text?.trim();

  // Container shapes (rounded rectangles, rectangles with borders)
  if (isContainerShape(content.shape_type)) {
    const borderColor = content.line_color ? lineColor : (content.fill_color ? fillColor : '#d1d5db');
    return (
      <div
        className="rounded-lg px-4 py-3 my-1"
        style={{
          border: `3px solid ${borderColor}`,
          backgroundColor: content.fill_color ? `${fillColor}10` : 'transparent',
        }}
      >
        {hasText && (
          <span style={{ color: borderColor }} className="font-medium text-lg">
            {content.text}
          </span>
        )}
      </div>
    );
  }

  // Brace/bracket shapes
  if (isBraceShape(content.shape_type)) {
    const isRight = content.shape_type.includes('right');
    const braceChar = isRight ? '}' : '{';
    return (
      <div className="flex items-center justify-center my-1">
        <span
          className="text-5xl font-thin leading-none"
          style={{ color: content.line_color ? lineColor : fillColor }}
        >
          {braceChar}
        </span>
      </div>
    );
  }

  // Mathematical/symbol shapes
  const symbolSvg = renderSymbolShape(content.shape_type, content.fill_color ? fillColor : lineColor);
  if (symbolSvg) {
    return (
      <div className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 flex-shrink-0">
        {symbolSvg}
      </div>
    );
  }

  // Arrow shapes with text (labeled arrows)
  if (content.shape_type.includes('arrow') && hasText) {
    const isDown = content.shape_type.includes('down');
    const isLeft = content.shape_type.includes('left');
    const arrow = isDown ? '↓' : isLeft ? '←' : '→';
    const color = content.fill_color ? fillColor : (content.line_color ? lineColor : '#6b7280');
    return (
      <div className="flex items-center gap-2 my-1">
        <span className="text-2xl" style={{ color }}>{arrow}</span>
        <span className="font-medium" style={{ color }}>{content.text}</span>
      </div>
    );
  }

  // Callout shapes (speech bubbles)
  if (content.shape_type.includes('callout')) {
    const bgColor = content.fill_color ? `${fillColor}20` : '#f3f4f6';
    const borderColor = content.fill_color ? fillColor : '#d1d5db';
    return (
      <div
        className="rounded-xl px-5 py-3 my-1 relative"
        style={{
          backgroundColor: bgColor,
          border: `2px solid ${borderColor}`,
        }}
      >
        {hasText && <span className="text-lg">{content.text}</span>}
      </div>
    );
  }

  // Shapes with text but no specific visual type
  if (hasText) {
    return (
      <div
        className="rounded-lg px-4 py-3 my-1"
        style={{
          backgroundColor: content.fill_color ? `${fillColor}20` : '#f3f4f6',
          border: content.line_color ? `2px solid ${lineColor}` : undefined,
        }}
      >
        <span className="font-medium">{content.text}</span>
      </div>
    );
  }

  // Fallback for other colored shapes — render as a subtle colored accent
  return (
    <div
      className="h-2 rounded-full my-2"
      style={{ backgroundColor: content.line_color ? lineColor : fillColor }}
    />
  );
}
