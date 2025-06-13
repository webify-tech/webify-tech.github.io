import React from 'react';
import { Head } from 'next/document';
import theme from '../theme/palette';
import brand from '../public/text/brand';

const HeadComponent = () => (
  <Head>
    <meta charSet="utf-8" />
    {/* Use minimum-scale=1 to enable GPU rasterization */}
    <meta
      name="description"
      content={brand.saas.desc}
    />
    {/* Favicon */}
    <link rel="icon" href="/favicons/favicon.ico" />
    <link rel="apple-touch-icon" sizes="57x57" href="/favicons/apple-touch-icon.png" />
    <link rel="apple-touch-icon" sizes="60x60" href="/favicons/apple-touch-icon.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="/favicons/apple-touch-icon.png" />
    <link rel="apple-touch-icon" sizes="76x76" href="/favicons/apple-touch-icon.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="/favicons/apple-touch-icon.png" />
    <link rel="apple-touch-icon" sizes="120x120" href="/favicons/apple-touch-icon.png" />
    <link rel="apple-touch-icon" sizes="144x144" href="/favicons/apple-touch-icon.png" />
    <link rel="apple-touch-icon" sizes="152x152" href="/favicons/apple-touch-icon.png" />
    <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="192x192" href="/favicons/android-icon-192x192.png" />
    <link rel="icon" type="image/png" sizes="192x192" href="/favicons/android-chrome-512x512.png" />
    <link rel="manifest" href="/favicons/manifest.json" />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta name="msapplication-TileImage" content="/favicons/ms-icon-144x144.png" />
    {/* PWA primary color */}
    <meta name="theme-color" content={theme.oceanBlue.palette.primary.main} />
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,600,700" rel="stylesheet" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
    <link href="https://unpkg.com/ionicons@3.0.0/dist/css/ionicons.min.css" rel="stylesheet" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
    <link href="https://fonts.googleapis.com/css2?family=Marhey:wght@300..700&display=swap" rel="stylesheet" />
    <meta property="author" content="luxi" />
    <meta property="og:site_name" content="luxi.ux-maestro.com" />
    <meta property="og:locale" content="en_US" />
    <meta property="og:type" content="website" />
    {/*  Twitter */}
    <meta property="twitter:site" content="luxi.ux-maestro.com" />
    <meta property="twitter:domain" content="luxi.ux-maestro.com" />
    <meta property="twitter:creator" content="luxi" />
    <meta property="twitter:card" content="summary" />
    <meta property="twitter:image:src" content="/images/saas-logo.png" />
    <meta property="og:url" content={brand.saas.url} />
    <meta property="og:title" content={brand.saas.desc} />
    <meta
      property="og:description"
      content={brand.saas.desc}
    />
    <meta name="twitter:site" content={brand.saas.url} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:image" content={brand.saas.img} />
    <meta property="og:image" content={brand.saas.img} />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
  </Head>
);

export default HeadComponent;
