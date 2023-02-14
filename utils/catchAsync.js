export default function catchAsync (fn) {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
