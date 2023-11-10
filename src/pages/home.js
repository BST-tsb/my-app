import React from "react"
import Head from "../components/head/index"
import Banner from "../components/banner/index"
import Features from "../components/features/index"
import Foot from "../components/footer/index"

export default function Home() {
    return (
      <>
        <Head />
        <main>
          <Banner />
          <Features />
        </main>
  
        <Foot />
      </>
    )
  }