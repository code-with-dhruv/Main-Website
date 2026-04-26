'use client'

import Script from 'next/script'

export default function ApolloTracker() {
  return (
    <>
      <Script
        id="apollo-tracker"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            function initApollo(){
              var n=Math.random().toString(36).substring(7),
              o=document.createElement("script");
              o.src="https://assets.apollo.io/micro/website-tracker/tracker.iife.js?nocache="+n;
              o.async=true;
              o.defer=true;
              o.onload=function(){
                window.trackingFunctions.onLoad({
                  appId:"695a28616f6b2e00157a28db"
                });
              };
              document.head.appendChild(o);
            }
            initApollo();
          `,
        }}
      />
    </>
  )
}
