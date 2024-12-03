import React from 'react';

const PostLayout = ({ title, children }) => {
  return (
    <>
      <head>
        <meta charSet="UTF-8" />
        <meta name="description" content="Astro description" />
        <meta name="viewport" content="width=device-width" />
        <link rel="icon" type="image/svg+xml" href="../../public/img/IconBoteritos.png" />
        <script src="https://kit.fontawesome.com/763c79dbc1.js" crossOrigin="anonymous"></script>
        <title>{title}</title>
      </head>
      <body className="bg-white">
        {children}
      </body>
    </>
  );
};

export default PostLayout;