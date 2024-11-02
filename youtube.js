document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("youbute-iframe-generator-form");
  const urlInput = document.getElementById("url-input");
  const iframeContainer = document.getElementById("youtube-iframe");
  const iframeCode = document.getElementById("iframe-code");
  generateIframe('https://www.youtube.com/watch?v=2iFyEN2HPrI');
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const url = urlInput.value;
    generateIframe(url);
  });

  function generateIframe(url) {
    const youtubeUrl = new URL(url);
    const searchParams = new URLSearchParams(youtubeUrl.search);
    if (!searchParams.has("v")){
       console.log('not video url'); // null
       return;
    }
    const v= searchParams.get("v");
    const embedUrl=`https://www.youtube.com/embed/${v}?rel=0`;
    console.log(embedUrl); // null
    const iframe = document.createElement("iframe");
    iframe.src = embedUrl;
    iframe.style = 'top: 0; left: 0; width: 100%; height: 100%; position: absolute; border: 0;';
    iframe.allow= 'fullscreen;accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;';
    iframe.scrolling="no";
    iframeContainer.innerHTML = "";
    iframeContainer.appendChild(iframe);
    const iframeHTML = `   <div style="left: 0; width: 100%; height: 0; position: relative; padding-bottom: 56.25%;">
                <iframe src="${embedUrl}" style="top: 0; left: 0; width: 100%; height: 100%; position: absolute; border: 0;"
                    allowfullscreen scrolling="no" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;">
                </iframe>
   </div>`;
    iframeCode.value = iframeHTML;
  }
});
