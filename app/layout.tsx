import type { Metadata } from "next";
import { Outfit, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import ExerciseProvider from "./providers/exerciseProvider";
import { Slide, ToastContainer } from "react-toastify";

const geistOutfit = Outfit({
  variable: "--font-Outfit",
  subsets: ["latin"],
});

const geistGrotesk = Space_Grotesk({
  variable: "--font-Space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FitLog workout library",
  description: "FitLog workout library",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistOutfit.variable} ${geistGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">

        <ExerciseProvider>

        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          transition={Slide}
        />

          <Navbar/>
          {children}

        </ExerciseProvider>

      </body>
    </html>
  );
}
