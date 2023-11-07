
import '@/styles/globals.css'
import { Poppins } from 'next/font/google';
import Navbar from '@/components/Navbar';

const inter = Poppins({
    weight: '400',
    subsets: ['latin'],
  })


export const metadata = {
    title: 'Notes App',
    description: 'A simple dashboard',
  }

 

  export default function RootLayout ({ children }) {
    return(
<html lang="en">
            <body className={inter.className} >
                <div style={{ display: 'flex' }}>
                    {/* <Sidebar /> */}
                    <div className='lg:block md:hidden sm:hidden hidden'>
                         {/* <MobileSidebar /> */}
                    </div>
                    {/* <Sidenav /> */}
                    <div style={{ flex: '1', display: 'flex', flexDirection: 'column' }}>
                        <Navbar />
                        <main style={{ flex: '1' }}>{children}</main>
                    </div>
                </div>
            </body>
        </html>
    )
}