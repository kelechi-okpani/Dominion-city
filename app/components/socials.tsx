import { motion } from "framer-motion"
import { ArrowRight, Facebook, Instagram, Youtube } from "lucide-react"

const Socials = () => {
    return (
            <section className="mt-32 max-w-5xl mx-auto px-6 pb-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Instagram Card */}
          <motion.a 
            whileHover={{ y: -10 }}
            href="https://www.instagram.com/dominion_city_abuja?igsh=cGJrbDJpMmJ3bXVk"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative p-12 rounded-[3rem] bg-gradient-to-br from-[#f09433] via-[#dc2743] to-[#bc1888] overflow-hidden"
          >
            <div className="relative z-10 text-white">
              <Instagram size={40} className="mb-6 group-hover:rotate-12 transition-transform" />
              <h3 className="text-3xl font-serif font-bold mb-4">Follow on Instagram</h3>
              <p className="text-white/80 mb-8 font-medium">Daily reels, service highlights, and community stories.</p>
              <div className="flex items-center gap-2 font-black uppercase text-[10px] tracking-widest">
                Visit Profile <ArrowRight size={14} />
              </div>
            </div>
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <Instagram size={200} />
            </div>
          </motion.a>

          {/* Facebook Card */}
          <motion.a 
            whileHover={{ y: -10 }}
            href="https://web.facebook.com/dominioncity09/?_rdc=1&_rdr"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative p-12 rounded-[3rem] bg-[#003399] overflow-hidden"
          >
            <div className="relative z-10 text-white">
              <Facebook size={40} className="mb-6 group-hover:rotate-12 transition-transform" />
              <h3 className="text-3xl font-serif font-bold mb-4">Join us on Facebook</h3>
              <p className="text-white/80 mb-8 font-medium">Full photo albums, live broadcasts, and event updates.</p>
              <div className="flex items-center gap-2 font-black uppercase text-[10px] tracking-widest">
                View Archive <ArrowRight size={14} />
              </div>
            </div>
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <Facebook size={200} />
            </div>
          </motion.a>


            {/* YouTube Card */}
          <motion.a 
            whileHover={{ y: -10 }}
            href="https://m.youtube.com/@DominionCityAbuja"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative p-12 rounded-[3rem] bg-gradient-to-br from-[#f09433] via-[#dc2743] to-[#bc1888] overflow-hidden"
          >
            <div className="relative z-10 text-white">
              <Youtube size={40} className="mb-6 group-hover:rotate-12 transition-transform" />
              <h3 className="text-3xl font-serif font-bold mb-4">Subscribe on YouTube</h3>
              <p className="text-white/80 mb-8 font-medium">Daily reels, service highlights, and community stories.</p>
              <div className="flex items-center gap-2 font-black uppercase text-[10px] tracking-widest">
                Visit Channel <ArrowRight size={14} />
              </div>
            </div>
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <Youtube size={200} />
            </div>
          </motion.a>
        </div>
      </section>
    )
}

export default Socials