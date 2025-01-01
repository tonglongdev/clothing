import Pagination from "../../components/pagination";
import "./styles.scss";

export default function Home() {
  const classVal = "home";
  const images = [
    "https://via.placeholder.com/800x400?text=Slide+1",
    "https://via.placeholder.com/800x400?text=Slide+2",
    "https://via.placeholder.com/800x400?text=Slide+3",
  ];
  return (
    <div className={`${classVal}_container`}>
      <div className={`${classVal}_logo`}>Logo</div>
      <Pagination images={images} />
    </div>
  );
}
