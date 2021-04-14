import React from 'react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { PageNotFound } from '../src/components/PageNotFound/PageNotFound'

const Page404 = () => <PageNotFound />

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
})

export default Page404
