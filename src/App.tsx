import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

const colors = [
  // Blue
  "#0000FF",
  "#3399FF",
  "#6699FF",
  "#66CCFF",
  "#0033CC",
  "#336699",
  "#003366",
  "#99CCFF",
  "#0066FF",
  "#99CCFF",

  // Green
  "#00FF00",
  "#33FF33",
  "#66FF66",
  "#33CC33",
  "#99FF99",
  "#00CC00",
  "#009900",
  "#66CC66",
  "#99FF99",
  "#66FF66",

  // Red
  "#FF0000",
  "#FF3333",
  "#FF6666",
  "#FF9900",
  "#CC0000",
  "#990000",
  "#FF3300",
  "#CC3333",
  "#FF6633",
  "#FF9966",

  // Yellow
  "#FFFF00",
  "#FFFF33",
  "#FFCC00",
  "#FF9900",
  "#FFFF66",
  "#FFCC33",
  "#FFCC66",
  "#FF9933",
  "#FFCC00",
  "#FF9900",

  // Orange
  "#FFA500",
  "#FF6600",
  "#FF9933",
  "#FF8000",
  "#FF4500",
  "#FF7733",
  "#FF5500",
  "#FFB366",
  "#FF8C00",
  "#FF9900",

  // Pink
  "#FF69B4",
  "#FF1493",
  "#FF6EB4",
  "#FFC0CB",
  "#FFB6C1",
  "#FF82AB",
  "#FF3399",
  "#FF85CF",
  "#FF38A1",
  "#FFB7C5",

];

function getRandomColor() {
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}

function getContrastColors(hexColor: string) {
  if (typeof hexColor !== 'string' || !/^#[0-9A-Fa-f]{6}$/i.test(hexColor)) {
    return { textColor: '#000', backgroundColor: '#fff', buttonTextColor: '#fff', borderColor: '#fff' };
  }

  const r = parseInt(hexColor.slice(1, 3), 16);
  const g = parseInt(hexColor.slice(3, 5), 16);
  const b = parseInt(hexColor.slice(5, 7), 16);

  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  const backgroundColor = brightness > 128 ? '#000' : '#fff';
  const textColor = brightness > 128 ? '#000000' : '#ffffff';

  let buttonTextColor;
  let borderColor;

  if (backgroundColor === '#000') {
    buttonTextColor = '#fff';
    borderColor = '#fff';
  } else if (backgroundColor === '#fff') {
    buttonTextColor = '#000';
    borderColor = '#000';
  } else {
    buttonTextColor = brightness > 128 ? '#000' : '#fff';
    borderColor = brightness > 128 ? '#000000' : '#ffffff';
  }

  return { textColor, backgroundColor, buttonTextColor, borderColor };
}

function App() {
  const [currentColor, setCurrentColor] = useState(getRandomColor());
  const { textColor, backgroundColor, buttonTextColor, borderColor } = getContrastColors(currentColor);

  const handleUpdateColor = () => {
    const newColor = getRandomColor();
    setCurrentColor(newColor);
  };

  return (
    <div className='App' style={{ backgroundColor: currentColor }}>
      <h1 className='H1' style={{ color: textColor}}>PWA Colorama</h1>
      <p className='Texto' style={{ color: textColor }}>{currentColor}</p>
      <div className='Botao' style={{ color: buttonTextColor, backgroundColor: backgroundColor, border: `2px solid ${borderColor}` }} onClick={handleUpdateColor}>Atualizar</div>
    </div >
  );
}

export default App;
