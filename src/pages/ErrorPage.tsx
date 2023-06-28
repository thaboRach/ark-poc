/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);
  return (
    <main className="flex flex-col gap-y-2 items-center justify-center w-full h-screen bg-gradient-to-r from-purple-500 to-pink-500">
      <h1 className="text-white text-3xl text-medium">Ooops!</h1>
      <p className="text-white">Sorry, an unexpected error has occurred.</p>
      <p className="text-white">
        {/* @ts-ignore */}
        <i>{error.statusText || error.message}</i>
      </p>
    </main>
  );
};

export default ErrorPage;
