import React from 'react'
import AppHeader from './_components/AppHeader';


function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
        <AppHeader />
            <div className="p-4 md:p-10 lg:p-20 py-10">
               {children}
             </div>
    </div>
  )
}

export default DashboardLayout
