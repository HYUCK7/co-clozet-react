//import style from "../styles/Layout.module.css";
export function Layout({ children }){
  return (
    <>
      <div >
        <main >{children}</main>
      </div>
    </>
  );
};