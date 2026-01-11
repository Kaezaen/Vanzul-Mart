
import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES, CONTENT } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-40 bg-[#F9F7F2]">
      <div className="container mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <span className="text-[11px] font-heading font-bold uppercase tracking-[0.3em] text-[#1E2F23]/40 mb-4 block">Our Values</span>
            <h2 className="text-4xl md:text-6xl font-heading font-bold text-[#1E2F23] tracking-tight leading-none">
              {CONTENT.sections.services}
            </h2>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.6 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-[#1E2F23] max-w-sm font-light leading-relaxed"
          >
            Menghadirkan standar retail modern ke dalam keseharian Anda.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {SERVICES.map((service, index) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-10 bg-white border border-[#1E2F23]/5 rounded-[2rem] hover:border-[#1E2F23]/20 transition-all duration-500"
            >
              <div className="w-12 h-12 text-[#1E2F23] mb-12 group-hover:scale-110 transition-transform duration-500">
                {service.icon}
              </div>
              <h3 className="text-2xl font-heading font-semibold text-[#1E2F23] mb-6">{service.title}</h3>
              <p className="text-[#1A1A1A]/60 leading-relaxed text-sm font-light">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
