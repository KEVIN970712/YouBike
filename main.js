fetch('https://apis.youbike.com.tw/json/station-min-yb2.json', {
    headers: {
        'accept': '*/*',
        'accept-language': 'zh-TW,zh;q=0.9,en-US;q=0.8,en;q=0.7,zh-CN;q=0.6',
        'content-type': 'application/x-www-form-urlencoded',
        'origin': 'https://kevin970712.github.io/YouBike/', 
        'referer': 'https://kevin970712.github.io/YouBike/', 
        // 其他 sec-ch-ua, sec-fetch 等標頭通常由瀏覽器自動管理
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
