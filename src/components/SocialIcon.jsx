import React from 'react';

const SocialIcon = ({ imgSrc, alt = "icon", link = "#", w = 5, h = 5 }) => (
  <a
    href={link}
    className="w-10 h-10  text-green-700 rounded-full flex items-center justify-center"
  >
    <img src={imgSrc} alt={alt} className={`w-${w} h-${h}`} />
  </a>
);

export default SocialIcon;
