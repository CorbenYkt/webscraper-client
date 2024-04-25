# Webscaper

This project consists of two parts. The first part is the client part, and you are viewing it now. The second part is the server part via a link in another repository https://github.com/CorbenYkt/webscraper-server

## Client side :computer:	
ReactJS + Vite + TailwindCSS
![image](https://github.com/CorbenYkt/webscraper-client/assets/117908636/21d22e0b-6a3d-44de-8f87-2d27a8ae25fb)

The client part makes one request to the server via the API - GET to receive data about the latest news on the website vvv.lenta.ru
```
  const [topnews, setTopnews] = useState([])
  const [loading, setLoading] = useState(false);

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

  useEffect(() => {
    fetchAPI()
  }, [])
```

Display results:

```
{
Object.entries(topnews)
  .map(([key, value]) => (
    <div className="flex items-center gap-2 p-2">
    <img className='rounded-full' src={key} />
    <p class="mb-0 mt-0 text-base font-light leading-relaxed">
    {value}
    </p>
    </div>
    ))
}
```
