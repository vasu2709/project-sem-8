import Providers from "@/modules/providers"
import "./globals.css"
import Header from "@/components/common/Header"
import Footer from "@/components/common/Footer"
import localFont from "next/font/local"
// const inter = Inter({
//   style: ["normal"],
//   subsets: ["latin"],
//   variable: "--font-inter",
//   preload: true,
// })
const myFont = localFont({
  src: [
    {
      path: "../../public/fonts/Edmondsans Regular/Edmondsans_Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Edmondsans Regular/Edmondsans_Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Edmondsans Regular/Edmondsans_Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  display: "swap",
})

export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode
  modal: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${myFont.className} font-edmondsans relative`}>
        <Providers>
          <Header />
          {children}
          {modal}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}

// import Providers from "@/modules/providers"
// import { Inter } from "next/font/google"
// import "./globals.css"
// import Header from "@/components/common/Header"
// import Footer from "@/components/common/Footer"
// import localFont from "next/font/local"
// // const inter = Inter({
// //   style: ["normal"],
// //   subsets: ["latin"],
// //   variable: "--font-inter",
// //   preload: true,
// // })

// const myFont = localFont({
//   src: [
//     {
//       path: "../../public/fonts/Edmondsans Regular/Edmondsans_Regular.woff2",
//       weight: "400",
//       style: "normal",
//     },
//     {
//       path: "../../public/fonts/Edmondsans Regular/Edmondsans_Regular.woff",
//     },
//     {
//       path: "../../public/fonts/Edmondsans Regular/Edmondsans_Regular.ttf",
//     },
//   ],
//   display: "swap",
// })

// export default function RootLayout({
//   children,
//   modal,
// }: {
//   children: React.ReactNode
//   modal: React.ReactNode
// }) {
//   return (
//     <html lang="en">
//       <body className={`${myFont.className} relative font-sans`}>
//         <Providers>
//           <Header />
//           {children}
//           {modal}
//           <Footer />
//         </Providers>
//       </body>
//     </html>
//   )
// }
