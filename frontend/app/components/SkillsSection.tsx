import React, { useState } from 'react';

export default function SkillsSection() {
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set());

  // ...existing code...

  return (
    <div>
      {/* ...existing code... */}
      {categories.map((category) => (
        <div key={category.name}>
          <h3 onClick={() => toggleCategory(category.name)}>
            {category.name}
          </h3>
          {expandedCategories.has(category.name) && (
            <ul>
              {category.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
      {/* ...existing code... */}
    </div>
  );

  function toggleCategory(categoryName: string) {
    setExpandedCategories((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(categoryName)) {
        newSet.delete(categoryName);
      } else {
        newSet.add(categoryName);
      }
      return newSet;
    });
  }
}