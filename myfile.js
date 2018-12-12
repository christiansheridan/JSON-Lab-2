let arr = [];
        let ajax = new XMLHttpRequest();
        ajax.onreadystatechange = function () {
            if (ajax.readyState === 4 && ajax.status === 200) {
                var jsondata = JSON.parse(ajax.responseText);

                for (i = 0; i < jsondata.data.length; i++) {
                    if (jsondata.data[i][10] === 'Golden Gate Bridge'){
                        arr.push(jsondata.data[i])
                    }
                }

                console.log(arr);

                for (i = 0; i < arr.length; i++){
                    document.getElementById('result').innerHTML +=
                        "<b>Movie Title:</b> " + arr[i][8]
                        + " | <b>Release Year:</b> "
                        + arr[i][9]
                        + " | <b>Production Company:</b> "
                        + arr[i][12]
                        + "<br>";
                }
            }
            };
    ajax.open('GET', 'https://data.sfgov.org/api/views/yitu-d5am/rows.json?accessType=DOWNLOAD', true);
    ajax.send();
