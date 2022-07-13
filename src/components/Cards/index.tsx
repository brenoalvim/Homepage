import { Div } from './styles'

export default function Cards() {
  // console.log(process.env.API_KEY)
  async function getDataFromGoogle() {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '2f233afcddmsh77dbdc7d5bddd45p1a7087jsn56b944065b55',
        'X-RapidAPI-Host': 'google-news1.p.rapidapi.com'
      }
    }

    fetch(
      'https://google-news1.p.rapidapi.com/list-languages?country=%3CREQUIRED%3E',
      options
    )
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(err => console.error(err))
    // const apiKey = process.env.API_KEY
    // const apiHost = process.env.API_HOST

    // const options = {
    //   method: 'GET',
    //   headers: {
    //     'X-RapidAPI-Key': apiKey,
    //     'X-RapidAPI-Host': apiHost
    //   }
    // }

    // const response = await fetch(
    //   `https://google-news.p.rapidapi.com/v1/top_headlines?lang=pt-br&country=US`,
    //   options
    // )

    // const responseJson = await response.json()

    // console.log(responseJson)
  }

  getDataFromGoogle()

  return (
    <Div>
      <div className="cards">
        <ol>
          <li></li>
        </ol>
      </div>
    </Div>
  )
}
