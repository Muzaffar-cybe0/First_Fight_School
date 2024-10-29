import React from "react";
import "../Sass/header.scss";
import Figher_Girl from '../assets/header_girl.png'
export default function Header() {
  return (
    <div className="header">
      <div className="header_child-1">
        <p>Профессия</p>
        <h1>3D-художник по персонажам</h1>
        <p>
          Курс, где ты с нуля получишь навыки востребованного 3D-художника для
          перспективной работы в Gamedev, кинематографе или анимации с высокой
          оплатой труда.
        </p>
        <button type="button">Записаться</button>
      </div>
      <div className="header_child-2">
          <img src={Figher_Girl} alt="Figher_Girl" />
      </div>
    </div>
  );
}
