import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FlexItemProps {
  icon: LucideIcon;
  text: string;
  buttonText: string;
  variant: 'primary' | 'success' | 'purple';
}

export function FlexItem({ icon: Icon, text, buttonText, variant }: FlexItemProps) {
  return (
    <div className={`demo__item demo__item--${variant}`}>
      <Icon className="demo__icon" />
      <p className="demo__text">{text}</p>
      <button className="demo__button">{buttonText}</button>
    </div>
  );
}