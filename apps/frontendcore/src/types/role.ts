import { Permission } from './permission';

export type GetRoleDTO = {
  id: number;
  slug: string;
  name: string;
  description: string;
  permissions: Array<Permission>;
  direccao_id: number;
};
