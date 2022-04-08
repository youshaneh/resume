import { AnimatePresence, domAnimation, LazyMotion, m } from "framer-motion"
import { Layout, Footer } from '../components/layout'
import '../styles/globals.scss'

const fade = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 }
}

function MyApp({ Component, pageProps, router }) {
  return (
    <Layout>
      <LazyMotion features={domAnimation}>
        <AnimatePresence exitBeforeEnter>
          <m.div
            key={router.route}
            className="page-wrap"
            onAnimationComplete={(definition) => { if (definition === 'exit') window.scrollTo(0, 0) }}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={fade}
            transition={{ duration: 0.3 }} >
            <Component {...pageProps} />
            <Footer />
          </m.div>
        </AnimatePresence>
      </LazyMotion>
    </Layout>
  )
}

export default MyApp
