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
    const json = JSON.parse(data);
    if (json.status === 'Running auto') {
      console.log('Test passed!');
      process.exit(0);
    } else {
      console.error('Test failed!');
      process.exit(1);
    }
  });
});

req.on('error', err => {
  console.error('Error:', err.message);
  process.exit(1);
});

req.end();
