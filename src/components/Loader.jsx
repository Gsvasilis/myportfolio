import  { useEffect,} from 'react';
import "../styles/Loader.scss"

const Loader = ({ setLoading }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Adjust the timing as needed

    return () => clearTimeout(timer);
  }, [setLoading]);

  return (
    <div className="loader">
        <div className="loading-text">Loading...</div>
      <div className="progress-bar">
        <div className="progress"></div>
      </div>
    </div>
  );
};

export default Loader;
