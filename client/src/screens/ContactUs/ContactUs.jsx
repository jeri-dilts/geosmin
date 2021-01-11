import React from 'react';
import ContactUsForm from '../../components/ContactUsForm/ContactUsForm';
import Footer from '../../components/shared/Footer/Footer';
import Layout from '../../components/shared/Layout/Layout';

const ContactUs = () => {
  return (
    <div>
      <Layout>
        <ContactUsForm />
        <Footer />
      </Layout>
    </div>
  );
};

export default ContactUs;