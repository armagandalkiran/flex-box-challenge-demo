import React from 'react';
import { MessageCircle, Send, ThumbsUp } from 'lucide-react';
import { FlexItem } from './FlexItem';

export function FlexboxDemo() {
  return (
    <div className="container">
      <article className="article">
        <h1 className="article__title">Understanding Flexbox: The Truncation Challenge</h1>
        
        <p className="article__intro">
          When working with flexbox layouts, handling text truncation while maintaining 
          consistent spacing can be tricky. Here's a practical solution that keeps icons 
          and buttons at their original size while allowing text to truncate elegantly.
        </p>

        <h2 className="article__subtitle">Example with Three Elements</h2>
        <div className="demo__container">
          <FlexItem 
            icon={MessageCircle}
            text="This is a short message"
            buttonText="Reply"
            variant="primary"
          />
          
          <FlexItem 
            icon={ThumbsUp}
            text="This is a much longer message that should be truncated because it exceeds the available space in the container"
            buttonText="Like"
            variant="success"
          />
          
          <FlexItem 
            icon={Send}
            text="A medium length message that might truncate"
            buttonText="Send"
            variant="purple"
          />
        </div>

        <h2 className="article__subtitle">Example with Two Elements</h2>
        <div className="demo__container">
          <FlexItem 
            icon={MessageCircle}
            text="A short message that takes less space"
            buttonText="Reply"
            variant="primary"
          />
          
          <FlexItem 
            icon={ThumbsUp}
            text="This is a much longer message that will have more space to expand since there are only two elements, but it will still truncate if it gets too long"
            buttonText="Like"
            variant="success"
          />
        </div>

        <h2 className="article__subtitle">Example with One Element</h2>
        <div className="demo__container">
          <FlexItem 
            icon={MessageCircle}
            text="This message has all the available space to itself, but it will still truncate if it exceeds the container width. This is a very long text to demonstrate the truncation behavior when the content is extremely long."
            buttonText="Reply"
            variant="primary"
          />
        </div>

        <section className="docs">
          <h2 className="docs__title">Deep Dive into Key CSS Properties:</h2>
          <dl className="docs__list">
            <dt><code className="docs__code">display: flex</code></dt>
            <dd>Creates a flex container that enables flexible box layout. This allows:
              <ul>
                <li>Items to be laid out horizontally (default) or vertically</li>
                <li>Dynamic distribution of space between items</li>
                <li>Alignment control both horizontally and vertically</li>
              </ul>
            </dd>

            <dt><code className="docs__code">min-width: 0</code></dt>
            <dd>Critical for text truncation in flex items because:
              <ul>
                <li>Flex items have an implicit min-width: auto by default</li>
                <li>This prevents them from shrinking below their content size</li>
                <li>Setting min-width: 0 allows the item to shrink smaller than its content</li>
                <li>Enables text-overflow: ellipsis to work properly</li>
              </ul>
            </dd>

            <dt><code className="docs__code">flex: 1</code></dt>
            <dd>Shorthand for flex-grow: 1, flex-shrink: 1, flex-basis: 0%. This means:
              <ul>
                <li>The item can grow beyond its initial size</li>
                <li>It will share available space equally with other flex: 1 items</li>
                <li>The item starts from 0% width and grows from there</li>
                <li>Perfect for allowing text containers to fill available space</li>
              </ul>
            </dd>

            <dt><code className="docs__code">flex-shrink: 0</code></dt>
            <dd>Prevents an item from shrinking below its initial size:
              <ul>
                <li>Essential for fixed-width elements like icons and buttons</li>
                <li>Maintains consistent sizing regardless of container width</li>
                <li>Ensures UI elements remain usable and visible</li>
                <li>Commonly used with flex-basis to set exact dimensions</li>
              </ul>
            </dd>

            <dt><code className="docs__code">text-overflow: ellipsis</code></dt>
            <p className="docs__warning">⚠️ Important: Text truncation only works on block-level elements (like div or p). 
            Inline elements like span will not truncate, even with the correct CSS properties!</p>
            <dd>Adds an ellipsis (...) when text overflows. Requires:
              <ul>
                <li>white-space: nowrap to prevent text wrapping</li>
                <li>overflow: hidden to clip overflowing content</li>
                <li>A defined width or flex constraints</li>
                <li>Works in conjunction with min-width: 0 in flex layouts</li>
              </ul>
            </dd>
          </dl>
        </section>
      </article>
    </div>
  );
}