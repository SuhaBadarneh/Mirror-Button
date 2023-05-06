
let video = document.querySelector('.video');

async function startVideo() {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    video.srcObject = stream;
  } catch (error) {
    console.log('Something went wrong', error);
  }
}

if (navigator.mediaDevices.getUserMedia) {
  startVideo();
}


