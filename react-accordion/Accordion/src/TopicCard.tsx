type Topic = {
  id: number;
  title: string;
  content: string;
};

type Props = {
  topics: Topic[];
  isActive: number;
  onShow: (index: number) => void;
};

export function TopicCard({ topics, isActive, onShow }: Props) {
  const topicsList = topics.map((topic, index) => (
    <li key={topic.id}>
      <h1 onClick={() => onShow(index)} className="title">
        {topic.title}
      </h1>
      {isActive === index && <p className="content">{topic.content}</p>}
    </li>
  ));

  return <ul className="topics-list">{topicsList}</ul>;
}
