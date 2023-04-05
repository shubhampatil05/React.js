export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <footer className="Footer">
        <p className="Copyright">copyright © {year}</p>
      </footer>
    </>
  );
};
