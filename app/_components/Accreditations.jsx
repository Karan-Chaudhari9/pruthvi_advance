import Image from "next/image";

const Accreditations = () => {
  const accreditations = [
    {
      name: "NABL",
      icon: "/nabl.png",
      description: "National Accreditation Board for Testing and Calibration Laboratories"
    },
    {
      name: "ISO",
      icon: "/iso.png",
      description: "International Organization for Standardization"
    },
    {
      name: "CAP",
      icon: "/cap.png",
      description: "College of American Pathologists"
    }
  ];

  return (
    <div className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl font-bold mb-4">
            Our <span className="text-red-500">Accreditations</span>
          </h2>
          <div className="w-24 h-1 bg-red-500 mx-auto"></div>
        </div>

        {/* Accreditations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {accreditations.map((accreditation, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Content */}
              <div className="relative p-8">
                {/* Icon Container */}
                <div className="relative w-24 h-24 mx-auto mb-6">
                  <div className="absolute inset-0 bg-red-50 rounded-full transform group-hover:scale-110 transition-transform duration-300"></div>
                  <div className="relative w-full h-full flex items-center justify-center">
                    <Image
                      src={accreditation.icon}
                      alt={accreditation.name}
                      fill
                      className="object-contain p-4"
                    />
                  </div>
                </div>

                {/* Text Content */}
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-3 text-gray-800 group-hover:text-red-500 transition-colors duration-300">
                    {accreditation.name}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {accreditation.description}
                  </p>
                </div>

                {/* Hover Effect Border */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Accreditations; 