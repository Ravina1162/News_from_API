import React from 'react'
import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';


const linksArray = ["US", "BBC", "Germany", "Trump"];

const Home = () => {
  let navigate = useNavigate();
    useEffect(() => {
        let authToken = localStorage.getItem('email')
        let dataonlocal =localStorage.getItem("email")


        if (authToken) {
            navigate('/Home')
        }

        if (!authToken) {
            navigate('/')
        }
        
        let res=sessionStorage.getItem("signed")
        // if(dataonlocal )
        // {
        //   navigate('/Home')
        //     console.log("data local me hai re")
        // }

        if (res === "yes") {
          navigate('/Home')
      }
      else {
          navigate('/')
      }


    }, [])
  return (
    <div>
        <Navbar links={linksArray}/>
        {/* <Articles/> */}
    </div>
  )
}

export default Home