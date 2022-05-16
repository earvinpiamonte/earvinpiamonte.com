const MarkdownWrapper = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className="prose prose-slate dark:prose-invert prose-headings:text-blue-500 before:prose-code:content-[''] after:prose-code:content-[''] prose-a:text-blue-600 hover:prose-a:text-blue-500 dark:prose-a:text-blue-500 dark:hover:prose-a:text-blue-400 prose-img:rounded-md prose-pre:text-base prose-code:text-base prose-code:font-normal">
      {children}
    </div>
  );
};

export default MarkdownWrapper;
