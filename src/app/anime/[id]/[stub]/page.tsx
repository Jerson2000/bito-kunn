import AnimeInfo from "@/components/anime/info";
import Footer from "@/components/footer";
import Header from "@/components/header";



export default async function Page({
  params,
}: {
  params: Promise<{ id: string, stub: string }>
}) {
  
  const { id, stub } = await params
  
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <main className="flex-grow">

        <AnimeInfo id={id} episode={stub}/>

      </main>

      <Footer />
    </div>

  );
}