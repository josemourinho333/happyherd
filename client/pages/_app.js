import '../styles/globals.scss'
import Layout from '../components/layout';
import Head from 'next/head';
import axios from '../components/Axios';

function MyApp({ 
    Component, 
    pageProps,
    heroItems,
    aboutItems,
    helpItems,
    subscribeItems,
    allAnimals,
    items,
  }) {
    return (
      <>
        <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0" />
        <title>Happy Herd</title>      
        </Head>
        <Layout>
          <Component 
            {...pageProps}
            heroItems={heroItems}
            aboutItems={aboutItems}
            helpItems={helpItems}
            subscribeItems={subscribeItems}
            allAnimals={allAnimals}
            items={items}
          />
        </Layout>
        <style jsx global>
            {`
              #__next {
                position: relative;
              }
            `}
          </style>
      </>
    )
};

MyApp.getInitialProps = async ({ Component, ctx}) => {
  try {
    const [hero, about, help, subscribe, animalsData, itemsData] = await Promise.all([
      axios.get('/hero-items', { params: {context: "edit", _embed: true}}),
      axios.get('/about-items', { params: {context: "edit", _embed: true}}),
      axios.get('/help-items', {params: {context: "edit", _embed: true}}),
      axios.get('/subscribe-items', {params: {context: "edit", _embed: true}}),
      axios.get('/animals', { 
        params: {
          context: "edit", 
          _embed: true,
          per_page: 100
        }
      }),
      axios.get('/items', {
        params: {
          context: "edit",
          _embed: true,
          per_page: 100
        }
      })
    ]);

    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    };

    return {
      pageProps,
      heroItems: hero.data,
      aboutItems: about.data,
      helpItems: help.data,
      subscribeItems: subscribe.data,
      allAnimals: animalsData.data,
      items: itemsData.data,
    }
  } catch (error) {
    console.log('error', error);
  }
};

export default MyApp;
