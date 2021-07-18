import Container from '@/components/Container';
import { PageType } from '@/types/index';

const PageTemplate = ({ children, title }: PageType) => {
  return (
    <section className="pt-12 pb-20 md:min-h-screen">
      <Container>
        <h1 className="mb-12 text-gray-800 font-medium dark:text-gray-400">
          {title}
        </h1>
        {children}
      </Container>
    </section>
  );
};

export default PageTemplate;
