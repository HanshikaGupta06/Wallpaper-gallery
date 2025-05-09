const getFavourite = (req,res)=>{
 try {
    const favouriteImages = [
        {
          title: 'Natural Skincare',
          url: 'https://res.cloudinary.com/demo/image/upload/sample.jpg',
        },
        {
          title: 'FLOWER',
          url: 'https://res.cloudinary.com/di4nlaaz8/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1746685856/beautiful-flowers-lotus_f1ecyv.jpg',
        },
        {
          title: 'FLOWER',
          url: 'https://res.cloudinary.com/di4nlaaz8/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1746685745/4y4vz2pyfc6a1_rgpli9.jpg',
        },
        {
          title: 'PANKH',
          url: 'https://res.cloudinary.com/di4nlaaz8/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1746685675/pexels-photo-674010.jpeg_pfyncl.jpg',
        },
        {
          title: 'GANESH JI',
          url: 'https://res.cloudinary.com/di4nlaaz8/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1746685549/m_447_pbzogi.jpg',
        },
        {
          title: 'RADHA KRISHNA',
          url: 'https://res.cloudinary.com/di4nlaaz8/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1746649005/360_F_710573264_PjVq4xA6Vnv0hAVlmdFcpLI88CY6UFDV_wusgaz.jpg',
        },
      ]; 
      res.send(favouriteImages);
    
 } catch (error) {
    res.send(error);
    
 }

}
module.exports= {getFavourite};