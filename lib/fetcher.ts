const fetcher = async (...args: [any]) => {
  const res = await fetch(...args);

  return res.json();
};

export default fetcher;
