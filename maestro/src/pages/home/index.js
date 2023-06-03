import { useState, useEffect } from "react";
import Layout from "@/layout/layout";

export default function Home() {
  return (
      <Layout>
        <div className="">
          <video loop autoPlay muted height="50"><source src="/videos/pokemon.mp4"></source></video>
        </div>
      </Layout>
  );
}
