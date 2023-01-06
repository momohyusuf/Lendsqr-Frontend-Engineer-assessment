import React from 'react';
import logo from '../../assets/images/Union.png';
import './brandLogo.scss';
type logoProps = {
  imageHeight: number;
  imageWidth: number;
  fontSize: string;
};

const BrandLogo = (props: logoProps) => {
  return (
    <section className="brand--logo--container">
      <header>
        <img
          src={logo}
          alt="brand-logo"
          height={props.imageHeight}
          width={props.imageWidth}
        />
        <span
          style={{
            fontSize: props.fontSize,
            fontWeight: '900',
            color: '#213f7d',
          }}
        >
          lendsqr
        </span>
      </header>
    </section>
  );
};

export default BrandLogo;
