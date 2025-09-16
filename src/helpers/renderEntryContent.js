import Image from 'next/image';

export function renderEntryContent(blocks) { // Define function to render an array of content blocks
  return blocks.map((block, index) => { // Iterate over each block with its index
    if (block.type === 'paragraph') { // Check if the block is a paragraph
      // Return a paragraph element with HTML content
      return <p key={index} dangerouslySetInnerHTML={{ __html: block.html }} />;
    }

    if (block.type === 'image') { // Check if the block is an image
      return (
        <Image
          key={index}
          src={block.src}
          alt={block.alt || ''}
          width={block.width || 800} 
          height={block.height || 0}
          style={{ width: '100%', height: 'auto' }}
          priority={block.priority || false} // Optional: if image should load with high priority
        />
      );
    }

    if (block.type === 'unordered-list') { // Check if the block is an unordered list
      return (
        <ul key={index} className={block.className || ''}> {/* Render <ul> with optional class */}
          {block.items.map((item, itemIndex) => ( // Iterate over list items
            <li key={itemIndex} dangerouslySetInnerHTML={{ __html: item }} /> // Render <li> with HTML content
          ))}
        </ul>
      );
    }

    if (block.type === 'ordered-list') { // Check if the block is an ordered list
      return (
        <ol key={index} className={block.className || ''}> {/* Render <ol> with optional class */}
          {block.items.map((item, itemIndex) => ( // Iterate over list items
            <li key={itemIndex} dangerouslySetInnerHTML={{ __html: item }} /> // Render <li> with HTML content
          ))}
        </ol>
      );
    }

    return null; // Return nothing for unknown block types
  });
}
