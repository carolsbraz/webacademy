import './index.css'

interface CardProps {
  image: string;
  name: string;
}

export default function Card({ image}: CardProps) {
  return (
    <div className="card" style={{backgroundImage: `url(${image})`}}>
    </div>
  );
}
