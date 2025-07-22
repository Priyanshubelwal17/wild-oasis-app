import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import styled from "styled-components";

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: 26rem 1fr;
  grid-template-rows: auto 1fr;
  height: 100vh;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Main = styled.main`
  background-color: var(--color-grey-50);
  padding: 4rem 4.8rem 6.4rem;
`;

const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

const Topbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.6rem 2.4rem;
  background-color: white;
  box-shadow: var(--shadow-sm);

  @media (min-width: 768px) {
    display: none;
  }
`;

function ApiLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <Topbar>
        <h1>The Wild Oasis</h1>
        <button
          onClick={() => setIsSidebarOpen((open) => !open)}
          style={{ fontSize: "2.4rem" }}
        >
          &#9776;
        </button>
      </Topbar>

      <StyledAppLayout>
        <Sidebar
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />
        <Main>
          <Container>
            <Header />
            <Outlet />
          </Container>
        </Main>
      </StyledAppLayout>
    </>
  );
}

export default ApiLayout;
