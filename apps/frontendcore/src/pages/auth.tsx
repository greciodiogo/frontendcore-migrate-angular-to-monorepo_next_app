import { ReactElement } from 'react';

import { Login } from 'modules/Auth/Login';

const Auth = () => {
  return <Login />;
};

Auth.getLayout = (page: ReactElement) => <div className="auth-wrapper">{page}</div>;

export default Auth;
