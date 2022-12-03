import React from 'react'
import { Header } from './'
import { ReactNode } from 'react';

const Layout = ({ children }: {children: ReactNode})=> {
  return (
    <>
      <Header />
      {children}
    </>
  )
}

export default Layout;
