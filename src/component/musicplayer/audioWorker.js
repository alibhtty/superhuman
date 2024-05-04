self.onmessage = async (event) => {
    const audioFileUrl = event.data;
    const response = await fetch(audioFileUrl);
    const arrayBuffer = await response.arrayBuffer();
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
    self.postMessage(audioBuffer);
  };
  