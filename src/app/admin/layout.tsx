import React from 'react';
import {LayoutProps} from '@/types/layout';

const Layout = ({children}: LayoutProps) => {
  return (
    <div>{children}</div>
  )
}

export default Layout