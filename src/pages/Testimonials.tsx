import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star, MapPin } from 'lucide-react';
import { cn } from '../lib/utils';

interface Testimonial {
  id: number;
  name: string;
  treatment?: string;
  content: string;
  image?: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sumanth Choudhary',
    treatment: 'Joint Pain Treatment',
    content: "Dr. Bhanu is extremely professional in his job. I'm very happy with the depth of his knowledge, skills and punctuality. He is very flexible in terms of patient needs. Really appreciate his work."
  },
  {
    id: 2,
    name: 'Jaya Karthik',
    content: "Very very nice and professional person. Dr. Bhanu will analyze the condition correctly and then he will create a custom plan based on the condition rather than fixed sets. I would definitely recommend him for others. please do try. 😁"
  },
  {
    id: 3,
    name: 'K Deepthi',
    content: "I had gotten my prenatal exercise program done by Dr. Bhanu and he was so professional and humble. He would take adequate amount of time to wait between exercises rather than rushing for the time. These exercises for sure helped me in normal delivery. Professional and patient, would definitely recommend him."
  },
  {
    id: 4,
    name: 'Lavanya Ponigeti',
    content: "Dr. Bhanu is giving us service to our family over last few years. He has got great experience towards the physiotherapy. He is so dedicated and committed doctor. I have been suffering from many years with my ankle pain, and in the recent days with neck stiffness as well. I made a short trip to India and got treatment from him, I'm feeling better now and he advised me to continue with exercises and need to dedicate time to take care of my health properly. Thank you Dr. Bhanu for your kindness"
  },
  {
    id: 5,
    name: 'Krity Sondhi',
    content: "Services are really good and I got it little healed in just 2 sessions but I had to stop it in between because they are little overpriced and they suggested to have 10 sessions. But I stopped in 2 sessions only because of overpricing only. If it would have been cheaper than I would have been taken at least 5 sessions. Apart from this issue, services are good and well behaved staff. They have a lot of patience also and understands where is the pain and where needs more pressure. 😊"
  },
  {
    id: 6,
    name: 'Revathi Devi Ganta',
    content: "I thank Dr. Bhanu for the incredible care and support you provided during my recovery from rotator cuff repair surgery. Your expertise and dedication have been instrumental in my healing process. From the initial stages of immobilization and gentle passive exercises to the more advanced strengthening and mobility phases, your guidance has been invaluable. Your encouragement and personalized approach made a significant difference in my wife's recovery journey. Thank you for your patience, professionalism, and unbelievable support."
  },
  {
    id: 7,
    name: 'Suneeta Chandra',
    treatment: 'Joint Pain Treatment',
    content: "After suffering from debilitating sciatica pain for nearly four years and undergoing two microdiscectomy surgeries and numerous physiotherapy sessions in the USA, I found myself seeking further treatment during a recent visit to Hyderabad. I had the pleasure of being treated by Dr. Bhanu, and I am incredibly grateful for the relief I experienced in just a few sessions. Dr. Bhanu's knowledge and experience in treating complex spinal conditions like sciatica are exemplary. He approached my case with sincerity and a deep understanding of my condition, which was evident in his thorough assessment and personalized treatment plan. What impressed me most was his approachability and willingness to explain every aspect of the treatment process, ensuring I felt informed and involved in my own recovery. One of the standout qualities of Dr. Bhanu is his punctuality and professionalism. Unlike my previous experiences, I never had to wait beyond my scheduled appointment time, which added to the overall efficiency and convenience of my treatment. I noticed significant improvement in my condition after each session with Dr. Bhanu. His treatments were not only effective but also sustainable, providing me with exercises and strategies to manage my condition long-term. Also, the best part is his home visits which helped not waste time in Hyderabad traffic and had a comfortable and focused atmosphere at my own space. In conclusion, Dr. Bhanu's expertise and compassionate care have made a profound difference in my life. I wholeheartedly recommend him to anyone seeking relief from persistent sciatica pain or any other musculoskeletal issues. Thank you, Dr. Bhanu, for your exceptional service and dedication to your patients' well-being."
  },
  {
    id: 8,
    name: 'SRK Bharath Dev',
    content: "Very very nice and professional person. Dr. Bhanu sir has done tremendous job in treating my cervical problem. To be In- Detail: I was having dizziness and Light headedness from last 3 Years and visited more than 20 doctors, (Nothing worked out in my favour) last month - One of the doctor suggested that root cause for his might be cervical issue and suggested me to meet Dr. Bhanu. I feel very relaxed now as the pain has been completely gone and I don't feel any dizziness / Nausea. Dr. Bhanu has few qualities to make him stand out of other physiotherapists: 1. always on Time. 2. Focuses much on stretches and exercises not on machines. 3. very well behaving. 4. Ground to earth and polite attitude. I asked him for guest lecture in my office as I found many colleagues having similar issues and he guided everyone in office in 5 hrs. session with lot of patience."
  },
  {
    id: 9,
    name: 'Nageshwar Rao',
    content: "I have been getting treatment for long term from Dr. Bhanu. I have whole body weakness and he has been helping me greatly to be active and walk. He is very kind and patient with old people like me. I would highly suggest him for physiotherapy for old people as he listens patiently and provides care during treatment."
  },
  {
    id: 10,
    name: 'Kalyan Kumar S',
    content: "I had been suffering from severe neck pain for quite some time, and after trying various treatments without much relief, I finally consulted Bhanu—and I'm so glad I did! From the very first session, Bhanu's professionalism, knowledge, and caring approach stood out. He took the time to understand the root cause of my pain and designed a treatment plan that was both effective and easy to follow. Within just a few sessions, I noticed a remarkable improvement in my mobility and a significant reduction in pain. Bhanu's techniques, combined with his patient explanations and attention to detail, made a world of difference. I'm now almost completely pain-free and feeling so much better. Highly recommend Bhanu to anyone struggling with neck or spine issues—he's truly exceptional!"
  },
  {
    id: 11,
    name: 'Sravya Chinnu',
    content: "I recently received treatment from Dr. Bhanu Kumar Vemula for treatment of a shoulder injury. Dr. Bhanu conducted a thorough initial assessment and created a tailored treatment plan that included a mix of manual therapy and exercises. He was very attentive and made sure I understood each step of the process. After several sessions, I noticed significant improvement in my mobility and a substantial reduction in pain. His guidance on home exercises was particularly beneficial. Dr. Bhanu was always professional, punctual, and approachable. He patiently answered all my questions and provided clear instructions. One thing that really impressed me was how Dr. Bhanu remembered small details about my daily activities and adjusted my treatment accordingly. Overall, I highly recommend Dr. Bhanu to anyone seeking a knowledgeable and caring physiotherapist. His expertise and dedication truly made a difference in my recovery. Thank you"
  }
];

const TestimonialCard = ({ testimonial, index }: { testimonial: Testimonial; index: number }) => {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const isLong = testimonial.content.length > 280;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-primary/5 hover:border-accent/20 w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] flex flex-col h-fit"
    >
      <div className="mb-4">
        {/* Quote Icon */}
        <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center shadow-lg -mt-12 mb-6 group-hover:scale-110 transition-transform">
          <Quote className="w-5 h-5 text-white" />
        </div>

        {/* Rating Stars */}
        <div className="flex items-center space-x-1 mb-3">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star key={star} className="w-4 h-4 fill-accent text-accent" />
          ))}
        </div>

        {/* Treatment Type */}
        {testimonial.treatment && (
          <span className="inline-block px-3 py-1 bg-primary/5 text-primary text-[10px] font-bold uppercase tracking-wider rounded-full mb-3">
            {testimonial.treatment}
          </span>
        )}

        {/* Content */}
        <div className="relative">
          <p className={cn(
            "text-dark font-medium leading-relaxed text-sm lg:text-base mb-2 italic",
            !isExpanded && isLong && "line-clamp-6 opacity-90"
          )}>
            "{isExpanded ? testimonial.content : testimonial.content.slice(0, 280)}"
            {!isExpanded && isLong && "..."}
          </p>
          
          {isLong && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-accent text-[10px] font-bold uppercase tracking-widest mt-2 hover:underline focus:outline-none transition-all"
            >
              {isExpanded ? 'Show Less' : 'Read Full Testimonial'}
            </button>
          )}
        </div>
      </div>

      {/* Divider */}
      <div className="mt-auto pt-6 border-t border-primary/5 flex items-center space-x-3">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-lg shadow-inner">
          {testimonial.name.charAt(0)}
        </div>
        <div>
          <h4 className="text-primary font-serif font-bold text-sm lg:text-base">{testimonial.name}</h4>
          <div className="flex items-center space-x-1 text-muted">
            <MapPin className="w-3 h-3" />
            <span className="text-[10px] uppercase tracking-wider font-semibold">Verified Patient</span>
          </div>
        </div>
      </div>

      {/* Bottom Accent */}
      <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary to-accent rounded-b-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.div>
  );
};

const Testimonials = () => {
  return (
    <div className="bg-white">
      {/* Hero Header */}
      <section className="pt-24 pb-12 lg:pt-32 lg:pb-16 relative overflow-hidden h-[50vh] lg:h-[60vh] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 -z-10">
          <img 
            src="https://images.unsplash.com/photo-1576091160550-217359f4ecf8?auto=format&fit=crop&q=80&w=2000" 
            alt="Testimonials Background"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-white/90 lg:bg-white/85" />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="flex items-center justify-center space-x-3">
              <span className="w-8 h-[2px] bg-accent" />
              <span className="text-accent font-bold uppercase tracking-[0.2em] text-xs">
                Patient Reviews
              </span>
              <span className="w-8 h-[2px] bg-accent" />
            </div>
            <h1 className="text-5xl lg:text-7xl font-serif font-bold text-primary leading-tight">
              What Our <span className="text-accent italic font-normal">Patients</span> Say
            </h1>
            <p className="text-lg lg:text-xl text-dark font-medium leading-relaxed max-w-3xl mx-auto opacity-90">
              Real experiences from patients who have trusted us with their recovery journey
            </p>
            <div className="flex items-center justify-center space-x-2 pt-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-6 h-6 fill-accent text-accent" />
              ))}
              <span className="text-primary font-bold ml-2">5.0 Rating</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 lg:py-24 relative overflow-hidden bg-white px-6">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-8 lg:gap-10">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-primary mb-6">
            Ready to Start Your <span className="text-accent italic font-normal">Recovery?</span>
          </h2>
          <p className="text-dark text-lg font-medium leading-relaxed mb-8 opacity-80">
            Join hundreds of satisfied patients who have experienced the difference of professional home physiotherapy care.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a 
              href={`https://wa.me/919502808581?text=${encodeURIComponent('Hi Flexo Physio, I would like to book an appointment.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-accent hover:bg-accent/90 text-white font-bold py-4 px-10 rounded-none transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Book Your Appointment
            </a>
            <div className="flex items-center space-x-2 text-primary font-bold">
              <MapPin className="text-accent w-5 h-5" />
              <span className="uppercase tracking-widest text-sm">Miyapur, Hyderabad</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
