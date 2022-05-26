import axios from 'axios'
import cheerio from 'cheerio'
import express from 'express'





const PORT = process.env.PORT || 5000


const urlpage = 'https://www.lesiteinfo.com/'
const app = express()


/*var acceuil = axios(urlpage);
function parse(page_ac,urle) {  
    page_ac = axios(urle);
    page_ac.then(res =>{
    const htmlData = res.data;
    const $ = cheerio.load(htmlData);
        
    const articles =[]
    $('.posts-items li',htmlData).each((index, element)=>{
        const title = $(element).children('.post-details').children('h2').text();
        const time = $(element).children('.post-details').find('span').text();
           
          
            
        const titleUrl = $(element).children('a').attr('href');
        const description=$(element).find('.post-details').text();
                
            
        const imgurl = $(element).children('a').find('img').attr('src');
        const Category =$(element).children('a').text();
        const urlcontent = urlpage +titleUrl
        const url = urlcontent
            
        articles.push({
            title,
            time, 
            url,
            description,
            imgurl,
            Category

        })
            
            
        })
        
        //console.log(articles); 
        

}).catch(err=> console.error(err)); 
} */



    /*const config = require("./config.json");
    const fs = require('fs')
    const File = './as.json';
    fs.writeFile(File,JSON.stringify(articles),'utf-8') */


app.listen(PORT ,()=> console.log('server is listening to port '+PORT));
var dict ={category1 :'maroc',category2:'politique',category3:'economie',category4:'sport',category5:'cultures',category6:'monde',category7:'video'};

for (var key in dict){
    var value = dict[key]
    var catogor_url = urlpage + value;
    var loge = axios(catogor_url);
    //var tr =loge

    //console.log(tr);


    
    console.log(catogor_url);
    
}
//let x = parse(acceuil,urlpage);

