import { Div } from './styles'

export default function Cards() {
  // console.log(process.env.API_KEY)
  async function getDataFromGoogle() {
    const myHeaders = new Headers()
    myHeaders.append(
      'X-RapidAPI-Key',
      '2f233afcddmsh77dbdc7d5bddd45p1a7087jsn56b944065b55'
    )
    myHeaders.append('X-RapidAPI-Host', 'google-news.p.rapidapi.com')

    fetch(
      'https://google-news.p.rapidapi.com/v1/top_headlines?lang=pt-br&country=US',
      {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
      }
    )
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error))
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
          <li>
            <div className="main-container">
              <div className="cards">
                <div className="card card-4">
                  <div className="card__icon">
                    <i className="fas fa-bolt"></i>
                  </div>
                  <h2 className="card__title">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </h2>
                  <p className="card__apply">
                    <a className="card__link" href="#">
                      Ver Completa <i className="fas fa-arrow-right"></i>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </li>
        </ol>
      </div>
    </Div>
  )
}
