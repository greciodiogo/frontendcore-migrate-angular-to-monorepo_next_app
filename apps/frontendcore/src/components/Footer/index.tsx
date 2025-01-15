import React from 'react';

export type FooterProps = {
  version?: string;
  date?: string;
};

export const Footer = ({ version = '', date = '' }: FooterProps) => {
  return (
    <footer className="main-footer">
      <strong>
        Copyright © 2021{' '}
        <a href="https://ideiasdinamicas.com/" target="__blank">
          Ideias Dinâmicas
        </a>
        .
      </strong>
      Todos os direitos reservados.
      <div className="float-right d-none d-sm-inline-block">
        <b>
          <a href="http://unig-erp.com/" target="__blank">
            UNIG
          </a>{' '}
          -{' '}
          <a href="http://unig-erp.com/" target="__blank">
            Unig4Telco
          </a>{' '}
          Versão
        </b>{' '}
        {version} ({date})
      </div>
    </footer>
  );
};
