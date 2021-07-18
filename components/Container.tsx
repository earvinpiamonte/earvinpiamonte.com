const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-12 lg:col-span-6 lg:col-start-4 md:col-span-8 md:col-start-3">
        <div className="px-6">{children}</div>
      </div>
    </div>
  );
};

export default Container;
