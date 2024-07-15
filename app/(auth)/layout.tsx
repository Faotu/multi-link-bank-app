import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex min-h-screen w-full justify-between font-inter">
      {children}

      <div className="auth-asset">
        <div>
          <Image
            //  auth-image.svg
            src="/icons/home.jpg"
            alt="auth-image"
            width={500}
            height={600}
          />
        </div>
      </div>
    </main>
  );
}
