const data = [{"name":"LOL-palooza","bands":[{"name":"Winter Primates","recordLabel":""},{"name":"Frank Jupiter","recordLabel":"Pacific Records"},{"name":"Werewolf Weekday","recordLabel":"XS Recordings"},{"name":"Jill Black","recordLabel":"Fourth Woman Records"}]},{"name":"Small Night In","bands":[{"name":"Squint-281","recordLabel":"Outerscope"},{"name":"The Black Dashes","recordLabel":"Fourth Woman Records"},{"name":"Green Mild Cold Capsicum","recordLabel":"Marner Sis. Recording"},{"name":"Yanke East","recordLabel":"MEDIOCRE Music"},{"name":"Wild Antelope","recordLabel":"Marner Sis. Recording"}]},{"name":"Twisted Tour","bands":[{"name":"Summon","recordLabel":"Outerscope"},{"name":"Auditones","recordLabel":"Marner Sis. Recording"},{"name":"Squint-281"}]},{"name":"Trainerella","bands":[{"name":"Wild Antelope","recordLabel":"Still Bottom Records"},{"name":"Manish Ditch","recordLabel":"ACR"},{"name":"Adrian Venti","recordLabel":"Monocracy Records"},{"name":"YOUKRANE","recordLabel":"Anti Records"}]},{"bands":[{"name":"Propeller","recordLabel":"Pacific Records"},{"name":"Critter Girls","recordLabel":"ACR"}]}]


export default async function handler(req, res) {
  if (req.method === 'GET') {
   return  res.status(200).json(data);
    try {
      const response = await fetch('https://eacp.energyaustralia.com.au/codingtest/api/v1/festivals',
      await fetch(url, {
        method: "GET",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        }
      }));
    
      return (await response.json() || res.status(200).json(data));
    } catch(err) {
      console.log("err====>>>", err);
    }
  }
}
