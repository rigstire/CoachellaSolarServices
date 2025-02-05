import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "Contact Page | Free Next.js Template for Startup and SaaS",
//   description: "This is Contact Page for Startup Nextjs Template",
//   // other metadata
// };

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
<<<<<<< HEAD
        pageName=""
        description=""
=======
        pageName="Contact Page"
        description="Contact us now "
>>>>>>> d75a038b2f6427ffa4f69abe4adc951fc0c2cf2b
      />

      <Contact />
    </>
  );
};

export default ContactPage;
