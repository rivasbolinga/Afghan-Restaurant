import Banner from '../components/banner/Banner';

const HomePage = () => {
  const description = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a pariatur asperiores optio libero officiis repudiandae amet aspernatur, omnis ';
  const title = 'anything we want ';
  return (
    <main>
      <Banner description={description} title={title} />
      <h1>Home Page</h1>
    </main>
  );
};

export default HomePage;
