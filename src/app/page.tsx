
import Footer from "@/components/footer";
import Header from "@/components/header";
import Image from "next/image";
/*eslint-disable @next/next/no-html-link-for-pages*/
export default function Page() {

  return (
    <div className="h-screen flex flex-col">
      <Header />
      <main className="flex-grow">

        <div className="container mx-auto my-10">

          <div className="container flex flex-col px-6 py-4 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
            <div className="flex flex-col items-center w-full lg:flex-row lg:w-1/2">
              <div className="flex justify-center order-2 mt-6 lg:mt-0 lg:space-y-3 lg:flex-col">
                <button className="w-3 h-3 mx-2 bg-blue-500 rounded-full lg:mx-0 focus:outline-none"></button>
                <button className="w-3 h-3 mx-2 bg-gray-300 rounded-full lg:mx-0 focus:outline-none hover:bg-blue-500"></button>
                <button className="w-3 h-3 mx-2 bg-gray-300 rounded-full lg:mx-0 focus:outline-none hover:bg-blue-500"></button>
                <button className="w-3 h-3 mx-2 bg-gray-300 rounded-full lg:mx-0 focus:outline-none hover:bg-blue-500"></button>
              </div>

              <div className="max-w-lg lg:mx-12 lg:order-2">
                <h1 className="text-3xl font-semibold tracking-wide text-gray-800 dark:text-indigo-300">Discover the Magic of Anime: Why You Should Start Watching Today!
                </h1>
                <p className="mt-4 text-gray-600 dark:text-purple-100">If you&apos;re looking for a captivating escape from reality, look no further than anime! This vibrant form of entertainment, originating from Japan, offers a unique blend of stunning visuals, compelling storytelling, and unforgettable characters that will draw you in and keep you hooked.</p>
                <div className="mt-6">
                  <a href="/anime" className="px-6 py-2.5 mt-6 text-sm font-medium leading-5 text-center text-white capitalize bg-indigo-600 rounded-lg hover:bg-indigo-500 lg:mx-0 lg:w-auto focus:outline-none">Watch now</a>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
              <Image
                src="/snow-gao.jpg"
                width={672}
                height={50}
                alt="Picture of the author"
                style={{
                  width: "auto",
                  height: "auto"
                }}
                priority={true}
                className="object-cover max-w-2xl rounded-md"
              />
            </div>
          </div>


        </div>
      </main>

      <Footer />
    </div>
  );
}
