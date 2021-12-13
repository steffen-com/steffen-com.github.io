
  function displayRandomImages() 
{
  
   var imageArray = [
   { 
    
     src: "https://wi.wallpapertip.com/wsimgs/15-155208_desktop-puppy-wallpaper-hd.jpg",
    
     width: "280",
     height: "200"
   }, 
   {
     src: "https://wi.wallpapertip.com/wsimgs/156-1564365_golden-retriever-puppy-desktop-wallpaper-desktop-wallpaper-puppy.jpg",
     width: "320",
     height: "195"
   }, 
   {
     src: "https://wi.wallpapertip.com/wsimgs/156-1564140_free-puppy-wallpapers-for-computer-wallpaper-cave-cute.jpg",
     width: "320",
     height: "195"
   },
   {
     src: "https://wi.wallpapertip.com/wsimgs/156-1566650_cute-puppies-desktop-wallpaper-cute-puppies.jpg",
     width: "350",
     height: "250"
    } ];
    
   
    var arrayLength = imageArray.length;
    var newArray = [];
    for (var i = 0; i < arrayLength; i++) {
        newArray[i] = new Image();
        newArray[i].src = imageArray[i].src;
        newArray[i].width = imageArray[i].width;
        newArray[i].height = imageArray[i].height;
    }
   
  // create random image number
  function getRandomNum(min, max) 
  {
    
      imgNo = Math.floor(Math.random() * (max - min + 1)) + min;
      return newArray[imgNo];
  }  


  var newImage = getRandomNum(0, newArray.length - 1);
 

  var images = document.getElementsByTagName('img');
  var l = images.length;
  for (var p = 0; p < l; p++) {
     images[0].parentNode.removeChild(images[0]);
  }

  document.body.appendChild(newImage);
}   