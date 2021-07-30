// .user(id, options) //Scrape posts from a specific user (Promise)
// .hashtag(id, options) //Scrape posts from hashtag section (Promise)
// .trend('', options) // Scrape posts from a trends section (Promise)
// .music(id, options) // Scrape posts by music id (Promise)
 
// .userEvent(id, options) //Scrape posts from a specific user (Event)
// .hashtagEvent(id, options) //Scrape posts from hashtag section (Event)
// .trendEvent('', options) // Scrape posts from a trends section (Event)
// .musicEvent(id, options) // Scrape posts by music id (Event)
 
// .getUserProfileInfo('USERNAME', options) // Get user profile information
// .getHashtagInfo('HASHTAG', options) // Get hashtag information
// .signUrl('URL', options) // Get signature for the request
// .getVideoMeta('WEB_VIDEO_URL', options) // Get video meta info, including video url without the watermark
// .getMusicInfo('https://www.tiktok.com/music/original-sound-6801885499343571718', options) // Get music metadata


import { Injectable, HttpException, HttpStatus, ArgumentMetadata, BadRequestException } from '@nestjs/common';
import { ObjectSchema } from '@hapi/joi';

const TikTokScraper = require("tiktok-scraper");

@Injectable()
export class AppService {
  // constructor(private schema: ObjectSchema) {}
  // transform(value: any, metadata: ArgumentMetadata) {
  //   const { error } = this.schema.validate(value);
  //   if (error) {
  //     throw new BadRequestException('Validation failed');
  //   }
  //   return value;
  // }
  getHello(): string {
    return 'Hello World!';
  }

 async getMetadata(url: string): Promise<any> {
    const randomString = Array.from(
      { length: 6 },
      () => Math.random().toString(36)[2]
    ).join("");
  
    const headers = {
      "User-Agent": randomString,
      Referer: "https://www.tiktok.com/",
      Cookie: "tt_webid_v2=" + randomString
    };

    const options = {
      // Number of posts to scrape: {int default: 20}
      number: 50,
   
      // Set proxy {string[] | string default: ''}
      // http proxy: 127.0.0.1:8080
      // socks proxy: socks5://127.0.0.1:8080
      // You can pass proxies as an array and scraper will randomly select a proxy from the array to execute the requests
      proxy: '',
   
      // Set to {true} to search by user id: {boolean default: false}
      by_user_id: false,
   
      // How many post should be downloaded asynchronously. Only if {download:true}: {int default: 5}
      asyncDownload: 5,
   
      // How many post should be scraped asynchronously: {int default: 3}
      // Current option will be applied only with current types: music and hashtag
      // With other types it is always 1 because every request response to the TikTok API is providing the "maxCursor" value
      // that is required to send the next request
      asyncScraping: 3,
   
      // File path where all files will be saved: {string default: 'CURRENT_DIR'}
      filepath: `CURRENT_DIR`,
   
      // Custom file name for the output files: {string default: ''}
      fileName: `CURRENT_DIR`,
   
      // Output with information can be saved to a CSV or JSON files: {string default: 'na'}
      // 'csv' to save in csv
      // 'json' to save in json
      // 'all' to save in json and csv
      // 'na' to skip this step
      filetype: `na`,
   
      // Custom User-Agent
      // {string default: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/{RANDOM_VERSION}.0.3987.122 Safari/537.36' }
      userAgent: randomString,
      
      // Download video without the watermark: {boolean default: false}
      // Set to true to download without the watermark
      // This option will affect the execution speed
      noWaterMark: true,
      
      // Create link to HD video: {boolean default: false}
      // This option will only work if {noWaterMark} is set to {true}
      hdVideo: false,
  };

    console.log("url:", url)
    try {
      return await TikTokScraper.getVideoMeta(url, options);
    } catch (error) {
      console.log("错误" , error);
      throw new HttpException({
        status: HttpStatus.GATEWAY_TIMEOUT,
        error: error,
      }, HttpStatus.GATEWAY_TIMEOUT);
      return null;
    }
  }
}
