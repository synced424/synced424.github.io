// Google Form waitlist link (QR will point here)
const EARLY_ACCESS_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSeaEsIrxFXry1Jiq8_QXxaJK8X5VzfqwbXGSRgt3gNcthtwxg/viewform?usp=dialog";

const canvas = document.getElementById("qrcode");
const link = document.getElementById("earlyLink");

if (link) link.href = EARLY_ACCESS_URL;

function renderQR() {
  if (!canvas || !window.QRCode) return;

  // Draw at higher internal resolution for sharpness on mobile/retina
  const px = 768;
  canvas.width = px;
  canvas.height = px;

  QRCode.toCanvas(canvas, EARLY_ACCESS_URL, {
    width: px,
    margin: 1,
    errorCorrectionLevel: "M",
  });
}

renderQR();

// If someone rotates/resizes, redraw to keep it crisp
window.addEventListener("resize", () => {
  clearTimeout(window.__qrResizeTimer);
  window.__qrResizeTimer = setTimeout(renderQR, 150);
});
