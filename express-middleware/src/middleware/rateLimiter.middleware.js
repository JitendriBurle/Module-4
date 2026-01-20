const requestCounts = {};

export default function rateLimiter(req, res, next) {
  const ip = req.ip;
  const currentTime = Date.now();

  if (!requestCounts[ip]) {
    requestCounts[ip] = { count: 1, startTime: currentTime };
    return next();
  }

  const elapsed = currentTime - requestCounts[ip].startTime;

  if (elapsed < 60000) {
    if (requestCounts[ip].count >= 15) {
      return res.status(429).json({
        error: "Too many requests, please try again later"
      });
    }
    requestCounts[ip].count++;
  } else {
    requestCounts[ip] = { count: 1, startTime: currentTime };
  }

  next();
}
