import '../styles/Loader.css';

export default function Loader({ hiding }: { hiding: boolean }) {
  return (
    <div className={`loader${hiding ? ' loader--hiding' : ''}`}>
      <div className="loader__content">
        <span className="loader__initials">WS</span>
        <div className="loader__bar">
          <div className="loader__bar-fill" />
        </div>
      </div>
    </div>
  );
}
