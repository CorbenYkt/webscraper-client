# Webscaper

This project consists of two parts. The first part is the client part, and you are viewing it now. The second part is the server part via a link in another repository https://github.com/CorbenYkt/webscraper-server

## Client side :computer:	
ReactJS + Vite + TailwindCSS
![image](https://github.com/CorbenYkt/webscraper-client/assets/117908636/21d22e0b-6a3d-44de-8f87-2d27a8ae25fb)

The client part makes one request to the server via the API - GET to receive data about the latest news on the website vvv.lenta.ru
'''
  const fetchAPI = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8080/api/lentaru");
      console.log(response.data.lentaru);
      setTopnews(response.data.lentaru);
      setLoading(true);
    }
    catch (err) {
      console.log(err);
    }
  }
'''
