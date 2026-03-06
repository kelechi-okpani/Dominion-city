import { abujaHqMedia, dominionCommunityMedia } from "../data/media";
import CinematicMarquee from "./CinematicMarquee";


export default function Gallery() {
  return (
    <section className="py-20 bg-white">
      {/* Row 1: Slow & Forward */}
      <CinematicMarquee 
        images={abujaHqMedia} 
        title="Gudu HQ Highlights" 
        speed="slow" 
      />

      {/* Row 2: Faster & Reverse */}
      <CinematicMarquee 
        images={dominionCommunityMedia} 
        title="Global Impact 2026" 
        reverse={true} 
        speed="normal" 
      />
    </section>
  );
}