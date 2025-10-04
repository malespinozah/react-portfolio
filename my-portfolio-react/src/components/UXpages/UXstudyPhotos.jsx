export default function UXstudyPhotos({ imageOne, imageTwo, imageThree }) {
  return (
    <div className="UXstudyImages">
      {imageOne && (
        <img src={"/images/" + imageOne} alt="case study photo one" />
      )}
      {imageTwo && (
        <img src={"/images/" + imageTwo} alt="case study photo two" />
      )}
      {imageThree && (
        <img src={"/images/" + imageThree} alt="case study photo three" />
      )}
    </div>
  );
}