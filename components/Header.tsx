import Container from '@/components/Container';
import Nav from '@/components/Nav';

const Header = () => {
  return (
    <header className="py-4 border-0 border-b-2 border-purple-500">
      <Container>
        <Nav />
      </Container>
    </header>
  );
};

export default Header;
