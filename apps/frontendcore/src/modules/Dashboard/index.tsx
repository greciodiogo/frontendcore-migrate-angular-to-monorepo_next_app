import React, { useEffect, useState } from 'react';

import { APPBox } from 'common/shared/box/Box';

export type DashbordProps = {
  clientes: string;
  produtos: string;
  servicos: string;
  recibos: string;
  vendas: string;
  facturas: string;
};

export type DashbordsetProps = {
  dashboard: DashbordProps;
  setDashboard: React.Dispatch<React.SetStateAction<DashbordProps>>;
};

export const Dashboard = () => {
  const [dashboard, setDashboard] = useState(null);
  useEffect(() => {
    const getDashboardInit = async () => {
      const dashboardData = await fetch('http://localhost:3381/api/dashboards/findDashboardInit', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json', // Tipo aceito
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjEsImlhdCI6MTczNzM4OTAyNSwiZXhwIjoxNzM3NDI1MDI1fQ.GM0ETTSAytGp5huB9bFHjBSeCXT2yUL4i77poaSDbxY', // Token de autenticação
        },
      });
      // const dashboardData = await fetchData('/dashboards/findDashboardInit');
      const response = await dashboardData.json();
      setDashboard(response.data);
    };

    getDashboardInit();
  }, []);
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
        <button className="btn btn-primary btn-lg" style={{ float: 'right' }} type="button">
          <i className="icon-refresh"></i> Recarregar Dados{' '}
        </button>
      </div>
      <hr />
      <br />

      <div className="row">
        <div className="col-lg-2 col-xs-6">
          <APPBox
            boxText="Facturação"
            boxNumber={dashboard?.facturas}
            boxColor="bg-aqua"
            boxIcon="fa fa-file-text"
            boxLink={{ url: '/comercial/facturacao/listar', name: 'Nova Facturação' }}
          />
        </div>
        <div className="col-lg-2 col-xs-6">
          <APPBox
            boxText="Vendas"
            boxNumber={dashboard?.vendas}
            boxColor="bg-primary"
            boxIcon="fa fa-shopping-cart"
            boxLink={{ url: '/comercial/vendas/historico', name: 'Histórico Vendas' }}
          />
        </div>
        <div className="col-lg-2 col-xs-6">
          <APPBox
            boxText="Clientes"
            boxNumber={dashboard?.clientes}
            boxColor="bg-green"
            boxIcon="fa fa-users"
            boxLink={{ url: '/crm/clientes/consultar-clientes', name: 'Listagem de Clientes' }}
          />
        </div>
        <div className="col-lg-2 col-xs-6">
          <APPBox
            boxText="Produtos"
            boxNumber={dashboard?.produtos}
            boxColor="bg-yellow"
            boxIcon="fa fa-bookmark"
            boxLink={{ url: '/logistica/produtos/listar', name: 'Consultar produtos' }}
          />
        </div>
        <div className="col-lg-2 col-xs-6">
          <APPBox
            boxText="Serviços"
            boxNumber={dashboard?.servicos}
            boxColor="bg-yellow"
            boxIcon="fa fa-folder"
            boxLink={{ url: '/logistica/produtos/listar', name: 'Consultar serviços' }}
          />
        </div>
        <div className="col-lg-2 col-xs-6">
          <APPBox
            boxText="Recibos"
            boxNumber={dashboard?.recibos}
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
