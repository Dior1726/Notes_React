const NotFoundPage = () => {
  return (
    <div className='h-full w-full flex-1 flex-col flex items-center justify-center bg-slate-800 text-white'>
      <h1 className='text-7xl font-bold'>404</h1>
      <h2 className='mt-5 text-slate-400'>Page Not Found</h2>
      <p className='text-slate-400'>
        Sorry, the page you are looking for does not exist.
      </p>
    </div>
  );
};

export default NotFoundPage;
