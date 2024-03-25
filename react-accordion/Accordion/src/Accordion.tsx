import { useState } from 'react';
import { TopicCard } from './TopicCard';

type Topic = {
  id: number;
  title: string;
  content: string;
};

type Props = {
  topics: Topic[];
};

export function Accordion({ topics }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);

  function handleCurrent(topicIndex: number) {
    if (topicIndex === activeIndex) {
      setActiveIndex(3);
    } else {
      setActiveIndex(topicIndex);
    }
  }

  return (
    <TopicCard isActive={activeIndex} onShow={handleCurrent} topics={topics} />
  );
}
