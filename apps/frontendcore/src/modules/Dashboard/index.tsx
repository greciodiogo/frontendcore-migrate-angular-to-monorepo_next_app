import React from 'react';

import { APPBox } from 'common/shared/box/Box';

export const Dashboard = () => {
  const getDashboardInit = () => {};
  return (
    <>
      <div
        style={{
          background: 'white',
          padding: '10px',
          height: '60px',
          borderRadius: '6px',
          border: '1px solid #c2c7d0',
        }}
      >
        <button
          className="btn btn-primary btn-lg"
          style={{ float: 'right' }}
          type="button"
          onClick={getDashboardInit()}
        >
          <i className="icon-refresh"></i> Recarregar Dados{' '}
        </button>
      </div>
      <hr />
      <br />

      <div className="row">
        <div className="col-lg-2 col-xs-6">
          <APPBox
            boxText="Facturação"
            boxNumber={2}
            boxColor="bg-aqua"
            boxIcon="fa fa-file-text"
            boxLink={{ url: '/comercial/facturacao/listar', name: 'Nova Facturação' }}
          />
        </div>
        <div className="col-lg-2 col-xs-6">
          <APPBox
            boxText="Vendas"
            boxNumber={4}
            boxColor="bg-primary"
            boxIcon="fa fa-shopping-cart"
            boxLink={{ url: '/comercial/vendas/historico', name: 'Histórico Vendas' }}
          />
        </div>
        <div className="col-lg-2 col-xs-6">
          <APPBox
            boxText="Clientes"
            boxNumber={0}
            boxColor="bg-green"
            boxIcon="fa fa-users"
            boxLink={{ url: '/crm/clientes/consultar-clientes', name: 'Listagem de Clientes' }}
          />
        </div>
        <div className="col-lg-2 col-xs-6">
          <APPBox
            boxText="Produtos"
            boxNumber={0}
            boxColor="bg-yellow"
            boxIcon="fa fa-bookmark"
            boxLink={{ url: '/logistica/produtos/listar', name: 'Consultar produtos' }}
          />
        </div>
        <div className="col-lg-2 col-xs-6">
          <APPBox
            boxText="Serviços"
            boxNumber={0}
            boxColor="bg-yellow"
            boxIcon="fa fa-folder"
            boxLink={{ url: '/logistica/produtos/listar', name: 'Consultar serviços' }}
          />
        </div>
        <div className="col-lg-2 col-xs-6">
          <APPBox
            boxText="Recibos"
            boxNumber={0}
            boxColor="bg-red"
            boxIcon="fa fa-address-card"
            boxLink={{ url: '/comercial/cobrancas/recebimentos/consultar', name: 'Consultar Recibos' }}
          />
        </div>
      </div>
      <br />
      <hr />
      <h4
        style={{
          fontSize: '15.5rem',
          margin: '0 auto',
          marginTop: '60px',
          color: 'rgb(52 58 64 / 2%)',
          textAlign: 'center',
          textShadow: '0 1px 1px rgb(0 0 0 / 1%), 0 1px 3px rgb(0 0 0 / 1%)',
          fontWeight: '600',
        }}
      >
        <i>Unig4</i> Telco
        <img
          src="/assets/img/christmas.png"
          alt="Natal"
          style={{ opacity: '0.8', width: '183px', position: 'absolute', margin: '14px 0px 0px -129px' }}
        />
      </h4>
    </>
  );
};
