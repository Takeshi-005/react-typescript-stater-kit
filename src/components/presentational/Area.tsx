import React from 'react';
import Button from './atoms/Button';

// --------------------------------------------------
//
// @Types
type Props = {
  area: {
    pref: string;
    city: string;
    town: string;
  };
  i: number;
  handleDelete: (i: number) => void;
};

// --------------------------------------------------
//
// @View
const Area: React.FC<Props> = React.memo(
  props => {
    const hanleClick = React.useCallback(() => {
      props.handleDelete(props.i);
    }, [props]);

    return (
      <>
        <div>
          都道府県: {props.area.pref}
          <br />
          市区町村1: {props.area.city}
          <br />
          市区町村2: {props.area.town}
          <br />
          <Button text="削除" handleClick={hanleClick} />
        </div>
      </>
    );
  },
  (p, n) =>
    p.area.pref === n.area.pref &&
    p.area.city === n.area.city &&
    p.area.town === n.area.town &&
    p.i === n.i
);

export default Area;
