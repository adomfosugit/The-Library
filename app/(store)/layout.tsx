import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../(store)/globals.css"
import { ClerkProvider } from "@clerk/nextjs";
import Header from "@/components/ui/Navigation /Header";
import { Toaster } from "@/components/ui/sonner"
import { SidebarProvider, SidebarTrigger} from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/Appsidebar";
import Footer from "@/components/ui/Landing/Footer/Footer";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BloomForge Ventures",
  description: "She Butter Store -Ghana",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider dynamic >
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <main>
        
          <Header />

         
          <Toaster position="top-center" />
         
      


        {children}
        
        <Footer />
        
        </main>
      </body>
    </html>



    </ClerkProvider>
 
  );
}
