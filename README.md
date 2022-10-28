# 使用者登入功能

可讓使用者輸入email和密碼後驗證登入

![image](https://github.com/OneZerocococo/login/blob/main/public/images/login.PNG)
![image](https://github.com/OneZerocococo/login/blob/main/public/images/loginSuccess.PNG)
![image](https://github.com/OneZerocococo/login/blob/main/public/images/invalid.PNG)

## 功能列表

- 使用者可輸入email和密碼
- 驗證使用者輸入資料成功即顯示歡迎畫面
- 驗證失敗導回登入頁面，並提示輸入有誤

## 開始使用

1. 請先確認有安裝 node.js 與 npm
2. 將專案 clone 到本地
3. 在本地開啟之後，透過終端機進入資料夾，輸入：

   ```bash
   npm install
   ```
4. 環境變數設置：

   ```bash
   mongoose.connect(process.env.MONGODB_URI)
   ```

5. 執行專案：

   ```bash
   nodemon app.js
   ```

6. 若看見此行訊息則代表順利運行，打開瀏覽器進入到以下網址

   ```bash
   Express is listening on http://localhost:3000
   ```

7. 若欲暫停使用

   ```bash
   ctrl + c
   ```

## 開發工具

- Node.js 16.17.0
- Express 4.18.2
- Express-Handlebars 6.0.6
- mongoose 6.6.6

## 開發者
- [OneZero](https://github.com/OneZerocococo)