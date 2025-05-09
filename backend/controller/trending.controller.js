const getTrending = (req, res) => {
   try {
    const trendingImages = [
        {
          title: 'IMPOSSIBLE IS NOTHING',
          url: 'https://res.cloudinary.com/di4nlaaz8/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1746686287/11119_ws9qpz.png',
        },
        {
          title: 'DO NOT WASTE TIME',
          url: 'https://res.cloudinary.com/di4nlaaz8/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1746686287/dont-waste-time-popular-quotes-inspirational-quotes-dark-1920x1080-6179_xky9hz.png',
        },
        {
          title: 'Glow',
          url: 'https://res.cloudinary.com/di4nlaaz8/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1746686295/canva-yellow-floral-quote-motivational-desktop-wallpaper-AoEQnHBIGDE_duatjn.jpg',
        },
        {
          title: 'ONE STEP',
          url: 'https://res.cloudinary.com/di4nlaaz8/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1746686287/canva-black-green-y2k-grunge-quote-trending-desktop-wallpaper-rGiieup-Pgc_igax9y.jpg',
        },
        {
          title: 'LEARNING',
          url: 'https://res.cloudinary.com/di4nlaaz8/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1746686287/never-stop-learning-quote-hand-holding-flower_53876-94796_tdswqo.jpg',
        },
        {
          title: 'cute',
          url: 'https://res.cloudinary.com/di4nlaaz8/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1746686287/never-stop-learning-quote-hand-holding-flower_53876-94796_tdswqo.jpg',
        },
      ];
      res.send(trendingImages)
   } catch (error) {
    res.send(error)
   }
}

module.exports = { getTrending }