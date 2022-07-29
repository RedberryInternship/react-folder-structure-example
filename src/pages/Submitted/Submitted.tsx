import { Rocket } from 'components';

const Submitted = () => {
  return (
    <>
      <div className='w-[47%] flex-shrink-0 relative h-screen bg-red-600'>
        <img
          src='/assets/submitted.png'
          alt='submitted'
          className='w-full h-full'
        />
      </div>
      <div className='flex-grow flex flex-col items-center justify-center space-y-16  '>
        <Rocket />
        <h1 className='text-3xl'>Onboarding completed!</h1>
      </div>
    </>
  );
};

export default Submitted;
