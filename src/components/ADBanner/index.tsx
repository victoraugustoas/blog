import React, { useEffect } from "react";

const AdBanner = () => {
  useEffect(() => {
    try {
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({});
      console.log(window);
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <>
      <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
      />
      {/* <script
        data-ad-client="ca-pub-4040865504307249"
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
      /> */}

      <ins
        className="adsbygoogle adbanner-customize"
        style={{
          display: "block",
        }}
        data-ad-client="ca-pub-4040865504307249"
        data-ad-slot="1529600618"
        data-ad-format="auto"
        data-adtest="on"
      />
    </>
  );
};

export default AdBanner;
