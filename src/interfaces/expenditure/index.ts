import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface ExpenditureInterface {
  id?: string;
  amount: number;
  description?: string;
  organization_id?: string;
  created_at?: any;
  updated_at?: any;

  organization?: OrganizationInterface;
  _count?: {};
}

export interface ExpenditureGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  organization_id?: string;
}
