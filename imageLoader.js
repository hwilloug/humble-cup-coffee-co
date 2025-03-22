export default function cloudfrontLoader({ src, width, quality, format }) {
  if (src.includes("png")) {
    format = "png";
  } else if (src.includes("jpeg")) {
    format = "jpeg";
  } else if (src.includes("jpg")) {
    format = "jpeg";
  } else if (src.includes("svg")) {
    format = "svg";
  } else {
    format = "auto";
  }
  const url = new URL(`https://images.humblecupcoffee.com${src}`);
  url.searchParams.set("w", width.toString());
  url.searchParams.set("q", (quality || 75).toString());
  url.searchParams.set("f", format || "auto");
  return url.href;
}
