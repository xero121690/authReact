import React from 'react'
import Header from './Header'
const Layout = ({ children }) => (
  <section>
    <Header />
    {children}
  </section>
)

export default Layout;