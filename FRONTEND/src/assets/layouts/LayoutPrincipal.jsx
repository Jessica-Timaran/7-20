import React from "react";
import Menu from "../components/Menu";
import PostLayout from "./PostLayout";
import Header from "../components/Header";

const LayoutPrincipal = ({ title, children, username }) => {
  return (
    <PostLayout title={title}>
      <div className="flex h-auto">
        {/* Menú lateral */}
        <aside className="w-64 bg-gray-800">
          <Menu />
        </aside>

        {/* Contenido principal */}
        <div className="flex-1 flex flex-col bg-gray-100">
          {/* Encabezado */}
          <Header username={username} />

          {/* Contenido */}
          <main className="flex-1 p-6">{children}</main>
        </div>
      </div>
    </PostLayout>
  );
};

export default LayoutPrincipal;
