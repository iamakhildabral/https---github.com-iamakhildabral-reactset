import { subHeaderStyle } from ".";

export function Header() {
  return (
    <div className="heading1">
      REACT COURSE
      <MainHeader />
    </div>
  );
}
function MainHeader() {
  return <div>This is MainHeader</div>;
}
export function SubHeader() {
  return <div style={subHeaderStyle}>This is an exiting Course</div>;
}
