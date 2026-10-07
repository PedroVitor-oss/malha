import siteConfig from "./config/site.json";
import type { SiteConfig } from "./config/types";

import { Nav } from "./components/Nav";
import { Footer } from "./components/Footer";
import { Hero } from "./components/sections/Hero";
import { WhatWeDo } from "./components/sections/WhatWeDo";
import { Works } from "./components/sections/Works";
import { Technologies } from "./components/sections/Technologies";
import { Clients } from "./components/sections/Clients";
import { Contact } from "./components/sections/Contact";

const config = siteConfig as SiteConfig;

export default function App() {
  return (
    <>
      <Nav config={config} />
      <main>
        {/*
          A ordem das seções é só a ordem em que aparecem aqui.
          Para reorganizar a página, mova os componentes de lugar.
          Para editar textos, números e contatos, edite app/config/site.json.
        */}
        <Hero config={config} />
        <WhatWeDo config={config} />
        <Works config={config} />
        <Technologies config={config} />
        <Clients config={config} />
        <Contact config={config} />
      </main>
      <Footer config={config} />
    </>
  );
}
