import cheerio from 'cheerio'
import axios from 'axios'
import express from 'express'

const app = express()

axios('https://www.lesiteinfo.com/')
 .then(res=>{
     const htmld = res.data
     const $ = cheerio.load(htmld)
     const badr =[]
     $('.post-details',htmld).each((index , element)=>{
         const description = $(element).children('p').text

         badr.push(
             description
         )



     })
     console.log(badr)
 })