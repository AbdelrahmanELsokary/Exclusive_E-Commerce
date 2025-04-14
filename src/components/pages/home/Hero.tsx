import Hero_Slider from '../../ui/Hero_Slider';
import Sidebar from '../../ui/Sidebar';

export default function Hero() {
  return (
    <>
      <section>
        <div className="container flex items-center justify-between">
          <Sidebar />
          <Hero_Slider />
        </div>
      </section>
    </>
  );
}
