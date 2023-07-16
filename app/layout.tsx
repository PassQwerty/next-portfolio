import "@/styles/global.css";
import styles from "@/styles/global.module.scss";
import { Montserrat } from "next/font/google";
import { Suspense } from "react";
import Loading from "./loading";
import TheHeader from "./(navigation)/header/TheHeader";
import TheFooter from "./(navigation)/footer/TheFooter";
import { GlobalContextProvider } from "../Context/Store";

const font = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Главная | Вадим Сидоренко",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={font.className}>
      <GlobalContextProvider>
        <body className={styles.body}>
          <Suspense fallback={<Loading />}>
            <TheHeader />
            {children}
            <TheFooter />
          </Suspense>
        </body>
      </GlobalContextProvider>
    </html>
  );
}
