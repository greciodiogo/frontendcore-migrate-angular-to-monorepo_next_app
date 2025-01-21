export type DashbordProps = {
  clientes: number;
  produtos: number;
  servicos: number;
  recibos: number;
  vendas: number;
  facturas: number;
};

export type DashboardResponse = {
  data: DashbordProps;
};

export type DashbordsetProps = {
  dashboard: DashbordProps;
  setDashboard: React.Dispatch<React.SetStateAction<DashbordProps>>;
};
