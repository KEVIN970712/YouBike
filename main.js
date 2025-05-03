fetch('https://apis.youbike.com.tw/json/station-min-yb2.json', {
    headers: {
        'accept': '*/*',
        'accept-language': 'zh-TW,zh;q=0.9,en-US;q=0.8,en;q=0.7,zh-CN;q=0.6',
        'content-type': 'application/x-www-form-urlencoded',
        // 注意：If-Modified-Since 和 If-None-Match 標頭在前端直接使用可能會因為跨域問題而受限，
        // 通常這些用於快取控制的標頭會由瀏覽器自動處理或在後端設定。
        // 您可以先不加這兩個標頭，測試是否能成功獲取資料。
        // 'if-modified-since': 'Sat, 03 May 2025 09:40:26 GMT',
        // 'if-none-match': 'W/"6815e48a-358846"',
        'origin': 'https://www.youbike.com.tw', // 這裡可能需要改成您網站的 origin
        'referer': 'https://www.youbike.com.tw/', // 這裡可能需要改成您網站的 referer
        // 其他 sec-ch-ua, sec-fetch 等標頭通常由瀏覽器自動管理
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36', // 這裡可以根據需要修改或移除
    }
})
.then(response => {
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
})
.then(data => {
    // 在這裡處理獲取到的站點資料
    console.log(data);
    // 例如，更新網頁上的站點列表或地圖
})
.catch(error => {
    console.error('There was a problem fetching the YouBike data:', error);
});
