import React, { useState } from 'react';
import './App.css';
import image_robot from './images/robot.png';
import logo_robot from './images/logo.png';
import img from './images/gif.gif';

const StepContent = ({ step }) => (
  <>
    <div className="step-info">
      <h3>{step.title}</h3>
      <p>{step.description}</p>
    </div>
    <div className="image">
      <img src={step.imageUrl} alt="" />
    </div>
  </>
);

const PopUp = () => {
  const steps = [
    {
      id: 'step1',
      title: 'Tout terrain',
      description:
        'Наша команда состоит из высококлассных специалистов с международным опытом работы в сфере Web-разработки, мобильной разработки, Product менеджмента и дизайна. Мы предоставляем премиум сервис по доступным ценам и всегда нацелены на успех наших клиентов. Наша команда состоит из высококлассных специалистов с международным опытом работы в сфере Web-разработки, мобильной разработки, Product менеджмента и дизайна.',
      imageUrl: img,
    },
    {
      id: 'step2',
      title: 'Junior',
      description:
        'Наша комаdddddddddddвысококлассных специалистов с международным опытом работы в сфере Web-разработки, мобильной разработки, Product менеджмента и дизайна. Мы предоставляем премиум сервис по доступным ценам и всегда нацелены на успех наших клиентов. Наша команда состоит из высококлассных специалистов с международным опытом работы в сфере Web-разработки, мобильной разработки, Product менеджмента и дизайна.',
      imageUrl: img,
    },
    {
      id: 'step3',
      title: 'Autonome',
      description:
        'Наша команда состоит из высококлассных специалистов с международным опытом работы в сфере Web-разработки, мобильной разработки, Product менеджмента и дизайна. Мы предоставляем премиум сервис по доступным ценам и всегда нацелены на успех наших клиентов. Наша команда состоит из высококлассных специалистов с международным опытом работы в сфере Web-разработки, мобильной разработки, Product менеджмента и дизайна.',
      imageUrl: img,
    },
    {
      id: 'step4',
      title: 'Fighter',
      description:
        'Наша команда состоит из высококлассных специалистов с международным опытом работы в сфере Web-разработки, мобильной разработки, Product менеджмента и дизайна. Мы предоставляем премиум сервис по доступным ценам и всегда нацелены на успех наших клиентов. Наша команда состоит из высококлассных специалистов с международным опытом работы в сфере Web-разработки, мобильной разработки, Product менеджмента и дизайна.',
      imageUrl: img,
    },
  ];

  const [activeTab, setActiveTab] = useState(steps[0].id);

  const handleTabClick = (id) => {
    setActiveTab(id);
  };

  return (
    <div className="container">
      <div className="vector" />
      <img className="robot" src={image_robot} alt="robot_image" />
      <img className="logo" src={logo_robot} alt="robot_image" />
      <div className='tabs'>
      <div className="btn-container">
        {steps.map((step) => (
          <button
            key={step.id}
            className={`button ${activeTab === step.id ? 'live' : ''}`}
            onClick={() => handleTabClick(step.id)}
            data-id={step.id}
          >
            {step.title}
          </button>
        ))}
      </div>
      <div className="tabs-content">
        {steps.map((step) => (
          <div
            key={step.id}
            className={`content ${activeTab === step.id ? 'live' : ''}`}
            id={step.id}
          >
            <StepContent step={step} />
          </div>
        ))}
      </div>
      </div>
      
    </div>
  );
};

export default PopUp;
