import Container from "../../../Container";
import MenuNavigation from "./MenuNavigation";

const Navbar = () => {
  return (
    <>
      <div className="fixed w-full bg-white z-10 shadow-sm">
        <div className="py-4 border-b-[1px]">
          <Container>
            <div className="flex flex-row  items-center justify-between gap-3 md:gap-0">
              {/* Logo */}
              {/* <Logo /> */}
              <h1>weight track</h1>
              {/* Dropdown Menu */}
              <MenuNavigation />
            </div>
          </Container>
        </div>
      </div>
    </>
  );
};

export default Navbar;
