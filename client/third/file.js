var timeout;
const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});
function home() {
  var t1 = gsap.timeline();
  t1.from("#nav", {
    y: "-10",
    opacity: 0,
    duration: 1.5,
    ease: Expo.easeInOut,
  }).to(".boudinglem", {
    y: "0",
    stagger: 0.2,
    duration: 2,
    delay: -1,
    ease: Expo.easeInOut,
  });

}
function circle() {
  window.addEventListener("mousemove", function (dets) {
    document.querySelector(
      "#minicrical"
    ).style.transform = `translate(${dets.clientX}px , ${dets.clientY}px)`;
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const uploadArea = document.getElementById("upload-area");
  const img = document.getElementById("imgI");
  const removebtn = document.getElementById("rm");
  const restbtn = document.getElementById("r");
  const result = document.getElementById("result");

  let selectedFile = null;

  uploadArea.addEventListener("click", () => {
    img.click();
  });

  uploadArea.addEventListener("dragover", (e) => {
    e.preventDefault();
  });
  uploadArea.addEventListener("drop", (e) => {
    e.preventDefault();
    e.stopPropagation();
    handleFile(e.dataTransfer.files[0]);
  });

  img.addEventListener("change", (e) => {
    handleFile(e.target.files[0]);
  });
  function handleFile(file) {
    if (file && file.type.startsWith("image/")) {
      selectedFile = file;
      const reader = new FileReader(file);
      reader.onload = () => {
        displayImage(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      alert("please upload a valid image formate");
    }
  }

  function displayImage(imgsrc) {
    result.innerHTML = `<img src=${imgsrc} />`;
  }
  removebtn.addEventListener("click", () => {
    if (selectedFile) {
      removeBackground(selectedFile);
    } else {
      alert("please upload an image first");
    }
  });

  async function removeBackground(file) {
    const apikey = "h6N3u4dMTfd7bqpu65joaCfJ";
    const formData = new FormData();
    formData.append("image_file", file);
    formData.append("size", "auto");
    result.innerHTML = "<p>Removing Background....</p>";
    try {
      const response = await fetch("https://api.remove.bg/v1.0/removebg", {
        method: "POST",
        headers: {
          "X-API-KEY": apikey,
        },
        body: formData,
      });
      if (!response.ok) throw new Error("failed to remove Background");
      const blob = await response.blob();
      const imageUrl = URL.createObjectURL(blob);
      result.innerHTML = `<img src=${imageUrl} />`;
      const dowlodbtn = document.createElement("button");
      dowlodbtn.innerText = "Download Image";
      dowlodbtn.classList.add("btn1");
      dowlodbtn.addEventListener("click", () => {
        const link = document.createElement("a");
        link.href = imageUrl;
        link.download = "background_remove.png";
        link.click();
      });
      result.appendChild(dowlodbtn);
    } catch (error) {
      console.log(error);
    }
  }
  restbtn.addEventListener("click", () => {
    selectedFile = null;
    result.innerHTML = "<p>No Image Processed yet</p>";
    img.value = "";
  });
});

circle();
home();
