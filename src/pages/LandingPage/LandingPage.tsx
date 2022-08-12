import { BlackLinkWithArrowRight } from './components';

const IndexPage: React.FC = () => {
  return (
    <>
      <div className='w-[47%] flex-shrink-0 relative h-screen bg-red-600'>
        <img
          src='/assets/landing-image.png'
          className='w-full h-full'
          alt='landing'
        />
      </div>
      <div className='flex-grow flex flex-col items-start justify-center space-y-16 bg-orange-600 pl-20'>
        <h1 className='text-white text-8xl leading-[7rem] font-extrabold capitalize'>
          chess says{' '}
          <span className='text-black text-base font-normal'>a lot about</span>{' '}
          <br />
          who you are
        </h1>
        <BlackLinkWithArrowRight
          link='/personal-information'
          text='Get Started'
        />
      </div>
    </>
  );
};

export default IndexPage;
