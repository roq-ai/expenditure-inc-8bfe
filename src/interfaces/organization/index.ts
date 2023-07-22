import { ExpenditureInterface } from 'interfaces/expenditure';
import { IncomeInterface } from 'interfaces/income';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface OrganizationInterface {
  id?: string;
  description?: string;
  image?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  expenditure?: ExpenditureInterface[];
  income?: IncomeInterface[];
  user?: UserInterface;
  _count?: {
    expenditure?: number;
    income?: number;
  };
}

export interface OrganizationGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  image?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
