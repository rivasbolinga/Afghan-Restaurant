import Banner from '../components/banner/Banner';
import Slider from '../components/Testimonials';

const HomePage = () => {
  const description = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a pariatur asperiores optio libero officiis repudiandae amet aspernatur, omnis ';
  const title = 'anything we want ';
  return (
    <main>
      <Banner description={description} title={title} />
      <Slider />
    </main>
  );
};

export default HomePage;
