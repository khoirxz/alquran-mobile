import React, { ReactNode, useState } from "react";

import { Drawer, Footer, Navbar } from "@/components";

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [drawer, setDrawer] = useState(false);

  return (
    <div>
      <Drawer drawer={drawer} setDrawer={setDrawer} />

      <Navbar drawer={drawer} setDrawer={setDrawer} />

      <div className="min-h-screen">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
