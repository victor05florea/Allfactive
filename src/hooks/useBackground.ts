import {useState, useEffect} from "react";

const useBackground = () => {
  const [nr, setNr] = useState(1);

  useEffect(() => {
    let background= `url('/Background${nr%5}.png')`;
    document.body.style.backgroundImage = background;
  }, [nr]);

  const nextBackground = () => setNr(nr + 1);
  return { nextBackground };
};

export default useBackground;