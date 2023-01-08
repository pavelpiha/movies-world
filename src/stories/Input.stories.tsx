import React from 'react';

import MwInput from '../components/common/MwInput/MwInput';
import { validationSchema } from '../components/Header/AddEditDialog/AddEditDialog';

import { withFormik } from '@bbbtech/storybook-formik';
import { Meta } from '@storybook/react';

const meta: Meta = {
  decorators: [withFormik],
  title: 'Inputs/TextInput',
  args: {
    name: 'posterPath',
    className: 'mwMiddleInput',
    label: 'Movie URL',
    type: 'text',
    placeholder: 'https://',
    argTypes: { onChange: { action: 'onChange' } },
    value: '',
  },
  parameters: {
    formik: {
      initialValues: {
        posterPath: '',
      },
      validationSchema: validationSchema,
    },
  },
};
export default meta;

export const InputForm = (): JSX.Element => (
  <>
    <MwInput name="posterPath" className="mwMiddleInput" label="Movie URL" type="text" placeholder="https://" />
  </>
);
