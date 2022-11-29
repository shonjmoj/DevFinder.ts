import { Footer, Title, InfoCard, SearchBar } from './components/index';

const App = () => {
  return (
    <div className='w-screen flex flex-col justify-between'>
      <Title />
      <div className='w-full flex flex-col items-center gap-2 lg:gap-3 xl:gap-6'>
        <SearchBar />
        <InfoCard />
      </div>
      <Footer />
    </div>
  );
};

export default App;
