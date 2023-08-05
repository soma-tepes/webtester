import React from 'react'
import '../../assets/css/main.css'



const Header = () => {
  return (
    <div id="header-wrapper">

    <div class="container">
        <div class="row">
            <div class="col-12">

                <header id="header">
                  {/*   <h1><a href="" id="logo">JAE Oregon</a></h1> */}
                  <h1>{/*  <Link id="logo" to="./AddLink">JAE Oregon</Link> */}
               
                  </h1>
                    <nav id="nav">
                        <a href="index.html" className="current-page-item">Homepage</a>
                     
                    </nav>
                </header>

            </div>
        </div>
    </div>
</div>
  )
}

export default Header