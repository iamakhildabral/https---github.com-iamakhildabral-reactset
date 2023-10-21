export function Students() {
  const fullName = "Kris Walley";
  const programmingExperience = 4;

  return (
    <div className="container p-4">
      <div className="row">Students Enrolled</div>
      <div className="row border">
        <div className="col-2">
          <img alt="nametext" src={`https://ui-avatars.com/api/?name=${fullName}`}></img>
        </div>
        <div className="col-10">
          {fullName}
          <br />
          Coding Experience : {programmingExperience} years
        </div>
      </div>
    </div>
  );
}
