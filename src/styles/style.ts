import { SCREEN_SIZE } from './../constants/page';
// styleで使用する定数を管理する
export const BUTTON = {
  primary: {
    color: 'rgb(255, 255, 255)',
    bg: 'rgb(234, 53, 45)',
    border: 'rgb(234, 53, 45)'
  },
  secondary: {
    color: 'rgb(0,0,0)',
    bg: '#ff0'
  }
} as const;

export const COLOR = {
  link: '#f60',
  emphasis: '#ff0',
  border: '#f4f5f6',
  current: '#fb7f77'
};

// ______________________________________________________
//
// Media Query
/*
** @media ${DEVICE.mobile} {
  width: 100%;
}
*/
export const DEVICE = {
  mobile: `(max-width:${SCREEN_SIZE.mobile} )`
};
