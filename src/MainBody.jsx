export function MainBody() {
  return (
    <div>
      <p>In this course, we will learn react js by building TaskOPedia</p>
      <ul>
        <li>Basic Foundation</li>
        <li>Functional and Class Components</li>
      </ul>
    </div>
  );
}
export function SecondBody() {
  const courseName = "React JSX with the node server:";
  let lectureCount = 3;

  return (
    <div>
      <p>
        We will learn <b>{courseName}</b> in this chapter.
        <br />
        Total Lecture count is <b>{lectureCount}</b>
      </p>
    </div>
  );
}
