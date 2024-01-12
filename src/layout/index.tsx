import React, { ReactNode, useState } from "react";

import { Drawer, Footer, Navbar } from "@/components";

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [drawer, setDrawer] = useState<boolean>(false);

  return (
    <div className="font-primary">
      <Drawer drawer={drawer} setDrawer={setDrawer} />

      <Navbar drawer={drawer} setDrawer={setDrawer} />

      <div className="min-h-screen mb-20">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
