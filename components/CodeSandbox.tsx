const CodeSandbox = (props) => {
  const { src } = props;
  return (
    <div className="app-codesandbox aspect-w-16 aspect-h-9">
      <iframe
        src={src}
        allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
        sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
        {...props}
      ></iframe>
    </div>
  );
};

export default CodeSandbox;
