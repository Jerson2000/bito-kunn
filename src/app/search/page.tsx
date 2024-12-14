import Search from '@/components/anime/search'
import Footer from '@/components/footer'
import Header from '@/components/header'
import { Suspense } from 'react'

export default function Page() {

    return <>
        <div className="h-screen flex flex-col">
            <Header />
            <main className="flex-grow">
                <Suspense>
                    <Search />
                </Suspense>
            </main>

            <Footer />
        </div>
    </>
}