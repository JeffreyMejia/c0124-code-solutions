type Topic = {
  id: number;
  title: string;
  content: string;
};

type Props = {
  topic: Topic;
  isActive: number;
  onShow: (index: number) => void;
};

export function TopicCard({ topic, isActive, onShow }: Props) {
  return (
    <li key={topic.id} onClick={() => onShow(topic.id)}>
      <h1 className="title">{topic.title}</h1>
      {isActive === topic.id && <p className="content">{topic.content}</p>}
    </li>
  );
}
