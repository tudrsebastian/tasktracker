export default () => ({
  port:
    process.env.routes !== null
      ? process.env.routes
      : new Error('Routes are unavailable!'),
});
