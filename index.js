const express = require('express');
const path = require('path');
const app = express();

// Sử dụng express.static để phục vụ các tệp tĩnh từ thư mục public
app.use(express.static(path.join(__dirname, 'public')));

// Route để gửi tệp index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Lắng nghe cổng 3003
app.listen(3003, () => {
  console.log('Server đang chạy tại http://localhost:3003');
});
