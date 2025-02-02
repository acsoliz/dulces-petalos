import { AppHeader } from '@/components';

export const withHeader = (WrappedComponent) => {
  const WithHeader = (props) => (
    <>
      <AppHeader />
      <WrappedComponent {...props} />
    </>
  );

  return WithHeader;
};

