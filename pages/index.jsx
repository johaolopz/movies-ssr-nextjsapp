import Head from 'next/head'
import conectarDB from '../lib/dbConnect'
import Movie from '../models/Movie'

export default function Home({movies}) {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className='container'>
        <h1>Movies</h1>
        {
          movies.map(({_id, title, plot}) => (
            // Div con clases de bootstrap
            <div className="card mb-2" key={_id}>
              <div className="card-body">
                <div className='h5 text-uppercase'>{title}</div>
                <p className='fw-light'>{plot}</p>
              </div>
            </div>
          ))
        }
      </main>
    </div>
  )
}

//Esto se ejecuta en el servidor y se recomienda hacer request
//a API's externas, jamás a la api interna de NextJs
export async function getServerSideProps() {
  try {
    await conectarDB()

    const res = await Movie.find({})
    const movies = res.map(doc => {
      //Para convertir los datos de mongoDb en objeto clave-valor
      const movie = doc.toObject()
      //Para parsear el id default de mongoDB a string y no de error en el render
      movie._id = `${movie._id}`
      return movie
    })

    return {props: {movies}}
  } catch (error) {
    console.log(error)
  }
}
