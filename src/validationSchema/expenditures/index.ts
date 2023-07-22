import * as yup from 'yup';

export const expenditureValidationSchema = yup.object().shape({
  amount: yup.number().integer().required(),
  description: yup.string(),
  organization_id: yup.string().nullable(),
});
