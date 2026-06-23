import Sidebar from "../components/SideBar/SideBar";

const MainLayout = ({ children }) => {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      <main
        style={{
          flex: 1,
          marginLeft: "250px",
          padding: "20px"
        }}
      >
        {children}
      </main>
    </div>
  );
};

export default MainLayout;