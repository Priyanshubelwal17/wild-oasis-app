import styled from "styled-components";
import Logo from "./Logo";
import MainNav from "./MainNav";
import { useEffect, useRef } from "react";
import Uploader from "../../public/data/Uploader";
const StyledSidebar = styled.aside`
  background-color: var(--color-grey-0);
  padding: 3.2rem 2.4rem;
  border-right: 1px solid var(--color-grey-100);
  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  /* Mobile hidden by default */
  transform: translateX(-100%);
  transition: transform 0.3s ease-in-out;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 26rem;
  z-index: 50;

  @media (min-width: 768px) {
    transform: translateX(0);
    position: static;
  }

  &.open {
    transform: translateX(0);
  }
`;

function Sidebar({ isOpen, onClose }) {
  const ref = useRef();

  // Close sidebar when clicking outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (
        ref.current &&
        !ref.current.contains(e.target) &&
        window.innerWidth < 768 // only apply on mobile
      ) {
        onClose?.(); // call onClose prop if exists
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  return (
    <StyledSidebar ref={ref} className={isOpen ? "open" : ""}>
      <Logo />
      <MainNav />
      <Uploader />
    </StyledSidebar>
  );
}

export default Sidebar;
