import { useState, useEffect } from "react";
import Layout from "@/layout/layout";

export default function Home() {
  return (
      <Layout>
        <div className="max-w-full flex justify-center p-2" >
          <video loop autoPlay muted height="70%" width="70%"><source src="/videos/pokemon.mp4"></source></video>
        </div>
      </Layout>
  );

}
