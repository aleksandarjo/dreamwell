const IS_BROWSER = typeof window !== "undefined";

export const setupMocks = async () => {
  if (IS_BROWSER) {
    const { worker } = await import("./browser.js");
    worker.start();
  } else {
    const { server } = await import("./server.js");
    server.listen();
  }
};
