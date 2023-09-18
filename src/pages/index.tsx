import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Appbar from "../component/Appbar"
import { RecoilRoot } from 'recoil'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <RecoilRoot>
    
         <Appbar />
    
    </RecoilRoot>
  )
}
