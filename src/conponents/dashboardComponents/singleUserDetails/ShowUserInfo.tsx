import React from 'react';
type infoProps = {
  subTitle: string;
  description: string | undefined;
};

const ShowUserInfo = (props: infoProps) => {
  return (
    <div>
      {' '}
      <p>{props.subTitle}</p>
      <h4>{props.description}</h4>
    </div>
  );
};

export default ShowUserInfo;
