import SectionTitle from "../Common/SectionTitle";

const Services = () => {
  return (
    <section className="bg-gray-100 dark:bg-gray-900 py-16 md:py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Our Services"
          paragraph="We provide top-quality exterior cleaning services for your home and business."
          center
        />

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {/* Service 1 */}
          <div className="p-6 bg-white shadow-lg rounded-lg text-center dark:bg-dark">
            <h3 className="text-xl font-bold text-black dark:text-white">
              Pressure Washing
            </h3>
            <p className="mt-2 text-body-color">
              Remove dirt, grime, and mold to restore your property's appearance.
            </p>
          </div>

          {/* Service 2 */}
          <div className="p-6 bg-white shadow-lg rounded-lg text-center dark:bg-dark">
            <h3 className="text-xl font-bold text-black dark:text-white">
              Solar Panel Cleaning
            </h3>
            <p className="mt-2 text-body-color">
              Improve energy efficiency by keeping your solar panels clean.
            </p>
          </div>

          {/* Service 3 */}
          <div className="p-6 bg-white shadow-lg rounded-lg text-center dark:bg-dark">
            <h3 className="text-xl font-bold text-black dark:text-white">
              Bird Proofing
            </h3>
            <p className="mt-2 text-body-color">
              Prevent birds from nesting and causing damage to your property.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

