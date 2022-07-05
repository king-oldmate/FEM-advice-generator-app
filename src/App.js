import React, { useState, useEffect } from "react";
import dice from "./img/icon-dice.svg";
import mobileDivider from "./img/pattern-divider-mobile.svg";
import desktopDivider from "./img/pattern-divider-desktop.svg";

function App() {
  const [advice, setAdvice] = useState({
    slip: {
      id: "Proverbs 3:5-6",
      advice:
        "Put all thy heart’s confidence in the Lord, on thy own skill relying never wilt thou but keep him in thy thoughts wherever thou goest, he will shew thee the straight path.",
    },
  });
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch("https://api.adviceslip.com/advice", { cache: "no-cache" })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.slip.advice);
        setAdvice(data);
      });
  };

  return (
    <div className='flex items-center justify-center w-screen h-screen bg-Dark-Blue shrink-0 font-Manrope'>
      <article className='relative flex flex-col justify-center w-full px-5 pt-10 mx-4 text-center rounded-lg bg-Dark-Grayish-Blue h-max max-w-[540px]'>
        <div className='text-xs tracking-[0.35em] uppercase text-Neon-Green mb-6 '>{`Advice #${advice.slip.id}`}</div>
        <div className='font-extrabold leading-snug text-[28px] text-Light-Cyan mb-5'>{`"${advice.slip.advice}"`}</div>
        <img src={mobileDivider} alt='' className='xs:hidden' />
        <img
          src={desktopDivider}
          alt=''
          className='hidden xs:block mx-[27px] pt-8'
        />
        <div
          className='bottom-0 flex items-center justify-center w-16 h-16 mx-auto translate-y-8 rounded-full stretch-0 bg-Neon-Green justify-self-center hover:cursor-pointer hover:shadow-[0_0_22px_8px_rgba(82,255,168,0.5)]'
          onClick={fetchData}
        >
          <img src={dice} alt='' className='w-6 h-6' />
        </div>
      </article>
    </div>
  );
}

export default App;
