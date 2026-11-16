type FooterProps = {
  address: string;
  openingHours: string;
};

function Footer({ address, openingHours }: FooterProps) {
  return (
    <footer>
      <p>{address}</p>
      <p>{openingHours}</p>
    </footer>
  );
}

export default Footer;
