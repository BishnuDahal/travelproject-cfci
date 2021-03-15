import * as Yup from 'yup';

 const ValidationSchema = Yup.object({
    search: Yup.string()
    .required('Destination is required'),
  })

  export default ValidationSchema;
