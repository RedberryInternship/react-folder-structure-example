import { PropsType } from './types';

const ImageWithQuote: React.FC<PropsType> = (props) => {
  return (
    <div className='w-[47%] flex-shrink-0 relative h-screen'>
      <div
        className={`flex flex-col  z-10 space-y-6 absolute ${props.quoteMarginTopClass} ml-32  text-4xl italic font-nunuto`}
      >
        <h1>
          {props.quoteLineOne}
          <br />
          {props.quoteLineTwo}
        </h1>
        <span className={`!text-white font-mono text-base`}>
          {props.quoteAuthor}
        </span>
      </div>
      <img
        src={props.imageSrc}
        className='object-fill w-full h-full'
        alt='landing'
      />
    </div>
  );
};

export default ImageWithQuote;
