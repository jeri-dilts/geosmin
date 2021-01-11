import React from 'react';
import ContactUsForm from '../../components/ContactUsForm/ContactUsForm';
import Layout from '../../components/shared/Layout/Layout';
import Logo from '../../components/shared/Logo/Logo';

const ContactUs = () => {
  return (
    <div>
      <Layout>
        <Logo />
        <ContactUsForm />
      </Layout>
    </div>
  );
};

export default ContactUs;