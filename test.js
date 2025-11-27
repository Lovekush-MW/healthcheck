const http = require('http');

const options = {
  hostname: 'localhost',
  port: process.env.PORT || 4000,
  path: '/health',
  method: 'GET',
};

const req = http.request(options, res => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    try {
      const json = JSON.parse(data);

      if (json.status === 'Running auto') {
        console.log('Test passed!');
        process.exit(0);
      } else {
        console.error('Test failed: Unexpected response:', json);
        process.exit(1);
      }
    } catch (e) {
      console.error('Invalid JSON:', data);
      process.exit(1);
    }
  });
});

req.on('error', err => {
  console.error('Request error:', err.message);
  process.exit(1);
});

req.end();
