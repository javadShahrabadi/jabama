import React from "react";
import Head from "next/head";

// ----------

const Layout = (props) => {
  return (
    <React.Fragment>
      <Head>
        <title>{props.pageTitle}</title>
      </Head>
      <main>{props.children}</main>
    </React.Fragment>
  );
};

Layout.defaultProps = {
  pageTitle: "جاباما: رزرو آنلاین اقامتگاه و هتل | تضمین کیفیت",
};

export default Layout;
