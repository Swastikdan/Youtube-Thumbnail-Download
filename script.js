const submitBtn = document.getElementById("submitBtn");
const thumbnails = document.getElementById("thumbnails");

function getVideoId(link) {
  const regex = /(?:\/|%3D|v=)([0-9A-Za-z_-]{11}).*/;
  const match = link.match(regex);
  if (match) {
    return match[1];
  }
}

submitBtn.addEventListener("click", () => {
  const videoLink = document.getElementById("videoLink").value.trim();

  // Check if the video link is a valid YouTube link
  if (
    !videoLink.match(/^(https?\:\/\/)?((www\.)?youtube\.com|youtu\.?be)\/.+$/)
  ) {
    thumbnails.innerHTML = `<p class="text-red-600 text-center text-3xl font-semibold pt-10">Please enter a valid YouTube video link.</p>`;
    return;
  }

  const videoId = getVideoId(videoLink);
  const sdImage = `https://img.youtube.com/vi/${videoId}/sddefault.jpg`;
  const normalImage = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
  const smallImage = `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`;
  const tinyImage = `https://img.youtube.com/vi/${videoId}/default.jpg`;
  const maxresImage = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  thumbnails.innerHTML = `

  <div class="flex flex-col items-center space-y-5 pt-20">
  <span class="  px-2 py-1  text-base md:text-md xl:text-xl ring-1 ring-gray-300 dark:ring-gray-100">HD Image (1280x720) </span>
  <div class="h-auto max-h-[720px] w-full max-w-[1280px] ">
    <img loading="lazy" src="${maxresImage}" alt="" class="mb-5 h-auto w-full object-cover bg-gray-300 " />
  </div>
  <button data-image="${maxresImage}" target="_blank" rel="nofollow" class="md:text-md inline-block inline-flex items-center space-x-3 rounded-md bg-blue-600 px-7 py-2 text-sm text-white shadow-xl duration-300 hover:bg-blue-500 xl:text-xl">
  <span>Download Image</span>
  <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
  </button>
</div>

<div class="flex flex-col items-center space-y-5">
  <span class="  px-2 py-1  text-base md:text-md xl:text-xl ring-1 ring-gray-300 dark:ring-gray-100">SD Image (640x480) </span>
  <div class="h-auto max-h-[480px] w-full max-w-[640px]">
    <img loading="lazy" src="${sdImage}" alt="" class="mb-5 h-auto w-full object-cover bg-gray-300 " />
  </div>
  <button data-image="${sdImage}" target="_blank" rel="nofollow" class="md:text-md inline-block inline-flex items-center space-x-3 rounded-md bg-blue-600 px-7 py-2 text-sm text-white shadow-xl duration-300 hover:bg-blue-500 xl:text-xl">
    <span>Download Image</span>
    <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
  </button>
</div>

<div class="flex flex-col items-center space-y-5">
  <span class="  px-2 py-1  text-base md:text-md xl:text-xl ring-1 ring-gray-300 dark:ring-gray-100">SD Image (480x360) </span>
  <div class="h-auto max-h-[360px] w-full max-w-[480px]">
    <img loading="lazy" src="${normalImage}" alt="" class="mb-5 h-auto w-full object-cover bg-gray-300 " />
  </div>
  <button data-image="${normalImage}" target="_blank" rel="nofollow" class="md:text-md inline-block inline-flex items-center space-x-3 rounded-md bg-blue-600 px-7 py-2 text-sm text-white shadow-xl duration-300 hover:bg-blue-500 xl:text-xl">
  <span>Download Image</span>
  <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
  </button>
</div>

<div class="flex flex-col items-center space-y-5">
  <span class="  px-2 py-1  text-base md:text-md xl:text-xl ring-1 ring-gray-300 dark:ring-gray-100">SD Image (320x180) </span>
  <div class="h-auto max-h-[180px] w-full max-w-[320px]">
    <img loading="lazy" src="${smallImage}" alt="" class="mb-5 h-auto w-full object-cover bg-gray-300 " />
  </div>
  <button data-image="${smallImage}" target="_blank" rel="nofollow" class="md:text-md inline-block inline-flex items-center space-x-3 rounded-md bg-blue-600 px-7 py-2 text-sm text-white shadow-xl duration-300 hover:bg-blue-500 xl:text-xl">
  <span>Download Image</span>
  <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
  </button>
</div>

<div class="flex flex-col items-center space-y-5">
  <span class="  px-2 py-1  text-base md:text-md xl:text-xl ring-1 ring-gray-300 dark:ring-gray-100">SD Image (120x90) </span>
  <div class="max-h-[90px] max-w-[120px]">
    <img loading="lazy" src="${tinyImage}" alt="" class="mb-5 h-auto w-full object-cover bg-gray-300 " />
  </div>
  <button data-image="${tinyImage}" onclick="downloadImage(event)"  class="md:text-md inline-block inline-flex items-center space-x-3 rounded-md bg-blue-600 px-7 py-2 text-sm text-white shadow-xl duration-300 hover:bg-blue-500 xl:text-xl">
  <span>Download Image</span>
  <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
  </button>
</div>


      `;
      function downloadImage(url) {
        var fileName = url.substring(url.lastIndexOf('/') + 1);
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://api.allorigins.win/raw?url=' + url, true);
        xhr.responseType = 'blob';
        xhr.onload = function() {
          var urlCreator = window.URL || window.webkitURL;
          var imageUrl = urlCreator.createObjectURL(this.response);
          var tag = document.createElement('a');
          tag.href = imageUrl;
          tag.download = fileName;
          document.body.appendChild(tag);
          tag.click();
          document.body.removeChild(tag);
        };
        xhr.send();
      }
  
      document.querySelectorAll('button[data-image]').forEach(function(button) {
        button.addEventListener('click', function() {
          var imageUrl = this.getAttribute('data-image');
          downloadImage(imageUrl);
        });
      });
  // Add lazy loading to the images
  const images = document.querySelectorAll("#thumbnails img");
  images.forEach((image) => {
    image.addEventListener("load", () => {
      image.classList.add("loaded");
    });
  });
});

// function to check if the link is valid youtube link
function isValidYouTubeLink(link) {
  const regex = /^(http(s)?:\/\/)?((w){3}.)?youtu(be|.be)?(\.com)?\/.+/;
  return regex.test(link);
}

// Get the input element and check if the value is valid youtube link
const videoLinkInput = document.getElementById("videoLink");
// videoLinkInput.addEventListener("blur", () => {
//   const videoLink = videoLinkInput.value.trim();
//   if (!isValidYouTubeLink(videoLink)) {
//     alert("Please enter a valid YouTube video link.");
//     videoLinkInput.focus();
//   }
// });
