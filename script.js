async function getMatchData() {

    return await fetch("https://api.cricapi.com/v1/currentMatches?apikey=f3529c8c-b568-4686-b698-6d5fccbf4f22&offset=0")
        .then(data => data.json())
        .then(data => {
            if (data.status != "success")return;

            const matchesList = data.data;

            if(!matchesList)return [];
            
            //add your api key from cricketdata.org
            const relevantData = matchesList.filter(match => match.series_id == "3f5d80ea-e219-40a2-b08d-4311b15e2cc8").map(match => `${match.name}, ${match.status}`);


            document.getElementById("matches").innerHTML = relevantData.map(match => `<li>${match} </li>`).join('');

            return relevantData;

        })
        .catch(e => console.log(e));
}

getMatchData();