import * as React from 'react'
import NavbarComponent from '../pages/navabar';
import Header from './header';

interface LayoutProps {
    pageTitle:string,
    children: JSX.Element|JSX.Element[];
}


const Layout: React.FC<LayoutProps> = (props) => {

  return (
    <div>
      <nav>
      < NavbarComponent />
      </nav>
      <main className='m-4 p-2 '>
        <Header />
        <h1 className='text-blue-950'>{props.pageTitle}</h1>
        {props.children}
      </main>
    </div>
  )
}

export default Layout