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
      setActiveIndex(0);
    } else {
      setActiveIndex(topicIndex);
    }
  }

  const topicCards = topics.map((topic) => (
    <TopicCard isActive={activeIndex} onShow={handleCurrent} topic={topic} />
  ));

  return (
    <div>
      <ul className="topics-list">{topicCards}</ul>
    </div>
  );
}
