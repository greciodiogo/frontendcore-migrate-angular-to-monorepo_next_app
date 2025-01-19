import React from 'react';

import { FnService } from 'common/utils/FnService';

export type APPBoxProps = {
  boxColor?: string;
  boxNumber?: number;
  boxText?: string;
  boxIcon?: string;
  boxLink?: { url?: string; name?: string; permission?: boolean };
  extraText?: string;
  linkTextAlign?: string;
};

export const APPBox = ({
  boxColor = 'bg-aqua',
  boxText = 'FFFFFFFFFFF',
  boxNumber = 0,
  boxIcon = '',
  boxLink = { url: '', name: '' },
  extraText = '',
  linkTextAlign = 'text-center',
}: APPBoxProps) => {
  const fnService = new FnService();
  return (
    <div className={`small-box ${boxColor}`} style={{ margin: '0 !important' }}>
      <div className="inner">
        <h3>{fnService.formatarQuantidade(boxNumber)}</h3>
        <h5>{boxText}</h5>
      </div>
      <div className="icon">
        <i className={boxIcon}></i>
      </div>
      <a href={boxLink.url} className={`small-box-footer ${linkTextAlign}`}>
        {extraText} {boxLink.name}
        <i className="fa fa-arrow-circle-right" style={{ float: 'right' }}></i>
      </a>
      <a href="#" className={`small-box-footer ${linkTextAlign}`}>
        {extraText} <i className="fa fa-arrow-circle-right text-right" style={{ float: 'right' }}></i>
      </a>
    </div>
  );
};
